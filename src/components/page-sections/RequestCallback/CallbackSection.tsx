import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { HorizontalSliderInterface } from '@/components/Slider/HorizontalSlider/HorizontalSlider';
import Slide from '@/components/Slider/HorizontalSlider/Slide';
import { useGetReviewsQuery } from '@/services/reviews';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { sliderList } from './sliderList';

const RequestCallback = dynamic(() => import('./RequestCallback'));
const HorizontalSlider = dynamic(() => import('@/components/Slider/HorizontalSlider/HorizontalSlider'));

/**
 * Callback section of the page
 *
 * @returns {*}  {JSX.Element}
 */
const CallbackSection = (): JSX.Element => {
    const router = useRouter();
    const pageSlug = router.pathname == '/' ? 'home' : router.pathname.replace('/', '');

    const { data, isError, error, isSuccess } = useGetReviewsQuery(`?page-url=${pageSlug}`);

    const [sliders, setSliders] = useState<HorizontalSliderInterface[]>(sliderList);

    useEffect(() => {
        try {
            if (isError) {
                setSliders(sliderList);
                // dispatch(
                //     handleAlert({
                //         showAlert: true,
                //         alertType: 'error',
                //         alertMessage: 'Failed to load reviews'
                //     })
                // );
                return;
            }

            if (isSuccess && data?.data.data.length) {
                setSliders(data.data.data);
            }
        } catch (err: any) {
            setSliders(sliderList);
            // dispatch(
            //     handleAlert({
            //         showAlert: true,
            //         alertType: 'error',
            //         alertMessage: err.message
            //     })
            // );
        }
    }, [data, error]);

    return (
        <>
            <Section className="relative">
                {/* Extra overlay to cover the backgorund */}
                <div className="absolute top-0 left-0 z-[-1] hidden h-full w-2/4 bg-[#ECF4FB] md:block md:rounded-tr-primary md:rounded-br-primary"></div>

                <Container className="grid grid-cols-1 items-center gap-12 !px-0 md:grid-cols-2 xl:grid-cols-[auto_1fr]">
                    <div className="grid items-center gap-12 bg-[#ECF4FB] py-24 px-8 md:justify-self-end md:rounded-tr-primary md:rounded-br-primary xl:grid-cols-[auto_1fr] xl:pr-20">
                        <span className="md:leaading-[3.6rem] text-center font-latoBold text-[2.4rem] leading-[3.2rem] text-heading md:text-[3rem]">
                            Speak to a specialist
                        </span>
                        <RequestCallback />
                    </div>

                    <div className="md:justify-self-start">
                        {sliders?.length ? (
                            <HorizontalSlider>
                                {sliders.map((slider, index) => (
                                    <SwiperSlide className="swiper-slide pb-20 md:pb-0" key={index}>
                                        <Slide {...slider} />
                                    </SwiperSlide>
                                ))}
                            </HorizontalSlider>
                        ) : (
                            <ComponentLoader />
                        )}
                    </div>
                </Container>
            </Section>
        </>
    );
};

export default CallbackSection;
