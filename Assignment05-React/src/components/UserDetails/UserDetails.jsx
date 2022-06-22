import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from 'react-bootstrap';

const UserDetails = (props) => {
	return (
		<Card className="mb-3">
			<Card.Body className="px-1">
				<Card.Title>{props.name}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">
					{props.designation}
				</Card.Subtitle>

				<ListGroup variant="flush">
					<ListGroup.Item>Followers: {props.followers}</ListGroup.Item>
					<ListGroup.Item>Following: {props.following}</ListGroup.Item>
					<ListGroup.Item>Activities: {props.activities}</ListGroup.Item>
				</ListGroup>
			</Card.Body>
		</Card>
	);
};

export default UserDetails;
