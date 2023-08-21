import { useState } from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/dishes";

const FoodMenu = () => {
  const [dishes] = useState(DISHES);
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          {dishes.map((dish) => (
            <MenuItem dish={dish} key={dish.id} />
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
