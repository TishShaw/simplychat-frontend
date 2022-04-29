import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserLogin } from '../../../redux/actions/userAction';
import { Button, Alert } from 'bootstrap-4-react';
import './Login.styles.css';

function Login(props) {
	const initialFormData = {
		email: '',
		password: '',
	};

	const [formData, setFormData] = useState(initialFormData);
	const navigate = useNavigate();

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.id]: event.target.value });
	};

	const userLogin = useSelector((state) => state.userLogin);
	const { success } = userLogin;
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(getUserLogin(formData));
	};

	useEffect(() => {
		if(success === true) navigate('/shop')
	});

	return (
		<div className='login'>
			<h1 className='login-title'>Welcome back, Beautiful!</h1>
			<form onSubmit={handleSubmit}>
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
			{success === false && (
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
