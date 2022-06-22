import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Formik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import '../Login/Login.scss';
const Signup = () => {
	const validate = Yup.object({
		name: Yup.string()
			.max(20, 'Must be less than 25 Character!')
			.required('Required'),
		email: Yup.string().email('Email is Invalid').required('Required'),
		password: Yup.string().min(8, 'Must be atleast 8 characters'),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password'), null], 'Password must be same!')
			.required('Required'),
	});
	return (
		<>
			<Formik
				initialValues={{
					name: '',
					email: '',
					password: '',
					confirmPassword: '',
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
										label="Name:"
										type="name"
										name="name"
										placeholder="Enter Name"
									/>

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

									<Input
										label="Confirm Password:"
										type="password"
										name="confirmPassword"
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
							</Col>
						</Row>
					</div>
				)}
			</Formik>
		</>
	);
};

export default Signup;
