import { useState } from 'react';

const products = [
  { id: 1, name: "Caramel Macchiato", price: 145, category: "Hot Coffee", image: "/img/caramel-macchiato.png" },
  { id: 2, name: "Iced Caramel Macchiato", price: 160, category: "Cold Coffee", image: "/img/iced-caramel-macchiato.png" },
  { id: 3, name: "Green Tea Latte", price: 110, category: "Tea", image: "/img/green-tea-latte.png" },
  { id: 4, name: "Cappuccino", price: 145, category: "Hot Coffee", image: "/img/cappuccino.png" },
];

const categories = ["All", "Hot Coffee", "Cold Coffee", "Tea"];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" ? products : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f9f3ec] p-8">
      <h1 className="text-3xl font-bold text-center text-[#00704A] mb-4">Menu</h1>
      <p className="text-center text-gray-600 mb-6">Handcrafted beverages made with love</p>
      <div className="flex justify-center space-x-2 mb-6">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full border-2 ${selectedCategory === category ? 'bg-[#00704A] text-white' : 'bg-white text-[#00704A] border-[#00704A]'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-2xl shadow-lg flex flex-col items-center">
            <img src={product.image} alt={product.name} className="w-32 h-32 mb-4" />
            <h2 className="text-xl font-semibold text-[#00704A]">{product.name}</h2>
            <p className="text-gray-600 mb-2">₱{product.price}</p>
            <button className="bg-[#00704A] text-white px-4 py-2 rounded-full hover:bg-white border-2 border-[#00704A] hover:text-[#00704A] transition duration-300">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
