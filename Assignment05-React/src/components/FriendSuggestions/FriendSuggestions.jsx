import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from 'react-bootstrap';
import Avatar from '../Avatar/Avatar';

const FriendSuggestions = (props) => {
	return (
		<Card>
			<Card.Body className="px-1">
				<Card.Title>{props.title}</Card.Title>

				<ListGroup variant="flush">
					<ListGroup.Item className="d-flex align-items-center justify-content-center">
						<Avatar size="small" />
						<span className="mx-2">{props.name} </span>
						<span className="icon-whatsapp"> </span>
					</ListGroup.Item>

					<ListGroup.Item className="d-flex align-items-center justify-content-center">
						<Avatar size="small" />
						<span className="mx-2">{props.name} </span>
						<span className="icon-whatsapp"> </span>
					</ListGroup.Item>

					<ListGroup.Item className="d-flex align-items-center justify-content-center">
						<Avatar size="small" />
						<span className="mx-2">{props.name} </span>
						<span className="icon-whatsapp"> </span>
					</ListGroup.Item>

					<ListGroup.Item className="d-flex align-items-center justify-content-center">
						<Avatar size="small" />
						<span className="mx-2">{props.name} </span>
						<span className="icon-whatsapp"> </span>
					</ListGroup.Item>

					<ListGroup.Item className="d-flex align-items-center justify-content-center">
						<Avatar size="small" />
						<span className="mx-2">{props.name} </span>
						<span className="icon-whatsapp"> </span>
					</ListGroup.Item>
				</ListGroup>
			</Card.Body>
		</Card>
	);
};

export default FriendSuggestions;
