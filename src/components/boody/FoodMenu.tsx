import { useState } from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/dishes";
import DishDetails from "./DishDetails";

const FoodMenu = () => {
  const [dishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);
  const onSelectDish = (dish) => {
    console.log(dish);
    setSelectedDish(dish);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          {dishes.map((dish) => (
            <MenuItem dish={dish} onSelectDish={onSelectDish} key={dish.id} />
          ))}{" "}
        </div>
        <div className="col-7">
          {selectedDish ? <DishDetails dish={selectedDish} /> : null}
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
