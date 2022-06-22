import { ErrorMessage, useField } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<Form.Group className="mb-3">
			<Form.Label>{label}</Form.Label>
			<Form.Control
				className={`shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
				type={props.type}
				name={props.name}
				placeholder={props.placeholder}
				{...field}
				{...props}
				autoComplete="off"
			/>
			<ErrorMessage name={field.name} />
		</Form.Group>
	);
};

export default Input;
