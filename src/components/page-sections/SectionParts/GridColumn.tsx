import IconClockWithEye from '@/icons/icon-clock-with-eye.svg';
import IconPersonHead from '@/icons/icon-person-head-on-machine.svg';
import IconEyeBall from '@/icons/icon-eye-ball.svg';
import IconEyeWithPlus from '@/icons/icon-eye-with-plus.svg';
import gsap from 'gsap';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useOnScreen } from '@/hooks';

/**
 * Grid column of side image sections
 *
 * @returns {*}  {JSX.Element}
 */
const GridColumn = (): JSX.Element => {
    const card1Ref = useRef<HTMLDivElement | null>(null);
    const card2Ref = useRef<HTMLDivElement | null>(null);
    const card3Ref = useRef<HTMLDivElement | null>(null);
    const card4Ref = useRef<HTMLDivElement | null>(null);
    const card1Position = useOnScreen({ ref: card1Ref, triggerPosition: '80%' });
    const card2Position = useOnScreen({ ref: card2Ref, triggerPosition: '80%' });
    const card3Position = useOnScreen({ ref: card3Ref, triggerPosition: '80%' });
    const card4Position = useOnScreen({ ref: card4Ref, triggerPosition: '80%' });

    const cardPosition: any = [card1Position, card2Position, card3Position, card4Position];

    useEffect(() => {
        [card1Ref, card2Ref, card3Ref, card4Ref].forEach((ref, index) => {
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
            {/* flex item 1 */}
            <div
                ref={card1Ref}
                className="flex min-h-[31.1rem] -translate-x-1/4 flex-col items-start justify-start gap-8 rounded-primary bg-brandLight px-8 py-12 opacity-0"
            >
                <Image src={IconClockWithEye} alt="" className="h-32 w-32" />
                <span className="font-latoBold text-[2rem] leading-[2.4rem]">A 25 second treatment</span>
                <p className="text-[1.6rem] leading-[2.8rem]">
                    ReLEx smile is a 25 second laser treatment with a friendly team beside you every step of the way
                </p>
            </div>
            {/* flex item 2 */}
            <div
                ref={card2Ref}
                className="flex min-h-[31.1rem] translate-x-1/4 flex-col items-start justify-start gap-8 rounded-primary bg-lightOrange px-8 py-12 opacity-0"
            >
                <Image src={IconPersonHead} alt="" className="h-32 w-32" />
                <span className="font-latoBold text-[2rem] leading-[2.4rem]">Simple and easy recovery</span>
                <p className="text-[1.6rem] leading-[2.8rem]">
                    A one-week recovery period with the best aftercare from our laser specialist.
                </p>
            </div>
            {/* flex item 3 */}
            <div
                ref={card3Ref}
                className="flex min-h-[31.1rem] -translate-x-1/4 flex-col items-start justify-start gap-8 rounded-primary bg-lightViolet px-8 py-12 opacity-0"
            >
                <Image src={IconEyeBall} alt="" className="h-32 w-32" />
                <span className="font-latoBold text-[2rem] leading-[2.4rem]">
                    Clear, natural vision
                    <br />
                    restored
                </span>
                <p className="text-[1.6rem] leading-[2.8rem]">
                    Enjoy a life of clear, natural vision without ever having to compromise your routine with glasses or
                    contact lenses again.
                </p>
            </div>
            {/* flex item 4 */}
            <div
                ref={card4Ref}
                className="flex min-h-[31.1rem] translate-x-1/4 flex-col items-start justify-start gap-8 rounded-primary bg-lightYellow px-8 py-12 opacity-0"
            >
                <Image src={IconEyeWithPlus} alt="" className="h-32 w-32" />
                <span className="font-latoBold text-[2rem] leading-[2.4rem]">Improved quality of life</span>
                <p className="text-[1.6rem] leading-[2.8rem]">
                    It’s called SMILE for more than one reason. Rest assured that over 1 million people are smiling more
                    today than they did when they had glasses or contact lenses.
                </p>
            </div>
        </div>
    );
};

export default GridColumn;
