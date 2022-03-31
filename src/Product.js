import React, { useState, useEffect } from 'react';
import "./Product.css"

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("/products.json");
      const data = await res.json();
      setProducts((prevProducts) => data);
    };
    getProducts();
  }, []);
    
console.log(products);

  return (
    <div>
      <input
        className='input'
        type="text"
        name="search"
        value={filteredProducts}
        onChange={(e) => setFilteredProducts(e.target.value)}
      />
      <ul style={{ listStyle: "none" }}>
        {products
          .filter((product) =>
            product.name.match(new RegExp(filteredProducts, "i"))
          )
          .map((product, i) => {
            return (
              <li key={i} className="card">
                <div className="pro-img">
                <img src={product.image} alt="" width="50" height="50" />
                </div>
                
                <div className="nice">
                  <span style={{fontSize: "12px"}}>{product.name}</span>
                  <span>{product.price}</span>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  )
}

export default Product