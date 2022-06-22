import React from 'react';
import userlogin from '../../assets/images/user-login.svg';
import './Avatar.scss';

export const Avatar = (props) => {
	return <img src={userlogin} className={`avatar ${props.size}`} />;
};

export default Avatar;
