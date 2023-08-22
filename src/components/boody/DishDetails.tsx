import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import LoadComents from "./LoadComents";

const DishDetails = ({ dish }) => {
  return (
    <div>
      <Card className="my-2">
        <CardImg
          alt="Card image cap"
          src={dish.image}
          style={{
            height: 420,
          }}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          <CardText>
            <small className="text-muted">{dish.price}৳</small>
          </CardText>
        </CardBody>
      </Card>
      <hr />
      <h3 className="text-muted">Comeents</h3>
      <LoadComents comments={dish.comments} />
    </div>
  );
};

export default DishDetails;
