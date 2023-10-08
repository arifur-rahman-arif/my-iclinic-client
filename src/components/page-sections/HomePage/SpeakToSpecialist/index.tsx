import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import ReviewSlider from '@/components/Slider/ReviewSlider';
import RequestCallback from '@/page-sections/RequestCallback/RequestCallback';

/**
 * SpeakToSpecialist is a component that displays a section inviting users to speak to a specialist. It also fetches and displays reviews or testimonials.
 *
 * @returns {JSX.Element} The rendered SpeakToSpecialist component.
 */
const SpeakToSpecialist = (): JSX.Element => {
    const sliders = [
        {
            image: '/images/avaters/woman-avater.svg',
            name: 'Janet Clarke',
            title: 'My mother and father both recently had cataract',
            description: `My mother and father both recently had cataract procedures at the clinic and I must say the results were amazing and the treatment and care they received was exceptional. I would not hesitate in recommending this clinic. They were both treated by Ms Bola Odufuwa. Thank you so much for making their experience comfortable and the results being very worthwhile.`
        },
        {
            image: '/images/avaters/woman-avater.svg',
            name: 'Nikki Salter',
            title: 'Absolutely delighted...',
            description: `Absolutely delighted... After having extreme myopia and astigmatism since childhood, and years of contact lens faff, my husband Peter had lens replacement to correct his vision (eliminating early cataracts at the same time). Now he can read to the bottom of the eye chart. If you're considering eye surgery, we would highly recommend this welcoming and professional clinic. All the staff impressed us. Particular thanks to John Bolger who gave us a lot of his time and took immense care to ensure the best possible result. Thanks so much to everyone at My-iClinic.`
        },
        {
            image: '/images/avaters/man-avater.svg',
            name: 'Christopher Owen',
            title: 'My treatment at the MyiClinic was excellent.',
            description: `My treatment at the MyiClinic was excellent. I had cataracts removed in both eyes and Toric lenses implanted so that now I do not have to wear long distance glasses. As an actor I only wish I had been able to have the Toric lenses when I was young. At all times I felt completely confident with Ms Bola Odufuwa and her team.`
        }
    ];

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
