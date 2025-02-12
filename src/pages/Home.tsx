// libraries
import React from 'react';
import { Favorite } from '@mui/icons-material';

// components
import { PhotoMessageCard, Envelope } from '@src/components';

// images
import { kathPhotos, nickoPhotos } from '@src/libs/utils';
import background from '@src/assets/images/background.png';

const Home: React.FC = () => {
	return (
		<>
			<section className="relative flex h-screen w-screen items-center justify-center bg-(--color-background)/60 text-center text-6xl text-(--color-text)">
				<div className="bg-card rounded-2xl p-8 shadow-lg">
					<h1 className="text-primary text-6xl font-bold">
						Happy Valentine's Day! <Favorite sx={{ fontSize: 70 }} />
					</h1>
				</div>
				<img src={background} alt="background" className="fixed top-0 left-0 -z-10 h-screen w-screen object-cover" />
			</section>

			<section className="flex w-screen flex-col items-center gap-10 bg-(--color-background) p-4 md:gap-4 md:bg-(--color-background) md:p-0">
				{' '}
				<PhotoMessageCard
					photoSRC={nickoPhotos[0]}
					label={'My thoughts'}
					photoMessage={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo provident dicta
        numquam est, aliquid, hic ad libero, omnis quo nesciunt obcaecati autem neque
        delectus sequi molestiae totam placeat. Consectetur, suscipit.`}
				/>
				<PhotoMessageCard
					photoSRC={kathPhotos[0]}
					label={'To My Love'}
					photoMessage={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo provident dicta
        numquam est, aliquid, hic ad libero, omnis quo nesciunt obcaecati autem neque
        delectus sequi molestiae totam placeat. Consectetur, suscipit.`}
				/>
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
		</>
	);
};

export default Home;
