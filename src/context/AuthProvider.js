import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserContext } from '../Context';
import { getUserInfo } from '../redux/actions/userAction';

const AuthProvider = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState(null);
	const [userDetails, setUserDetails] = useState(null);
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userInfo);
	const data = useSelector((state) => state.userLogin);
	const token = data.userData?.auth_token;

	useEffect(() => {
		setCurrentUser(data);
		setUserDetails(userInfo);
		dispatch(getUserInfo(token));
		if (currentUser) {
			setLoggedIn(true);
		}
	}, []);

	return (
		<UserContext.Provider value={{ currentUser, userDetails, loggedIn, token }}>
			{children}
		</UserContext.Provider>
	);
};

export default AuthProvider;
