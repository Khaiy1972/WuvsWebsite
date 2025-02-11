import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeLayout } from '@src/layouts';

// pages
import { Home } from '@src/pages';

function App() {
	return (
		<Router basename="/WuvsWebsite">
			<Routes>
				<Route path="/home" element={<HomeLayout />}>
					<Route index element={<Home />}></Route>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
