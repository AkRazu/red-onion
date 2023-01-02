import React, { useEffect, useState } from "react";
import Food from "../Food/Food";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [type, setType] = useState("Lunch");
  

  useEffect(() => {
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const Breakfast = foods.filter((mill) => mill.type === type);
  // console.log(Breakfast);
  
  return (
    <div className="container">
      <div className="my-5">
        <ul className="nav justify-content-center align-items-center">
          <li
            onClick={() => setType("Breakfast")}
            className="nav-item p-0 text-dark"
          >
            <span
              to="breakfast"
              className={
               `p-0 ${ type === "Breakfast" ? "active-type-link" : "nav-link"}`
              }
            >
              Breakfast
            </span>
          </li>
          <li
            onClick={() => setType("Lunch")}
            className="nav-item p-0  cursor-pointer"
          >
            <span
              to="breakfast"
              className={
               `p-0 ${ type === "Lunch" ? "active-type-link " : "nav-link"}`
              }
            >
              Lunch
            </span>
          </li>
          <li
            onClick={() => setType("Dinner")}
            className="nav-item cursor-pointor"
          >
            <span
              to="breakfast"
              className={
                `p-0 ${type === "Dinner" ? "active-type-link" : "nav-link"}`
              }
            >
              Dinner
            </span>
          </li>
        </ul>
      </div>
      <div className="row g-3">
        {
          Breakfast ? Breakfast.map(food=><Food
            key={food.id}
            food={food}
          ></Food>) : <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        }
      </div>
    </div>
  );
};

export default Foods;
