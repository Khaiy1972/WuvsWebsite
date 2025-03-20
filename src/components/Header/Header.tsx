import { useState } from 'react';
import { useViewport } from '@src/libs';
import { Link } from 'react-router-dom';

import { MoreVert } from '@mui/icons-material';
import { Home, Images, Inbox, Aperture } from 'lucide-react';

function Header() {
	const { viewportW } = useViewport();
	const [showMenu, setShowMenu] = useState(false);

	if (viewportW < 640)
		// mobile view
		return (
			<header className="fixed top-0 left-0 z-10 flex w-screen flex-col items-center bg-primary px-4 shadow-md transition-all">
				<div className="bg-b my-4 flex w-full items-center">
					<svg className="fill-primary" width="38" height="33" viewBox="0 0 38 33" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.6587 27.0975C10.0942 26.6228 9.81507 26.384 9.26712 25.8991C5.3834 20.5347 -4.10753 9.50639 1.99322 2.73943C2.89043 1.89425 3.93823 1.17049 5.08853 0.714C3.69777 3.37253 3.55191 6.31489 3.91458 9.23833C4.22679 5.90649 5.29352 2.95231 7.09189 0.136881C8.01039 -0.02159 8.94939 -0.0397235 9.8742 0.0682891C8.95097 3.2795 8.79013 6.49938 9.06292 9.81939C9.48867 6.52934 10.4103 3.46872 11.9422 0.523992C13.0972 0.920564 14.2136 1.50399 15.1463 2.2995C11.6765 10.8167 11.7774 20.4322 13.4465 29.3539C12.8615 28.8958 12.5729 28.6672 11.9942 28.1989C10.5026 24.6423 8.99118 21.089 7.64378 17.4749C8.24061 20.8154 9.24899 24.0116 10.6587 27.0975Z" />
						<path d="M19.4435 6.2936C20.019 10.4225 20.1562 14.6185 20.235 18.7813C20.2681 22.5964 20.2476 26.5882 19.3757 30.2771C19.2645 30.747 18.6424 33.6082 17.6435 32.8828C16.9158 32.3546 16.6107 31.1286 16.3087 30.2519C15.6914 28.4598 15.3011 26.5456 14.9834 24.6668C14.478 21.6708 14.2549 18.6291 14.2202 15.5724C14.232 11.2575 14.5048 6.9535 15.6867 2.78122C16.5752 3.65872 17.3368 4.70022 17.8311 5.85209C17.2714 10.1521 17.1602 14.4758 17.1279 18.8073C17.1287 19.6935 17.0987 20.5994 17.2036 21.4706C17.2509 21.8648 17.3321 22.1115 17.4306 22.2054C17.5686 22.337 17.6538 22.1108 17.6869 21.5171C17.7468 20.444 17.7413 19.3592 17.7492 18.2806C17.7744 14.4277 17.8627 10.5794 18.1757 6.73669C18.2924 7.17899 18.4091 7.62129 18.5257 8.06438C19.0217 7.58818 19.3276 6.99765 19.4435 6.2936Z" />
						<path d="M27.4556 0.0580444C30.4555 9.67354 26.7089 20.1011 23.9763 29.3476C23.3345 29.8538 22.6888 30.356 22.0399 30.8527C22.5122 22.4088 21.8933 13.7228 19.7827 5.51781C20.3512 4.33755 21.1569 3.23062 22.159 2.37835C23.4827 5.31124 24.1805 8.49407 24.6393 11.6635C24.7513 8.14638 24.5739 4.67657 23.765 1.24303C24.8987 0.623337 26.1633 0.184191 27.4556 0.0580444Z" />
						<path d="M36.0666 3.58775C37.5079 5.77954 37.3778 8.45463 36.8322 10.8987C36.6785 9.59625 36.3103 6.78713 34.7476 6.36139C34.3109 6.24234 34.1611 6.77137 34.2068 7.91851C34.221 8.27566 34.2982 8.647 34.4331 9.03175C34.5679 9.41728 34.955 10.0606 35.3989 10.8845C35.7931 11.6177 36.1691 12.4148 36.3331 13.2537C36.4719 13.9664 36.3576 14.8928 36.1289 15.5685C35.7797 16.6005 35.2349 17.5616 34.6388 18.4698C33.3971 20.362 31.7824 22.0477 30.2221 23.7104C29.2792 24.7157 28.3717 25.795 27.3768 26.7308C26.6625 27.4026 26.34 27.3963 26.1626 26.5944C27.3965 23.6103 28.5941 20.6151 29.6458 17.5616C29.5764 18.5061 29.4771 19.464 29.5354 20.4038C29.5741 21.0353 29.6994 21.2939 29.973 21.1946C30.107 21.1457 30.2797 20.9707 30.4965 20.6695C30.7125 20.3683 30.9128 20.0254 31.0847 19.6351C31.2471 19.2669 31.3511 18.924 31.3898 18.6039C31.4292 18.2838 31.3559 17.858 31.1067 17.3203C30.8844 16.8402 30.6763 16.3419 30.5288 15.8397C30.3104 15.0986 30.2742 14.2794 30.2135 13.5123C30.1007 12.0932 30.152 10.6354 30.1346 9.21703C30.1055 6.76821 29.567 4.01034 29.9454 1.73262C30.1685 0.389159 30.789 -0.0507756 32.0891 0.37891C33.5824 0.871668 34.9211 2.39173 36.0666 3.58775Z" />
					</svg>
					<h1 className="font-caprasimo ml-4 text-4xl text-gray-800">Wuvs</h1>
					<button className="ml-auto" onClick={() => setShowMenu(!showMenu)}>
						<MoreVert />
					</button>
				</div>
				{showMenu && (
					<div className="flex h-15 w-full flex-col justify-evenly">
						<div className="h-0.5 w-full border-t-1 border-t-blue-500"></div>
						<ul className="flex items-center justify-evenly">
							<li>
								<Link to={'/'} className="">
									<Home /> Home
								</Link>
							</li>

							<li>
								<a href="#gallery" className="">
									<Images /> Gallery
								</a>
							</li>

							<li>
								<a href="#message" className="">
									<Inbox /> Message
								</a>
							</li>

							<li>
								<Link to={'/photobooth'}>
									<Aperture /> Photobooth
								</Link>
							</li>
						</ul>
					</div>
				)}
			</header>
		);

	// web view
	return (
		<header className="fixed top-0 left-0 z-10 flex w-screen items-center bg-background p-4 shadow-md">
			<svg className="fill-primary" width="38" height="33" viewBox="0 0 38 33" xmlns="http://www.w3.org/2000/svg">
				<path d="M10.6587 27.0975C10.0942 26.6228 9.81507 26.384 9.26712 25.8991C5.3834 20.5347 -4.10753 9.50639 1.99322 2.73943C2.89043 1.89425 3.93823 1.17049 5.08853 0.714C3.69777 3.37253 3.55191 6.31489 3.91458 9.23833C4.22679 5.90649 5.29352 2.95231 7.09189 0.136881C8.01039 -0.02159 8.94939 -0.0397235 9.8742 0.0682891C8.95097 3.2795 8.79013 6.49938 9.06292 9.81939C9.48867 6.52934 10.4103 3.46872 11.9422 0.523992C13.0972 0.920564 14.2136 1.50399 15.1463 2.2995C11.6765 10.8167 11.7774 20.4322 13.4465 29.3539C12.8615 28.8958 12.5729 28.6672 11.9942 28.1989C10.5026 24.6423 8.99118 21.089 7.64378 17.4749C8.24061 20.8154 9.24899 24.0116 10.6587 27.0975Z" />
				<path d="M19.4435 6.2936C20.019 10.4225 20.1562 14.6185 20.235 18.7813C20.2681 22.5964 20.2476 26.5882 19.3757 30.2771C19.2645 30.747 18.6424 33.6082 17.6435 32.8828C16.9158 32.3546 16.6107 31.1286 16.3087 30.2519C15.6914 28.4598 15.3011 26.5456 14.9834 24.6668C14.478 21.6708 14.2549 18.6291 14.2202 15.5724C14.232 11.2575 14.5048 6.9535 15.6867 2.78122C16.5752 3.65872 17.3368 4.70022 17.8311 5.85209C17.2714 10.1521 17.1602 14.4758 17.1279 18.8073C17.1287 19.6935 17.0987 20.5994 17.2036 21.4706C17.2509 21.8648 17.3321 22.1115 17.4306 22.2054C17.5686 22.337 17.6538 22.1108 17.6869 21.5171C17.7468 20.444 17.7413 19.3592 17.7492 18.2806C17.7744 14.4277 17.8627 10.5794 18.1757 6.73669C18.2924 7.17899 18.4091 7.62129 18.5257 8.06438C19.0217 7.58818 19.3276 6.99765 19.4435 6.2936Z" />
				<path d="M27.4556 0.0580444C30.4555 9.67354 26.7089 20.1011 23.9763 29.3476C23.3345 29.8538 22.6888 30.356 22.0399 30.8527C22.5122 22.4088 21.8933 13.7228 19.7827 5.51781C20.3512 4.33755 21.1569 3.23062 22.159 2.37835C23.4827 5.31124 24.1805 8.49407 24.6393 11.6635C24.7513 8.14638 24.5739 4.67657 23.765 1.24303C24.8987 0.623337 26.1633 0.184191 27.4556 0.0580444Z" />
				<path d="M36.0666 3.58775C37.5079 5.77954 37.3778 8.45463 36.8322 10.8987C36.6785 9.59625 36.3103 6.78713 34.7476 6.36139C34.3109 6.24234 34.1611 6.77137 34.2068 7.91851C34.221 8.27566 34.2982 8.647 34.4331 9.03175C34.5679 9.41728 34.955 10.0606 35.3989 10.8845C35.7931 11.6177 36.1691 12.4148 36.3331 13.2537C36.4719 13.9664 36.3576 14.8928 36.1289 15.5685C35.7797 16.6005 35.2349 17.5616 34.6388 18.4698C33.3971 20.362 31.7824 22.0477 30.2221 23.7104C29.2792 24.7157 28.3717 25.795 27.3768 26.7308C26.6625 27.4026 26.34 27.3963 26.1626 26.5944C27.3965 23.6103 28.5941 20.6151 29.6458 17.5616C29.5764 18.5061 29.4771 19.464 29.5354 20.4038C29.5741 21.0353 29.6994 21.2939 29.973 21.1946C30.107 21.1457 30.2797 20.9707 30.4965 20.6695C30.7125 20.3683 30.9128 20.0254 31.0847 19.6351C31.2471 19.2669 31.3511 18.924 31.3898 18.6039C31.4292 18.2838 31.3559 17.858 31.1067 17.3203C30.8844 16.8402 30.6763 16.3419 30.5288 15.8397C30.3104 15.0986 30.2742 14.2794 30.2135 13.5123C30.1007 12.0932 30.152 10.6354 30.1346 9.21703C30.1055 6.76821 29.567 4.01034 29.9454 1.73262C30.1685 0.389159 30.789 -0.0507756 32.0891 0.37891C33.5824 0.871668 34.9211 2.39173 36.0666 3.58775Z" />
			</svg>
			<h1 className="font-caprasimo ml-4 text-4xl font-bold text-primary">Wuvs</h1>

			<ul className="ml-auto flex w-1/4 items-center justify-evenly text-primary">
				<li>
					<Link to={'/'} className="flex items-center gap-2 font-bold tracking-wider">
						<Home size={19} /> Home
					</Link>
				</li>

				<li>
					<Link to={'/gallery'} className="flex items-center gap-2 font-bold tracking-wider">
						<Images size={19} /> Gallery
					</Link>
				</li>

				<li>
					<Link to={'/messages'} className="flex items-center gap-2 font-bold tracking-wider">
						<Inbox size={19} /> Messages
					</Link>
				</li>

				<li>
					<Link to={'/photobooth'} className="flex items-center gap-2 font-bold tracking-wider">
						<Aperture size={19} /> Photobooth
					</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
