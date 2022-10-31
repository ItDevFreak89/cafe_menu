import React from "react";
import "./indexApp.css";
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import EditPage from "./Pages/EditPage/EditPage";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App({
  items,
  setItems,
  product,
  setProduct,
  price,
  setPrice,
  addProduct,
  hendleDelete,
}) {

  return (
    <div className="cafe_menu">
      <Header />
      <hr />
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<HomePage items={items} setItems={setItems} />}
          />
          <Route
            path="/EditPage"
            element={
              <EditPage
                items={items}
                setItems={setItems}
                product={product}
                price={price}
                setPrice={setPrice}
                setProduct={setProduct}
                addProduct={addProduct}
                hendleDelete={hendleDelete}
              />
            }
          />
          <Route path="*" element={<h1 style={{color:"red"}}>404 Page not found</h1>} />
        </Routes>
      </Router>
    
      <hr className="bottom-line" />
      <Footer />
    </div>
  );
}

export default App;
