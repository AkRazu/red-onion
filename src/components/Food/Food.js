import React from "react";
import { useNavigate } from "react-router-dom";
import "./Food.css";

const Food = ({ food}) => {
  const { id,title, image, description, price } = food;
  const navigate = useNavigate();
  const handelDetails=(id)=>{
    navigate(`/mill/${id}`);
  }
  return (
    <div className="col col-md-4 ">
      <div onClick={()=>handelDetails(id)} className="card main-card border-0 h-100">
        <div className="d-flex justify-content-center my-3">
          <img className="product-img" src={image} alt="" />
        </div>
        <div className="card-body">
            <h4 className="card-title text-center">{title}</h4>
            <p className="card-text text-center">{description.slice(0,30)}</p>
            <h4 className="card-title text-center">${price}</h4>
            </div>
      </div>
    </div>
  );
};

export default Food;
