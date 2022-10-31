import React from "react";
import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./indexEditDesserts.css";

const DessertsContent = () => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [edit, setEdit ] = useState(false); 
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("menu-desserts")) || []);

  useEffect( () => {
    localStorage.setItem('menu-desserts', JSON.stringify(items));
  },[items])


  const addProduct = (e) => {
    e.preventDefault();
    if(product.length > 0 && price.length > 0 ){
      items.length > 0 ?
    setItems([
      ...items,
      { id: items[items.length - 1].id + 1, name: product, price: price },
    ]):setItems([
      { id:1, name: product, price: price }])
    }else{
      return null}
  };
  const hendleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };
  return (
    <div>
      <h2>Desserts</h2>
      <img
        src="https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg"
        alt="pie icon"
      />
      <button className="edit_desserts_btn" onClick={() => setEdit(!edit)}>Edit Desserts</button>
      {/*DELETE-ME*/}
      {edit ? <div className="DELETE-ME">
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
        <button 
        type="submit" 
        onClick={addProduct}>Save</button>
      </div> : null}
      {/*DELETE-ME*/}
      {items.length > 0 ?
      items.map((item) => (
        <article key={item.id} className="item">
          <p className="dessert">{item.name}</p>
          <p className="price">{item.price}</p>
          <FaTrashAlt tabIndex="0" onClick={() => hendleDelete(item.id)} />
        </article>
      )) : <p>Empty list!</p>}
    </div>
  );
};

export default DessertsContent;
