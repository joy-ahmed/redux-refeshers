import { ListGroup, ListGroupItem } from "reactstrap";
import dateFormat from "dateformat";

const LoadComents = ({ comments }) => {
  return (
    <ListGroup>
      {comments.map((comment) => (
        <ListGroupItem key={comment.id}>
          <h5>{comment.author}</h5>
          <p>{comment.comment}</p>
          <p className="text-muted">
            {dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
          </p>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default LoadComents;
