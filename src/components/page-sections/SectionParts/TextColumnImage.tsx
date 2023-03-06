import { useDeviceSize, smallSizes, largeSizes } from '@/hooks';
import Image from 'next/image';

type ImageType = {
    url: string;
    width: number;
    height: number;
};

interface TextColumnImageInterface {
    image: ImageType | null;
    desktopImage: ImageType | null;
    altText?: string;
}

/**
 * Image part of text column for the side image component
 *
 * @param {TextColumnImageInterface} { image, desktopImage, altText }
 * @returns {*}  {JSX.Element}
 */
const TextColumnImage = ({ image, desktopImage, altText }: TextColumnImageInterface): JSX.Element => {
    const deviceSize = useDeviceSize();

    return (
        <div>
            {smallSizes.includes(deviceSize) && image && (
                <Image
                    src={image.url}
                    width={image.width}
                    height={image.height}
                    quality={70}
                    className="md:hidden"
                    alt={altText || ''}
                />
            )}

            {largeSizes.includes(deviceSize) && desktopImage && (
                <Image
                    src={desktopImage.url}
                    width={desktopImage.width}
                    height={desktopImage.height}
                    quality={70}
                    className={`hidden md:block`}
                    alt={altText || ''}
                />
            )}
        </div>
    );
};

export default TextColumnImage;
