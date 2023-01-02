import React from "react";
import { useParams } from "react-router-dom";
import useFoodsData from "../../useFoodsData/useFoodsData";
import FoodsItem from "../FoodsItem/FoodsItem";

const FoodDetails = () => {
  const { keys } = useParams();
  const [foods, setFoods] = useFoodsData();
  const findFood = foods.filter((find) => find.id + "" === keys);
  //   console.log(findFood[0].title);
  return (
    <div className="container">
      {findFood.map((details) => (
        <FoodsItem key={details.id} details={details}></FoodsItem>
      ))}
    </div>
  );
};

export default FoodDetails;
