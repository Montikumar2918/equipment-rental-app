import React from "react";

const Products = (props) => {
  const imgsrc = props.value.image;
  const name = props.value.name;
  const price = props.value.price;
  let cartName = !props.value.addedToCart ? "Add to Cart" : "Remove";

  // handle cart number ;

  const handleCart = () => {
    console.log(cartName);
    //passing data child to parent using call back ();

    if (cartName === "Add to Cart") props.parent(1, name);
    else props.parent(-1, name);
  };

  

  return (
    <div className="card">
      <img src={imgsrc} alt="" />
      <h2>{name}</h2>
      <p>
        <b>{price}</b>
      </p>
      <button onClick={handleCart}>{cartName}</button>
    </div>
    
    
  );
};

export default Products;
