// components
import { PhotoMessageCard, Envelope } from '@src/components';

// images
import { kathPhotos, nickoPhotos } from '@src/libs/utils';
import background from '@src/assets/images/background.png';
import { ChevronDown, Heart } from 'lucide-react';

const Home = () => {
	return (
		<div className="relative">
			<section className="relative flex h-screen w-screen items-center justify-center bg-(--color-background)/60 text-center text-6xl text-(--color-text)">
				<div className="w-[95vw] rounded-2xl bg-card p-8 shadow-lg md:w-auto">
					<h1 className="flex items-center gap-6 text-6xl font-bold text-primary">
						Happy Anniversarry Mahal! <Heart size={60} />
					</h1>
				</div>
				<img src={background} alt="background" className="fixed top-0 left-0 -z-10 h-screen w-screen object-cover" />
				<div className="absolute bottom-14 flex flex-col items-center gap-4">
					<p className="text-2xl font-semibold text-primary">Scroll Down</p>
					<ChevronDown size={40} className="animate-bounce text-primary" />
				</div>
			</section>

			<section id="message" className="flex w-screen flex-col items-center gap-10 bg-background p-4 md:gap-4">
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

			<section id="gallery" className="flex flex-col items-center gap-10 bg-background p-4 pt-20 md:gap-4">
				<PhotoMessageCard
					photoSRC={nickoPhotos[0]}
					label={'My thoughts'}
					photoMessage={`My thoughts about our relationship is that it's not perfect but it's real. Its not like any other relationship that we see in the internet or the people around us, yes its not perfect but we made real, with all the experience that we been through, the memories that we share, all the efforts that we made, all the sacrifices, and all the love that we put into our ralationship is real. No one can bring us apart, because we are strong my love. I never ever doubted our love for each other, because the moment you said yes to me, it clicked me, like a spark that goes throughout my body signifying that we are now connected to each other. I love you my baby, from then, now, and forever.`}
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
