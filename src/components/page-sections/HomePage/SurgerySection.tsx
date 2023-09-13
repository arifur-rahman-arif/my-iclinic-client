import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

const list: ItemProps[] = [
    {
        title: 'Laser eye surgery',
        description:
            "Transform your world through precision laser eye surgery at My-iClinic, London's trusted destination for advanced eye care. With a commitment to your vision enhancement, our experienced surgeons and modern techniques offer a personalised path to improved clarity and visual freedom."
    },
    {
        title: 'Corrective eye surgery',
        description:
            'Rediscover the world in perfect clarity with corrective eye surgery at our esteemed clinic in London. Our dedicated team of professionals is committed to delivering personalised solutions that address your unique vision needs, ensuring a life less hindered by glasses or contacts.'
    }
];

/**
 * Surgery section
 *
 * @returns {JSX.Element}
 * @constructor
 */
const SurgerySection = () => {
    return (
        <Section className="bg-brandLight py-12 md:py-24">
            <Container className="grid justify-center justify-items-center gap-12 md:grid-cols-2 lg:gap-16 xl:grid-cols-[46.3rem_46.3rem] xl:gap-28">
                {list.map((item, i) => (
                    <Item key={i} {...item} />
                ))}
            </Container>
        </Section>
    );
};

export default SurgerySection;

interface ItemProps {
    title: string;
    description: string;
}

/**
 * Surgery Item
 *
 * @param {string} icon
 * @param {string} title
 * @param {string} description
 * @param {string} buttonText
 * @param {string} url
 * @returns {JSX.Element}
 * @constructor
 */
const Item = ({ title, description }: ItemProps) => {
    return (
        <div className="grid w-full max-w-[46.3rem] justify-items-start gap-6">
            <span className="font-latoBold text-[2rem] leading-[2.8rem] text-heading md:text-[2.4rem] md:leading-[3.2rem]">
                {title}
            </span>
            <p>{description}</p>
        </div>
    );
};
