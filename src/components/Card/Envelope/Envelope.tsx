// libraries
import React, { useState } from 'react';

// components
import { Button } from '@src/components';

import style from './Envelope.module.css';

type EnvelopeProps = {
	addressTo?: string;
	message: string;
	fromWho?: string;
};

const Envelope: React.FC<EnvelopeProps> = ({ addressTo, message, fromWho }) => {
	const [startAnimation, setStartAnimation] = useState(false);

	return (
		<>
			<div className={style.envlopeWrapper}>
				<div className={`${startAnimation ? style.open : style.close} ${style.envelope}`}>
					<div className={`${style.front} ${style.flap}`}></div>
					<div className={`${style.front} ${style.pocket}`}></div>

					<div className={style.letter}>
						{addressTo && (
							<div className={`${startAnimation ? style.open : style.close} ${style.words} ${style.line1}`}>
								<p>{addressTo}</p>
							</div>
						)}
						<div className={`${startAnimation ? style.open : style.close} ${style.words} ${style.line2}`}>
							<p>{message}</p>
						</div>
						{fromWho && (
							<div className={`${startAnimation ? style.open : style.close} ${style.words} ${style.line3}`}>
								<p>{fromWho}</p>
							</div>
						)}
					</div>
				</div>
			</div>

			<div className="flex gap-10">
				<Button size={'lg'} className="text-background text-xl font-bold" onClick={() => setStartAnimation(true)}>
					Open
				</Button>
				<Button size={'lg'} className="text-background text-xl font-bold" onClick={() => setStartAnimation(false)}>
					Reset
				</Button>
			</div>
		</>
	);
};

export default Envelope;
