import { PhotoCard } from '@/components';

import background from '@src/assets/photos/KeyCodeCoverPhoto.jpeg';
import { GALLERY } from '@src/constants/gallery';

const gallery = () => {
	return (
		<div className="space-y-16">
			<section className="relative w-full">
				<img className="h-[500px] w-full object-cover" src={background} alt="" />
				<div className="absolute top-full left-1/2 flex w-10/12 -translate-1/2 transform justify-center rounded-xl bg-secondary py-2">
					<h3>Hello welcome to our life Gallery Together</h3>
				</div>
			</section>
			<section className="px-96">
				{GALLERY.map((item, index) => (
					<PhotoCard
						key={index}
						photoSRC={item.photoSRC}
						label={item.label}
						photoMessage={item.photoMessage}
						date={item.date}
					/>
				))}
			</section>
		</div>
	);
};
export default gallery;
