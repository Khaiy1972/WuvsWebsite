// libraries
import React from 'react';
import { Favorite, ExpandMore } from '@mui/icons-material';

// components
import { PhotoMessageCard, Envelope } from '@src/components';

// images
import { kathPhotos, nickoPhotos } from '@src/libs/utils';
import background from '@src/assets/images/background.png';

const Home: React.FC = () => {
	return (
		<div className="relative">
			<section className="relative flex h-screen w-screen items-center justify-center bg-(--color-background)/60 text-center text-6xl text-(--color-text)">
				<div className="bg-card w-[95vw] rounded-2xl p-8 shadow-lg md:w-auto">
					<h1 className="text-primary text-6xl font-bold">
						Happy Valentine's Day! <Favorite sx={{ fontSize: 70 }} />
					</h1>
				</div>
				<img src={background} alt="background" className="fixed top-0 left-0 -z-10 h-screen w-screen object-cover" />
				<div className="absolute bottom-14">
					<p className="text-primary text-xl font-semibold">Scroll Down</p>
					<ExpandMore sx={{ fontSize: 50 }} className="text-primary animate-bounce" />
				</div>
			</section>

			<section
				id="message"
				className="flex w-screen flex-col items-center gap-10 bg-(--color-background) p-4 md:gap-4 md:bg-(--color-background) md:p-0"
			>
				<Envelope
					addressTo="Dear Wuvs"
					message={`   Thank you my love for being my valentine's! I know valentine's day are one of the most
								important day for a girl with their partner to celebrate with. I'm so grateful to have you in my life
								and I'm so lucky to have you as my partner. I love you so much and I'm so thankful for everything about
								you, for supporting me, for caring me, and for loving me. Always remember my love that I'm here for you
								and I will do my very best to make you the happiest woman in the world.`}
					fromWho="-Mr. Wuvs"
				/>
			</section>

			<section
				id="gallery"
				className="flex flex-col items-center gap-10 bg-(--color-background) p-4 pt-20 md:gap-4 md:bg-(--color-background) md:p-0"
			>
				<PhotoMessageCard
					photoSRC={nickoPhotos[0]}
					label={'My thoughts'}
					photoMessage={`My love, thank you for always cheering me up when I'm down, for always making me laugh when I'm sad, for always being there for me when I need you, for always supporting me in everything I do, and for always loving me unconditionally. I'm so lucky to have you in my life, I love you so much my love.`}
				/>
				<PhotoMessageCard
					photoSRC={kathPhotos[0]}
					label={'To My Love'}
					photoMessage={`To my beautiful loving wife, always remember that I'm here for you no matter what, I will always be here to support you, to care for you, to love you, and to make you happy. I love you so much my love, you are my everything, my life, my world, and my everything. Kahit na mahirap yung pinagdadaanan natin ngayon, pagsubok lang yan para mapatibay yung relationship natin because I know that we are meant for each other. Happy Valentine's Day my babyyyyyy!!!.`}
				/>
			</section>
		</div>
	);
};

export default Home;
