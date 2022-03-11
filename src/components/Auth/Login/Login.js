import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Alert } from 'bootstrap-4-react';
import { ProductContext } from '../../../Context';
import './Login.styles.css';

function Login(props) {
	const { handleThisLogin } = useContext(ProductContext);
	const initialFormData = {
		email: '',
		password: '',
	};
	const [formData, setFormData] = useState(initialFormData);
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.id]: event.target.value });
	};

	const handleLogin = async (event) => {
		event.preventDefault();
		setError(false);
		try {
			const API_ENDPOINT =
				'https://desolate-brushlands-04983.herokuapp.com/token/login/';
			const response = await fetch(API_ENDPOINT, {
				method: 'POST',
				body: JSON.stringify(formData),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response.status === 200) {
				const data = await response.json();

				handleThisLogin(data.auth_token);

				navigate('/shop');
			} else {
				setError(true);
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='login'>
			<h1 className='login-title'>Welcome Back, Beautiful</h1>
			<form onSubmit={handleLogin}>
				<div className='form-group'>
					<label htmlFor='email'>Email address</label>
					<input
						type='email'
						className='form-control'
						id='email'
						aria-describedby='password
                        Help'
						placeholder='Enter email'
						value={formData.email}
						onChange={handleChange}
					/>

					<label htmlFor='password'>Password</label>
					<input
						type='password'
						value={formData.password}
						onChange={handleChange}
						className='form-control'
						id='password'
						placeholder='Enter Password'
					/>
					<Button outline dark lg type='submit' className='loginBtn'>
						Enter
					</Button>
				</div>
			</form>
			<div className='member'>
				<h5>
					Not a member? <Link to='/signup'>Register</Link>{' '}
				</h5>
			</div>
			{error && (
				<Alert variant='warning' className='mt-4'>
					No valid user found with the credentials entered. Please try logging
					in again or{' '}
					<Link to='/signup'>
						<span id='signup'>sign up</span>
					</Link>{' '}
					for an account.
				</Alert>
			)}
		</div>
	);
}

export default Login;
