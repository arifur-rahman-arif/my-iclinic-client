import { ImageType } from '@/types';
import Image from 'next/image';
import H3Variant3 from 'src/components/Headings/H3Variant3';

interface CardInterface {
    title: string;
    description: string;
    image: ImageType;
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
        <div className="border-2 hover:border-brand shadow-md transition-all duration-500 hover:shadow-shadow1 rounded-primary sm:max-w-[38.3rem] py-6 px-12 grid gap-12 md:gap-16 items-start">
            <H3Variant3>{title}</H3Variant3>
            <p>{description}</p>
            <Image {...image} alt="" className="self-end" />
        </div>
    );
};

const cardList: CardInterface[] = [
    {
        title: 'Visual fields',
        description:
            "Visual field testing is used by our technician team to assess our patients' field of vision, and, in particular, their peripheral vision to determine any areas of vision loss and any vision loss causes. Visual fields can indicate if blind spots are caused by glaucoma, diabetes, hypertension and/ or head trauma.",
        image: {
            src: '/images/section-images/eye-care-card-image-1.png',
            width: 360,
            height: 188
        }
    },
    {
        title: 'iTrace',
        description:
            "iTrace is a 5-in-1 wavefront aberrometer, corneal topographer, keratometer, autorefractor, and pupillometer. The ITrace is used by our technician team to identify the visual axis, the center of the pupil and the center of the limbus. Our iTrace machine will analyze the internal structures of our patients' eyes.",
        image: {
            src: '/images/section-images/eye-care-card-image-2.png',
            width: 360,
            height: 188
        }
    },
    {
        title: 'IOL Master',
        description:
            'Our technician team uses the IOL Master to achieve high precision IOL calculations for our patients. The IOL masters laser technology accurately measures the length of the eye which can determine the best treatment for our patients.',
        image: {
            src: '/images/section-images/eye-care-card-image-3.png',
            width: 360,
            height: 188
        }
    },
    {
        title: 'OCT',
        description:
            'OCT testing uses interferometry to create a cross-sectional map of our patients retina. Our technicians use the OCT machine to capture the back of the eye, including the optic nerve. Our specialists can diagnose glaucoma, macula edema, macular degeneration and retinal detachments by our OCT testing.',
        image: {
            src: '/images/section-images/eye-care-card-image-4.png',
            width: 360,
            height: 188
        }
    },
    {
        title: 'Sirius',
        description:
            "Sirius uses a rotating 3D Scheimpflug camera to measure a patient's corneal thickness which can be used to determine the most suitable refractive and/or corneal surgery for their eye condition.",
        image: {
            src: '/images/section-images/eye-care-card-image-5.png',
            width: 360,
            height: 188
        }
    },
    {
        title: 'Atlas',
        description:
            "The atlas (corneal topography) machine is used by our technician team to scan a three-dimensional map of the surface and curvature of the patient's cornea. The atlas detects corneal pathology to help determine a suitable treatment plan and/or surgery for our patients.",
        image: {
            src: '/images/section-images/eye-care-card-image-6.png',
            width: 360,
            height: 188
        }
    },
    {
        title: 'Fundus',
        description:
            "Our fundus is a low power microscope attached with a specialized camera designed to photograph the interior surface of the patient's eye, including their retina, their retinal vasculature, their optic disc, posterior pol and macula.",
        image: {
            src: '/images/section-images/eye-care-card-image-7.png',
            width: 360,
            height: 188
        }
    },
    {
        title: 'iCare',
        description:
            "Our specialists will measure a patient's IOP (intraocular pressure) with iCare to monitor and/or diagnose glaucoma, diabetic retinopathy and macular degeneration.",
        image: {
            src: '/images/section-images/eye-care-card-image-8.png',
            width: 360,
            height: 188
        }
    },
    {
        title: 'Slit lamp',
        description:
            'Our specialists will use slit lamps as an initial examination tool to assess the health of our patients conjunctiva, cornea, eyelids, iris, pupil, lens, sclera and retina.',
        image: {
            src: '/images/section-images/eye-care-card-image-9.png',
            width: 360,
            height: 188
        }
    }
];

/**
 * Advance eye care component created for Eye diagnostics & equipment center page
 *
 * @returns {JSX.Element}
 * @constructor
 */
const AdvanceEyeCare = (): JSX.Element => {
    return (
        <div className="grid grid-cols-1 mt-0 md:mt-12 gap-12 md:gap-x-16 md:gap-y-24 sm:grid-cols-[repeat(auto-fit,_minmax(38.3rem,_1fr))] items-stretch">
            {cardList.map((card, index) => (
                <InnerCard key={index} {...card} />
            ))}
        </div>
    );
};

export default AdvanceEyeCare;
