import React, { useState, useEffect } from "react";

const Search = () => {
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

  return (
    <div>
      <h1>Search Products</h1>
      <input
        style={{ height: "2rem", padding: "10px 200px" }}
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
              <li key={i}>
                <br />
                <img src={product.image} alt="" width="100" height="50" />
                <h4>{product.name}</h4>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Search;
