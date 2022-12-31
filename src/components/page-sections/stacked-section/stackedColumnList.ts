import { StackBoxInterface } from './StackBox';
import IconGenome from '@/icons/icon-genome.svg';
import IconEyeDrop from '@/icons/icon-eye-with-drop.svg';
import IconEyeTime from '@/icons/icon-eye-with-time.svg';
import IconEyeBandage from '@/icons/icon-eye-with-bandage.svg';

export interface StackListInterface extends Omit<StackBoxInterface, 'index'> {}

export const presbyondStackList: StackListInterface[] = [
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
            `Now, you can have safe and effective Presbyond laser eye surgery aimed at reducing the need for reading glasses.`
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
            `Presbyond can help you feel like you’re winning the battle against aging.
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
        boxWidth: '55.7rem',
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
        boxWidth: '48.7rem',
        altText: `Man trying to see his phone with glasses on, suffering from presbyopia.`
    }
];

export const iclStackList: StackListInterface[] = [
    {
        boxIcon: IconGenome,
        image: {
            url: '/images/section-images/biocompatibility.png',
            width: 392,
            height: 256
        },
        desktopImage: {
            url: '/images/section-images/biocompatibility-large.png',
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
            url: '/images/section-images/dry-eyes.png',
            width: 392,
            height: 256
        },
        desktopImage: {
            url: '/images/section-images/dry-eyes-large.png',
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
            url: '/images/section-images/icl-procedure.png',
            width: 392,
            height: 256
        },
        desktopImage: {
            url: '/images/section-images/icl-procedure-large.png',
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
            url: '/images/section-images/removability.png',
            width: 392,
            height: 256
        },
        desktopImage: {
            url: '/images/section-images/removability-large.png',
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
