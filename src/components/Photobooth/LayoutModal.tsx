import React, { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { HexColorPicker } from 'react-colorful';

// components
import { Button, Input, ToggleButton } from '@src/components';
import { Close } from '@mui/icons-material';

import stamp from '@src/assets/icon/PhotoboothStamp@3x.png';

interface LayoutModalProps {
	images: string[];
	onClose: () => void;
}

const LayoutModal: React.FC<LayoutModalProps> = ({ images, onClose }) => {
	const photoboothRef = useRef<HTMLDivElement>(null);

	const [color, setColor] = useState<string>('#f6efe5');
	const [fileName, setFileName] = useState<string>('photobooth-layout');
	const [name, setName] = useState<string>('');
	const [message, setMessage] = useState<string>('');

	const [isInverted, setIsInverted] = React.useState(false);
	const [isTextInverted, setIsTextInverted] = React.useState(false);
	const [isRounded, setIsRounded] = React.useState(false);

	const handleToggleChange = (checked: boolean) => {
		setIsInverted(checked);
	};

	const handleTextToggleChange = (checked: boolean) => {
		setIsTextInverted(checked);
	};

	const handleRoundedToggleChange = (checked: boolean) => {
		setIsRounded(checked);
	};

	const handleSave = () => {
		if (photoboothRef.current) {
			document.fonts.ready
				.then(() => {
					toPng(photoboothRef.current as HTMLElement, { cacheBust: true, skipFonts: false })
						.then((dataUrl) => {
							const link = document.createElement('a');
							link.download = `${fileName}.png`;
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
			<div className="relative flex h-10/12 w-11/12 flex-col gap-10 overflow-hidden overflow-y-scroll rounded-xl bg-background p-4 md:grid md:h-3/4 md:w-1/2 md:grid-cols-[1fr_2fr] md:items-center md:justify-center md:gap-2 md:p-8">
				<svg className="absolute top-0 -left-32 z-0 h-full fill-primary" id="visual" viewBox="0 0 960 540">
					<g transform="translate(960, 540)">
						<path d="M-297 0C-270.1 -28.2 -243.2 -56.5 -233.7 -96.8C-224.3 -137.1 -232.4 -189.5 -210 -210C-187.6 -230.5 -134.6 -219 -94.5 -228.2C-54.4 -237.4 -27.2 -267.2 0 -297L0 0Z"></path>
					</g>
					<g transform="translate(0, 0)">
						<path d="M297 0C296.4 41.1 295.7 82.3 274.4 113.7C253.1 145.1 211.1 166.7 175.4 175.4C139.6 184 110.1 179.6 81.9 197.7C53.7 215.8 26.9 256.4 0 297L0 0Z"></path>
					</g>
				</svg>
				<Button
					variant={'ghost'}
					className="fixed top-4 right-4 z-20 aspect-square h-12 rounded-full bg-primary text-background md:absolute md:bg-transparent md:text-foreground"
					onClick={onClose}
				>
					<Close />
				</Button>

				{/* layout side */}
				<div className={`z-10 flex items-center justify-center`}>
					{/* layout */}
					<div
						ref={photoboothRef}
						className={`flex flex-col items-center justify-center gap-4`}
						style={{ width: '2in', height: '6in', backgroundColor: color }}
					>
						{images.map((img, index) => (
							<img
								key={index}
								src={img}
								alt={`captured-${index}`}
								className={`h-24 w-40 object-cover ${isRounded && 'rounded-xl'}`}
							/>
						))}
						{images.length === 3 && (
							<div className={`h-24 w-40 overflow-y-hidden text-center text-wrap ${isTextInverted && 'invert'}`}>
								{message}
							</div>
						)}
						<div className="relative flex h-24 w-40 items-center justify-center overflow-hidden">
							<img src={stamp} alt="" className={`absolute h-11/12 opacity-60 ${isInverted && 'invert'}`} />
							<h4
								className={`-translate-x-1.5 translate-y-1 -rotate-12 transform font-semibold tracking-wider ${isInverted && 'invert'}`}
								style={{ fontFamily: 'Ballet' }}
							>
								{name}
							</h4>
						</div>
					</div>
				</div>

				{/* right side */}
				<div className="z-10 flex h-full min-h-96 w-full flex-col items-center justify-evenly overflow-y-scroll rounded-2xl bg-accent pb-20 md:min-h-full md:bg-transparent">
					{/* color Preset */}
					<section className="flex flex-col items-center justify-center gap-4 p-8">
						<h3>Color Presets</h3>
						<h5>Preset # 1</h5>
						<div className="flex flex-wrap justify-center gap-4">
							<Button className="bg-[#ec8366] text-[#f8ebe2] hover:bg-[#ec8366bf]" onClick={() => setColor('#ec8366')}>
								Sunset Coral
							</Button>
							<Button className="bg-[#f8ebe2] text-[#f26a6c] hover:bg-[#f8ebe2bf]" onClick={() => setColor('#f8ebe2')}>
								Ivory Mist
							</Button>
							<Button className="bg-[#f3c4be] text-[#f26a6c] hover:bg-[#f3c4bebf]" onClick={() => setColor('#f3c4be')}>
								Soft Peach
							</Button>
							<Button className="bg-[#f26a6c] text-[#f8ebe2] hover:bg-[#f26a6cbf]" onClick={() => setColor('#f26a6c')}>
								Fiery Rose
							</Button>
							<Button className="bg-[#fec6a3] text-[#f26a6c] hover:bg-[#fec6a3bf]" onClick={() => setColor('#fec6a3')}>
								Apricot Whisper
							</Button>
						</div>

						<h5>Preset # 2</h5>
						<div className="flex flex-wrap justify-center gap-4">
							<Button className="bg-[#8b5a91] text-[#f6efe5] hover:bg-[#8b5a91bf]" onClick={() => setColor('#8b5a91')}>
								Dewberry
							</Button>
							<Button className="bg-[#bf83b9] text-[#f6efe5] hover:bg-[#bf83b9bf]" onClick={() => setColor('#bf83b9')}>
								Sunrise Violet
							</Button>
							<Button className="bg-[#f6efe5] text-[#bf83b9] hover:bg-[#f6efe5bf]" onClick={() => setColor('#f6efe5')}>
								Soft Serve
							</Button>
							<Button className="bg-[#fcd2dc] text-[#8b5a91] hover:bg-[#fcd2dcbf]" onClick={() => setColor('#fcd2dc')}>
								Strawberry Mousse
							</Button>
							<Button className="bg-[#a24c71] text-[#f6efe5] hover:bg-[#a24c71bf]" onClick={() => setColor('#a24c71')}>
								Magenta Haze
							</Button>
							<Button className="bg-[#f58291] text-[#f6efe5] hover:bg-[#f58291bf]" onClick={() => setColor('#f58291')}>
								Flamingo Pink
							</Button>
						</div>
					</section>

					{/* custom color */}
					<section className="grid w-full gap-4 p-8">
						<h3 className="text-center">Custom Color</h3>

						<div className="mx-auto w-2/3">
							<div className="picker">
								<HexColorPicker color={color} onChange={setColor}></HexColorPicker>
							</div>
						</div>
						<Input
							className="bg-background ring-ring"
							placeholder="Custom Color"
							value={color}
							onChange={(e) => setColor(e.target.value)}
						/>
					</section>

					{/* toggles */}
					<section className="flex w-full flex-col items-center justify-center gap-4 p-8">
						<h3>Logo & Text</h3>

						{images.length === 3 && (
							<div className="flex w-full items-center justify-between gap-4">
								<label htmlFor="invertedLogo">Make message white</label>
								<ToggleButton size="medium" checked={isTextInverted} onChange={handleTextToggleChange} />
							</div>
						)}

						<div className="flex w-full items-center justify-between gap-4">
							<label htmlFor="invertedLogo">Make logo white</label>
							<ToggleButton size="medium" checked={isInverted} onChange={handleToggleChange} />
						</div>

						<div className="flex w-full items-center justify-between gap-4">
							<label htmlFor="invertedLogo">Make photos rounded</label>
							<ToggleButton size="medium" checked={isRounded} onChange={handleRoundedToggleChange} />
						</div>
					</section>

					<section className="z-20 flex w-full flex-col items-center justify-center gap-4 p-8">
						<h3>Names</h3>

						{images.length === 3 && (
							<div className="w-full">
								<label htmlFor="message">Message</label>
								<Input
									className="bg-background"
									placeholder="Add a short message"
									id="message"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								/>
							</div>
						)}

						<div className="w-full">
							<label htmlFor="name">Name</label>
							<Input
								className="bg-background"
								placeholder="Add your name"
								maxLength={16}
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div className="w-full">
							<label htmlFor="fileName">File Name</label>
							<Input
								className="bg-background"
								placeholder="File Name"
								id="fileName"
								value={fileName}
								onChange={(e) => setFileName(e.target.value)}
							/>
						</div>
					</section>

					<Button className="rounded-2xl px-20 py-5 text-xl font-semibold text-background" onClick={handleSave}>
						Save
					</Button>
				</div>
			</div>
		</div>
	);
};

export default LayoutModal;
