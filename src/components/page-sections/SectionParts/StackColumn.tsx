import { BulletPoint } from '@/components/page-sections';

interface StackList {
    title: string;
    descriptions: string[];
}

const defaultStackList: StackList[] = [
    {
        title: 'You’re ahead of the curve',
        descriptions: [
            'If you think about it, glasses are a very old technology.',
            'Contact lenses are considered a good alternative, but have a lot of serious health risks for your eyes.',
            'Enter ReLEx SMILE – the most technically advanced option for people who want the latest and greatest vision correction treatment.'
        ]
    },
    {
        title: 'You’re smiling more, every day',
        descriptions: [
            'It’s called SMILE for more than one reason.',
            'Your eyes smile at the clarity of the world again and so do you! Rest assured that over 1 million people are smiling more today than they did when they had glasses or contact lenses.'
        ]
    },
    {
        title: 'Who’s that walking into the room?',
        descriptions: [
            'You’re the same person, but your smile and confidence say otherwise.',
            'Your glasses are no longer stealing the limelight, and everyone around can finally see the real you.'
        ]
    },
    {
        title: 'Your life – immeasurably simplified',
        descriptions: [
            'Daily routines, active pursuits and social events are a joy.',
            'Everyday, you’ll notice how effortless it is to have 20/20 vision without the need for contact lenses or glasses.'
        ]
    },
    {
        title: 'When your eyes are smiling…',
        descriptions: [
            'The whole world smiles with you! One of the most cited reasons for having laser eye surgery is improved confidence and happiness. Most patients say they wish they’d done it sooner.'
        ]
    }
];

interface StackColumnProps {
    stackList?: StackList[];
}

/**
 * Stack column for the side image section
 *
 * @returns {*}  {JSX.Element}
 */
const StackColumn = ({ stackList }: StackColumnProps): JSX.Element => {
    return (
        <div className="grid gap-12 self-start">
            {/* Grid item 5 */}
            {((stackList?.length && stackList) || defaultStackList).map((stack, index) => (
                <div key={index} className="grid grid-cols-[auto_1fr] items-start gap-y-6 gap-x-6">
                    <BulletPoint />
                    <span className="font-latoBold text-[2rem] leading-[2.4rem] sm:col-span-1">{stack.title}</span>
                    <div className="col-span-2 grid gap-6">
                        {stack.descriptions.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StackColumn;
