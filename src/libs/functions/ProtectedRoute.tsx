import React from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
	// isTimerReady: boolean;
	// isSaidYes: boolean;
	children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ /*isTimerReady, isSaidYes,*/ children }) => {
	const sessionKey = sessionStorage.getItem('love');
	const expectedHash = '05022019'; // Replace with your actual hash code

	if (sessionKey !== expectedHash) {
		return <Navigate to="/code" />;
	}

	// if (!isTimerReady) {
	// 	return (
	// 		<>
	// 			{children}
	// 			<Navigate to="/timer" />
	// 		</>
	// 	);
	// }

	// if (!isSaidYes) {
	// 	return (
	// 		<>
	// 			{children}
	// 			<Navigate to="/question" />
	// 		</>
	// 	);
	// }

	return children;
};

export default ProtectedRoute;
