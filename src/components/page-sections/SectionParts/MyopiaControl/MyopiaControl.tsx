import { H3Variant3 } from '@/components/Headings';
import IconAngle from '@/icons/icon-angle-right.svg';
import BulletList from '@/page-sections/SectionParts/BulletList';
import HTMLReactParser from 'html-react-parser';
import Image from 'next/image';
import { ReactNode } from 'react';

const defaultCardList: CardInterface[] = [
    {
        title: (
            <>
                Atropine eye drops &nbsp;{' '}
                <span className="font-latoMedium text-[2.4rem] normal-case leading-[3.2rem] md:text-[2.4rem] md:leading-[3.2rem]">
                    0.1% & 0.5%
                </span>
            </>
        ),
        descriptions: [
            <>
                <strong>Low-dose atropine eye drops</strong> such as 0.01% and 0.05% are proven to be an effective
                treatment to slow down Myopia progression. Your child's Myopia specialist will be able to assess which
                dose will be the right treatment for your child's vision.
            </>,
            <div>
                <BulletList
                    list={[
                        'Our 0.01% is best suited for children who have started to develop Myopia but the growth of their eyes are not rapidly progressing.',
                        "Our 0.05% is a stronger concentration of treatment and may work better to slow or control Myopia progression if the stage of your child's Myopia is rapidly progressing."
                    ]}
                    bulletPoint={
                        <Image src={IconAngle} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                    }
                />
            </div>,
            <>
                When coming for a private Myopia consultation with our Myopia specialist, they will decide which
                Atropine eye drops are best for your child's eye health based on how fast your child's Myopia is
                progressing.
            </>,
            <>
                <strong>Professional advice on how to maintain your child's eye health</strong> is very helpful for
                preventing and slowing down Myopia. Your Myopia specialist will be able to talk with you and your child
                about lifestyle activities and how adjusting your daily routine with more natural light can also be
                better changed for the benefit of your child's eye health.
            </>
        ]
    },
    {
        title: <>Myopia check-up & management appointments</>,
        descriptions: [
            <>
                After your child has been given a course of our Atropine eye drops, it is very important that they
                attend a Myopia check-up.
            </>,
            <>
                Your child's Myopia specialists will need to assess the effectiveness of the treatment and the health of
                your child's eye. Because Myopia is a chronic condition, it needs to be monitored carefully to prevent
                the eye from growing.
            </>,
            <>
                Most people think Myopia is a curable eye condition once they have their Atropine eye drops, but in some
                cases your child’s eyes may start rapidly growing too long (also known as Hyperopia) or the
                concentration of their treatment may need to change.
            </>,
            <>
                A myopia check-up appointment is very important especially after your child has been given a course of
                treatment because our Myopia specialist will need to check the progress of the treatment to make your
                child's quality of life and vision much better.
            </>
        ]
    }
];

interface CardInterface {
    title: ReactNode;
    descriptions: ReactNode[];
}

/**
 * Inner card component
 *
 * @param {JSX.Element} title
 * @param {JSX.Element[]} descriptions
 * @returns {JSX.Element}
 * @constructor
 */
const Card = ({ title, descriptions }: CardInterface): JSX.Element => {
    return (
        <div className="max-w-[58.7rem] flex-grow rounded-primary py-20 px-12 shadow-shadow2 transition-all duration-500 hover:shadow-shadow1 md:px-24">
            <div className="grid content-start gap-6">
                <H3Variant3>{typeof title === 'string' ? HTMLReactParser(title) : title}</H3Variant3>
                {descriptions.map((item, index) => (
                    <div key={index}>{typeof item === 'string' ? HTMLReactParser(item) : item}</div>
                ))}
            </div>
        </div>
    );
};

interface MyopiaControlInterface {
    cardList?: CardInterface[];
}

/**
 * Myopia control component
 *
 * @param {CardInterface[] | undefined} cardList
 * @returns {JSX.Element}
 * @constructor
 */
const MyopiaControl = ({ cardList }: MyopiaControlInterface): JSX.Element => {
    return (
        <div className="flex flex-col items-stretch justify-center gap-12 md:flex-row md:justify-start md:gap-24">
            {((cardList?.length && cardList) || defaultCardList).map((card, index) => (
                <Card {...card} key={index} />
            ))}
        </div>
    );
};
export default MyopiaControl;
