import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCards } from 'swiper';
import styles from '../../styles/Swiper.module.scss';

import { LinkText } from '@/components/Link';
import { useOnScreen } from '@/hooks';
import { trimText } from '@/utils/miscellaneous';
import Dialog from '@mui/material/Dialog';
import Image from 'next/image';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { Autoplay, Navigation, Pagination } from 'swiper';

export interface NormalSlideInterface {
    description: string;
    name: string;
    title?: string;
    swiperRef?: any;
}

interface NormalSlidePropInterface {
    sliderList: NormalSlideInterface[];
}

/**
 * Slide content
 *
 * @param {NormalSlideInterface} {name, title, description, company}
 * @returns {*}  {JSX.Element}
 */
const SlideContent = ({ name, title, description, swiperRef }: NormalSlideInterface): JSX.Element => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    /**
     * Toggle the modal state for opening & closing slide modal
     *
     * @param {MouseEvent} e
     */
    const toggleModal = (e: MouseEvent) => {
        e.preventDefault();
        setModalOpen(true);
        swiperRef.current.swiper.autoplay.stop();
    };

    return (
        <>
            <div
                className="max-w-[45rem] cursor-pointer p-12"
                onClick={() => {
                    setModalOpen(true);
                    swiperRef.current.swiper.autoplay.stop();
                }}
            >
                <div className="grid h-full w-full grid-cols-2 gap-y-[4.5rem] gap-x-4 rounded-primary bg-white p-12 shadow-shadow1 md:py-[3.7rem] md:px-[4.4rem]">
                    <p className="col-span-2 col-start-1 px-3">
                        {trimText(description, 205) || ''}{' '}
                        <LinkText
                            href="#"
                            indicatorColor="bg-blue"
                            className="font-mulishBold !text-[1.4rem] font-extrabold text-blue"
                            onClick={toggleModal}
                        >
                            Read More
                        </LinkText>
                    </p>
                    <div className="flex flex-col items-start gap-1">
                        <h4 className="font-fontBold text-[1.8rem] normal-case">{name}</h4>
                        {title ? <span>{title}</span> : null}
                    </div>
                    <div className="flex items-center justify-start">
                        {[...Array(5)].map((_, index) => (
                            <Image
                                src="/images/icons/icon-star-yellow.svg"
                                alt=""
                                width={22}
                                height={22}
                                className="h-[2.2rem] w-[2.2rem]"
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Dialog
                onClose={() => {
                    setModalOpen(false);
                    swiperRef.current.swiper.autoplay.start();
                }}
                open={modalOpen}
                sx={{
                    '.MuiPaper-root': {
                        borderRadius: 'var(--border-radius)'
                    }
                }}
            >
                <div className="relative h-full w-full p-12">
                    <IoIosCloseCircleOutline
                        className="absolute top-0 right-0 h-12 w-12 translate-y-2 -translate-x-2 cursor-pointer fill-secondary"
                        onClick={() => {
                            setModalOpen(false);
                            swiperRef.current.swiper.autoplay.start();
                        }}
                    />
                    <p>{description}</p>
                </div>
            </Dialog>
        </>
    );
};

/**
 * Normal slider
 *
 * @param {NormalSlidePropInterface} { sliderList }
 * @returns {*}
 */
const NormalSlide = ({ sliderList }: NormalSlidePropInterface): JSX.Element => {
    const swiperRef = useRef<any>(null);
    const { onEnter } = useOnScreen({ ref: swiperRef, repeat: true });
    const { onLeave } = useOnScreen({ ref: swiperRef, triggerPosition: '40%', repeat: true });

    useEffect(() => {
        // When the slider enters start the slider
        // When slider is scrolled to 30% of viewport stop the slider autoplay
        // If slider is again in the viewport start the slider again
        if (onEnter) {
            if (onLeave) {
                swiperRef.current?.swiper.autoplay.stop();
            } else {
                swiperRef.current?.swiper.autoplay.start();
            }
        } else {
            swiperRef.current?.swiper.autoplay.stop();
            if (onLeave) swiperRef.current?.swiper.slideNext();
        }
    }, [onEnter, onLeave]);

    return (
        <div>
            <Swiper
                effect="cards"
                navigation={true}
                centeredSlides={true}
                autoHeight={false}
                pagination={{
                    clickable: true,
                    type: 'fraction'
                }}
                modules={[EffectCards, Navigation, Pagination, Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                className={`${styles.style}`}
                ref={swiperRef}
            >
                {sliderList.map((slider, index) => (
                    <SwiperSlide className="grid place-items-center pb-20" key={index}>
                        <SlideContent
                            key={index}
                            name={slider.name}
                            title={slider.title}
                            description={slider.description}
                            swiperRef={swiperRef}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default NormalSlide;
