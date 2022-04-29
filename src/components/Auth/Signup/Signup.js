import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createSignUp } from '../../../redux/actions/userAction';
import { Button, Alert } from 'bootstrap-4-react';

function Signup() {
	const navigate = useNavigate();
	const initialFormData = {
		name: '',
		email: '',
		password: '',
		re_password: '',
	};
	const [formData, setFormData] = useState(initialFormData);
	const dispatch = useDispatch();
	const [passwordError, setPasswordError] = useState(false);
	const userSignUpReducer = useSelector((state) => state.userLogin);
	const { error, success, userData } = userSignUpReducer;

	console.log(userData);

	const handleInputChange = (event) => {
		setFormData({ ...formData, [event.target.id]: event.target.value });
	};

	const handleRegistration = (event) => {
		event.preventDefault();
		if (formData.password !== formData.re_password) {
			return passwordError;
		} else {
			dispatch(createSignUp(formData));
		}
	};

	const handlePasswordMatch = (event) => {
		if (formData.password !== formData.re_password) {
			setPasswordError(true);
		} else {
			setPasswordError(false);
		}
	};

	useEffect(() => {
		if (success) {
			navigate('/login');
		}
	}, [userData]);
	return (
		<div className='login'>
			<h1 className='login-title'>Register</h1>
			<form onSubmit={handleRegistration}>
				<div className='form-group'>
					<label htmlFor='name'>Full Name</label>
					<input
						type='text'
						name='name'
						value={formData.name}
						onChange={handleInputChange}
						className='form-control'
						id='name'
						placeholder='Enter name'
						Required
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='email'>Email address</label>
					<input
						type='email'
						className='form-control'
						id='email'
						value={formData.email}
						onChange={handleInputChange}
						name='email'
						placeholder='Enter email'
					/>
					<small id='emailHelp' className='form-text text-muted'>
						We'll never share your email with anyone else.
					</small>
				</div>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					className='form-control'
					id='password'
					name='password'
					value={formData.password}
					onBlur={handlePasswordMatch}
					placeholder='Enter Password'
					onChange={handleInputChange}
				/>
				<label htmlFor='re_password'>Confirm Password</label>
				<input
					type='password'
					className='form-control'
					id='re_password'
					name='re_password'
					value={formData.re_password}
					onBlur={handlePasswordMatch}
					placeholder='Confirm Password'
					onChange={handleInputChange}
				/>

				<Button outline dark lg type='submit' className='loginBtn'>
					Create Account
				</Button>
			</form>
			{error && <Alert variant='danger'>Passwords must match!</Alert>}
			{userData && (
				<Alert variant='success' className='mt-5'>
					User successfully created! You will be redirected to log in. If you
					are not automatically redirected, please click{' '}
					{<Link to='login'>here</Link>}.
				</Alert>
			)}
		</div>
	);
}

export default Signup;
