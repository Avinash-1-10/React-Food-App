import React, { useState } from "react";
import Meals from "./components/Meals";
import Navbar from "./components/Navbar";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    let temp = [...cartItems];

    const presentItem = temp.find((i) => i.id === item.id);
    if (presentItem) {
      presentItem.quantity++;
      presentItem.totalPrice = presentItem.quantity * presentItem.price;
    } else {
      temp.push(item);
    }
    setCartItems(temp);
  };

  return (
    <>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <Meals addToCart={addToCart} />
    </>
  );
}

export default App;
