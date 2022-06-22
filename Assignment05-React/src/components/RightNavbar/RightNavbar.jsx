import React from 'react';
import { Row } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import './RightNavbar.scss';

const RightNavbar = () => {
	const navigate = useNavigate();

	return (
		<div>
			<Row className="RightNavbar">
				<ul className="list d-flex align-items-center p-0 my-1 text-center justify-content-between">
					<li onClick={() => navigate('/home/post')} className="item py-3">
						Timeline
					</li>
					{/* <li onClick={() => navigate('/home/about')} className="item py-3">
						About
					</li> */}
					<li onClick={() => navigate('/home/photos')} className="item py-3">
						Photos
					</li>
					<li onClick={() => navigate('/home/friend')} className="item py-3">
						Friends
					</li>
				</ul>
				<Outlet />
			</Row>
		</div>
	);
};

export default RightNavbar;
