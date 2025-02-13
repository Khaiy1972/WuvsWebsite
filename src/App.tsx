import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeLayout } from '@src/layouts';

// pages
import { Home, KeyCode, Question, Timer } from '@src/pages';
import ProtectedRoute from './libs/functions/ProtectedRoute';

function App() {
	const [isTimerReady, setIsTimerReady] = useState(true);
	const [isSaidYes, setIsSaidYes] = useState(false);

	return (
		<BrowserRouter basename="/WuvsWebsite/">
			<Routes>
				<Route path="/" element={<KeyCode />}></Route>
				<Route
					path="/timer"
					element={
						<ProtectedRoute isTimerReady={isTimerReady} isSaidYes={isSaidYes}>
							<Timer setIsTimerReady={setIsTimerReady} />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/question"
					element={
						<ProtectedRoute isTimerReady={isTimerReady} isSaidYes={isSaidYes}>
							<Question setIsSaidYes={setIsSaidYes}></Question>
						</ProtectedRoute>
					}
				/>

				<Route
					path="/home"
					element={
						<ProtectedRoute isTimerReady={isTimerReady} isSaidYes={isSaidYes}>
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
