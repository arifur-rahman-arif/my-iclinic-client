import IconClockWithEye from '@/icons/icon-clock-with-eye.svg';
import IconPersonHead from '@/icons/icon-person-head-on-machine.svg';
import IconEyeBall from '@/icons/icon-eye-ball.svg';
import IconEyeWithPlus from '@/icons/icon-eye-with-plus.svg';
import gsap from 'gsap';
import HTMLReactParser from 'html-react-parser';

import Image, { StaticImageData } from 'next/image';
import { ReactNode, useEffect, useRef } from 'react';
import { useOnScreen } from '@/hooks';

interface CardList {
    image: StaticImageData | string;
    title: ReactNode;
    description: string;
}

const defautltcardList: CardList[] = [
    {
        image: IconClockWithEye,
        title: 'A 25 second treatment',
        description: 'ReLEx smile is a 25 second laser treatment with a friendly team beside you every step of the way'
    },
    {
        image: IconPersonHead,
        title: 'Simple and easy recovery',
        description: 'A one-week recovery period with the best aftercare from our laser specialist.'
    },
    {
        image: IconEyeBall,
        title: (
            <>
                Clear, natural vision
                <br />
                restored
            </>
        ),
        description:
            'Enjoy a life of clear, natural vision without ever having to compromise your routine with glasses or contact lenses again.'
    },
    {
        image: IconEyeWithPlus,
        title: 'Improved quality of life',
        description:
            'It’s called SMILE for more than one reason. Rest assured that over 1 million people are smiling more today than they did when they had glasses or contact lenses.'
    }
];

interface GridColumnProps {
    cardList?: CardList[];
}

/**
 * Grid column of side image sections
 *
 * @param {CardList[]} cardList
 * @returns {JSX.Element}
 * @constructor
 */
const GridColumn = ({ cardList }: GridColumnProps): JSX.Element => {
    const card1Ref = useRef<HTMLDivElement | null>(null);
    const card2Ref = useRef<HTMLDivElement | null>(null);
    const card3Ref = useRef<HTMLDivElement | null>(null);
    const card4Ref = useRef<HTMLDivElement | null>(null);
    const cardRefs = [card1Ref, card2Ref, card3Ref, card4Ref];

    const colorList = ['bg-brandLight', 'bg-lightOrange', 'bg-lightViolet', 'bg-lightYellow'];

    const card1Position = useOnScreen({ ref: card1Ref, triggerPosition: '80%' });
    const card2Position = useOnScreen({ ref: card2Ref, triggerPosition: '80%' });
    const card3Position = useOnScreen({ ref: card3Ref, triggerPosition: '80%' });
    const card4Position = useOnScreen({ ref: card4Ref, triggerPosition: '80%' });

    const cardPosition: any = [card1Position, card2Position, card3Position, card4Position];

    useEffect(() => {
        cardRefs.forEach((ref, index) => {
            if (!ref.current) return;

            cardPosition[index].onEnter &&
                gsap.to(ref.current, {
                    x: 0,
                    autoAlpha: 1,
                    duration: 1.8
                });
        });
    }, [card1Position.onEnter, card2Position.onEnter, card3Position.onEnter, card4Position.onEnter]);

    return (
        <div className="grid gap-6 overflow-hidden sm:overflow-visible md:grid-cols-[repeat(auto-fit,_minmax(25rem,_1fr))]">
            {(cardList || defautltcardList).slice(0, 4).map((card, index) => (
                <div
                    key={index}
                    ref={cardRefs[index]}
                    className={`flex min-h-[31.1rem] translate-x-1/4 flex-col items-start justify-start gap-8 rounded-primary ${colorList[index]} px-8 py-12 opacity-0`}
                >
                    <Image src={card.image} width={128} height={128} alt="" className="h-32 w-32" />
                    <span className="font-latoBold text-[2rem] leading-[2.4rem]">
                        {typeof card.title === 'string' ? HTMLReactParser(card.title) : card.title}
                    </span>
                    <p className="text-[1.6rem] leading-[2.8rem]">{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default GridColumn;
