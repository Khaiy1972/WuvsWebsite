import { useState, useEffect } from 'react';

const useViewport = () => {
	const [viewport, setViewport] = useState({
		viewportW: window.innerWidth,
		viewportH: window.innerHeight,
	});

	useEffect(() => {
		const handleResize = () => {
			setViewport({
				viewportW: window.innerWidth,
				viewportH: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return viewport;
};

export default useViewport;
