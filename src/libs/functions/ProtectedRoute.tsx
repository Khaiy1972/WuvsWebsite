import React from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
	isTimerReady: boolean;
	children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isTimerReady, children }) => {
	const sessionKey = sessionStorage.getItem('love');
	const expectedHash = '05022019'; // Replace with your actual hash code

	if (sessionKey !== expectedHash) {
		return <Navigate to="/" />;
	}

	if (!isTimerReady) {
		return (
			<>
				{children}
				<Navigate to="/timer" />
			</>
		);
	}

	return children;
};

export default ProtectedRoute;
