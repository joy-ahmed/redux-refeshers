import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

const MenuItem = ({ dish, onSelectDish }) => {
  return (
    <div>
      <Card inverse onClick={() => onSelectDish(dish)}>
        <CardImg
          alt="Card image cap"
          src={dish.image}
          style={{
            height: 270,
            opacity: 0.8,
          }}
          width="100%"
        />
        <div className="bg-dark opacity-50 w-100 h-100 position-absolute"></div>
        <CardImgOverlay>
          <CardTitle
            style={{ fontSize: 24, color: "white", textAlign: "center" }}
            tag="h5"
          >
            {dish.name}
          </CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default MenuItem;
