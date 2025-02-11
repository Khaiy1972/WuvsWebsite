import React from 'react';

type PhotoMessageCardProps = {
	photoSRC: string;
	photoMessage: string;
	label: string;
};

const PhotoMessageCard: React.FC<PhotoMessageCardProps> = ({ photoSRC, photoMessage, label }) => {
	return (
		<div className="bg-primary flex h-100 w-4/5 items-center rounded-3xl px-8 py-3">
			<img src={photoSRC} alt="ValPhoto" className="h-[90%] w-auto rounded-3xl object-cover" />

			<h1 className="pt-4 text-2xl md:hidden">{label}</h1>

			<p className="p-4 text-center">
				<span className="mb-8 hidden text-3xl md:block">{label}</span>
				{photoMessage}
			</p>
		</div>
	);
};

export default PhotoMessageCard;
