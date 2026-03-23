import { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  Mic, 
  Paperclip, 
  Bot, 
  User, 
  MoreHorizontal,
  ChevronRight,
  Code,
  FileText,
  MessageSquare
} from 'lucide-react';

type Message = {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: string;
};

const SUGGESTIONS = [
  { icon: FileText, title: 'Draft an email', desc: 'to the design team about the new layout' },
  { icon: Code, title: 'Review my code', desc: 'to optimize the latest dashboard widget' },
  { icon: MessageSquare, title: 'Summarize', desc: 'my unread messages from Dann Petty' },
  { icon: Sparkles, title: 'Brainstorm', desc: 'marketing strategies for Q4 launch' }
];

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking and responding
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: generateDummyResponse(text),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1500); // 1.5 to 3 seconds delay
  };

  const generateDummyResponse = (prompt: string) => {
    const p = prompt.toLowerCase();
    if (p.includes('email') || p.includes('draft')) {
      return "Sure thing! Here is a drafted email for the design team:\n\nSubject: Thoughts on the new layout design\n\nHi Team,\n\nI just reviewed the latest wireframes you submitted. They look absolutely stunning and the new layout is perfect! Let's arrange a quick sync to discuss moving this into development.\n\nBest,\n[Your Name]";
    }
    if (p.includes('code') || p.includes('optimize')) {
      return "I can help with that. To optimize the widget, you should consider memoizing the child components using `React.memo` and ensuring your dependency arrays in `useMemo` are perfectly trimmed. Shall I write out a quick example for you?";
    }
    if (p.includes('summarize')) {
      return "Based on your recent messages, Dann Petty reviewed the wireframes and thinks they look stunning. He suggested adding a micro-interaction to the CTA button and wants to hop on a quick call to discuss it further.";
    }
    return `That sounds like a great idea. I can certainly help you with "${prompt}". Could you provide a bit more detail on what specific outcomes you're looking for?`;
  };

  return (
    <div className="p-4 md:p-8 h-[calc(100vh-80px)] max-w-[1200px] mx-auto relative z-10 transition-colors duration-300 flex flex-col">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#1c1c1c] dark:text-white flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
            <Sparkles className="w-5 h-5" />
          </div>
          Momentum AI
        </h1>
        <div className="flex items-center gap-2">
          <button className="text-[12px] font-bold text-gray-500 dark:text-white/60 hover:text-[#1c1c1c] dark:hover:text-white transition-colors bg-surface dark:bg-[#1B0B03] px-4 py-2 rounded-full border border-gray-100 dark:border-white/5 shadow-sm">
            Clear Chat
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 bg-surface dark:bg-[#1B0B03] rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm overflow-hidden flex flex-col relative transition-colors duration-300">
        
        {/* Glow ambient background elements */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/10 dark:bg-brand/20 blur-[100px] rounded-full pointer-events-none opacity-50 dark:opacity-30 mix-blend-screen"></div>

        <div className="flex-1 overflow-y-auto w-full max-w-[800px] mx-auto px-4 py-8 scrollbar-hide flex flex-col relative z-10">
          
          {messages.length === 0 && !isTyping ? (
            <div className="flex-1 flex flex-col items-center justify-center mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF5300] to-orange-400 p-0.5 shadow-2xl shadow-brand/20 mb-6 group cursor-pointer transition-transform hover:scale-105">
                <div className="w-full h-full bg-surface dark:bg-[#1B0B03] rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-brand group-hover:rotate-12 transition-transform duration-500" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] dark:text-white text-center mb-3">
                How can I help you today?
              </h2>
              <p className="text-gray-500 dark:text-white/50 text-center max-w-md font-medium mb-12">
                I'm your intelligent workspace assistant. I can draft emails, summarize chats, or help you brainstorm your next big idea.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {SUGGESTIONS.map((sug, i) => (
                  <button 
                    key={i}
                    onClick={() => handleSend(`${sug.title} ${sug.desc}`)}
                    className="p-4 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 hover:border-brand/40 dark:hover:border-brand/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left group flex items-start gap-4"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-gray-100 dark:bg-[#130600] text-gray-400 dark:text-white/40 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                      <sug.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-[#1c1c1c] dark:text-white group-hover:text-brand transition-colors mb-0.5">{sug.title}</h4>
                      <p className="text-[12px] text-gray-500 dark:text-white/50">{sug.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-8 flex flex-col pb-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-4 w-full animate-in slide-in-from-bottom-2 fade-in duration-300 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  
                  {/* Avatar */}
                  <div className="shrink-0 pt-1">
                    {msg.role === 'ai' ? (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand to-amber-500 flex items-center justify-center shadow-md">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <img src="https://i.pravatar.cc/150?img=11" alt="Me" className="w-8 h-8 rounded-full object-cover shadow-sm bg-gray-100 dark:bg-white/10" />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div className={`max-w-[75%] px-5 py-3.5 shadow-sm overflow-hidden ${
                    msg.role === 'user'
                      ? 'bg-gray-100 dark:bg-white/10 text-[#1c1c1c] dark:text-white rounded-[24px] rounded-tr-[4px]'
                      : 'bg-[#fffcfb] dark:bg-[#130600] border border-brand/20 dark:border-brand/30 text-[#1c1c1c] dark:text-white/90 rounded-[24px] rounded-tl-[4px] shadow-[0_4px_20px_rgba(255,83,0,0.05)]'
                  }`}>
                    {msg.content.split('\n').map((line, i) => (
                      <p key={i} className={`text-[14px] leading-relaxed ${line === '' ? 'h-4' : ''}`}>
                        {line}
                      </p>
                    ))}
                  </div>

                </div>
              ))}

              {isTyping && (
                <div className="flex gap-4 w-full animate-in fade-in duration-300">
                  <div className="shrink-0 pt-1">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand to-amber-500 flex items-center justify-center shadow-md animate-pulse">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="bg-[#fffcfb] dark:bg-[#130600] border border-brand/20 dark:border-brand/30 px-5 py-4 rounded-[24px] rounded-tl-[4px] shadow-[0_4px_20px_rgba(255,83,0,0.05)] flex items-center gap-1.5 h-[52px]">
                    <span className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} className="h-4" />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-6 bg-white/50 dark:bg-black/20 border-t border-gray-100 dark:border-white/5 backdrop-blur-md relative z-20">
          <div className="max-w-[800px] mx-auto">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
              className="relative flex items-end bg-white dark:bg-[#130600] p-2 rounded-[24px] border border-gray-200 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 focus-within:ring-2 focus-within:ring-brand/30 focus-within:border-brand transition-all duration-300"
            >
              <button type="button" className="w-10 h-10 mb-0.5 rounded-full flex items-center justify-center text-gray-400 dark:text-white/40 hover:text-[#1c1c1c] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors shrink-0">
                <Paperclip className="w-5 h-5" />
              </button>
              
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend(input);
                  }
                }}
                placeholder="Ask Momentum AI anything..."
                className="flex-1 bg-transparent text-[#1c1c1c] dark:text-white text-[14px] font-medium outline-none placeholder-gray-400 dark:placeholder-white/30 px-3 py-3 resize-none max-h-[150px] overflow-y-auto"
                style={{ minHeight: '44px', height: input ? 'auto' : '44px' }}
                rows={1}
              />
              
              <div className="flex items-center gap-2 mb-0.5 mr-0.5">
                <button type="button" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 dark:text-white/40 hover:text-brand hover:bg-brand/10 transition-colors shrink-0">
                  <Mic className="w-5 h-5" />
                </button>
                <button 
                  type="submit" 
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center shrink-0 disabled:opacity-50 disabled:bg-gray-300 dark:disabled:bg-white/10 disabled:cursor-not-allowed hover:bg-brand/90 hover:scale-105 hover:shadow-[0_4px_15px_rgba(255,83,0,0.4)] transition-all duration-300"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </form>
            <div className="text-center mt-3">
               <span className="text-[10px] text-gray-400 dark:text-white/30 font-bold uppercase tracking-widest">
                 Momentum AI can make mistakes. Consider verifying important information.
               </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
