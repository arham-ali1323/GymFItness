"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, ShoppingCart, Eye, Heart, Truck, Shield, Award, Zap, ChevronRight } from 'lucide-react';
import shopData from '../../data/shop-data.json';
import ScrollToTopWaterFill from '@/components/ui/back-to-top';

export default function GymShop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Enhanced products with descriptions and better images
  const enhancedProducts = shopData.products.map(product => ({
    ...product,
    description: getProductDescription(product.name, product.category),
    shortDescription: getShortDescription(product.name, product.category),
    inStock: true,
    shipping: "Free shipping",
    warranty: "1 Year Warranty"
  }));

  const products = enhancedProducts;
  const categories = shopData.categories;
  const brands = shopData.brands;

  // Helper functions for product descriptions
  function getProductDescription(name: string, category: string): string {
    const descriptions: Record<string, string> = {
      "DUMBBELL": "Professional-grade adjustable dumbbells perfect for home and commercial gyms. Features ergonomic grip and durable construction for intense workouts.",
      "BARBELL": "Olympic standard barbell with precision knurling for superior grip. Built from high-quality steel for maximum durability and performance.",
      "KETTLEBELL": "Cast iron kettlebell with smooth handle for comfortable grip. Ideal for functional training, HIIT workouts, and strength building.",
      "PLATES": "Professional weight plates with calibrated accuracy. Compatible with all standard Olympic barbells and weight machines.",
      "BANDS": "Premium resistance bands for versatile workout options. Perfect for rehabilitation, strength training, and mobility exercises.",
      "BENCH": "Heavy-duty workout bench with adjustable angles. Supports various exercises including bench press, incline press, and seated workouts.",
      "CARDIO": "State-of-the-art cardio equipment with advanced features. Track your progress with built-in heart rate monitors and digital displays.",
      "default": "High-quality fitness equipment designed for professional and home use. Built to last with premium materials and expert craftsmanship."
    };
    
    for (const [key, desc] of Object.entries(descriptions)) {
      if (name.toUpperCase().includes(key)) return desc;
    }
    return descriptions.default;
  }

  function getShortDescription(name: string, category: string): string {
    const descriptions: Record<string, string> = {
      "DUMBBELL": "Adjustable weights for versatile training",
      "BARBELL": "Olympic standard for heavy lifting",
      "KETTLEBELL": "Functional training powerhouse",
      "PLATES": "Precision-calibrated weight plates",
      "BANDS": "Portable resistance training",
      "BENCH": "Multi-angle workout support",
      "CARDIO": "Advanced cardio performance",
      "default": "Premium fitness equipment"
    };
    
    for (const [key, desc] of Object.entries(descriptions)) {
      if (name.toUpperCase().includes(key)) return desc;
    }
    return descriptions.default;
  }

  // Pagination logic
  const itemsPerPage = 12;
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  
  // Reset to page 1 when category changes
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  // Cart functions
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Shop Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-orbitron mb-4">
              GYM <span className="text-orange-500">EQUIPMENT</span> SHOP
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional-grade fitness equipment for your home or commercial gym. Premium quality, competitive prices.
            </p>
          </div>

          {/* Mobile Cart Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-400 order-2 sm:order-1">
              <span>Shopping</span>
              <span>/</span>
              <span className="text-orange-500">
                {categories.find(cat => cat.id === selectedCategory)?.name || 'All Products'}
              </span>
            </div>
            <motion.button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 order-1 sm:order-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="w-5 h-5" />
              Cart ({getTotalItems()})
              {getTotalItems() > 0 && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
                  {getTotalItems()}
                </div>
              )}
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-white px-4 py-3 pr-12 focus:outline-none focus:border-orange-500 transition-all rounded-lg"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500 hover:text-orange-400 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Mobile Categories Toggle */}
            <div className="lg:hidden">
              <motion.button
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 tracking-wider transition-all duration-300 rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                FILTER PRODUCTS
              </motion.button>
            </div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  <div className="w-6 h-0.5 bg-orange-500"></div>
                  <div className="w-6 h-0.5 bg-orange-500"></div>
                </div>
                <h3 className="text-lg font-bold tracking-wider">CATEGORIES</h3>
              </div>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <motion.button
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`w-full text-left py-3 px-4 transition-all duration-300 flex items-center justify-between rounded-lg ${
                        selectedCategory === cat.id
                          ? 'text-orange-500 bg-orange-500/10 border border-orange-500/30'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="font-medium">{cat.name}</span>
                      <span className="text-sm bg-gray-800 px-2 py-1 rounded-full">({cat.count})</span>
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Price Filter */}
            <div className="bg-gray-900 border border-gray-800 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  <div className="w-6 h-0.5 bg-orange-500"></div>
                  <div className="w-6 h-0.5 bg-orange-500"></div>
                </div>
                <h3 className="text-lg font-bold tracking-wider">PRICE FILTER</h3>
              </div>
              <div className="space-y-4">
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full accent-orange-500"
                />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Price: ${priceRange[0]} - ${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Brands */}
            <div className="bg-gray-900 border border-gray-800 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  <div className="w-6 h-0.5 bg-orange-500"></div>
                  <div className="w-6 h-0.5 bg-orange-500"></div>
                </div>
                <h3 className="text-lg font-bold tracking-wider">FILTER BY BRANDS</h3>
              </div>
              <ul className="space-y-2">
                {brands.map((brand) => (
                  <li key={brand.id}>
                    <label className="flex items-center gap-3 cursor-pointer text-gray-400 hover:text-white transition">
                      <input type="checkbox" className="accent-orange-500" />
                      <span>{brand.name}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Tags */}
            <div className="bg-gray-900 border border-gray-800 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  <div className="w-6 h-0.5 bg-orange-500"></div>
                  <div className="w-6 h-0.5 bg-orange-500"></div>
                </div>
                <h3 className="text-lg font-bold tracking-wider">PRODUCT'S TAGS</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Dumbbells', 'Barbells', 'Kettlebells', 'Benches', 'Racks', 'Cardio'].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 bg-gray-800 hover:bg-orange-500 text-sm transition border border-gray-700"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Filter Bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
              <p className="text-gray-400">Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredProducts.length)} of {filteredProducts.length} results</p>
              <select className="bg-gray-900 border border-gray-800 text-white px-4 py-2 focus:outline-none focus:border-orange-500">
                <option>Default sorting</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
                    {/* Product Image Container */}
                    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-800 to-gray-700">
                      {/* Badges */}
                      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                        {product.sale && (
                          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                            <Zap className="w-3 h-3 inline mr-1" />
                            SALE
                          </div>
                        )}
                        {product.featured && (
                          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                            <Award className="w-3 h-3 inline mr-1" />
                            HOT
                          </div>
                        )}
                      </div>

                      {/* Quick Actions */}
                      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <button className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                          <Heart className="w-4 h-4 text-white" />
                        </button>
                        <button className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                          <Eye className="w-4 h-4 text-white" />
                        </button>
                      </div>

                      {/* Product Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Stock Status */}
                      <div className="absolute bottom-4 left-4 z-20">
                        <div className="flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-green-400 text-xs font-semibold">In Stock</span>
                        </div>
                      </div>
                    </div>

                    {/* Product Content */}
                    <div className="p-6">
                      {/* Product Title */}
                      <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors duration-300">
                        {product.name}
                      </h3>

                      {/* Short Description */}
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {product.shortDescription}
                      </p>

                      {/* Rating and Reviews */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < product.rating ? 'text-orange-500 fill-orange-500' : 'text-gray-600'}`}
                            />
                          ))}
                          <span className="text-gray-400 text-sm ml-1">({product.rating}.0)</span>
                        </div>
                      </div>

                      {/* Trust Badges */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                          <Truck className="w-3 h-3" />
                          <span>{product.shipping}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                          <Shield className="w-3 h-3" />
                          <span>{product.warranty}</span>
                        </div>
                      </div>

                      {/* Price Section */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-black text-orange-500">${product.price}</span>
                            {product.originalPrice && (
                              <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
                            )}
                          </div>
                          {product.originalPrice && (
                            <div className="text-green-400 text-xs font-semibold">
                              Save ${product.originalPrice - product.price}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <motion.button
                          onClick={() => addToCart(product)}
                          className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/25"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </motion.button>
                        <motion.button
                          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Eye className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-12">
              <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`w-10 h-10 flex items-center justify-center transition ${
                    currentPage === 1
                      ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  // Show current page, first, last, and pages around current
                  if (
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    pageNumber === currentPage ||
                    pageNumber === currentPage - 1 ||
                    pageNumber === currentPage + 1
                  ) {
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => paginate(pageNumber)}
                        className={`w-10 h-10 flex items-center justify-center transition ${
                          currentPage === pageNumber
                            ? 'bg-orange-500 hover:bg-orange-600 text-white'
                            : 'bg-gray-900 hover:bg-gray-800 text-white'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  }
                  // Show dots for skipped pages
                  if (
                    pageNumber === currentPage - 2 ||
                    pageNumber === currentPage + 2
                  ) {
                    return (
                      <span key={pageNumber} className="text-gray-500 px-2">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}

                {/* Next Button */}
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`w-10 h-10 flex items-center justify-center transition ${
                    currentPage === totalPages
                      ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b border-gray-800 flex items-center justify-between">
              <h2 className="text-xl font-bold">Shopping Cart ({getTotalItems()} items)</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-400 hover:text-white transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[50vh]">
              {cart.length === 0 ? (
                <p className="text-gray-400 text-center py-8">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{item.name}</h4>
                        <p className="text-orange-500 font-bold">${item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-700 hover:bg-gray-600 text-white rounded flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-700 hover:bg-gray-600 text-white rounded flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-400 transition"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold">Total: ${getTotalPrice()}</span>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setIsCheckoutOpen(true);
                    }}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
                  >
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg max-w-md w-full">
            <div className="p-6 border-b border-gray-800 flex items-center justify-between">
              <h2 className="text-xl font-bold">Checkout</h2>
              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="text-gray-400 hover:text-white transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span>{item.name} x{item.quantity}</span>
                      <span>${item.price * item.quantity}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-700 pt-2 mt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-orange-500">${getTotalPrice()}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Shipping Information</h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500"
                  />
                  <input
                    type="text"
                    placeholder="City, ZIP Code"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
              
              <button
                onClick={() => {
                  alert('Order placed successfully! (This is a demo)');
                  setCart([]);
                  setIsCheckoutOpen(false);
                }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
              >
                Place Order - ${getTotalPrice()}
              </button>
            </div>
          </div>
        </div>
      )}
      <ScrollToTopWaterFill />
    </div>
  );
}
