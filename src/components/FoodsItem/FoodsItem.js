import React from "react";

const FoodsItem = ({ details }) => {
  const { title, description, price, image } = details;
  console.log(details);
  return (
    <div>
      <div className="row vh-100">
        <div className="col-md-6 d-flex align-items-center">
          <div className="r">
            <h1>{title}</h1>
            <p>{description}</p>
            <h1>${price}</h1>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <img className="w-75" src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodsItem;
