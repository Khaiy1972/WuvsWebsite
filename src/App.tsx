import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeLayout } from '@src/layouts';

// pages
import { Home, KeyCode, Timer } from '@src/pages';
import ProtectedRoute from './libs/functions/ProtectedRoute';

function App() {
	const [isTimerReady, setIsTimerReady] = useState(false);

	return (
		<BrowserRouter basename="/WuvsWebsite/">
			<Routes>
				<Route path="/" element={<KeyCode />}></Route>
				<Route
					path="/timer"
					element={
						<ProtectedRoute isTimerReady={isTimerReady}>
							<Timer setIsTimerReady={setIsTimerReady} />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/home"
					element={
						<ProtectedRoute isTimerReady={isTimerReady}>
							<HomeLayout />
						</ProtectedRoute>
					}
				>
					<Route index element={<Home />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
