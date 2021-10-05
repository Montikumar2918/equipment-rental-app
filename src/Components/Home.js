import "./Home.css";
import Product from "./Product";
import { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function Home() {
  //initialization:

  const [items] = useState([
    { 
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEuoChdpiegTke6C3cTeURznoTO_qcETeLZQ&usqp=CAU/300x300",
      name: "CAMERA",
      price: "₹1000 Per Day",
      addedToCart: false,
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8W2EKujONlh_9S70mL_FAVLemvqt2yWM0g&usqp=CAU/300x300",
      name: "SELFIE STICK",
      price: "₹74 Per Day",
      addedToCart: false,
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb2a20QbOSbBo5ARDcjj2edBnu0qJGsObMBg&usqp=CAU/300x300",
      name: "CAMERA LENS",
      price: "₹500 Per Day",
      addedToCart: false,
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnr3FBlJKmznLpem7BSp6od4Mz8qjuoqxTdg&usqp=CAU/300x300",
      name: "CAMERA COVER",
      price: "₹50 Per Day",
      addedToCart: false,
    },
  ]);
  // cart Count details:

  const [cart, setCart] = useState(0); //by default cart value is 0;

  // call back () will call by child with child to parent passing data;

  const Child = (data, name) => {
    setCart(cart + data);
    console.log(name);
    items.map((item) => {
      if (name === item.name) {
        item.addedToCart = !item.addedToCart;
      }
      return item;
    });
    console.log(items);
  };

  return (
    <>
    <div className="App">
      <Nav cartCount={cart} />
      <div className="cardContainer">
        {items.map((item, index) => {
          return <Product key={index} value={item} parent={Child} />;
          
        })}
      </div>
    </div>
    < Footer />
   </>
  );
}

export default Home;
