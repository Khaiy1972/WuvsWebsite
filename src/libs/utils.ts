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
