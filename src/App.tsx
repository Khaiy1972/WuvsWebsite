import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeLayout } from '@src/layouts';

// pages
import { Gallery, Home, KeyCode, Photobooth /* Question, Timer*/ } from '@src/pages';
import ProtectedRoute from './libs/functions/ProtectedRoute';

function App() {
	// const [isTimerReady, setIsTimerReady] = useState(false);
	// const [isSaidYes, setIsSaidYes] = useState(false);

	return (
		<BrowserRouter basename="/WuvsWebsite">
			<Routes>
				<Route path="/code" element={<KeyCode />} />
				{/* <Route
					path="/timer"
					element={
						<ProtectedRoute isTimerReady={isTimerReady} isSaidYes={isSaidYes}>
							<Timer setIsTimerReady={setIsTimerReady} />
						</ProtectedRoute>
					}
				/> */}

				{/* <Route
					path="/question"
					element={
						<ProtectedRoute isTimerReady={isTimerReady} isSaidYes={isSaidYes}>
							<Question setIsSaidYes={setIsSaidYes}></Question>
						</ProtectedRoute>
					}
				/> */}

				<Route path="/" element={<ProtectedRoute />}>
					<Route element={<HomeLayout />}>
						<Route index element={<Home />} />
						<Route path="/photobooth" element={<Photobooth />} />
						<Route path="/gallery" element={<Gallery />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
