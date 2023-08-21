import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

const MenuItem = ({ dish }) => {
  return (
    <div>
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src={dish.image}
          style={{
            height: 270,
            opacity: 0.8,
          }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle
            style={{ fontSize: 24, color: "black", textAlign: "center" }}
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
