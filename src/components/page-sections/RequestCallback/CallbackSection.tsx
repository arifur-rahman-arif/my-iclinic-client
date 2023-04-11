import RequestCallbackBgPng from '/public/images/section-images/request-callback-bg.png';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { HorizontalSliderInterface } from '@/components/Slider/HorizontalSlider/HorizontalSlider';
import Slide from '@/components/Slider/HorizontalSlider/Slide';
import { handleAlert } from '@/features/alert/alertSlice';
import { useGetReviewsQuery } from '@/services/reviews';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
    const dispatch = useDispatch();
    const { data, isError, error, isSuccess } = useGetReviewsQuery(`?page-url=${router.pathname.replace('/', '')}`);

    const [sliders, setSliders] = useState<HorizontalSliderInterface[]>(sliderList);

    useEffect(() => {
        try {
            if (isError) {
                setSliders(sliderList);
                dispatch(
                    handleAlert({
                        showAlert: true,
                        alertType: 'error',
                        alertMessage: 'Failed to load reviews'
                    })
                );
                return;
            }

            if (isSuccess && data?.data.data.length) {
                setSliders(data.data.data);
            }
        } catch (err: any) {
            setSliders(sliderList);
            dispatch(
                handleAlert({
                    showAlert: true,
                    alertType: 'error',
                    alertMessage: err.message
                })
            );
        }
    }, [data, error]);

    return (
        <>
            <Section className="relative mt-12 overflow-hidden before:left-0 before:-z-[1] before:h-[calc(100%_+_13rem)] before:w-[30%] before:-translate-y-[6.5rem] before:bg-[#ccf6fe] md:overflow-visible md:before:top-2/4 before:md:max-h-[63rem] md:before:-translate-y-2/4 xl:before:absolute xl:before:content-['']">
                <Container
                    className={`relative grid grid-cols-1 gap-12 !px-0  md:grid-cols-[auto_1fr] md:px-8 md:py-0 lg:grid-cols-[1fr_auto] ${
                        sliders?.length ? 'xl:grid-cols-[auto_1fr_minmax(auto,_1fr)]' : 'xl:grid-cols-[auto_1fr_1fr]'
                    }`}
                >
                    <Image
                        src={RequestCallbackBgPng}
                        alt=""
                        className="absolute left-0 top-2/4 -z-[1] hidden aspect-auto  h-[calc(100%_+_13rem)] max-h-[63rem] w-auto -translate-y-2/4 md:block md:max-w-[45rem] lg:max-w-full"
                        quality={70}
                        priority
                    />
                    <h2 className="leading-16 hidden self-center font-latoBold text-[4rem] normal-case md:col-span-2 md:block md:pl-8 xl:col-span-1 xl:ml-[4.5rem] xl:max-w-[21.4rem]">
                        Request a call back
                    </h2>
                    <div className="self-center bg-brandLight py-12 px-8 md:bg-transparent md:py-0 md:pr-0 md:pl-8 xl:pl-0">
                        <h2 className="leading-16 mb-12 text-left text-center font-latoBold normal-case sm:text-center md:hidden md:text-[4rem]">
                            Request a call back
                        </h2>
                        <RequestCallback />
                    </div>

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
                </Container>
            </Section>
        </>
    );
};

export default CallbackSection;
