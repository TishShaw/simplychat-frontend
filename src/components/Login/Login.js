import React from 'react';
import { Button } from 'bootstrap-4-react';
import './Login.styles.css';

function Login(props) {
    return (
			<div className='login'>
                <h1 className='login-title'>Welcome Back, Beautiful</h1>
				<form>
					<div className='form-group'>
						<label for='exampleInputEmail1'>Email address</label>
						<input
							type='email'
							className='form-control'
							id='exampleInputEmail1'
							aria-describedby='emailHelp'
							placeholder='Enter email'
						/>
						<small id='emailHelp' className='form-text text-muted'>
							We'll never share your email with anyone else.
						</small>
					</div>
					<label for='exampleInputPassword1'>Password</label>
					<input
						type='password'
						className='form-control'
						id='exampleInputPassword'
						aria-describedby='password
                        Help'
						placeholder='Enter Password'
					/>
					<Button outline
                    dark lg type='submit' className='loginBtn'>
						Enter
					</Button>
				</form>
			</div>
		);
}

export default Login;