import React from 'react';

function App() {
  const products = [
    { id: 101, title: "Apple iPhone 15", price: 285000, status: true },
    { id: 102, title: "Samsung Galaxy S24", price: 245000, status: true },
    { id: 103, title: "Dell XPS 13 Laptop", price: 395000, status: false },
    { id: 104, title: "Sony WH-1000XM5 Headphones", price: 98000, status: true },
    { id: 105, title: "Apple Watch Series 9", price: 145000, status: true },
    { id: 106, title: "LG 55-inch 4K Smart TV", price: 210000, status: false },
    { id: 107, title: "Canon EOS R50 Camera", price: 235000, status: true },
    { id: 108, title: "Logitech MX Master 3S Mouse", price: 32000, status: true },
  ];

  // Logic
  const lowToHigh = [...products].sort((a, b) => a.price - b.price);
  const expensiveSorted = [...products].filter(p => p.price > 45000).sort((a, b) => b.price - a.price);
  const increasedPrice = products.map(p => ({ ...p, price: Math.round(p.price * 1.1) }));
  const startWithA = products.filter(p => p.title.toLowerCase().startsWith('a'));
  const top3 = [...products].sort((a, b) => b.price - a.price).slice(0, 3);
  const avgPrice = products.reduce((acc, p) => acc + p.price, 0) / products.length;
  const labeledProducts = products.map(p => ({ ...p, label: p.price >= avgPrice ? "Above average" : "Below average" }));

  // Helper component for clean list rendering
  const ProductList = ({ data }) => (
    <ul style={{ marginBottom: "20px", paddingLeft: "20px" }}>
      {data.map(p => (
        <li key={p.id}>
          {p.title} - <strong>Rs. {p.price.toLocaleString()}</strong> 
          {p.label && ` (${p.label})`}
        </li>
      ))}
    </ul>
  );

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Product Assignment</h1>
      
      <h3 style={{ borderBottom: "2px solid #eee" }}>1. Sort by Price (Low to High)</h3>
      <ProductList data={lowToHigh} />

      <h3 style={{ borderBottom: "2px solid #eee" }}>2. Price  45000 (High to Low)</h3>
      <ProductList data={expensiveSorted} />

      <h3 style={{ borderBottom: "2px solid #eee" }}>3. Prices (10% Increase)</h3>
      <ProductList data={increasedPrice} />

      <h3 style={{ borderBottom: "2px solid #eee" }}>4. Products starting with 'A'</h3>
      <ProductList data={startWithA} />

      <h3 style={{ borderBottom: "2px solid #eee" }}>5. Top 3 Expensive</h3>
      <ProductList data={top3} />

      <h3 style={{ borderBottom: "2px solid #eee" }}>6. Average Price Labeling</h3>
      <ProductList data={labeledProducts} />
    </div>
  );
}

export default App;