import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const FoodsItem = ({ details }) => {
  const { title, description, price, image } = details;
  return (
    <div>
      <div className="row vh-100">
        <div className="col-md-6 col-12 d-flex align-items-center">
          <div className="">
            
            <h1>{title}</h1>
            <p>{description}</p>

            <div className="d-flex align-items-center">
              <div>
                <h1>${price}</h1>
              </div>
              <div className="border ms-5 p-2 rounded-pill">
                <button className="btn btn-danger rounded-pill mx-2">-</button>
                <span className="fs-4 mx-2">1</span>
                <button className="btn btn-danger rounded-pill mx-2">+</button>
              </div>
            </div>

            <button className="btn btn-danger mt-5 rounded-pill px-5 py-2">
              <FontAwesomeIcon icon={faCartShopping} /> Add
            </button>
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex align-items-center">
          <div>
            <img className="w-75" src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodsItem;
