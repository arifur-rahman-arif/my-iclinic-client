import { StackBoxInterface } from './StackBox';

export interface StackListInterface extends Omit<StackBoxInterface, 'index'> {}

export const presbyoundStackList: StackListInterface[] = [
    {
        image: {
            url: '/images/section-images/laser-surgery-card.png',
            width: 329,
            height: 220
        },
        desktopImage: {
            url: '/images/section-images/laser-surgery-card-desktop.png',
            width: 640,
            height: 519
        },
        title: 'Clear vision at every distance',
        descriptions: [
            `Reading this with glasses on? Everyone’s vision changes as they age.`,
            `Now, you can have safe and effective Presbyound laser eye surgery aimed at reducing the need for reading glasses.`
        ],
        boxWidth: '51.4rem',
        altText: `Middle aged woman on a hike without her glasses and without any presbyopic
        symptoms.`
    },
    {
        image: {
            url: '/images/section-images/life-results.png',
            width: 392,
            height: 256
        },
        desktopImage: {
            url: '/images/section-images/life-results-desktop.png',
            width: 658,
            height: 571
        },
        title: 'Life-changing results',
        descriptions: [
            `Presbyound can help you feel like you’re winning the battle against aging.
			 Pause the clock on your eyes and regain that youthful confidence that you never knew you had lost.`
        ],
        boxWidth: '45.9rem',
        altText: `Middle aged couple driving a vintage car with blended vision from laser eye
        surgery.`
    },
    {
        image: {
            url: '/images/section-images/wave-goodbye.png',
            width: 392,
            height: 256
        },
        desktopImage: {
            url: '/images/section-images/wave-goodbye-desktop.png',
            width: 608,
            height: 579
        },
        title: 'Wave goodbye to your reading glasses and varifocals',
        descriptions: [
            `A sense of freedom and convenience washes over you.`,
            `Any anxiety surrounding your vision and dependency on lenses has left. You feel younger and reinvigorated.`
        ],
        boxWidth: '60.7rem',
        altText: `Old woman painting after Presbyond treatment.`
    },
    {
        image: {
            url: '/images/section-images/new-vision.png',
            width: 392,
            height: 256
        },
        desktopImage: {
            url: '/images/section-images/new-vision-desktop.png',
            width: 608,
            height: 579
        },
        title: 'New vision, new experiences',
        descriptions: [
            `With your new vision, you’re more able to accomplish your goals and are even ready to set more challenging ones for your future.`,
            `Remove visual limitations and enjoy the hobbies you love without needing to update your glasses every time.`
        ],
        boxWidth: '60.7rem',
        altText: `Man trying to see his phone with glasses on, suffering from presbyopia.`
    }
];
