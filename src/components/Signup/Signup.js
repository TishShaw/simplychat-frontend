import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Alert } from 'bootstrap-4-react';

function Signup({ login }) {
	const navigate = useNavigate();
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const initialFormData = {
		username: '',
		email: '',
		password: '',
		re_password: '',
	};
	const [formData, setFormData] = useState(initialFormData);


	const handleInputChange = (event) => {
		setFormData({ ...formData, [event.target.id]: event.target.value });
	};

	
	const handleRegistration = async (event) => {
		event.preventDefault();

		if (!error) {
			try {
				const response = await fetch(
					'http://secret-beyond-07972.herokuapp.com/users/',
					{
						method: 'POST',
						body: JSON.stringify(formData),
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);
				if (response.status === 201) {
					setSuccess(true);
					setTimeout(() => {
						navigate('/login');
					}, 3000);
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	const handlePasswordMatch = (event) => {
		if (formData.password !== formData.re_password) {
			setError(true);
		} else {
			setError(false);
		}
	};

	return (
		<div className='login'>
			<h1 className='login-title'>Register</h1>
			<form onSubmit={handleRegistration}>
				<div className='form-group'>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						name='username'
						value={formData.username}
						onChange={handleInputChange}
						className='form-control'
						id='username'
						placeholder='Enter username'
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
			{success && (
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
