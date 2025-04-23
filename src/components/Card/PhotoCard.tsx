import { Card, CardContent, CardFooter, Dialog, DialogContent, DialogTrigger } from '@/components';

type PhotoCardProps = {
	photoSRC: string;
	label: string;
	photoMessage: string;
};

const PhotoCard = ({ photoSRC, label, photoMessage }: PhotoCardProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild className="cursor-pointer">
				<Card className="border-3 border-primary">
					<CardContent>
						<img className="size-44 h-52 object-cover" src={photoSRC} alt="" />
					</CardContent>
					<CardFooter>{label}</CardFooter>
				</Card>
			</DialogTrigger>

			<DialogContent>{photoMessage}</DialogContent>
		</Dialog>
	);
};
export default PhotoCard;
