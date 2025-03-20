import { X } from 'lucide-react';
import React from 'react';

interface PreviewPhotoProps {
	onClose: () => void;
	img: string;
}

const PreviewPhoto: React.FC<PreviewPhotoProps> = ({ onClose, img }) => {
	return (
		<div className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-black/30">
			<div className="relative h-3/4 w-1/2 rounded-2xl bg-card">
				<X
					className="absolute top-2 right-2 cursor-pointer rounded-full bg-primary p-2 text-background"
					size={40}
					onClick={onClose}
				/>
				<img src={img} alt="preview" className="w-2/4 object-cover" />
				<div className="absolute top-1/2 aspect-[1.77/1] w-2/4 -translate-y-1/2 transform border-2 border-primary"></div>
			</div>
		</div>
	);
};

export default PreviewPhoto;
