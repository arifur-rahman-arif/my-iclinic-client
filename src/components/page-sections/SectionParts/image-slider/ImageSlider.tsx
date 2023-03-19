import LazyComponent from '@/components/LazyComponent';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { ImageType2 } from '@/types';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import dynamic from 'next/dynamic';

const ImageSlider = dynamic(() => import('@/components/Slider/ImageSlider/ImageSlider'));

export interface SliderInterface {
    image: ImageType2;
    largeImage: ImageType2;
}

interface ImageSliderInterface {
    sliderList: SliderInterface[];
}

/**
 * Section image slider
 *
 * @param {SliderInterface[]} sliderList
 * @returns {JSX.Element}
 * @constructor
 */
const ImageSliderSectionPart = ({ sliderList }: ImageSliderInterface): JSX.Element => {
    const deviceSize = useDeviceSize();

    return (
        <div className="row-start-1 h-full md:row-auto md:justify-self-auto">
            <LazyComponent>
                <ImageSlider>
                    {sliderList.map((slider, index) => (
                        <SwiperSlide className="h-full w-full" key={index}>
                            {smallSizes.includes(deviceSize) && (
                                <Image
                                    src={slider.image.url}
                                    width={slider.image.width}
                                    height={slider.image.height}
                                    quality={70}
                                    alt=""
                                />
                            )}

                            {largeSizes.includes(deviceSize) && (
                                <Image
                                    src={slider.largeImage.url}
                                    width={slider.largeImage.width}
                                    height={slider.largeImage.height}
                                    quality={70}
                                    className="hidden h-full min-h-[48.5rem] object-cover md:block md:scale-90 2xl:scale-100"
                                    alt=""
                                />
                            )}
                        </SwiperSlide>
                    ))}
                </ImageSlider>
            </LazyComponent>
        </div>
    );
};

export default ImageSliderSectionPart;
