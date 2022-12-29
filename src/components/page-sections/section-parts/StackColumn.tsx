import Image from 'next/image';
import IconEyeBallPlus from '@/icons/icon-eye-ball-plus.svg';
import IconSmileyFace from '@/icons/icon-smiley-face.svg';
import IconGlass from '@/icons/icon-glass-plus-minus.svg';
import IconManHoldingKey from '@/icons/icon-man-holding-key.svg';
import IconSmileyExpression from '@/icons/icon-smiley-expression.svg';

/**
 * Stack column for the side image section
 *
 * @returns {*}  {JSX.Element}
 */
const StackColumn = (): JSX.Element => {
    return (
        <div className="grid gap-12 self-start">
            {/* Grid item 1 */}
            <div className="grid grid-cols-[auto_1fr] items-center gap-y-6 gap-x-4">
                <Image src={IconEyeBallPlus} alt="" quality={50} className="h-16 w-16" />
                <span className="font-latoBold text-[2rem] leading-[2.4rem]">You’re ahead of the curve</span>
                <div className="col-span-2 grid gap-6">
                    <p>If you think about it, glasses are a very old technology.</p>
                    <p>
                        Contact lenses are considered a good alternative, but have a lot of serious health risks for
                        your eyes.
                    </p>
                    <p>
                        Enter ReLEX SMILE – the most technically advanced option for people who want the latest and
                        greatest vision correction treatment.
                    </p>
                </div>
            </div>
            {/* Grid item 2 */}
            <div className="grid grid-cols-[auto_1fr] items-center gap-y-6 gap-x-4">
                <Image src={IconSmileyFace} alt="" quality={50} className="h-16 w-16" />
                <span className="font-latoBold text-[2rem] leading-[2.4rem]">You’re smiling more, every day</span>
                <div className="col-span-2 grid gap-6">
                    <p>It’s called SMILE for more than one reason.</p>
                    <p>
                        Your eyes smile at the clarity of the world again and so do you! Rest assured that over 1
                        million people are smiling more today than they did when they had glasses or contact lenses.
                    </p>
                </div>
            </div>
            {/* Grid item 3 */}
            <div className="grid grid-cols-[auto_1fr] items-center gap-y-6 gap-x-4">
                <Image src={IconGlass} alt="" quality={50} className="h-16 w-16" />
                <span className="font-latoBold text-[2rem] leading-[2.4rem]">Who’s that walking into the room?</span>
                <div className="col-span-2 grid gap-6">
                    <p>You’re the same person, but your smile and confidence say otherwise.</p>
                    <p>
                        Your glasses are no longer stealing the limelight, and everyone around can finally see the real
                        you.
                    </p>
                </div>
            </div>
            {/* Grid item 4 */}
            <div className="grid grid-cols-[auto_1fr] items-center gap-y-6 gap-x-4">
                <Image src={IconManHoldingKey} alt="" quality={50} className="h-16 w-16" />
                <span className="font-latoBold text-[2rem] leading-[2.4rem]">Your life – immeasurably simplified</span>
                <div className="col-span-2 grid gap-6">
                    <p>Daily routines, active pursuits and social events are a joy.</p>
                    <p>
                        Everyday, you’ll notice how effortless it is to have 20/20 vision without the need for contact
                        lenses or glasses.
                    </p>
                </div>
            </div>

            {/* Grid item 5 */}
            <div className="grid grid-cols-[auto_1fr] items-center gap-y-6 gap-x-4">
                <Image src={IconSmileyExpression} alt="" quality={50} className="h-16 w-16" />
                <span className="font-latoBold text-[2rem] leading-[2.4rem]">When your eyes are smiling…</span>
                <div className="col-span-2 grid gap-6">
                    <p>
                        The whole world smiles with you! One of the most cited reasons for having laser eye surgery is
                        improved confidence and happiness. Most patients say they wish they’d done it sooner.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StackColumn;
