import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

type TimerProps = {
	setIsTimerReady: (isReady: boolean) => void;
};

// Define a type for the countdown time structure
type TimeLeft = {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
} | null;

const Timer: React.FC<TimerProps> = ({ setIsTimerReady }) => {
	const calculateTimeLeft = (): TimeLeft => {
		const targetTime = new Date('2025-02-14T08:00:00').getTime();
		const now = new Date().getTime();
		const difference = targetTime - now;

		if (difference > 0) {
			return {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / (1000 * 60)) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return null;
	};

	const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			const newTimeLeft = calculateTimeLeft();
			setTimeLeft(newTimeLeft);

			if (!newTimeLeft) {
				setIsTimerReady(true);
				clearInterval(timer);
			}
		}, 1000);

		return () => clearInterval(timer);
	});

	return (
		<div className="bg-background flex h-screen w-screen items-center justify-center">
			<div className="bg-card shadow-card-foreground border-border inset-shadow-md flex w-auto flex-col items-center space-y-4 rounded-2xl border-2 p-8">
				<h1 className="text-4xl font-bold">Countdown Timer</h1>
				<div className="flex gap-8 md:gap-18">
					{timeLeft ? (
						Object.entries(timeLeft).map(([unit, value]) => (
							<div key={unit} className="flex flex-col items-center">
								<span className="text-6xl font-bold">{value}</span>
								<span className="text-lg capitalize">{value <= 1 ? unit.slice(0, -1) : unit}</span>
							</div>
						))
					) : (
						<Navigate to="/home" />
					)}
				</div>
			</div>
		</div>
	);
};

export default Timer;
