import { useState, useMemo } from 'react';
import { 
  Search, Filter, Plus, Package, TrendingUp, AlertCircle, CheckCircle2, 
  MoreVertical, X, UploadCloud, ArrowUpRight, ArrowDownRight, LayoutList
} from 'lucide-react';

// Types
type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'Active' | 'Draft' | 'Out of Stock';
  image: string;
  sales: number;
};

// Initial robust dataset
const INITIAL_PRODUCTS: Product[] = [
  { id: '1', name: 'Quantum UI Kit', category: 'Digital', price: 149.00, stock: 999, status: 'Active', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=150&q=80', sales: 1240 },
  { id: '2', name: 'Ergo Desk Chair', category: 'Physical', price: 399.00, stock: 45, status: 'Active', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=150&q=80', sales: 85 },
  { id: '3', name: 'SaaS Presentation Deck', category: 'Templates', price: 49.00, stock: 999, status: 'Active', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=150&q=80', sales: 432 },
  { id: '4', name: 'Minimalist Keyboard', category: 'Physical', price: 129.00, stock: 12, status: 'Active', image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=150&q=80', sales: 210 },
  { id: '5', name: 'E-commerce Theme', category: 'Digital', price: 79.00, stock: 999, status: 'Draft', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=150&q=80', sales: 0 },
  { id: '6', name: 'Webcam Pro 4K', category: 'Physical', price: 199.00, stock: 0, status: 'Out of Stock', image: 'https://images.unsplash.com/photo-1621259182978-fbf93132e53d?auto=format&fit=crop&w=150&q=80', sales: 654 },
  { id: '7', name: 'Dev Font Bundle', category: 'Digital', price: 29.00, stock: 999, status: 'Active', image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=150&q=80', sales: 1120 },
  { id: '8', name: 'Podcast Mic Set', category: 'Physical', price: 249.00, stock: 8, status: 'Active', image: 'https://images.unsplash.com/photo-1590602847861-f357a8a2d1d0?auto=format&fit=crop&w=150&q=80', sales: 34 },
];

export default function Products() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  
  // Filters and Sort State
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  // New Product Form State
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '', category: 'Physical', price: 0, stock: 0, status: 'Active', image: ''
  });

  // Derived State (filtering logic)
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = categoryFilter === 'All' || p.category === categoryFilter;
      const matchesStatus = statusFilter === 'All' || p.status === statusFilter;
      return matchesSearch && matchesCat && matchesStatus;
    });
  }, [products, searchQuery, categoryFilter, statusFilter]);

  // Aggregated Stats
  const totalValue = products.reduce((acc, p) => acc + (p.price * p.sales), 0);
  const activeCount = products.filter(p => p.status === 'Active').length;
  const outOfStockCount = products.filter(p => p.status === 'Out of Stock' || p.stock === 0).length;

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const product: Product = {
      id: Math.random().toString(36).substr(2, 9),
      name: newProduct.name || 'Untitled Product',
      category: newProduct.category || 'Uncategorized',
      price: Number(newProduct.price) || 0,
      stock: Number(newProduct.stock) || 0,
      status: newProduct.status as Product['status'] || 'Draft',
      image: newProduct.image || `https://picsum.photos/seed/${Math.random()}/150/150`,
      sales: 0
    };
    
    setProducts([product, ...products]);
    setIsModalOpen(false);
    
    // Reset form
    setNewProduct({ name: '', category: 'Physical', price: 0, stock: 0, status: 'Active', image: '' });
    
    // Show Toast
    setToastMessage(`Added "${product.name}" successfully!`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="p-8 pb-32 max-w-[1600px] mx-auto relative z-10 transition-colors duration-300">
      {/* Toast Notification */}
      <div className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 transform ${toastMessage ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
        <div className="bg-brand text-white px-6 py-3 rounded-full shadow-lg shadow-brand/20 font-bold text-sm flex items-center gap-2 border border-white/20">
          <CheckCircle2 className="w-4 h-4" />
          {toastMessage}
        </div>
      </div>

      <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-semibold mb-2 text-[#1c1c1c] dark:text-white transition-colors duration-300 flex items-center gap-3">
            <Package className="w-8 h-8 text-brand" />
            Products Inventory
          </h1>
          <p className="text-xl font-medium tracking-tight text-gray-500 dark:text-white/60 transition-colors duration-300">
            Manage your physical and digital items in one central live view.
          </p>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="h-11 px-6 rounded-full bg-brand text-white text-[14px] font-bold flex items-center gap-2 hover:bg-brand/90 transition-transform shadow-[0_8px_20px_rgba(255,83,0,0.3)] hover:scale-105 active:scale-95"
        >
          <Plus className="w-5 h-5" />
          <span>Add Product</span>
        </button>
      </header>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Products', value: products.length, icon: Package, color: 'text-blue-500 pb-1' },
          { label: 'Active Listings', value: activeCount, icon: CheckCircle2, color: 'text-emerald-500 pb-1' },
          { label: 'Out of Stock', value: outOfStockCount, icon: AlertCircle, color: 'text-rose-500 pb-1' },
          { label: 'Total Revenue Value', value: `$${(totalValue/1000).toFixed(1)}k`, icon: TrendingUp, color: 'text-brand pb-1' }
        ].map((stat, i) => (
          <div key={i} className="bg-surface dark:bg-[#1B0B03] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-white/5 flex items-center gap-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-brand/30 group cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-300">
              <stat.icon className={`w-5 h-5 ${stat.color} group-hover:text-white`} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 dark:text-white/50 uppercase tracking-wider mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold text-[#1c1c1c] dark:text-white">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Toolbar / Filters */}
      <div className="bg-surface dark:bg-[#1B0B03] rounded-[2rem] p-4 shadow-sm border border-gray-100 dark:border-white/5 mb-6 flex flex-col lg:flex-row items-center justify-between gap-4 transition-colors duration-300 relative z-20">
        
        <div className="flex-1 w-full max-w-md relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400 dark:text-white/40 group-focus-within:text-brand transition-colors" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-11 pr-4 py-2.5 bg-gray-50 dark:bg-[#130600] border border-gray-200 dark:border-white/5 rounded-xl text-[13px] text-[#1c1c1c] dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:ring-2 focus:ring-brand/20 dark:focus:ring-brand/40 focus:border-brand dark:focus:border-brand transition-all outline-none"
            placeholder="Search products by name or category..."
          />
        </div>

        <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
          <div className="flex items-center gap-2 border-r border-gray-200 dark:border-white/10 pr-3">
            <LayoutList className="w-4 h-4 text-gray-400 dark:text-white/40" />
            <select 
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-gray-50 dark:bg-[#130600] border border-gray-200 dark:border-white/5 text-[#1c1c1c] dark:text-white text-[12px] font-bold rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-brand/20 cursor-pointer appearance-none pr-8 relative min-w-[120px]"
            >
              <option value="All">All Categories</option>
              <option value="Physical">Physical</option>
              <option value="Digital">Digital</option>
              <option value="Templates">Templates</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400 dark:text-white/40" />
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-gray-50 dark:bg-[#130600] border border-gray-200 dark:border-white/5 text-[#1c1c1c] dark:text-white text-[12px] font-bold rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-brand/20 cursor-pointer appearance-none pr-8 min-w-[110px]"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Draft">Draft</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>
      </div>

      {/* Distinct Live List View */}
      <div className="bg-surface dark:bg-[#1B0B03] rounded-[2rem] border border-gray-100 dark:border-white/5 overflow-hidden shadow-sm transition-colors duration-300">
        
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 p-5 border-b border-gray-100 dark:border-white/5 text-[11px] font-bold text-gray-400 dark:text-white/40 uppercase tracking-wider">
          <div className="col-span-5 md:col-span-4 pl-2">Product</div>
          <div className="col-span-3 md:col-span-2 hidden md:block">Price</div>
          <div className="col-span-3 md:col-span-2 hidden md:block">Stock / Sales</div>
          <div className="col-span-4 md:col-span-3">Status</div>
          <div className="col-span-3 md:col-span-1 text-right pr-2">Actions</div>
        </div>

        {/* List Body */}
        <div className="flex flex-col">
          {filteredProducts.length === 0 ? (
            <div className="p-12 text-center flex flex-col items-center justify-center">
              <Package className="w-12 h-12 text-gray-300 dark:text-white/20 mb-4" />
              <h3 className="text-[#1c1c1c] dark:text-white font-bold text-lg">No products found</h3>
              <p className="text-gray-400 dark:text-white/50 text-sm mt-1">Try adjusting your filters or search query.</p>
            </div>
          ) : (
            filteredProducts.map((product, idx) => (
              <div 
                key={product.id} 
                className={`grid grid-cols-12 gap-4 p-4 items-center transition-all duration-300 hover:bg-gray-50 dark:hover:bg-white/5 group border-b border-gray-50 dark:border-white/[0.02] last:border-0 ${idx % 2 === 0 ? 'bg-transparent' : 'bg-gray-50/50 dark:bg-white/[0.01]'}`}
              >
                {/* Product Name & Image */}
                <div className="col-span-5 md:col-span-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden shrink-0 group-hover:border-brand/50 transition-colors shadow-sm relative">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    {product.status === 'Active' && (
                      <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-emerald-500 border border-white dark:border-[#1B0B03]"></div>
                    )}
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#1c1c1c] dark:text-white group-hover:text-brand transition-colors line-clamp-1">{product.name}</h4>
                    <span className="text-[10px] uppercase font-bold text-gray-400 dark:text-white/40 tracking-wider mt-0.5 block">{product.category}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="col-span-3 md:col-span-2 hidden md:flex items-center">
                  <span className="text-[14px] font-bold text-[#1c1c1c] dark:text-white transition-colors">${product.price.toFixed(2)}</span>
                </div>

                {/* Stock & Sales Progress */}
                <div className="col-span-3 md:col-span-2 hidden md:flex flex-col justify-center">
                  <div className="flex justify-between items-end mb-1">
                    <span className={`text-[12px] font-bold ${product.stock > 0 ? 'text-[#1c1c1c] dark:text-white' : 'text-rose-500'} transition-colors`}>
                      {product.stock > 0 ? `${product.stock} in stock` : 'Empty'}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${product.stock > 50 ? 'bg-emerald-500' : product.stock > 0 ? 'bg-amber-500' : 'bg-rose-500'}`}
                      style={{ width: `${Math.min((product.stock / 1000) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] text-gray-400 dark:text-white/40 font-bold mt-1">
                    <TrendingUp className="w-2.5 h-2.5 inline mr-1 text-brand" />
                    {product.sales} sales
                  </span>
                </div>

                {/* Status Pill */}
                <div className="col-span-4 md:col-span-3 flex items-center">
                  <div className={`px-3 py-1 rounded-full text-[11px] font-bold border transition-colors ${
                    product.status === 'Active' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20' :
                    product.status === 'Draft' ? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700' :
                    'bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-500/20'
                  }`}>
                    {product.status}
                  </div>
                </div>

                {/* Actions */}
                <div className="col-span-3 md:col-span-1 flex items-center justify-end pr-2">
                  <button className="w-8 h-8 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-white/60 hover:text-brand hover:border-brand/40 hover:shadow-md transition-all">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Interactive Add Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto pt-20 pb-20">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Modal Content - Animated in */}
          <div className="relative bg-surface dark:bg-[#1B0B03] w-full max-w-2xl rounded-[2rem] shadow-2xl border border-gray-100 dark:border-white/10 flex flex-col transform transition-all animate-in fade-in zoom-in-95 duration-300">
            <div className="p-6 border-b border-gray-100 dark:border-white/5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#1c1c1c] dark:text-white flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                  <Plus className="w-4 h-4" />
                </div>
                Add New Product
              </h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="p-6 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Image Upload Placeholder */}
                <div className="md:col-span-2">
                  <label className="block text-[11px] font-bold text-gray-400 dark:text-white/50 uppercase tracking-wider mb-2">Product Image</label>
                  <div className="w-full h-32 border-2 border-dashed border-gray-200 dark:border-white/10 rounded-2xl flex flex-col items-center justify-center text-gray-400 dark:text-white/40 hover:border-brand dark:hover:border-brand hover:bg-brand/5 transition-all cursor-pointer group">
                    <UploadCloud className="w-8 h-8 mb-2 group-hover:text-brand group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-[12px] font-bold group-hover:text-brand transition-colors">Click to upload or drag & drop</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-400 dark:text-white/50 uppercase tracking-wider mb-2">Product Name</label>
                  <input required type="text" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} className="w-full bg-gray-50 dark:bg-[#130600] border border-gray-200 dark:border-white/5 text-[#1c1c1c] dark:text-white text-[13px] font-bold rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all shadow-inner" placeholder="e.g. Mechanical Keyboard" />
                </div>
                
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 dark:text-white/50 uppercase tracking-wider mb-2">Category</label>
                  <select value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})} className="w-full bg-gray-50 dark:bg-[#130600] border border-gray-200 dark:border-white/5 text-[#1c1c1c] dark:text-white text-[13px] font-bold rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand/20 transition-all shadow-inner">
                    <option>Physical</option>
                    <option>Digital</option>
                    <option>Templates</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-400 dark:text-white/50 uppercase tracking-wider mb-2">Price ($)</label>
                  <input required min="0" step="0.01" type="number" value={newProduct.price || ''} onChange={e => setNewProduct({...newProduct, price: Number(e.target.value)})} className="w-full bg-gray-50 dark:bg-[#130600] border border-gray-200 dark:border-white/5 text-[#1c1c1c] dark:text-white text-[13px] font-bold rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand/20 transition-all shadow-inner" placeholder="0.00" />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-400 dark:text-white/50 uppercase tracking-wider mb-2">Initial Stock</label>
                  <input required min="0" type="number" value={newProduct.stock || ''} onChange={e => setNewProduct({...newProduct, stock: Number(e.target.value)})} className="w-full bg-gray-50 dark:bg-[#130600] border border-gray-200 dark:border-white/5 text-[#1c1c1c] dark:text-white text-[13px] font-bold rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand/20 transition-all shadow-inner" placeholder="0" />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex gap-3 justify-end mt-2">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-xl font-bold text-[13px] text-gray-500 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-6 py-2.5 rounded-xl font-bold text-[13px] text-white bg-brand hover:bg-brand/90 transition-transform hover:scale-105 shadow-[0_4px_15px_rgba(255,83,0,0.3)]">
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
