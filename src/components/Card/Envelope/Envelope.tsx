// libraries
import React, { useState } from 'react';

import { useViewport } from '@src/libs';

// components
import { Button } from '@src/components';

import style from './Envelope.module.css';

type EnvelopeProps = {
	addressTo?: string;
	message: string;
	fromWho?: string;
};

const Envelope: React.FC<EnvelopeProps> = ({ addressTo, message, fromWho }) => {
	const { viewportW } = useViewport();
	const [startAnimation, setStartAnimation] = useState(false);

	return (
		<>
			<div className={viewportW > 768 ? style.envlopeWrapper : style.miniEnvlopeWrapper}>
				<div
					className={`${startAnimation ? style.open : style.close} ${viewportW > 768 ? style.envelope : style.miniEnvelope}`}
				>
					<div className={`${style.front} ${viewportW > 768 ? style.flap : style.miniFlap}`}></div>
					<div className={`${style.front} ${viewportW > 768 ? style.pocket : style.miniPocket}`}></div>

					<div className={viewportW > 768 ? style.letter : style.miniLetter}>
						{addressTo && (
							<div
								className={`${startAnimation ? style.open : style.close} ${viewportW > 768 ? style.words : style.miniWords} ${style.line1}`}
							>
								<p>{addressTo}</p>
							</div>
						)}
						<div
							className={`${startAnimation ? style.open : style.close} ${viewportW > 768 ? style.words : style.miniWords} ${style.line2}`}
						>
							<p>{message}</p>
						</div>
						{fromWho && (
							<div
								className={`${startAnimation ? style.open : style.close} ${viewportW > 768 ? style.words : style.miniWords} ${style.line3}`}
							>
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
