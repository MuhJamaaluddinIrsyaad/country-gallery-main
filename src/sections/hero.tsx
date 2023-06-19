import { generateRandomImg } from '@/lib/generateRandomImg';
import Image from 'next/image';

export const Hero = () => {
	return (
		<section>
			<Image
				src={generateRandomImg('resort')}
				alt="hero-image"
				width={1440}
				height={900}
				style={{
					width: '100%',
					height: '100vh',
					objectFit: 'cover',
				}}
			/>
		</section>
	);
};
