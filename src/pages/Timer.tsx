import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

type TimerProps = {
	setIsTimerReady: (isReady: boolean) => void;
};

type TimeLeft = {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
} | null;

const Timer: React.FC<TimerProps> = ({ setIsTimerReady }) => {
	const calculateTimeLeft = (): TimeLeft => {
		const difference = +new Date(`2025-02-14T08:00:00`) - +new Date();

		if (difference > 0) {
			return {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return null;
	};

	const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			const newTimeLeft = calculateTimeLeft();
			setTimeLeft(newTimeLeft);

			if (!newTimeLeft) {
				setIsTimerReady(true);
			}
		}, 1000);

		return () => clearTimeout(timer);
	});

	return (
		<div className="bg-background flex h-screen w-screen items-center justify-center">
			{timeLeft ? (
				Object.entries(timeLeft).map(([interval, value]) => (
					<h1 key={interval} className="text-6xl">
						{value} {interval}{' '}
					</h1>
				))
			) : (
				<Navigate to={'/Home'} />
			)}
		</div>
	);
};

export default Timer;
