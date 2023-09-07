import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import { Section } from '@/components/Section';
import { SlideProps } from '@/components/Slider/PatientSlider';
import dynamic from 'next/dynamic';

const PatientSlider = dynamic(() => import('@/components/Slider/PatientSlider'), {
    loading: () => <ComponentLoader />
});

export const sliderList: SlideProps[] = [
    {
        name: 'Mrs Sandra Wilson',
        review: `The surgeon was excellent, the staff very pleasant and knowledgeable. The atmosphere in the clinic was serene and unhurried.As I said to Bola my surgeon she really is a miracle worker, making "the blind to see". I had bilateral cataract surgery, and afterwards I could see without aid which I had not been able to do for 65 years.`,
        link: 'https://www.trustpilot.com/users/557eeffe0000ff0001c61db0'
    },
    {
        name: 'Lawrence Tombe',
        review: `I have had cataract removed from both of my eyes at My-iClinic, with last surgery done yesterday 06-02-2023. On both occasions, the medical side of the surgery was carried out with level of professionalism in a state of the art environment. The clinic cleaniless is outstanding.`,
        link: 'https://www.trustpilot.com/reviews/63e22421745e4800219d26aa'
    },
    {
        name: 'Doug Ryan',
        review: `Brilliant Treatment resulted in Brilliant Vision
        After noticing that my distance vision when driving was becoming uncomfortable and driving at night was becoming more and more difficult and new prescription glasses didn’t make much difference I decided to have cataract surgery. A friend recommended I have a consultation at the I-Clinic. Their professional examination was really Impressive and I had my totally painless operation to remove the cataracts (on both eyes) completed within the next four weeks.`,
        link: 'https://uk.trustpilot.com/users/5b82b1ec4de5666d34f77e34'
    },
    {
        name: 'Louise',
        review: `I was recommended to Mr Bulger by a friend and was very pleased with the entire process for removing cataracts and improving my vision remarkably. It really is a miracle. All of the staff were kind and attentive and with Mr Bulger I felt that I was in very safe hands. Follow up activity was with Ms Odufuwa who was most helpful and attentive`,
        link: 'https://www.trustpilot.com/reviews/637f2a90b84cc27618f549f2'
    },
    {
        name: 'Moose',
        review: `I cannot praise My-Iclinic enough from my initial consultation to pre op and my surgery.
The staff are reassuring and extremely professional in every aspect of the process.
Mrs Bola Oduwufa is a wonderful surgeon and a magician in my eyes !!!. My double cataract extraction and lens replacement has improved my eyesight 1000%.I didn’t realise how flat and dull the colours and perspective of seeing life through my eyes had become due to the cataracts.`,
        link: 'https://www.trustpilot.com/users/544ab0f80000640001922eb2'
    },
    {
        name: 'C Morgan',
        review: `The care taken by all the clinic staff to ensure that I was comfortable, kept informed of what was being done to my eye and made to feel relaxed during the pre op tests was of an extremely high standard

The surgeon was thorough, in the initial meeting, in explaining the problems and procedure that she would use to remove my cataracts.`,
        link: 'https://www.trustpilot.com/users/6135e0235a504600120ec860'
    },
    {
        name: 'J Fisher',
        review: `Fantastic results. I was so impressed by all the staff and the extensive pre and post op test and scans which has resulted in 20:20 vision. My surgeon made the double cataract operation as easy a process as possible with re-assurance at all steps. Highly, highly recommended`,
        link: 'https://www.trustpilot.com/users/5f40f65ce456be371722b54b'
    },
    {
        name: 'Lisa Rutt',
        review: `Absolutely fantastic team, highly recommended! I was extremely nervous about my LASIK surgery but the girls looked after me and put me at ease, everything from the consultation to surgery to the follow ups checks was a smooth process, phone calls and emails answered quickly, clinic easy to find, free parking onsite, clinic and equipment all very clean, thank you ladies x`,
        link: 'https://www.trustpilot.com/users/609c1282187c58001a8537fd'
    },
    {
        name: 'Anne Thomas',
        review: `Excellent service. Mike Charman set up my contract easily with a very competitive price. He was friendly and answered all my questions. Thank you`,
        link: 'https://www.trustpilot.com/users/5ece27353b2798c4fc73afce'
    },
    {
        name: 'Noor Al-Gburi',
        review: `My daughter have myopia and she received a wonderful care from all the team I recommend this clinic to all parents who have a child suffering from myopia now my child in a safe hands thank you Mr. Bolger and thanks to all the team 🌹🙏`,
        link: 'https://www.trustpilot.com/users/5fd769428e2feb0019e00e32'
    },
    {
        name: 'Vera',
        review: `My-iClinic was recommended by my optometrist. Both eyes were done quickly, painlessly and by a friendly team and one of two expert eye surgeons. Mr Bolger inspires confidence. I think I've had mine done early before the cataracts developed too much, which I recommend. The clarity is wonderful. Don't wait for your vision to get worse.`,
        link: 'https://www.trustpilot.com/users/5c4599e05a9e692ea547bc00'
    },
    {
        name: 'Obee, Edward Mr',
        review: `I am a absolutely terrified of anybody going near my eyes, it took a lot of courage to go ahead with treatment. During treatment the nurses and everybody concerned made great efforts to give me confidence. The staff were very friendly and thorough in their approach with attention to detail at every stage. I could have had the treatment in Cyprus at a much lower cost - but finally decided that My-iClinic from reports I had read and comments made to me was the best option. All the time remember you only have one set of eyes - and I have always felt it is your most important sense`,
        link: 'https://www.trustpilot.com/users/63ebea34e651c20013e10c34'
    }
];

/**
 * Patient reviews component
 * @returns {JSX.Element}
 * @constructor
 */
const PatientReviews = (): JSX.Element => {
    return (
        <Section id="newfound-clarity">
            <Container className="relative grid content-start gap-12 md:gap-24">
                <h2 className="font-latoBold text-[3rem] normal-case leading-[3.6rem] md:justify-self-center md:font-latoExtraBold md:text-[4.8rem] md:leading-[4.8rem]">
                    See what our satisfied clients say!
                </h2>

                <div className="relative overflow-x-hidden">
                    <LazyComponent>
                        <PatientSlider sliderList={sliderList} />
                    </LazyComponent>
                </div>
            </Container>
        </Section>
    );
};

export default PatientReviews;
