import { Container, Row } from 'react-bootstrap';
import '../../assets/css/icomoon.css';
import './Footer.scss';
const Footer = () => {
	return (
		<Container fluid>
			<Row className="Con">
				<ul className="social-icons d-flex align-items-center justify-content-center">
					<li className="item">
						<a className="link" href="#">
							<span className="icon icon-facebook2"></span>
						</a>
					</li>

					<li className="item">
						<a className="link" href="#">
							<span className="icon icon-instagram"></span>
						</a>
					</li>

					<li className="item">
						<a className="link" href="#">
							<span className="icon icon-whatsapp"></span>
						</a>
					</li>

					<li className="item">
						<a className="link" href="#">
							<span className="icon icon-telegram"></span>
						</a>
					</li>

					<li className="item">
						<a className="link" href="#">
							<span className="icon icon-twitter"></span>
						</a>
					</li>

					<li className="item">
						<a className="link" href="#">
							<span className="icon icon-linkedin"></span>
						</a>
					</li>
				</ul>
			</Row>
		</Container>
	);
};

export default Footer;
