import { Card, CardContent, Dialog, DialogContent, DialogTrigger } from '@/components';
import { formatDate } from '@/libs/utils';
import { CloudSun } from 'lucide-react';

type PhotoCardProps = {
	photoSRC?: string;
	label: string;
	photoMessage: string;
	date: string;
};

const PhotoCard = ({ date, photoSRC, label, photoMessage }: PhotoCardProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild className="cursor-pointer">
				<Card className="min-h-64 w-[500px] rounded-md px-0 py-0 shadow-xl">
					<CardContent className="h-80 px-0 text-foreground">
						<div className="flex h-full items-center">
							<div className="flex w-48 flex-col items-center space-y-10">
								<div className="flex flex-col items-center leading-2.5">
									<h1 className="text-8xl font-bold tracking-tighter">{formatDate(date, true, false, false)}</h1>
									<h2 className="font-semibold">{formatDate(date, false, true, false)}</h2>
								</div>

								<CloudSun size={50} />
							</div>
							<div className={`h-full ${!photoSRC && 'flex flex-1 items-center justify-center'}`}>
								{photoSRC && <img className="size-44 h-full object-cover" src={photoSRC} alt="" />}
								{!photoSRC && <h2>{label}</h2>}
							</div>
						</div>
					</CardContent>
				</Card>
			</DialogTrigger>

			<DialogContent>{photoMessage}</DialogContent>
		</Dialog>
	);
};
export default PhotoCard;
