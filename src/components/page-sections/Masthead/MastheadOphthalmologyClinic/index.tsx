import { BreadCrumb } from '@/components/Breadcrumb';
import { Button2 } from '@/components/Buttons';
import { useReviewHook } from '@/hooks';
import mastheadImage from '@/masthead/masthead-ophthalmology-clinic.png';
import smallBg from '@/section-images/masthead-icl-mobile-bg.png';
import { openFreshdeskChat } from '@/utils/miscellaneous';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import RetinaTreatmentsContents from 'src/types/pages/retinaTreatments';
import { twMerge } from 'tailwind-merge';
import styles from './Style.module.scss';

interface MastheadOphthalmologyClinicProps extends Pick<RetinaTreatmentsContents, 'masthead'> {}

/**
 * `MastheadOphthalmologyClinic` is a React functional component that represents the masthead
 * section of the London Retina treatments website. It displays information about the clinic,
 * including the clinic name, a brief description, reviews, an image, and information about financing.
 *
 * @returns {JSX.Element} The JSX element representing the masthead section.
 */
const MastheadOphthalmologyClinic = ({ masthead }: Partial<MastheadOphthalmologyClinicProps>): JSX.Element => {
    return (
        <div className={`${styles.styles} relative grid overflow-hidden`}>
            <BreadCrumb
                className="hidden md:mt-12 md:flex xl:mt-16"
                pathClassName="!stroke-white"
                linkClassName="text-white"
            />

            <div className="grid gap-10 px-8 pt-12 pb-24 md:bg-transparent xl:pb-40 xl:pl-[calc(calc(100vw_-_var(--container-width))_/_2)]">
                <Reviews />

                <h1 className="max-w-[56rem] font-latoExtraBold text-[3.6rem] uppercase leading-[4rem] text-white md:text-[4.8rem] md:leading-[4.8rem]">
                    {masthead?.heading || 'The London Retina treatments'}
                </h1>
                <p className="-mt-4 max-w-[44rem] font-mulishBold uppercase text-[#D1E8FE]">
                    {masthead?.subheading ||
                        'We deliver personalised and effective solutions for all aspects of eye health.'}
                </p>

                <div className="mt-48 grid justify-items-center gap-10 md:mt-12 md:justify-items-start">
                    <div className="flex items-center justify-start gap-4 md:mt-12">
                        <Image src="/images/section-images/0-percent-finance.png" alt="" width={95} height={90} />
                        <span className="font-mulishBold text-[2rem] leading-[2.8rem] text-[#00BFFF]">
                            Finance available
                        </span>
                    </div>

                    <div className="grid justify-items-center gap-4 lg:grid-cols-[auto_auto]">
                        <Button2
                            type="button"
                            text="Speak to a specialist"
                            onClick={openFreshdeskChat}
                            className="sitemap-link text-center hover:!border-white"
                        />

                        <Button2
                            type="anchor"
                            text="Finance calculator"
                            link="/pricing-and-financing/financing-your-treatment#calculator"
                            title="Finance calculator"
                            className="sitemap-link border-white bg-transparent text-center text-white hover:border-white"
                        />
                    </div>
                </div>
            </div>

            <Image
                src={mastheadImage}
                alt="The London Retina treatments"
                className="absolute inset-0 -z-[1] hidden h-full min-h-[33.7rem] w-full object-cover md:row-start-1 md:block md:h-full md:w-full"
                priority
                {...masthead?.image}
            />

            <Image src={smallBg} alt={''} className="absolute inset-0 -z-[1] h-full w-full md:hidden" />

            {/* <Conditions /> */}
        </div>
    );
};

interface ReviewsProps {
    className?: string;
}

/**
 * `Reviews` is a React functional component that displays reviews and ratings for the London Retina treatments
 * website. It includes reviews from Trustpilot and Google, along with their respective ratings.
 *
 * @returns {JSX.Element} The JSX element representing the reviews section.
 */
export const Reviews = ({ className }: ReviewsProps): JSX.Element => {
    const { data, isLoading } = useReviewHook();

    return (
        <div
            className={twMerge(
                'relative z-[2] mt-6 flex flex-wrap items-stretch justify-start gap-4 self-start justify-self-start md:mt-24 md:grid md:grid-cols-2 md:items-end md:rounded-[0.5rem] md:bg-white md:px-8 md:py-2 xl:mt-24',
                className
            )}
        >
            {/* Review 1 */}
            <Link
                href="https://www.trustpilot.com/review/my-iclinic.co.uk"
                title="Trustpilot all reviews"
                target="_blank"
                className="grid grid-cols-1 place-items-center justify-items-center gap-4 rounded-[0.5rem] bg-white p-4 md:col-start-2 md:row-start-1 md:w-full md:max-w-[19.8rem] md:place-items-start md:py-4 xl:gap-2"
            >
                <span className="grid place-items-start">
                    <Image src="/images/icons/icon-trustpilot-stars.svg" alt="" width={77} height={14} quality={70} />
                </span>
                {isLoading ? (
                    <span className="flex items-center justify-center gap-2 font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                        Loading...
                    </span>
                ) : (
                    <>
                        <span className="flex items-center justify-center gap-2 font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                            {data?.trustpilot?.average || '4.9'} | {data?.trustpilot?.total || '340'}{' '}
                            <span className="hidden font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading md:block">
                                reviews
                            </span>
                        </span>
                    </>
                )}
            </Link>

            {/* Review 2 */}
            <Link
                href="https://www.google.com/search?q=my-iclinic+reviews&rlz=1C1UEAD_enBD1046BD1046&oq=my-iclinic+reviews&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIGCAEQIxgnMggIAhAAGBYYHjIICAMQABgWGB4yDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg1NjQ0ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x487619c2c545175b:0x38f89f9a0ceedc3f,1"
                target="_blank"
                title="All google reviews"
                className="grid grid-cols-[auto_1fr] items-center justify-start gap-2 rounded-[0.5rem] bg-white p-4 md:w-full md:max-w-[19.8rem] md:grid-cols-[auto_auto] md:justify-start md:gap-0 md:py-4 "
            >
                <span className="grid place-items-center">
                    <FcGoogle className="h-[2.4rem] w-[2.4rem]" />
                </span>
                <span className="hidden font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading md:block">
                    Google
                </span>
                <span className="col-span-2 flex items-center justify-center gap-2 font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                    4.9 | 93{' '}
                    <span className="hidden font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading md:block">
                        reviews
                    </span>
                </span>
            </Link>
        </div>
    );
};

// const conditionsList = [
//     {
//         title: 'Cataracts',
//         icon: '/images/icons/icon-diabetic-retinopathy.svg',
//         className: 'bg-[#1D4C96]'
//     },
//     {
//         title: 'Glaucoma',
//         icon: '/images/icons/icon-glaucoma.svg',
//         className: 'bg-[#2357A9]'
//     },
//     {
//         title: 'Diabetic retinopathy',
//         icon: '/images/icons/icon-diabetic-retinopathy.svg',
//         className: 'bg-[#326CC7]'
//     },
//     {
//         title: 'Macular degeneration',
//         icon: '/images/icons/icon-macular-degeneration.svg',
//         className: 'bg-[#3D7DE2]'
//     },
//     {
//         title: 'Corneal diseases',
//         icon: '/images/icons/icon-corneal-diseases.svg',
//         className: 'bg-[#5094FE]'
//     }
// ];

/**
 * `Conditions` is a React functional component that displays information about a wide range of medical conditions
 * addressed by the London Retina treatments. It provides a visual representation of these conditions, including
 * their icons and titles, grouped in a grid format.
 *
 * @returns {JSX.Element} The JSX element representing the conditions section.
 */
// const Conditions = (): JSX.Element => {
//     return (
//         <div
//             className="-mt-36 grid gap-12 md:mt-12 md:translate-y-0 md:grid-cols-[auto_1fr] md:gap-0 lg:mt-24 xl:mt-32 xl:grid-cols-[auto_1fr_1fr]">
//             <span
//                 className="px-8 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white md:bg-[#003E79] md:py-24 md:text-[2.4rem] md:leading-[3.2rem] lg:px-16 xl:pl-[calc(calc(100vw_-_var(--container-width))_/_2)]">
//                 We address a wide range <br/>
//                 <span
//                     className="flex items-center justify-start gap-4 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white md:text-[2.4rem] md:leading-[3.2rem]">
//                     of conditions
//                     <AiOutlineArrowDown
//                         fill="white"
//                         className="h-8 w-8 md:h-10 md:w-10 md:translate-y-1 md:-rotate-90"
//                     />
//                 </span>
//             </span>
//
//             <div className="grid grid-cols-3">
//                 {conditionsList.slice(0, 3).map((item, key) => (
//                     <div
//                         className={`condition-card condition-card-${
//                             key + 1
//                         } grid -translate-x-8 place-items-center content-center opacity-0 ${item.className}  py-4 px-6`}
//                         key={key}
//                     >
//                         <Image src={item.icon} alt="" width={49} height={49}/>
//                         <span className="text-center font-mulishBold text-white">{item.title}</span>
//                     </div>
//                 ))}
//             </div>
//
//             <div className="-mt-12 grid grid-cols-2 md:col-span-2 md:mt-0 xl:col-span-1">
//                 {conditionsList.slice(3, 5).map((item, key) => (
//                     <div
//                         className={`condition-card condition-card-${
//                             key + 4
//                         } grid -translate-x-8 place-items-center content-center opacity-0 ${
//                             item.className
//                         } py-4 px-6 md:py-12`}
//                         key={key}
//                     >
//                         <Image src={item.icon} alt="" width={49} height={49}/>
//                         <span className="text-center font-mulishBold text-white">{item.title}</span>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

export default MastheadOphthalmologyClinic;
