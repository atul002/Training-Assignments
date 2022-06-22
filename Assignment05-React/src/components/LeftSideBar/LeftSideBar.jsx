import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from '../Avatar/Avatar';
import FriendSuggestions from '../FriendSuggestions/FriendSuggestions';
import '../LeftSideBar/LeftSideBar.scss';
import UserDetails from '../UserDetails/UserDetails';
const LeftSideBar = () => {
	return (
		<div className="left-sidebar">
			<Avatar size="large" />
			<UserDetails
				name="Atul Singh"
				designation="Intern Developer"
				followers="23"
				following="14"
				activities="34"
			/>
			<FriendSuggestions title="Add Friend" name="Atul Singh" />
		</div>
	);
};

export default LeftSideBar;
