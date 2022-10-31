import React from "react";
import { useState, useEffect } from "react";
import "./indexCoffee.css";


const CoffeeContent = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("menu-coffee")) || []);

  useEffect(() => {
    localStorage.setItem('menu-desserts', JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <h2>Coffee</h2>
      <img
        src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg"
        alt="coffee icon"
      />

      {items.length > 0 ? (
        items.map((item) => (
          <article key={item.id} className="item">
            <p className="flavor">{item.name}</p>
            <p className="price">{item.price}</p>
          </article>
        ))
      ) : (
        <p>Empty list!</p>
      )}
    </div>
  );
};

export default CoffeeContent;

// const fetchCoffee = () =>{
//   return axios.get("http://localhost:3500/items")
// }
// const {isLoading ,data , isError , error} = useQuery(['coffee'] ,fetchCoffee )
