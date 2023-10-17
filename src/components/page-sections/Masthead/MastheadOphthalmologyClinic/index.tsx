import { BreadCrumb } from '@/components/Breadcrumb';
import Image from 'next/image';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import mastheadImage from '@/masthead/masthead-ophthalmology-clinic.png';
import styles from './Style.module.scss';

/**
 * `MastheadOphthalmologyClinic` is a React functional component that represents the masthead
 * section of the London Retina treatments website. It displays information about the clinic,
 * including the clinic name, a brief description, reviews, an image, and information about financing.
 *
 * @returns {JSX.Element} The JSX element representing the masthead section.
 */
const MastheadOphthalmologyClinic = (): JSX.Element => {
    return (
        <div className={`${styles.styles} relative grid overflow-hidden`}>
            <BreadCrumb
                className="hidden md:mt-12 md:flex xl:mt-16"
                pathClassName="!stroke-white"
                linkClassName="text-white"
            />

            <div
                className="grid gap-6 bg-[#0052A0] px-8 py-12 md:bg-transparent xl:pl-[calc(calc(100vw_-_var(--container-width))_/_2)]">
                <h1 className="max-w-[56rem] font-latoExtraBold text-[3.6rem] normal-case leading-[4rem] text-white md:text-[4.8rem] md:leading-[4.8rem]">
                    The London Retina treatments
                </h1>
                <p className="max-w-[44rem] font-mulishBold uppercase text-[#D1E8FE]">
                    We deliver personalised and effective solutions for all aspects of eye health.
                </p>
                <div className="flex items-center justify-start gap-4 md:mt-12 xl:mt-20">
                    <Image src="/images/section-images/0-percent-finance.png" alt="" width={95} height={90}/>
                    <span className="font-mulishBold text-[2rem] leading-[2.8rem] text-[#00BFFF]">
                        Finance available
                    </span>
                </div>
            </div>

            <Reviews/>

            <Image
                src={mastheadImage}
                alt="The London Retina treatments"
                className="col-start-1 row-start-2 min-h-[33.7rem] object-cover md:absolute md:top-0 md:right-0 md:-z-[1] md:row-start-1 md:h-full md:w-full"
                priority
            />

            <Conditions/>
        </div>
    );
};

/**
 * `Reviews` is a React functional component that displays reviews and ratings for the London Retina treatments
 * website. It includes reviews from Trustpilot and Google, along with their respective ratings.
 *
 * @returns {JSX.Element} The JSX element representing the reviews section.
 */
const Reviews = (): JSX.Element => {
    return (
        <div
            className="relative z-[2] col-start-1 row-start-2 mt-6 flex flex-wrap items-stretch justify-start gap-4 self-start justify-self-start pl-8 md:row-start-2 md:mt-24 md:ml-8 md:grid md:grid-cols-2 md:items-end md:rounded-[0.5rem] md:bg-white md:px-8 md:py-2 xl:mt-32 xl:ml-[calc(calc(100vw_-_var(--container-width))_/_2)]">
            {/* Review 1 */}
            <div
                className="grid grid-cols-1 place-items-center gap-4 rounded-[0.5rem] bg-white p-4 md:col-start-2 md:row-start-1 md:w-full md:max-w-[19.8rem] md:place-items-start md:py-4 xl:gap-2">
                <span className="grid place-items-start">
                    <Image src="/images/icons/icon-trustpilot-stars.svg" alt="" width={77} height={14} quality={70}/>
                </span>
                <span
                    className="flex items-center justify-center gap-2 font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                    4.8 | 315{' '}
                    <span
                        className="hidden font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading md:block">
                        reviews
                    </span>
                </span>
            </div>

            {/* Review 2 */}
            <div
                className="grid grid-cols-[auto_1fr] items-center justify-start gap-2 rounded-[0.5rem] bg-white p-4 md:w-full md:max-w-[19.8rem] md:grid-cols-[auto_auto] md:justify-start md:gap-0 md:py-4 ">
                <span className="grid place-items-center">
                    <FcGoogle className="h-[2.4rem] w-[2.4rem]"/>
                </span>
                <span
                    className="hidden font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading md:block">
                    Google
                </span>
                <span
                    className="col-span-2 flex items-center justify-center gap-2 font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                    4.8 | 35{' '}
                    <span
                        className="hidden font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading md:block">
                        reviews
                    </span>
                </span>
            </div>
        </div>
    );
};

const conditionsList = [
    {
        title: 'Cataracts',
        icon: '/images/icons/icon-diabetic-retinopathy.svg',
        className: 'bg-[#1D4C96]'
    },
    {
        title: 'Glaucoma',
        icon: '/images/icons/icon-glaucoma.svg',
        className: 'bg-[#2357A9]'
    },
    {
        title: 'Diabetic retinopathy',
        icon: '/images/icons/icon-diabetic-retinopathy.svg',
        className: 'bg-[#326CC7]'
    },
    {
        title: 'Macular degeneration',
        icon: '/images/icons/icon-macular-degeneration.svg',
        className: 'bg-[#3D7DE2]'
    },
    {
        title: 'Corneal diseases',
        icon: '/images/icons/icon-corneal-diseases.svg',
        className: 'bg-[#5094FE]'
    }
];

/**
 * `Conditions` is a React functional component that displays information about a wide range of medical conditions
 * addressed by the London Retina treatments. It provides a visual representation of these conditions, including
 * their icons and titles, grouped in a grid format.
 *
 * @returns {JSX.Element} The JSX element representing the conditions section.
 */
const Conditions = (): JSX.Element => {
    return (
        <div
            className="-mt-36 grid gap-12 md:mt-12 md:translate-y-0 md:grid-cols-[auto_1fr] md:gap-0 lg:mt-24 xl:mt-32 xl:grid-cols-[auto_1fr_1fr]">
            <span
                className="px-8 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white md:bg-[#003E79] md:py-24 md:text-[2.4rem] md:leading-[3.2rem] lg:px-16 xl:pl-[calc(calc(100vw_-_var(--container-width))_/_2)]">
                We address a wide range <br/>
                <span
                    className="flex items-center justify-start gap-4 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white md:text-[2.4rem] md:leading-[3.2rem]">
                    of conditions
                    <AiOutlineArrowDown
                        fill="white"
                        className="h-8 w-8 md:h-10 md:w-10 md:translate-y-1 md:-rotate-90"
                    />
                </span>
            </span>

            <div className="grid grid-cols-3">
                {conditionsList.slice(0, 3).map((item, key) => (
                    <div
                        className={`condition-card condition-card-${
                            key + 1
                        } grid -translate-x-8 place-items-center content-center opacity-0 ${item.className}  py-4 px-6`}
                        key={key}
                    >
                        <Image src={item.icon} alt="" width={49} height={49}/>
                        <span className="text-center font-mulishBold text-white">{item.title}</span>
                    </div>
                ))}
            </div>

            <div className="-mt-12 grid grid-cols-2 md:col-span-2 md:mt-0 xl:col-span-1">
                {conditionsList.slice(3, 5).map((item, key) => (
                    <div
                        className={`condition-card condition-card-${
                            key + 4
                        } grid -translate-x-8 place-items-center content-center opacity-0 ${
                            item.className
                        } py-4 px-6 md:py-12`}
                        key={key}
                    >
                        <Image src={item.icon} alt="" width={49} height={49}/>
                        <span className="text-center font-mulishBold text-white">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MastheadOphthalmologyClinic;
