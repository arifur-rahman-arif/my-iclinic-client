import { ImageType } from '@/types';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import Image from 'next/image';
import styles from './styles/CompareSlider.module.scss';

interface CompareSliderInterface {
    image1: ImageType;
    image2: ImageType;
}

/**
 * Image comparison slider for 2 images
 *
 * @returns {*}  {JSX.Element}
 */
const CompareSlider = ({ image1, image2 }: CompareSliderInterface): JSX.Element => {
    return (
        <div
            className={`${styles.styles} compare-slider relative grid h-full place-items-center overflow-hidden rounded-primary`}
        >
            <ImgComparisonSlider hover>
                <Image
                    slot="first"
                    alt=""
                    style={{ height: '100%' }}
                    width={image1.width}
                    height={image1.height}
                    src={image1.src}
                />
                <Image
                    slot="second"
                    alt=""
                    style={{ height: '100%' }}
                    width={image2.width}
                    height={image2.height}
                    src={image2.src}
                />
            </ImgComparisonSlider>
        </div>
    );
};

export default CompareSlider;
