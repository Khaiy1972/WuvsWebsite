import React from 'react';

interface ToggleButtonProps {
	size: 'large' | 'medium' | 'small' | 'extra-small';
	checked?: boolean;
	onChange?: (checked: boolean) => void;
}

const ToggleButton = ({ size, checked, onChange }: ToggleButtonProps) => {
	const [currentState, setCurrentState] = React.useState(checked ?? false);

	// it will set the current state to the checked prop value
	// it ensures that the given value of the checked prop is set to the current state
	React.useEffect(() => {
		setCurrentState(checked ?? false);
	}, [checked]);

	const handleClick = () => {
		const newState = !currentState;
		setCurrentState(newState);
		if (onChange) {
			onChange(newState);
		}
	};

	let sizeClass = '';
	let circleClass = '';
	let circleTranslate = '';

	// Set size classes based on the size prop
	if (size === 'large') {
		sizeClass = 'w-16 h-8'; // Adjusted large size for the toggle container
		circleClass = 'w-7 h-7'; // Adjusted large size for the circle
		circleTranslate = 'translate-x-8'; // Movement of the circle in 'large' size
	}
	if (size === 'medium') {
		sizeClass = 'w-12 h-6'; // Medium size for the toggle container
		circleClass = 'w-5 h-5'; // Medium size for the circle
		circleTranslate = 'translate-x-[26px]'; // Movement of the circle in 'medium' size
	}
	if (size === 'small') {
		sizeClass = 'w-10 h-5'; // Small size for the toggle container
		circleClass = 'w-4 h-4'; // Small size for the circle
		circleTranslate = 'translate-x-5'; // Movement of the circle in 'small' size
	}
	if (size === 'extra-small') {
		sizeClass = 'w-8 h-4'; // Extra-small size for the toggle container
		circleClass = 'w-3 h-3'; // Extra-small size for the circle
		circleTranslate = 'translate-x-4'; // Movement of the circle in 'extra-small' size
	}

	return (
		<div
			className={`relative inline-block cursor-pointer rounded-full border transition duration-300 ${sizeClass} ${
				currentState ? 'border-primary bg-primary' : 'border-chart-3 bg-accent'
			}`}
			onClick={handleClick}
		>
			{/* Circle element */}
			<div
				className={`absolute top-1/2 left-0 -translate-y-1/2 rounded-full transition-transform duration-300 ${circleClass} ${currentState ? circleTranslate : ''} ${currentState ? 'bg-background' : 'bg-chart-3'}`}
			></div>
		</div>
	);
};

export default ToggleButton;
