import { StackSlideInterface } from '@/components/Slider/StackSlider/Slide';
import IconEyeBandage from '@/icons/icon-eye-with-bandage.svg';
import IconEyeDrop from '@/icons/icon-eye-with-drop.svg';
import IconEyeTime from '@/icons/icon-eye-with-time.svg';
import IconGenome from '@/icons/icon-genome.svg';
import { StackBoxInterface } from '@/page-sections/StackedSection/StackBox';

export interface StackListInterface extends Omit<StackSlideInterface, 'index'> {}

export const presbyondStackList: Omit<StackBoxInterface, 'index'>[] = [
    {
        image: {
            url: '/images/section-images/laser-surgery-card.webp',
            width: 329,
            height: 220
        },
        desktopImage: {
            url: '/images/section-images/laser-surgery-card-desktop.webp',
            width: 640,
            height: 519
        },
        title: 'Clear vision at every distance',
        descriptions: [
            `Reading this with glasses on? Everyone’s vision changes as they age.`,
            `Now, you can have safe and effective Presbyond laser eye surgery aimed at reducing the need for reading glasses.`
        ],
        boxWidth: '51.4rem',
        altText: `Middle aged woman on a hike without her glasses and without any presbyopic
        symptoms.`
    },
    {
        image: {
            url: '/images/section-images/life-results.webp',
            width: 392,
            height: 256
        },
        desktopImage: {
            url: '/images/section-images/life-results-desktop.webp',
            width: 658,
            height: 571
        },
        title: 'Life-changing results',
        descriptions: [
            `Presbyond can help you feel like you’re winning the battle against aging.
			 Pause the clock on your eyes and regain that youthful confidence that you never knew you had lost.`
        ],
        boxWidth: '45.9rem',
        altText: `Middle aged couple driving a vintage car with blended vision from laser eye
        surgery.`
    },
    {
        image: {
            url: '/images/section-images/wave-goodbye.webp',
            width: 392,
            height: 256
        },
        desktopImage: {
            url: '/images/section-images/wave-goodbye-desktop.webp',
            width: 608,
            height: 579
        },
        title: 'Wave goodbye to your reading glasses and varifocals',
        descriptions: [
            `A sense of freedom and convenience washes over you.`,
            `Any anxiety surrounding your vision and dependency on lenses has left. You feel younger and reinvigorated.`
        ],
        boxWidth: '55.7rem',
        altText: `Old woman painting after Presbyond treatment.`
    },
    {
        image: {
            url: '/images/section-images/new-vision.webp',
            width: 392,
            height: 256
        },
        desktopImage: {
            url: '/images/section-images/new-vision-desktop.webp',
            width: 608,
            height: 579
        },
        title: 'New vision, new experiences',
        descriptions: [
            `With your new vision, you’re more able to accomplish your goals and are even ready to set more challenging ones for your future.`,
            `Remove visual limitations and enjoy the hobbies you love without needing to update your glasses every time.`
        ],
        boxWidth: '48.7rem',
        altText: `Man trying to see his phone with glasses on, suffering from presbyopia.`
    }
];

export const iclStackList: StackListInterface[] = [
    {
        boxIcon: IconGenome,
        image: {
            url: '/images/section-images/biocompatibility.webp',
            width: 392,
            height: 256
        },
        desktopImage: {
            url: '/images/section-images/biocompatibility-large.webp',
            width: 640,
            height: 519
        },
        title: 'Biocompatibility',
        descriptions: [
            `Our Implantable lenses are made of biocompatible Collamer – proprietary material used exclusively by STAAR Surgical.`,
            `Collamer is a unique material that contains collagen which means the lens is made to naturally harmonize with your eye.`,
            `The ICL Collamer technology has unique advantages that make it an ideal material for a vision correction lens, including UV protection and it is easy to implant because it is soft and pliable.`
        ],
        boxWidth: '58rem',
        altText: ``
    },
    {
        boxIcon: IconEyeDrop,
        image: {
            url: '/images/section-images/dry-eyes.webp',
            width: 392,
            height: 256
        },
        desktopImage: {
            url: '/images/section-images/dry-eyes-large.webp',
            width: 658,
            height: 571
        },
        title: 'No more dry eyes',
        descriptions: [
            `ICL can be described as additive vision correction.`,
            `Unlike other procedures, the ICL procedure does not remove corneal tissue, but works in harmony with your natural eyes to provide exceptional quality of vision.`,
            `Because the cornea is left intact with no reshaping or removal of the corneal tissue it does not induce any dry eye symptoms and can help with any existing dry eye syndrome you may be experiencing from your everyday plastic contact lenses.`
        ],
        boxWidth: '51.4rem',
        altText: ``
    },
    {
        boxIcon: IconEyeTime,
        image: {
            url: '/images/section-images/icl-procedure.webp',
            width: 392,
            height: 256
        },
        desktopImage: {
            url: '/images/section-images/icl-procedure-large.webp',
            width: 608,
            height: 579
        },
        title: 'A quick ICL procedure and recovery',
        descriptions: [
            `The procedure lasts between 20-30 minutes.`,
            `Most people resume their daily activities in just a few days with clearer vision.`,
            `Many of our patients can sit up from the operating table and see more clearly immediately, even reading their phone screen in the reception waiting area before leaving the clinic.`
        ],
        boxWidth: '52rem',
        altText: ``
    },
    {
        boxIcon: IconEyeBandage,
        image: {
            url: '/images/section-images/removability.webp',
            width: 392,
            height: 256
        },
        desktopImage: {
            url: '/images/section-images/removability-large.webp',
            width: 658,
            height: 519
        },
        title: 'Removability',
        descriptions: [
            `Though the ICL is designed to remain in the eye without maintenance, permanently correcting your vision, the lens can be completely removed providing flexibility for the future.`,
            `In the event of a major prescription change or the availability of new vision correction options, ICL is completely removable. Allowing you to keep pace with advancing technology and your future prescription if needed.`
        ],
        boxWidth: '48rem',
        altText: ``
    }
];

export const lasikStackList: StackListInterface[] = [
    {
        image: {
            url: '/images/section-images/walking-into-room.webp',
            width: 392,
            height: 256
        },
        desktopImage: {
            url: '/images/section-images/walking-into-room-large.webp',
            width: 640,
            height: 519
        },
        title: 'Who’s that walking into the room?',
        descriptions: [
            `You’re the same person, but your smile and confidence say otherwise.`,
            `Your glasses are no longer stealing the limelight, and everyone around can finally see the real you.`
        ],
        boxWidth: '51rem',
        altText: ``
    },
    {
        image: {
            url: '/images/section-images/people-doing-exercise.webp',
            width: 392,
            height: 256
        },
        desktopImage: {
            url: '/images/section-images/people-doing-exercise-large.webp',
            width: 658,
            height: 571
        },
        title: 'Feel in charge of your life',
        descriptions: [
            `You’re able to toss your glasses and contact lenses for good, and it’s a wonderful feeling.`,
            <>
                <span className="font-mulishBold text-[1.8rem] uppercase leading-[2.8rem]">You’re in control.</span>
            </>
        ],
        boxWidth: '43.4rem',
        altText: ``
    },
    {
        image: {
            url: '/images/section-images/man-running-in-the-beach.webp',
            width: 392,
            height: 256
        },
        desktopImage: {
            url: '/images/section-images/man-running-in-the-beach-large.webp',
            width: 608,
            height: 579
        },
        title: 'Feel more confident',
        descriptions: [
            `It’s liberating to do whatever you want without dependency on glasses or contact lenses.`,
            `Worries and insecurities have diminished, and your self-esteem is beaming.`
        ],
        boxWidth: '52rem',
        altText: ``
    },
    {
        image: {
            url: '/images/section-images/woman-holding-her-baby.webp',
            width: 392,
            height: 256
        },
        desktopImage: {
            url: '/images/section-images/woman-holding-her-baby-large.webp',
            width: 658,
            height: 519
        },
        title: 'Breeze through life',
        descriptions: [
            `Daily routines, active pursuits and social events are a joy.`,
            `You’re free to run, stretch, jump, lift, or whatever else you like to do, without the need to worry about breaking or losing your specs.`
        ],
        boxWidth: '43.4rem',
        altText: ``
    }
];

export const lasekStackList: StackListInterface[] = [
    {
        desktopImage: {
            url: '/images/section-images/lasek-ditch-specs-large.webp',
            width: 447,
            height: 349
        },
        title: 'To ditch the specs',
        descriptions: [
            `If you dislike your glasses and contact lenses and want to live as active a lifestyle as ever, LASEK, PRK or PTK might be right for you.`
        ]
    },
    {
        desktopImage: {
            url: '/images/section-images/lasek-slider-card-image-2.webp',
            width: 447,
            height: 349
        },
        title: 'To feel able to do what you like',
        descriptions: [
            `Whether you enjoy swimming or boxing, LASEK, PRK and PTK will give you the freedom to do what you wish – whenever you wish.`
        ]
    },
    {
        desktopImage: {
            url: '/images/section-images/lasek-slider-card-image-3.webp',
            width: 447,
            height: 349
        },
        title: 'Breeze through life',
        descriptions: [
            `Daily routines, active pursuits and social events are a joy. You’re free to run, stretch, jump, lift, or whatever else you like to do, without the need to worry about breaking or losing your glasses.`
        ]
    },
    {
        desktopImage: {
            url: '/images/section-images/lasek-slider-card-image-4.webp',
            width: 447,
            height: 349
        },
        title: 'Take control',
        descriptions: [
            `Life’s all about choices. Choosing laser eye surgery doesn’t just help you see well without glasses or contacts, it helps you do everything with more control and poise. Your only regret is that you didn’t do it sooner!`
        ]
    }
];

export const glaucomaStackList: StackListInterface[] = [
    {
        title: 'An improved quality of life',
        descriptions: [
            `Healthy vision brings the biggest improvement to your everyday routine. You no longer need to rely on other people to help you complete everyday tasks which your vision is preventing you from doing. `
        ]
    },
    {
        title: 'Support, care and guidance always with you',
        descriptions: [
            `Don’t struggle with the burden of Glaucoma by yourself! Our service is here to support you in every way we can, giving the right treatment for you to make your vision better. Our Glaucoma specialists understand that Glaucoma can cause anxiety and stress in your everyday life and our team won’t let Glaucoma take over your life. `
        ]
    },
    {
        title: 'Taking control of your life again',
        descriptions: [
            `Wake up in the morning and feel like you are taking control of your future. Glaucoma is an eye condition that can continue until you are experiencing dramatic vision loss. By having treatment and maintaining your Glaucoma management, you are helping yourself by prioritizing the safety of your future vision. `
        ]
    }
];

export const myopiaStackList: StackListInterface[] = [
    {
        image: {
            url: '/images/section-images/myopia-stack-card-1.webp',
            width: 343,
            height: 194
        },
        desktopImage: {
            url: '/images/section-images/myopia-stack-card-1-large.webp',
            width: 640,
            height: 519
        },
        title: 'The world feels different',
        descriptions: [
            'Your child has gotten used to frequent changes in their glasses prescription. But headaches, eyestrain and squinting is not always the best quality of life, especially when children are growing, adapting and learning new things everyday.',
            'When myopia develops, it can be difficult for children to understand their condition without appropriate guidance and treatment.'
        ],
        boxWidth: '51.4rem'
    },
    {
        image: {
            url: '/images/section-images/myopia-stack-card-2.webp',
            width: 343,
            height: 194
        },
        desktopImage: {
            url: '/images/section-images/myopia-stack-card-2-large.webp',
            width: 658,
            height: 571
        },
        title: 'Experience of development',
        descriptions: [
            "A child's experience of learning, exploring the world and developing shouldn’t be hindered by the experience of glasses. Children with myopia can feel hopeless and frustrated when they believe they have little chance of removing their glasses.",
            'For us, helping children understand that their myopia condition can be slowed down by lifestyle changes and available treatments will give them a chance to embrace their glasses without frequent prescription changes.'
        ],
        boxWidth: '51.4rem'
    }
];
