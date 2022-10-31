import React, { useEffect } from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./indexEditCoffee.css";

const CoffeeContent = () => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [edit, setEdit] = useState(false);
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("menu-coffee")) ||[]);

  useEffect(() => {
    localStorage.setItem('menu-desserts', JSON.stringify(items));
  }, [items]);

  const addProduct = (e) => {
    e.preventDefault();
    if (product.length > 0 && price.length > 0) {
      items.length > 0
        ? setItems([
            ...items,
            { id: items[items.length - 1].id + 1, name: product, price: price },
          ])
        : setItems([{ id: 1, name: product, price: price }]);
    } else {
      return null;
    }
  };
  const hendleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };
  return (
    <div>
      <h2>Coffee</h2>
      <img
        src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg"
        alt="coffee icon"
      />
      <button className="edit_coffee_btn" onClick={() => setEdit(!edit)}>
        Edit Coffee
      </button>
      {/*DELETE-ME*/}
      {edit ? (
        <div className="DELETE-ME">
          <input
            type="text"
            placeholder="enter product..."
            onChange={(e) => setProduct(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="enter price..."
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <button onClick={addProduct}>Save</button>
        </div>
      ) : null}
      {/*DELETE-ME*/}
      {items.length > 0 ? (
        items.map((item) => (
          <article key={item.id} className="item">
            <p className="flavor">{item.name}</p>
            <p className="price">{item.price}</p>
            <FaTrashAlt tabIndex="0" onClick={() => hendleDelete(item.id)} />
          </article>
        ))
      ) : (
        <p>Empty list!</p>
      )}
    </div>
  );
};

export default CoffeeContent;
