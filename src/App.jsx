import { useState } from "react";
import PLANTS from "./data.js";
import "./index.css";
import PlantList from "./components/plantList.jsx";
import Cart from "./components/cart.jsx";

export default function App() {
  const[cart,setCart] =useState([]);

  function addToCart(plant){
    const existing = cart.find((item) => item.id === plant.id);
    if (existing){
      setCart(
        cart.map((item) =>
        item.id === plant.id 
          ?{...item, quantity:item.quantity +1}
            :item
          )
        );
      } else {
        setCart([...cart,{...plant,quantity:1}]);
      }
    }

    function increase(id){
      setCart(
        cart.map((item)=>
      item.id === id ? {...item,quantity: item.quantity +1}: item
    ));
  }

    function decrease(id){
      setCart(
        cart.map((item) =>
        item.id === id ? {...item,quantity: item.quantity -1}:item
      )
      .filter((item) => item.quantity >0)
      );
    }
    return(
      <div className="container">
        <PlantList plants = {PLANTS} addToCart={addToCart} />
        <Cart cart ={cart} increase={increase} decrease={decrease}/>
    </div>
    );
  }
    