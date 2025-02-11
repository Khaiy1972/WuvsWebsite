import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeLayout } from '@src/layouts';

function App() {
	return (
		<Router basename="/WuvsWebsite">
			<Routes>
				<Route path="/home" element={<HomeLayout />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
