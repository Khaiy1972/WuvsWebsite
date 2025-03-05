import { useRef, useEffect } from 'react';

interface CameraProps {
	onCapture?: (imageData: string) => void;
	triggerCapture?: boolean;
}

const Camera = ({ onCapture, triggerCapture }: CameraProps) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const getVideo = async () => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
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
	}, []);

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
				canvas.width = videoRef.current.videoWidth;
				canvas.height = videoRef.current.videoHeight;
				context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
				const imageData = canvas.toDataURL('image/png');
				onCapture?.(imageData);
			}
		}
	};

	return (
		<div>
			<video ref={videoRef} autoPlay playsInline style={{ width: '100%', height: 'auto' }} />
			<canvas ref={canvasRef} style={{ display: 'none' }} />
		</div>
	);
};

export default Camera;
