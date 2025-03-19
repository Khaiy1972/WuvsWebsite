// libraries
import { FormEvent, useState } from 'react';
import { toast, Toaster } from 'sonner';
import { useNavigate } from 'react-router-dom';

// components
import { KeyPad, Button } from '@src/components';

// images
import coverPhoto from '@src/assets/photos/KeyCodeCoverPhoto.jpeg';

const KeyCode: React.FC = () => {
	const navigate = useNavigate();
	const [keyCode, setKeyCode] = useState('');
	const [componentStatus, setComponentStatus] = useState({ isError: false });

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (keyCode === '05022019') {
			toast.success('Correct KeyCode');
			sessionStorage.setItem('love', keyCode);
			navigate('/');
			setKeyCode('');
		} else {
			toast.error('Incorrect KeyCode');
			setComponentStatus((cs) => ({ ...cs, isError: true }));
		}
	};

	const handleKeyCode = (key: number) => {
		setKeyCode((kc) => (kc.length < 8 ? kc + key : kc));
	};

	const handleDelete = () => {
		setKeyCode((kc) => kc.slice(0, -1));
	};

	return (
		<div className="bg-background flex h-screen w-screen items-center justify-center">
			<Toaster richColors position="top-center" />
			<div className="bg-card flex h-5/6 w-[95%] flex-col items-center justify-center gap-4 rounded-2xl pt-4 shadow-lg md:w-auto md:flex-row md:gap-10 md:p-0 md:px-10">
				<img
					src={coverPhoto}
					alt="Cover Photo"
					className="aspect-square w-3/6 rounded-2xl object-cover object-[55%_50%] md:h-5/6"
				/>

				<form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit}>
					<h2 className="text-center font-bold text-white">Enter Our Code</h2>
					{componentStatus.isError && <p className="text-center">Hint: Our Anniversarry</p>}
					<input
						value={keyCode}
						type="password"
						onChange={(e) => setKeyCode(e.target.value)}
						maxLength={8}
						className="border-primary bg-background w-full rounded-lg p-2 text-center text-3xl tracking-[0.5rem] focus:ring-2 focus:ring-(--color-accent) focus:outline-none"
					/>
					<KeyPad
						onNumberClick={handleKeyCode}
						onClearClick={() => setKeyCode('')}
						onBackspaceClick={() => handleDelete()}
					/>
					<Button type="submit" className="text-background h-auto text-2xl font-semibold">
						Enter
					</Button>
				</form>
			</div>
		</div>
	);
};

export default KeyCode;
