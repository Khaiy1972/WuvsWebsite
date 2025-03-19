import React, { useEffect, useState } from 'react';

// components
import { Camera as CameraUI, Button, LayoutModal } from '@src/components';
import { Camera, CameraRoll, Close, Delete } from '@mui/icons-material';

const Photobooth: React.FC = () => {
	const [capturedImage, setCapturedImage] = useState<boolean>(false);
	const [isDisplayLayout, setIsDisplayLayout] = useState(false);
	const [countdown, setCountdown] = useState<number | null>(null);
	const [images, setImages] = useState<string[]>([]);

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (countdown !== null) {
			if (countdown > 0) {
				timer = setTimeout(() => setCountdown(countdown - 1), 1000);
			} else {
				setCapturedImage(true);
				setCountdown(null);
			}
		}

		return () => clearTimeout(timer);
	}, [countdown]);

	const startCountdown = () => {
		setCapturedImage(false);
		setCountdown(3);
	};

	return (
		<div className="flex flex-col items-center justify-center py-32">
			{isDisplayLayout && <LayoutModal images={images} onClose={() => setIsDisplayLayout(false)} />}
			<h1>Photobooth</h1>

			<h1>{countdown !== null ? countdown : ''}</h1>

			<section className="flex items-center justify-center gap-20">
				<div className="my-10 overflow-hidden rounded-lg shadow-lg">
					<CameraUI
						triggerCapture={capturedImage}
						onCapture={(img) => {
							setImages((i) => [...i, img]);
							setCapturedImage(false);
						}}
					/>
				</div>

				<div className={`${images.length > 0 ? 'flex' : 'hidden'} mt-4 flex-col flex-wrap gap-4`}>
					{images.map((img, index) => (
						<div className="relative flex items-center gap-2" key={index}>
							<img key={index} src={img} alt={`captured-${index}`} className="h-24 w-40" />
							<Button
								className="text-background absolute top-4 right-4"
								onClick={() => setImages((i) => i.filter((_, i) => i !== index))}
							>
								<Close />
							</Button>
						</div>
					))}

					<Button onClick={() => setImages([])} className="text-background">
						<Delete /> Clear
					</Button>
					{images.length >= 3 && (
						<Button className="text-background" onClick={() => setIsDisplayLayout(true)}>
							<CameraRoll /> See layout
						</Button>
					)}
				</div>
			</section>

			{images.length < 4 && (
				<Button onClick={startCountdown} className="text-background">
					<Camera /> Capture
				</Button>
			)}
		</div>
	);
};

export default Photobooth;
