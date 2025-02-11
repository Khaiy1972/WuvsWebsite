import React from 'react';

import { Button } from '@src/components';

type KeyPadProps = {
	onNumberClick: (value: number) => void; // Changed from output: number to a callback
	onClearClick: () => void;
	onBackspaceClick: () => void;
};

const KeyPad: React.FC<KeyPadProps> = ({ onNumberClick, onClearClick, onBackspaceClick }) => {
	return (
		<div className="grid grid-cols-3 gap-2">
			{Array(9)
				.fill(0)
				.map((_, i) => (
					<Button value={i + 1} onClick={() => onNumberClick(i + 1)}>
						{i + 1}
					</Button>
				))}

			<Button onClick={onClearClick}>Clear</Button>
			<Button value="0" onClick={() => onNumberClick(0)}>
				0
			</Button>
			<Button onClick={onBackspaceClick}>Delete</Button>
		</div>
	);
};

export default KeyPad;
