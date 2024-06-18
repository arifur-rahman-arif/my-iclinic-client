import RequestCallback from '@/page-sections/RequestCallback/RequestCallback';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { twMerge } from 'tailwind-merge';

interface ABTestMastheadProps {
    image?: string;
    speakToSpecialistClass?: string;
}

/**
 * Masthead of ICL page
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ABTestMasthead = ({ image, speakToSpecialistClass }: ABTestMastheadProps): JSX.Element => {
    return (
        <main className="grid">
            <div className="relative z-[2] grid place-items-center content-start px-8 pb-[40rem] pt-20 md:pt-[15rem] xl:min-h-[80rem] xl:pt-[20rem]">
                <Image
                    src={image || '/images/masthead/masthead-icl-a-bg.webp'}
                    alt="ICL"
                    fill={true}
                    priority
                    className="absolute left-0 top-0 z-[-1] h-full w-full object-cover"
                />
                <h1 className="max-w-[30.2rem] text-center font-latoBold text-[4.8rem] leading-[4.8rem] text-white xl:max-w-[56rem] xl:text-[6.4rem] xl:leading-[6.4rem]">
                    Experience The Freedom with ICL
                </h1>
                <h2 className="mt-6 max-w-[66.6rem] text-center font-latoBold text-[2rem] uppercase leading-[2.8rem] text-white md:text-[2.4rem] md:leading-[3.2rem]">
                    Implantable Collamer Lenses for a Life Without The Hassles of Glasses & contact lenses
                </h2>

                <GoogleReviews />
            </div>

            <div className="relative z-[3] -mt-[30rem] grid content-start gap-8 px-4 xl:-mt-[43rem]">
                <p className="text-center font-latoBold text-[3rem] leading-[3.6rem] text-white md:text-[3.6rem] md:leading-[4rem] xl:mt-[11rem]">
                    <span className="font-latoBold text-[3rem] leading-[3.6rem] text-[#FF7F00] md:text-[3.6rem] md:leading-[4rem]">
                        0% interest
                    </span>
                    <br /> 24 months finance
                </p>

                <div className="grid">
                    <span
                        className={twMerge(
                            'mx-8 w-full max-w-[calc(100%_-_4rem)] justify-self-center rounded-tl-primary rounded-tr-primary bg-[#003E79] px-8 py-4 text-center font-latoBold text-[2.4rem] leading-[3.6rem] text-white xs:max-w-[37.4rem] xs:px-12 xs:text-[3rem]',
                            speakToSpecialistClass
                        )}
                    >
                        Speak to a specialist
                    </span>

                    <RequestCallback />
                </div>
            </div>
        </main>
    );
};

export default ABTestMasthead;

/**
 * Reviews
 *
 * @returns {JSX.Element}
 * @constructor
 */
const GoogleReviews = (): JSX.Element => {
    return (
        <div className="absolute bottom-0 left-0 ml-24 hidden items-end justify-start gap-8 rounded-tl-[1rem] rounded-tr-[1rem] bg-white px-12 py-8 xl:flex 2xl:ml-[9rem]">
            {/* Review 1 */}
            <div className="grid grid-cols-[auto_1fr] items-center justify-start gap-2">
                <span className="grid place-items-center">
                    <FcGoogle className="h-[2.4rem] w-[2.4rem]" />
                </span>
                <span className="font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                    Google
                </span>
                <span className="col-span-2 font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                    4.8 | 35 reviews
                </span>
            </div>
            {/* Review 2 */}
            <div className="grid grid-cols-1 items-center justify-start gap-2">
                <span className="grid place-items-start">
                    <Image src="/images/icons/icon-trustpilot-stars.svg" alt="" width={77} height={14} quality={70} />
                </span>
                <span className="font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                    Trust Pilot
                </span>
                <span className="font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                    4.8 | 315 reviews
                </span>
            </div>
        </div>
    );
};
