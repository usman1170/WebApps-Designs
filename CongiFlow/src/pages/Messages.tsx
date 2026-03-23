import { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  MoreVertical, 
  Phone, 
  Video, 
  Paperclip, 
  Send, 
  Smile, 
  Check, 
  CheckCheck,
  MessageSquare
} from 'lucide-react';

// Types
type Message = {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
};

type Chat = {
  id: string;
  contact: {
    name: string;
    avatar: string;
    status: 'online' | 'offline' | 'busy';
    role: string;
  };
  messages: Message[];
  unreadCount: number;
};

// Dummy Data
const MY_USER_ID = 'me';

const INITIAL_CHATS: Chat[] = [
  {
    id: 'chat_1',
    contact: { name: 'Dann Petty', avatar: 'https://i.pravatar.cc/150?img=11', status: 'online', role: 'Design Lead' },
    unreadCount: 2,
    messages: [
      { id: 'm1', senderId: 'chat_1', text: 'Hey, did you check the new wireframes?', timestamp: '10:30 AM', status: 'read' },
      { id: 'm2', senderId: MY_USER_ID, text: 'Yes! They look absolutely stunning. The new layout is perfect.', timestamp: '10:32 AM', status: 'read' },
      { id: 'm3', senderId: 'chat_1', text: 'Awesome. I was thinking of adding a micro-interaction to the CTA button.', timestamp: '10:35 AM', status: 'delivered' },
      { id: 'm4', senderId: 'chat_1', text: 'Let me know if we can hop on a quick call to discuss it.', timestamp: '10:35 AM', status: 'delivered' },
    ]
  },
  {
    id: 'chat_2',
    contact: { name: 'Michelle Choi', avatar: 'https://i.pravatar.cc/150?img=5', status: 'busy', role: 'Product Manager' },
    unreadCount: 0,
    messages: [
      { id: 'm1', senderId: MY_USER_ID, text: 'Hi Michelle, the Q3 roadmap is updated in the doc.', timestamp: 'Yesterday', status: 'read' },
      { id: 'm2', senderId: 'chat_2', text: 'Great, thanks! I will review it before our standup tomorrow.', timestamp: 'Yesterday', status: 'read' },
    ]
  },
  {
    id: 'chat_3',
    contact: { name: 'Flux Academy', avatar: 'https://i.pravatar.cc/150?img=3', status: 'offline', role: 'External Partner' },
    unreadCount: 1,
    messages: [
      { id: 'm1', senderId: 'chat_3', text: 'We just sent over the finalized contract.', timestamp: 'Mon', status: 'delivered' },
    ]
  },
  {
    id: 'chat_4',
    contact: { name: 'Alex Johnson', avatar: 'https://i.pravatar.cc/150?img=60', status: 'online', role: 'Frontend Engineer' },
    unreadCount: 0,
    messages: [
      { id: 'm1', senderId: 'chat_4', text: 'The new API endpoints are deployed to staging.', timestamp: 'Tue', status: 'read' },
      { id: 'm2', senderId: MY_USER_ID, text: 'Awesome, Ill start integrating them now.', timestamp: 'Tue', status: 'read' },
    ]
  }
];

export default function Messages() {
  const [chats, setChats] = useState<Chat[]>(INITIAL_CHATS);
  const [activeChatId, setActiveChatId] = useState<string>(INITIAL_CHATS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeChat = chats.find(c => c.id === activeChatId);

  // Scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeChat?.messages]);

  // Mark messages as read when a chat is opened
  useEffect(() => {
    if (activeChat && activeChat.unreadCount > 0) {
      setChats(prevChats => prevChats.map(c => 
        c.id === activeChatId ? { ...c, unreadCount: 0 } : c
      ));
    }
  }, [activeChatId, activeChat]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !activeChatId) return;

    const newMessage: Message = {
      id: `m_${Date.now()}`,
      senderId: MY_USER_ID,
      text: inputText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setChats(prevChats => prevChats.map(chat => {
      if (chat.id === activeChatId) {
        return {
          ...chat,
          messages: [...chat.messages, newMessage]
        };
      }
      return chat;
    }));

    setInputText('');
    
    // Simulate immediate transition to "delivered"
    setTimeout(() => {
      setChats(prevChats => prevChats.map(chat => {
        if (chat.id === activeChatId) {
          const updatedMessages = [...chat.messages];
          updatedMessages[updatedMessages.length - 1].status = 'delivered';
          return { ...chat, messages: updatedMessages };
        }
        return chat;
      }));
    }, 1000);
  };

  const filteredChats = chats.filter(chat => 
    chat.contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8 h-[calc(100vh-80px)] max-w-[1600px] mx-auto relative z-10 transition-colors duration-300">
      
      {/* Container */}
      <div className="bg-surface dark:bg-[#1B0B03] rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm h-full flex overflow-hidden transition-colors duration-300">
        
        {/* Left Sidebar (Chat List) */}
        <div className="w-full md:w-[380px] border-r border-gray-100 dark:border-white/5 flex flex-col bg-white/50 dark:bg-black/20 z-10">
          
          {/* Sidebar Header */}
          <div className="px-6 py-6 border-b border-gray-100 dark:border-white/5">
            <h1 className="text-2xl font-bold mb-5 text-[#1c1c1c] dark:text-white flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-brand" />
              Messages
            </h1>
            
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400 dark:text-white/40 group-focus-within:text-brand transition-colors" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-11 pr-4 py-2.5 bg-gray-50 dark:bg-[#130600] border border-gray-200 dark:border-white/5 rounded-2xl text-[13px] text-[#1c1c1c] dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:ring-2 focus:ring-brand/20 dark:focus:ring-brand/40 focus:border-brand dark:focus:border-brand transition-all outline-none"
                placeholder="Search messages..."
              />
            </div>
          </div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto scrollbar-hide p-3 space-y-1">
            {filteredChats.map(chat => {
              const lastMessage = chat.messages[chat.messages.length - 1];
              const isActive = chat.id === activeChatId;

              return (
                <div 
                  key={chat.id}
                  onClick={() => setActiveChatId(chat.id)}
                  className={`p-3 rounded-2xl cursor-pointer transition-all duration-300 flex items-center gap-4 group hover:-translate-y-0.5
                    ${isActive 
                      ? 'bg-brand shadow-md shadow-brand/20' 
                      : 'hover:bg-gray-50 dark:hover:bg-white/5'
                    }`}
                >
                  <div className="relative shrink-0">
                    <img src={chat.contact.avatar} alt={chat.contact.name} className="w-12 h-12 rounded-full object-cover shadow-sm bg-gray-100 dark:bg-white/10" />
                    <span className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 ${isActive ? 'border-brand' : 'border-white dark:border-[#1B0B03]'} transition-colors ${
                      chat.contact.status === 'online' ? 'bg-emerald-500' :
                      chat.contact.status === 'busy' ? 'bg-amber-500' : 'bg-gray-400'
                    }`}></span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className={`font-bold text-[14px] truncate ${isActive ? 'text-white' : 'text-[#1c1c1c] dark:text-white group-hover:text-brand'}`}>
                        {chat.contact.name}
                      </h3>
                      <span className={`text-[10px] whitespace-nowrap font-bold ${isActive ? 'text-white/80' : 'text-gray-400 dark:text-white/40'}`}>
                        {lastMessage?.timestamp}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center gap-2">
                      <p className={`text-[12px] truncate ${isActive ? 'text-white/90' : 'text-gray-500 dark:text-white/50'} ${chat.unreadCount > 0 ? 'font-bold' : ''}`}>
                        {lastMessage?.senderId === MY_USER_ID ? 'You: ' : ''}{lastMessage?.text}
                      </p>
                      {chat.unreadCount > 0 && !isActive && (
                        <span className="w-5 h-5 rounded-full bg-brand text-white text-[10px] font-bold flex items-center justify-center shrink-0 shadow-sm shadow-brand/20">
                          {chat.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Active Chat Pane */}
        {activeChat ? (
          <div className="flex-1 flex flex-col bg-white dark:bg-transparent relative h-full">
            
            {/* Ambient Lighting background in dark mode */}
            <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-br from-brand/5 via-brand/0 to-transparent pointer-events-none blur-3xl opacity-50 dark:opacity-20 z-0"></div>

            {/* Chat Header */}
            <div className="h-[88px] px-8 border-b border-gray-100 dark:border-white/5 flex items-center justify-between bg-white/80 dark:bg-transparent backdrop-blur-md relative z-10">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img src={activeChat.contact.avatar} alt={activeChat.contact.name} className="w-12 h-12 rounded-full object-cover shadow-sm bg-gray-100 dark:bg-white/10" />
                  <span className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-[#1B0B03] ${
                    activeChat.contact.status === 'online' ? 'bg-emerald-500' :
                    activeChat.contact.status === 'busy' ? 'bg-amber-500' : 'bg-gray-400'
                  }`}></span>
                </div>
                <div>
                  <h2 className="text-[16px] font-bold text-[#1c1c1c] dark:text-white flex items-center gap-2">
                    {activeChat.contact.name}
                  </h2>
                  <p className="text-[12px] text-gray-400 dark:text-white/50 font-bold tracking-wide mt-0.5">
                    {activeChat.contact.role}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 dark:text-white/60 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-brand transition-colors">
                  <Phone className="w-4 h-4 text-brand" />
                </button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 dark:text-white/60 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-brand transition-colors border border-gray-100 dark:border-white/5">
                  <Video className="w-4 h-4 text-brand" />
                </button>
                <div className="w-px h-6 bg-gray-200 dark:bg-white/10 mx-1"></div>
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 dark:text-white/60 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 relative z-10 scrollbar-hide flex flex-col pt-8">
              {/* Date Header Placeholder */}
              <div className="flex justify-center mb-6">
                <span className="text-[10px] font-bold text-gray-400 dark:text-white/40 uppercase tracking-widest bg-gray-50 dark:bg-white/5 px-4 py-1.5 rounded-full">
                  Today
                </span>
              </div>

              {activeChat.messages.map((msg, idx) => {
                const isMe = msg.senderId === MY_USER_ID;
                const prevMsg = idx > 0 ? activeChat.messages[idx - 1] : null;
                const nextMsg = idx < activeChat.messages.length - 1 ? activeChat.messages[idx + 1] : null;

                const isSameAsPrev = prevMsg && prevMsg.senderId === msg.senderId && prevMsg.timestamp === msg.timestamp;
                const isSameAsNext = nextMsg && nextMsg.senderId === msg.senderId && nextMsg.timestamp === msg.timestamp;

                const isLastInGroup = !isSameAsNext;
                const showAvatar = !isMe && isLastInGroup;

                let radiusClass = '';
                if (isMe) {
                  radiusClass = `rounded-l-[20px] ${isSameAsPrev ? 'rounded-tr-[4px]' : 'rounded-tr-[20px]'} ${isSameAsNext ? 'rounded-br-[4px]' : 'rounded-br-[18px]'}`;
                } else {
                  radiusClass = `rounded-r-[20px] ${isSameAsPrev ? 'rounded-tl-[4px]' : 'rounded-tl-[20px]'} ${isSameAsNext ? 'rounded-bl-[4px]' : 'rounded-bl-[18px]'}`;
                }

                return (
                  <div key={msg.id} className={`flex max-w-[80%] ${isMe ? 'ml-auto justify-end' : 'mr-auto justify-start'} group animate-in slide-in-from-bottom-2 fade-in duration-300 ${isSameAsNext ? 'mb-1.5' : 'mb-6'}`}>
                    
                    {!isMe && (
                      <div className="w-8 shrink-0 mr-3 flex items-end">
                        {showAvatar ? (
                          <img src={activeChat.contact.avatar} alt="Avatar" className="w-8 h-8 rounded-full object-cover mb-1 bg-gray-100 dark:bg-white/10" />
                        ) : (
                          <div className="w-8 h-8"></div> // Placeholder to keep alignment
                        )}
                      </div>
                    )}
                    
                    <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} max-w-full`}>
                      <div className={`px-5 py-3 shadow-sm relative group-hover:shadow-md transition-shadow ${
                        isMe 
                          ? `bg-brand text-white ${radiusClass}` 
                          : `bg-gray-50 dark:bg-[#130600] border border-gray-100 dark:border-white/5 text-[#1c1c1c] dark:text-white ${radiusClass}`
                      }`}>
                        <p className="text-[13px] leading-relaxed font-medium break-words">
                          {msg.text}
                        </p>
                      </div>
                      
                      {/* Only display timestamp if it's the last in the group */}
                      <div className={`flex items-center gap-1.5 mt-1.5 px-1 overflow-hidden transition-all duration-300 ${isLastInGroup ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0 m-0 p-0'}`}>
                        <span className="text-[9px] font-bold text-gray-400 dark:text-white/40">{msg.timestamp}</span>
                        {isMe && (
                          <span className="text-gray-400 dark:text-white/40">
                            {msg.status === 'read' ? <CheckCheck className="w-3 h-3 text-brand" /> : 
                             msg.status === 'delivered' ? <CheckCheck className="w-3 h-3" /> : 
                             <Check className="w-3 h-3" />}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} className="h-2" />
            </div>

            {/* Chat Input Area */}
            <div className="p-4 md:p-6 bg-white dark:bg-transparent border-t border-gray-100 dark:border-white/5 relative z-10">
              <form 
                onSubmit={handleSendMessage}
                className="flex items-center gap-3 bg-gray-50 dark:bg-[#130600] p-2 rounded-full border border-gray-200 dark:border-white/5 shadow-sm focus-within:ring-2 focus-within:ring-brand/20 focus-within:border-brand transition-all"
              >
                <button type="button" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 dark:text-white/40 hover:text-brand hover:bg-white dark:hover:bg-white/5 transition-colors shrink-0">
                  <Paperclip className="w-4 h-4" />
                </button>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent text-[#1c1c1c] dark:text-white text-[13px] font-medium outline-none placeholder-gray-400 dark:placeholder-white/40 px-2"
                />
                <button type="button" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 dark:text-white/40 hover:text-brand hover:bg-white dark:hover:bg-white/5 transition-colors shrink-0">
                  <Smile className="w-4 h-4" />
                </button>
                <button 
                  type="submit" 
                  disabled={!inputText.trim()}
                  className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand/90 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,83,0,0.3)] transition-all"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
            </div>

          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400 dark:text-white/40 bg-white dark:bg-transparent z-10">
            <MessageSquare className="w-16 h-16 mb-4 opacity-50" />
            <p className="font-bold">Select a chat to start messaging</p>
          </div>
        )}

      </div>
    </div>
  );
}
