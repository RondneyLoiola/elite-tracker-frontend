import { ListChecksIcon, SignOutIcon } from '@phosphor-icons/react';
import { Link, useNavigate } from 'react-router';
import { useUser } from '../../hooks/useUser';
import styles from './styles.module.css';

function SideBar() {
	const { userData, logout } = useUser();
	const navigate = useNavigate();

	function handleLogout() {
		logout();
		navigate('/entrar');
	}

	return (
		<div className={styles.container}>
			<img src={userData.avatarUrl} alt={userData.name} />
			<div className={styles.links}>
				<Link to="/">
					<ListChecksIcon />
				</Link>
			</div>
			<SignOutIcon onClick={handleLogout} className={styles.signout} />
		</div>
	);
}

export default SideBar;
