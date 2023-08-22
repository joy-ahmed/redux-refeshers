import { ListGroup, ListGroupItem } from "reactstrap";

const LoadComents = ({ comments }) => {
  return (
    <ListGroup>
      {comments.map((comment) => (
        <ListGroupItem key={comment.id}>
          <h5>{comment.author}</h5>
          <p>{comment.comment}</p>
          <p className="text-muted">{comment.date}</p>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default LoadComents;
