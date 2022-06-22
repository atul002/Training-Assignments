import React from 'react';
import { Route, Routes as RoutesContainer } from 'react-router-dom';
import App from './App';
import Friend from './components/Friend/Friend';
import Photos from './components/Photos/Photos';
import UserPost from './components/UserPost/UserPost';
import HomePage from './container/Homepage/Homepage';
import Signup from './container/Signup/Signup';
const Routes = () => {
	return (
		<RoutesContainer>
			<Route path="login" element={<App />} />
			<Route path="signup" element={<Signup />} />
			<Route path="home" element={<HomePage />}>
				<Route element={<UserPost />} index />
				<Route path="post" element={<UserPost />} />
				<Route path="friend" element={<Friend />} />
				<Route path="photos" element={<Photos />} />
			</Route>
		</RoutesContainer>
	);
};

export default Routes;
