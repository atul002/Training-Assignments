import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import TopNavbar from '../../components/TopNavbar/TopNavbar';
import UserWall from '../../components/UserWall/UserWall';
import './Homepage.scss';
const Homepage = () => {
	return (
		<>
			<TopNavbar />
			<UserWall />
			<Container fluid>
				<Row className="main-content">
					<Col sm={12} md={3}>
						<LeftSideBar />
					</Col>
					<Col sm={12} md={9} className="p-0">
						<RightSideBar />
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
};

export default Homepage;
