import React, { useEffect, useState } from 'react';

// components
import { Camera as CameraUI, Button, LayoutModal, Input } from '@src/components';
import { X, Trash2, Aperture, Film } from 'lucide-react';

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
		<div className="relative flex h-screen w-screen flex-col items-center justify-center bg-chart-4 py-30">
			{isDisplayLayout && <LayoutModal images={images} onClose={() => setIsDisplayLayout(false)} />}

			<svg className="absolute top-0 w-full fill-background" viewBox="0 30 960 170" width="960">
				<path
					d="M0 105L20 114.3C40 123.7 80 142.3 120 138.3C160 134.3 200 107.7 240 104.2C280 100.7 320 120.3 360 136.3C400 152.3 440 164.7 480 166.7C520 168.7 560 160.3 600 136.2C640 112 680 72 720 66C760 60 800 88 840 106C880 124 920 132 940 136L960 140L960 0L940 0C920 0 880 0 840 0C800 0 760 0 720 0C680 0 640 0 600 0C560 0 520 0 480 0C440 0 400 0 360 0C320 0 280 0 240 0C200 0 160 0 120 0C80 0 40 0 20 0L0 0Z"
					strokeLinecap="round"
					strokeLinejoin="miter"
				></path>
			</svg>

			<h1 className="absolute top-32 z-10 font-bold text-primary">Photobooth</h1>

			<section className="flex items-center justify-center gap-20 pt-10">
				<div className="my-10 overflow-hidden rounded-lg bg-primary shadow-lg">
					<CameraUI
						frameHeight={288}
						frameWidth={480}
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
							<img key={index} src={img} alt={`captured-${index}`} className="h-24 w-40 object-cover" />
							<Button
								className="absolute top-1 right-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/50 px-0 py-0 text-background"
								size={'icon'}
								onClick={() => setImages((i) => i.filter((_, i) => i !== index))}
							>
								<X size={15} />
							</Button>
						</div>
					))}

					<Button
						onClick={() => setImages([])}
						className="flex items-center justify-center gap-2 text-xl font-semibold text-background"
					>
						<Trash2 /> Clear
					</Button>
					{images.length >= 3 && (
						<Button className="text-background" onClick={() => setIsDisplayLayout(true)}>
							<Film /> See layout
						</Button>
					)}
				</div>
			</section>

			{images.length < 4 && (
				<>
					{countdown === null ? (
						<>
							<Button
								className="rounded-full !px-10 py-8 text-xl font-semibold text-background"
								onClick={startCountdown}
							>
								<Aperture size={25} /> Capture
							</Button>

							<div className="mt-20 w-1/3 cursor-pointer border-card">
								<label className="font-semibold" htmlFor="imgInput">
									All Images will be positioned at the center
								</label>
								<Input
									className="cursor-pointer border-card bg-secondary"
									id="imgInput"
									type="file"
									onChange={(e) => {
										const file = e.target.files?.[0];
										if (file) {
											const reader = new FileReader();
											reader.onloadend = () => {
												if (reader.result) {
													setImages((i) => [...i, reader.result as string]);
												}
											};
											reader.readAsDataURL(file);
										}
									}}
								/>
							</div>
						</>
					) : (
						<h1 className="text-background">{countdown !== null ? countdown : ''}</h1>
					)}
				</>
			)}
		</div>
	);
};

export default Photobooth;
