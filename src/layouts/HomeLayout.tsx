import { Outlet } from 'react-router-dom';

import { Header } from '@src/components';

const HomeLayout = () => {
	return (
		<div className="mt-headerHeight flex min-h-screen w-screen flex-col">
			<Header />

			<Outlet />
		</div>
	);
};

export default HomeLayout;
