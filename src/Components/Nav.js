import React from "react";
import "./cart.css";
import { NavLink } from "react-router-dom"; 



const Nav = ({ cartCount }) => {
  return (
    <div className="navContainer">
      <h3>Euipment Rental Portal </h3>
      
      <ul>
        <li><NavLink  bg="primary" variant="dark" exact activeStyle={{ color: 'red' }} activeClassName="active" to="/">
        Home
        </NavLink></li>
        <li><NavLink bg="primary" variant="dark" exact  activeStyle={{ color: 'red' }}activeClassName="active" to="/CheckProduct">
        Product
        </NavLink></li>
        
        <li><NavLink bg="primary" variant="dark" exact activeStyle={{ color: 'red' }} activeClassName="active" to="/about">
        About
        </NavLink></li> 
      </ul>
        <div className="cart">
        <strong>Cart</strong> <span className="cartNo">{cartCount}</span>
      </div>
    </div>
    
  );
};
export default Nav;
