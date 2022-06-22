import React from 'react';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import './Friend.scss';

const Friend = () => {
	return (
		<div className="friend-container d-flex align-items-center justify-content-evenly">
			<div className="friend d-flex align-items-center justify-content-around">
				<div className="avatar">
					<Avatar size="medium" />
				</div>

				<div className="details">
					<h5>Atul Singh</h5>
					<p>Intern Developer @ Nweput</p>
					<Button as="input" type="submit" variant="danger" value="Remove" />
				</div>
			</div>

			<div className="friend d-flex align-items-center justify-content-around">
				<div className="avatar">
					<Avatar size="medium" />
				</div>

				<div className="details">
					<h5>Atul Singh</h5>
					<p>Intern Developer @ Nweput</p>
					<Button as="input" type="submit" variant="danger" value="Remove" />
				</div>
			</div>

			<div className="friend d-flex align-items-center justify-content-around">
				<div className="avatar">
					<Avatar size="medium" />
				</div>

				<div className="details">
					<h5>Atul Singh</h5>
					<p>Intern Developer @ Nweput</p>
					<Button as="input" type="submit" variant="danger" value="Remove" />
				</div>
			</div>

			<div className="friend d-flex align-items-center justify-content-around">
				<div className="avatar">
					<Avatar size="medium" />
				</div>

				<div className="details">
					<h5>Atul Singh</h5>
					<p>Intern Developer @ Nweput</p>
					<Button as="input" type="submit" variant="danger" value="Remove" />
				</div>
			</div>

			<div className="friend d-flex align-items-center justify-content-around">
				<div className="avatar">
					<Avatar size="medium" />
				</div>

				<div className="details">
					<h5>Atul Singh</h5>
					<p>Intern Developer @ Nweput</p>
					<Button as="input" type="submit" variant="danger" value="Remove" />
				</div>
			</div>
			<div className="friend d-flex align-items-center justify-content-around">
				<div className="avatar">
					<Avatar size="medium" />
				</div>

				<div className="details">
					<h5>Atul Singh</h5>
					<p>Intern Developer @ Nweput</p>
					<Button as="input" type="submit" variant="danger" value="Remove" />
				</div>
			</div>
		</div>
	);
};

export default Friend;
