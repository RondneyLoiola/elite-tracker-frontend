import { Navigate } from 'react-router';
import AppContainer from '../components/AppContainer/index.tsx';
import SideBar from '../components/Sidebar/index.tsx';
import { userLocalStorageKey } from '../hooks/useUser';

type PrivateRoutePropes = {
	component: React.ReactNode;
};

export function PrivateRoute({ component }: PrivateRoutePropes) {
	const userData = localStorage.getItem(userLocalStorageKey);

	if (!userData) {
		return <Navigate to="/entrar" />;
	}

	return (
		<AppContainer>
			<SideBar />
			{component}
		</AppContainer>
	);
}
