import { ImageType3 } from '@/types';
import Image from 'next/image';

interface CardInterface {
    title: string;
    description: string;
    image: ImageType3;
}

/**
 * Inner card component
 *
 * @param {string} title
 * @param {string} description
 * @param {ImageType} image
 * @returns {JSX.Element}
 * @constructor
 */
const InnerCard = ({ title, description, image }: CardInterface): JSX.Element => {
    return (
        <div className="grid w-full items-start gap-12 overflow-hidden rounded-radius2 border border-[#EAECF0] transition-all duration-500 hover:border-b-brand hover:shadow-shadow1 sm:max-w-[40.5rem] md:gap-16">
            <Image {...image} className="w-full" />

            <div className="grid content-start gap-6 px-8 pb-12 sm:px-12">
                <h3 className="font-latoBold text-[2.4rem] leading-[3.2rem] text-heading">{title}</h3>
                <span className="h-[1.4rem] w-[6.7rem] rounded-[1.6rem] bg-[#FF7F00]"></span>
                <p>{description}</p>
            </div>
        </div>
    );
};

const cardList: CardInterface[] = [
    {
        title: 'Visual fields',
        description:
            "Visual field testing is used by our technician team to assess our patients' field of vision, and, in particular, their peripheral vision to determine any areas of vision loss and any vision loss causes. Visual fields can indicate if blind spots are caused by glaucoma, diabetes, hypertension and/ or head trauma.",
        image: {
            src: '/images/section-images/eye-care-card-image-1.webp',
            width: 406,
            height: 235,
            alt: ''
        }
    },
    {
        title: 'iTrace',
        description:
            "iTrace is a 5-in-1 wavefront aberrometer, corneal topographer, keratometer, autorefractor, and pupillometer. The ITrace is used by our technician team to identify the visual axis, the center of the pupil and the center of the limbus. Our iTrace machine will analyze the internal structures of our patients' eyes.",
        image: {
            src: '/images/section-images/eye-care-card-image-2.webp',
            width: 406,
            height: 235,
            alt: ''
        }
    },
    {
        title: 'IOL Master',
        description:
            'Our technician team uses the IOL Master to achieve high precision IOL calculations for our patients. The IOL masters laser technology accurately measures the length of the eye which can determine the best treatment for our patients.',
        image: {
            src: '/images/section-images/eye-care-card-image-3.webp',
            width: 406,
            height: 235,
            alt: ''
        }
    },
    {
        title: 'OCT',
        description:
            'OCT testing uses interferometry to create a cross-sectional map of our patients retina. Our technicians use the OCT machine to capture the back of the eye, including the optic nerve. Our specialists can diagnose glaucoma, macula edema, macular degeneration and retinal detachments by our OCT testing.',
        image: {
            src: '/images/section-images/eye-care-card-image-4.webp',
            width: 406,
            height: 235,
            alt: ''
        }
    },
    {
        title: 'Sirius',
        description:
            "Sirius uses a rotating 3D Scheimpflug camera to measure a patient's corneal thickness which can be used to determine the most suitable refractive and/or corneal surgery for their eye condition.",
        image: {
            src: '/images/section-images/eye-care-card-image-5.webp',
            width: 406,
            height: 235,
            alt: ''
        }
    },
    {
        title: 'Atlas',
        description:
            "The atlas (corneal topography) machine is used by our technician team to scan a three-dimensional map of the surface and curvature of the patient's cornea. The atlas detects corneal pathology to help determine a suitable treatment plan and/or surgery for our patients.",
        image: {
            src: '/images/section-images/eye-care-card-image-6.webp',
            width: 406,
            height: 235,
            alt: ''
        }
    },
    {
        title: 'Fundus',
        description:
            "Our fundus is a low power microscope attached with a specialized camera designed to photograph the interior surface of the patient's eye, including their retina, their retinal vasculature, their optic disc, posterior pol and macula.",
        image: {
            src: '/images/section-images/eye-care-card-image-7.webp',
            width: 406,
            height: 235,
            alt: ''
        }
    },
    {
        title: 'iCare',
        description:
            "Our specialists will measure a patient's IOP (intraocular pressure) with iCare to monitor and/or diagnose glaucoma, diabetic retinopathy and macular degeneration.",
        image: {
            src: '/images/section-images/eye-care-card-image-8.webp',
            width: 406,
            height: 235,
            alt: ''
        }
    },
    {
        title: 'Slit lamp',
        description:
            'Our specialists will use slit lamps as an initial examination tool to assess the health of our patients conjunctiva, cornea, eyelids, iris, pupil, lens, sclera and retina.',
        image: {
            src: '/images/section-images/eye-care-card-image-9.webp',
            width: 406,
            height: 235,
            alt: ''
        }
    }
];

interface Props {
    cards: CardInterface[];
}
/**
 * Advance eye care component created for Eye diagnostics & equipment center page
 *
 * @returns {JSX.Element}
 * @constructor
 */
const AdvanceEyeCare = ({ cards }: Props): JSX.Element => {
    const mergedCardList = cards?.length
        ? cards.map((item, index) => ({
              title: item?.title || cardList[index].title,
              description: item?.description || cardList[index].description,
              image: item?.image?.src ? item?.image : cardList[index].image
          }))
        : cardList;
    return (
        <div className="mt-0 grid grid-cols-1 items-stretch justify-items-center gap-12 sm:grid-cols-[repeat(auto-fit,_minmax(40rem,_1fr))] sm:gap-6 md:mt-12">
            {mergedCardList.map((card, index) => (
                <InnerCard key={index} {...card} />
            ))}
        </div>
    );
};

export default AdvanceEyeCare;
