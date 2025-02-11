import { Outlet } from 'react-router-dom';

import { Header } from '@src/components';

const HomeLayout = () => {
	return (
		<div className="flex min-h-screen w-screen flex-col">
			<Header />
			<div className="flex-1">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default HomeLayout;
