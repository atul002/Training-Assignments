import React from 'react';
import { Card } from 'react-bootstrap';
import PostImage from '../../assets/images/1.jpeg';
import Avatar from '../Avatar/Avatar';

const UserPost = () => {
	return (
		<Card className="user-post m-0 p-0">
			<Card.Body className="p-0">
				<div className="d-flex align-items-center p-2">
					<Avatar size="medium" />
					<div className="post-details ms-3">
						<h5 className="m-0">Atul Singh posted on your Timeline</h5>
						<p className="m-0">2 Months ago</p>
					</div>
				</div>
				<Card.Img variant="bottom" src={PostImage} />
				<Card.Text className="p-3">
					<h5 className="m-0"> It Looks amazing</h5>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default UserPost;
