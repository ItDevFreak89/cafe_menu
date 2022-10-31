import React from "react";
import { useState, useEffect } from "react";
import "./indexDesserts.css";

const DessertsContent = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("menu-desserts")) || []);

  useEffect( () => {
    localStorage.setItem('menu-desserts', JSON.stringify(items));
  },[items])
   
  return (
    <div>
      <h2>Desserts</h2>
      <img
        src="https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg"
        alt="pie icon"
      />
      {items.length > 0 ?
      items.map((item) => (
        <article key={item.id} className="item">
          <p className="dessert">{item.name}</p>
          <p className="price">{item.price}</p>
        </article>
      )) : <p>Empty list!</p>}
    </div>
  );
};

export default DessertsContent;
