import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';

const list: ItemProps[] = [
    {
        title: 'Laser eye surgery',
        image: '/images/section-images/laser-eye-surgery-2-small.png',
        largeImage: '/images/section-images/laser-eye-surgery-2.png',
        description:
            "Transform your world through precision laser eye surgery at My-iClinic, London's trusted destination for advanced eye care. With a commitment to your vision enhancement, our experienced surgeons and modern techniques offer a personalised path to improved clarity and visual freedom."
    },
    {
        title: 'Corrective eye surgery',
        image: '/images/section-images/corrective-eye-surgery-small.png',
        largeImage: '/images/section-images/corrective-eye-surgery.png',
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
const SurgerySection = (): JSX.Element => {
    return (
        <Section className="px-8">
            <Container className="grid items-start justify-center gap-12 rounded-radius2 bg-[#E1F1FF] py-12 md:grid-cols-2 xl:gap-28 xl:px-10 xl:py-24">
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
    image: string;
    largeImage: string;
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
const Item = ({ title, description, image, largeImage }: ItemProps): JSX.Element => {
    return (
        <div className="grid w-full content-start justify-items-start gap-6 md:gap-y-6 md:gap-x-12 lg:grid-cols-2 xl:grid-cols-[auto_1fr]">
            <Image
                src={image}
                alt={title}
                width={146}
                height={338}
                quality={100}
                className="row-span-2 row-start-1 w-full rounded-radius2 lg:hidden"
            />
            <Image
                src={largeImage}
                alt={title}
                width={146}
                height={189}
                quality={100}
                className="row-span-2 row-start-1 hidden h-full w-full rounded-radius2 lg:block"
            />
            <span className="mt-6 font-latoBold text-[2rem] leading-[2.8rem] text-heading md:mt-0 md:text-[2.4rem] md:leading-[3.2rem] lg:mt-0">
                {title}
            </span>
            <p className="">{description}</p>
        </div>
    );
};
