import { useRef, useEffect } from 'react';

interface CameraProps {
	onCapture?: (imageData: string) => void;
	triggerCapture?: boolean;
	width?: number;
	height?: number;
	frameWidth?: number;
	frameHeight?: number;
}

const Camera = ({
	onCapture,
	triggerCapture,
	width = 640,
	height = 480,
	frameWidth = 640,
	frameHeight = 480,
}: CameraProps) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const getVideo = async () => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width, height } });
				if (videoRef.current) {
					videoRef.current.srcObject = stream;
				}
			} catch (err) {
				console.error('Error accessing the camera:', err);
			}
		};

		getVideo();

		const currentVideoRef = videoRef.current;
		return () => {
			if (currentVideoRef && currentVideoRef.srcObject) {
				const stream = currentVideoRef.srcObject as MediaStream;
				stream.getTracks().forEach((track) => track.stop());
				currentVideoRef.srcObject = null;
			}
		};
	}, [width, height]);

	useEffect(() => {
		if (triggerCapture) {
			handleCapture();
		}
	});

	const handleCapture = () => {
		if (videoRef.current && canvasRef.current) {
			const canvas = canvasRef.current;
			const context = canvas.getContext('2d');
			if (context) {
				canvas.width = width;
				canvas.height = height;
				context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
				const imageData = canvas.toDataURL('image/png');
				onCapture?.(imageData);
			}
		}
	};

	return (
		<div style={{ width: `${frameWidth}px`, height: `${frameHeight}px`, position: 'relative' }}>
			<video
				ref={videoRef}
				autoPlay
				playsInline
				style={{ width: `${width}px`, height: `${height}px`, transform: 'scaleX(-1)' }}
				className="absolute top-1/2 -translate-y-1/2 transform"
			/>
			<canvas ref={canvasRef} style={{ display: 'none' }} />
		</div>
	);
};

export default Camera;
