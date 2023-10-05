import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { HorizontalSliderInterface } from '@/components/Slider/HorizontalSlider/HorizontalSlider';
import ReviewSlider from '@/components/Slider/ReviewSlider';
import RequestCallback from '@/page-sections/RequestCallback/RequestCallback';
import { sliderList } from '@/page-sections/RequestCallback/sliderList';
import { useGetReviewsQuery } from '@/services/reviews';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

/**
 * SpeakToSpecialist is a component that displays a section inviting users to speak to a specialist. It also fetches and displays reviews or testimonials.
 *
 * @returns {JSX.Element} The rendered SpeakToSpecialist component.
 */
const SpeakToSpecialist = (): JSX.Element => {
    const router = useRouter();
    const pageSlug = router.pathname == '/' ? 'home' : router.pathname.replace('/', '');

    const { data, isError, error, isSuccess } = useGetReviewsQuery(`?page-url=${pageSlug}`);

    const [sliders, setSliders] = useState<HorizontalSliderInterface[]>(sliderList);

    useEffect(() => {
        try {
            if (isError) {
                setSliders(sliderList);
                return;
            }

            if (isSuccess && data?.data.data.length) {
                setSliders(data.data.data);
            }
        } catch (err: any) {
            setSliders(sliderList);
        }
    }, [data, error]);

    return (
        <Section className="md:px-12">
            <Container className="grid gap-12 md:grid-cols-2 md:rounded-radius2 md:border md:border-solid md:border-[#EAECF0] md:p-12 md:shadow-sm xl:grid-cols-[50rem_1fr] xl:px-28">
                <ReviewSlider sliders={sliders} />

                <div className="grid gap-6 md:gap-12 md:justify-self-end">
                    <span className="md:leaading-[3.6rem] text-center font-latoBold text-[2.4rem] leading-[3.2rem] text-heading md:text-[3rem]">
                        Speak to a specialist
                    </span>
                    <RequestCallback />
                </div>
            </Container>
        </Section>
    );
};

export default SpeakToSpecialist;
