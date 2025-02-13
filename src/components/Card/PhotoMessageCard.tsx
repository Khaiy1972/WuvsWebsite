import React from 'react';

type PhotoMessageCardProps = {
	photoSRC: string;
	photoMessage: string;
	label: string;
};

const PhotoMessageCard: React.FC<PhotoMessageCardProps> = ({ photoSRC, photoMessage, label }) => {
	return (
		<div className="bg-card shadow-card-foreground/20 flex h-auto w-11/12 flex-col items-center rounded-3xl px-7 py-6 shadow-md md:h-100 md:w-4/5 md:flex-row md:px-8 md:py-3">
			<img src={photoSRC} alt="ValPhoto" className="h-[90%] w-auto rounded-3xl object-cover" />

			<h1 className="pt-4 text-2xl font-semibold md:hidden">{label}</h1>

			<p className="p-4 text-center">
				<span className="mb-8 hidden text-3xl font-semibold md:block">{label}</span>
				{photoMessage}
			</p>
		</div>
	);
};

export default PhotoMessageCard;
