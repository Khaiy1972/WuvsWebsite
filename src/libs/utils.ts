import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type PhotoModule = {
	default: string;
};

const valPhotosNicko: Record<string, PhotoModule> = import.meta.glob('../assets/photos/*_Nicko_Photo.{png,svg,jpg}', {
	eager: true,
});
const valPhotoKath: Record<string, PhotoModule> = import.meta.glob('../assets/photos/*_Kath_Photo.{png,svg,jpg}', {
	eager: true,
});

export const kathPhotos = Object.values(valPhotoKath).map((module) => module.default);
export const nickoPhotos = Object.values(valPhotosNicko).map((module) => module.default);

export const formatDate = (date: string, returnDate: boolean, returnMonth: boolean, returnYear: boolean) => {
	const [day, month, year] = date.split('-');
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	if (returnDate && returnMonth && returnYear) {
		return `${monthNames[parseInt(month) - 1]} ${day}, ${year}`;
	}
	if (returnDate && returnMonth) {
		return `${monthNames[parseInt(month) - 1]} ${day}`;
	}
	if (returnDate && returnYear) {
		return `${day}, ${year}`;
	}
	if (returnMonth && returnYear) {
		return `${monthNames[parseInt(month) - 1]} ${year}`;
	}
	if (returnDate) {
		return `${day}`;
	}
	if (returnMonth) {
		return `${monthNames[parseInt(month) - 1]}`;
	}
	if (returnYear) {
		return `${year}`;
	}
	return `${monthNames[parseInt(month) - 1]} ${day}, ${year}`;
};
