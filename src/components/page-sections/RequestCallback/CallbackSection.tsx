import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { HorizontalSliderInterface } from '@/components/Slider/HorizontalSlider/HorizontalSlider';
import Slide from '@/components/Slider/HorizontalSlider/Slide';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { sliderList } from './sliderList';
import useSWR from 'swr';

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

    const [sliders, setSliders] = useState<HorizontalSliderInterface[]>(sliderList);

    // eslint-disable-next-line require-jsdoc
    const fetcher = (url: any) => fetch(url).then((res) => res.json());

    const { data, error } = useSWR(`/api/reviews/?page-url=${pageSlug}`, fetcher);

    useEffect(() => {
        try {
            if (error) {
                setSliders(sliderList);
                return;
            }

            if (data?.length) {
                setSliders(data.data.data);
            }
        } catch (err: any) {
            setSliders(sliderList);
        }
    }, [data, error]);

    return (
        <>
            <Section className="relative" id="callback-form">
                <Container className="grid grid-cols-1 items-center gap-12 rounded-radius2 border border-solid border-[#EAECF0] py-12 md:grid-cols-2 xl:grid-cols-[auto_1fr] xl:gap-48 xl:px-16">
                    <div className="grid items-center gap-12">
                        <span className="md:leaading-[3.6rem] text-center font-latoBold text-[2.4rem] leading-[3.2rem] text-heading md:text-[3rem]">
                            Speak to a specialist
                        </span>
                        <RequestCallback />
                    </div>

                    <div className="no-search-index md:justify-self-start">
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
