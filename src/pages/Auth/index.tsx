/** biome-ignore-all lint/correctness/useExhaustiveDependencies: useEffect */

import axios from 'axios';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import styles from './styles.module.css';

function Auth() {
	const [searchParams] = useSearchParams(); // pega os parametros da url

	async function getUserInfo() {
		const { data } = await axios.get('http://localhost:4000/auth/callback', {
			params: {
				code: searchParams.get('code'),
			},
		});

		console.log(data);
	}

	useEffect(() => {
		getUserInfo();
	}, [getUserInfo]);

	return (
		<div className={styles.container}>
			<h1>Loading...</h1>
		</div>
	);
}

export default Auth;
