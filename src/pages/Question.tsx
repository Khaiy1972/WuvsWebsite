// libraries
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// components
import { Button } from '@src/components';

// images
import dudu from '@src/assets/images/duduKisses.gif';

type QuestionProps = {
	setIsSaidYes: (isSaidYes: boolean) => void;
};

const sad = [
	'No',
	'Whyyyyyy?',
	"Please don't leave me",
	"I'm sorry",
	"I'll be better",
	"I'll change",
	"I'll do anything",
	'Please say yes',
];

const Question: React.FC<QuestionProps> = ({ setIsSaidYes }) => {
	const navigate = useNavigate();
	const [noSize, setNoSize] = useState(3);
	const [sadIndex, setSadIndex] = useState(0);

	const handleRandomSad = () => {
		const randomIndex = Math.floor(Math.random() * sad.length);
		setSadIndex((si) => (si === randomIndex ? (si + 1) % sad.length : randomIndex));
	};

	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center">
			<div className="bg-card shadow-card-foreground border-border inset-shadow-md flex w-auto flex-col items-center space-y-4 rounded-2xl border-2 p-8">
				<img src={dudu} alt="dudu" className="" />

				<h2 className="text-center">Will you be my Valentine??</h2>
				<div className="flex items-center gap-4">
					<Button
						onClick={() => {
							setNoSize((ns) => ns + 1);
							handleRandomSad();
						}}
					>
						{sad[sadIndex]}
					</Button>
					<Button
						style={{ height: `${noSize}rem`, width: `${noSize * 2}rem` }}
						onClick={() => {
							setIsSaidYes(true);
							navigate('/');
						}}
					>
						Yes
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Question;
