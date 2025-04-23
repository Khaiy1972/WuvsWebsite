import { Navigate, Outlet } from 'react-router-dom';

// type ProtectedRouteProps = {
// 	// isTimerReady: boolean;
// 	// isSaidYes: boolean;
// 	// children: React.ReactNode;
// };

const ProtectedRoute = (/*isTimerReady, isSaidYes,*/) => {
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

	return <Outlet />;
};

export default ProtectedRoute;
