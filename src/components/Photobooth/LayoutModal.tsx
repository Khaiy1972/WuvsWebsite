import React, { useRef } from 'react';
import { toPng } from 'html-to-image';

// components
import { Button } from '@src/components';
import { Close } from '@mui/icons-material';

import stamp from '@src/assets/icon/PhotoboothStamp@3x.png';

interface LayoutModalProps {
	images: string[];
	onClose: () => void;
}

const LayoutModal: React.FC<LayoutModalProps> = ({ images, onClose }) => {
	const photoboothRef = useRef<HTMLDivElement>(null);

	const handleSave = () => {
		if (photoboothRef.current) {
			document.fonts.ready
				.then(() => {
					toPng(photoboothRef.current as HTMLElement, { cacheBust: true, skipFonts: true })
						.then((dataUrl) => {
							const link = document.createElement('a');
							link.download = 'photobooth-layout.png';
							link.href = dataUrl;
							link.click();
						})
						.catch((err) => {
							console.error('Failed to save image', err);
						});
				})
				.catch((err) => {
					console.error('Fonts failed to load', err);
				});
		}
	};

	return (
		<div className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-black/30">
			<div className="bg-background relative grid h-3/4 w-1/2 grid-cols-1 items-center justify-center gap-2 rounded-xl px-4 py-3 xl:grid-cols-2">
				<Button variant={'ghost'} className="absolute top-4 right-4 aspect-square h-12 rounded-full" onClick={onClose}>
					<Close />
				</Button>
				<div className={`flex items-center justify-center`}>
					{/* layout */}
					<div
						ref={photoboothRef}
						className={`flex flex-col items-center justify-center gap-4`}
						style={{ width: '2in', height: '6in', backgroundColor: 'white' }}
					>
						{images.map((img, index) => (
							<img key={index} src={img} alt={`captured-${index}`} className="h-24 w-40 object-cover" />
						))}
						{images.length === 3 && <div className="h-24 w-40"></div>}
						<div className="relative flex h-24 w-40 items-center justify-center">
							<img src={stamp} alt="" className="absolute h-3/5" />
							<h4 className="!font-ballet -rotate-12">Wuvs</h4>
						</div>
					</div>
				</div>
				<div className="flex h-full w-full items-center justify-center bg-amber-100">
					<Button onClick={handleSave}>Save</Button>
				</div>
			</div>
		</div>
	);
};

export default LayoutModal;
