import { PhotoCard } from '@/components';

import { kathPhotos } from '@src/libs/utils';

const gallery = () => {
	return (
		<div className="flex justify-center">
			<PhotoCard photoSRC={kathPhotos[0]} label="So Beautiful" photoMessage="hi" />
		</div>
	);
};
export default gallery;
