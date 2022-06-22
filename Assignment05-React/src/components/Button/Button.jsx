import 'bootstrap/dist/css/bootstrap.min.css';
import { Button as Btn } from 'react-bootstrap';

const Button = (props) => {
	return (
		<Btn
			className="me-3"
			as={props.as}
			type={props.type}
			variant={props.variant}
			value={props.value}
		/>
	);
};

export default Button;
