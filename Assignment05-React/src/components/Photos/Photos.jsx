import React from 'react';
import img1 from '../../assets/images/1.jpeg';
import img2 from '../../assets/images/2.jpeg';
import img3 from '../../assets/images/3.jpeg';
import img4 from '../../assets/images/4.jpeg';
import img5 from '../../assets/images/5.jpeg';
import img6 from '../../assets/images/6.jpeg';
import img7 from '../../assets/images/7.jpeg';
import img8 from '../../assets/images/8.jpeg';
import img9 from '../../assets/images/9.jpeg';
import './Photos.scss';

const Photos = () => {
	return (
		<div className="photo-wrapper d-flex align-items-center justify-content-around">
			<div className="photo">
				<img src={img1} alt="Image1" />
			</div>

			<div className="photo">
				<img src={img2} alt="Image1" />
			</div>

			<div className="photo">
				<img src={img3} alt="Image1" />
			</div>

			<div className="photo">
				<img src={img4} alt="Image1" />
			</div>

			<div className="photo">
				<img src={img5} alt="Image1" />
			</div>

			<div className="photo">
				<img src={img6} alt="Image1" />
			</div>

			<div className="photo">
				<img src={img7} alt="Image1" />
			</div>

			<div className="photo">
				<img src={img8} alt="Image1" />
			</div>

			<div className="photo">
				<img src={img9} alt="Image1" />
			</div>
		</div>
	);
};

export default Photos;
