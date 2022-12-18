import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { HorizontalSliderInterface } from '@/components/slider/horizontal-slider/HorizontalSlider';
import Slide from '@/components/slider/horizontal-slider/Slide';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { sliderList } from './sliderList';
import RequestCallbackBgPng from '/public/images/section-images/request-callback-bg.png';

const RequestCallback = dynamic(() => import('./RequestCallback'));
const HorizontalSlider = dynamic(() => import('@/components/slider/horizontal-slider/HorizontalSlider'));

/**
 * Callback section of the page
 *
 * @returns {*}  {JSX.Element}
 */
const CallbackSection = (): JSX.Element => {
    // Const router = useRouter();
    // const dispatch = useDispatch();
    // const { data, isError, error, isSuccess } = useGetReviewsQuery(`?page-url=${router.pathname}`);

    const [sliders] = useState<HorizontalSliderInterface[]>(sliderList);

    // UseEffect(() => {
    //     try {
    //         if (isError) {
    //             // SetSliders(sliderList);
    //             // Dispatch(
    //             //     handleAlert({
    //             //         showAlert: true,
    //             //         alertType: 'error',
    //             //         alertMessage: 'Failed to load reviews'
    //             //     })
    //             // );

    //             return;
    //         }

    //         if (isSuccess && data?.data.data.length) {
    //             setSliders(data.data.data);
    //         }
    //     } catch (err: any) {
    //         dispatch(
    //             handleAlert({
    //                 showAlert: true,
    //                 alertType: 'error',
    //                 alertMessage: err.message
    //             })
    //         );
    //     }
    // }, [data, error]);

    return (
        <>
            <Section>
                <Container
                    className={`relative grid grid-cols-1 gap-12 py-12 px-0 md:grid-cols-[auto_1fr] md:px-8 md:py-0 lg:grid-cols-[1fr_auto] ${
                        sliders.length ? 'xl:grid-cols-[auto_1fr_auto]' : 'xl:grid-cols-[auto_1fr_1fr]'
                    }`}
                >
                    <Image
                        src={RequestCallbackBgPng}
                        alt=""
                        className="absolute left-0 top-2/4 -z-[1] hidden aspect-auto h-[calc(100%_+_13rem)] max-h-[63rem] w-auto -translate-y-2/4 md:block"
                        quality={10}
                        priority
                    />
                    <h3 className="leading-16 hidden self-center font-latoBold text-[4rem] normal-case md:col-span-2 md:block xl:col-span-1 xl:ml-[4.5rem] xl:max-w-[21.4rem]">
                        Request a call back
                    </h3>
                    <div className="bg-brandLight py-12 px-8 md:bg-transparent md:px-0 md:py-0">
                        <h3 className="leading-16 mb-12 text-left font-latoBold normal-case sm:text-center md:hidden md:text-[4rem]">
                            Request a call back
                        </h3>
                        <RequestCallback />
                    </div>

                    {sliders.length ? (
                        <HorizontalSlider>
                            {sliders.map((slider, index) => (
                                <SwiperSlide className="swiper-slide pb-20 md:pb-0" key={index}>
                                    <Slide
                                        name={slider.name}
                                        title={slider.title}
                                        description={slider.description}
                                        reviewLink={slider.reviewLink}
                                        star={slider.star}
                                    />
                                </SwiperSlide>
                            ))}
                        </HorizontalSlider>
                    ) : (
                        <></>
                    )}
                </Container>
            </Section>
        </>
    );
};

export default CallbackSection;
