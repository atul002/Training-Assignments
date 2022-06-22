import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Formik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './Login.scss';
const Login = () => {
	const validate = Yup.object({
		email: Yup.string().email('Email is Invalid').required('Required'),
		password: Yup.string().min(8, 'Must be atleast 8 characters'),
	});
	return (
		<>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={validate}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{(formik) => (
					<div className="login-container">
						<Row className="container d-flex align-items-center mx-auto">
							<Col className="text-center">
								<Avatar size="large" />
							</Col>
							<Col>
								<Form className="form">
									<Input
										label="Email:"
										type="email"
										name="email"
										placeholder="Enter Email"
									/>

									<Input
										label="Password:"
										type="password"
										name="password"
										placeholder="********"
									/>

									<Button
										as="input"
										type="submit"
										variant="primary"
										value="Submit"
									/>

									<Button
										as="input"
										type="reset"
										variant="danger"
										value="Reset"
									/>
								</Form>

								<a className="signup mt-3" href="#">
									Create a new account?
								</a>
							</Col>
						</Row>
					</div>
				)}
			</Formik>
		</>
	);
};

export default Login;

{
	/* 

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, Row } from 'react-bootstrap';
import { Avatar } from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './Login.scss';

const Login = () => {
	return (
		<>
			<div className="login-container">
				<Row className="container d-flex align-items-center mx-auto">
					<Col className="text-center">
						<Avatar size="large" />
					</Col>
					<Col>
						<Form className="form">
							<Input
								controlId="formBasicEmail"
								label="Email:"
								type="email"
								placceholder="Enter Email"
							/>

							<Input
								controlId="formBasicPassword"
								label="Password:"
								type="password"
								placceholder="********"
							/>

							<Button
								as="input"
								type="submit"
								variant="primary"
								value="Submit"
							/>

							<Button as="input" type="reset" variant="danger" value="Reset" />
						</Form>

						<a className="signup mt-3" href="#">
							Create a new account?
						</a>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default Login;

*/
}
