import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image';

/**
 * Banner component for the masthead
 *
 * @returns {*}  {JSX.Element}
 */
const Banner = (): JSX.Element => {
    return (
        <div className="grid w-full grid-cols-1 items-start justify-start gap-12 rounded-primary bg-white p-12 md:max-w-[60.5rem] md:grid-cols-[auto_1fr]">
            {/* Reviews */}
            <div className="flex flex-wrap items-center justify-start gap-8 md:col-start-2 md:row-start-2 md:justify-end">
                {/* Review 1 */}
                <div className="grid grid-cols-[auto_1fr] items-center justify-start gap-2">
                    <span className="grid place-items-center">
                        <FcGoogle className="h-[2.4rem] w-[2.4rem]" />
                    </span>
                    <span className="font-mulishBold text-[1.4rem] font-extrabold uppercase leading-[1.4rem]">
                        Google
                    </span>
                    <span className="col-span-2 font-mulishBold font-extrabold uppercase">4.8 | 35 review</span>
                </div>
                {/* Review 2 */}
                <div className="grid grid-cols-1 items-center justify-start gap-2">
                    <span className="grid place-items-start">
                        <Image
                            src="/images/icons/icon-trustpilot-stars.svg"
                            alt=""
                            width={77}
                            height={14}
                            quality={20}
                        />
                    </span>
                    <span className="font-mulishBold text-[1.4rem] font-extrabold uppercase leading-[1.4rem]">
                        Trust Pilot
                    </span>
                    <span className="font-mulishBold font-extrabold uppercase">4.8 | 315 review</span>
                </div>
            </div>
            {/* Headings */}
            <div className="grid w-full max-w-[46.3rem] grid-cols-1 gap-6 md:col-span-2 md:gap-12">
                <h1>
                    Presbyound Laser
                    <br />
                    Treatment London
                </h1>
                <h2 className="text-heading2">Correct your vision and say Goodbye to reading glasses</h2>
                <Image
                    src="/images/icons/icon-pin-yellow.svg"
                    quality={10}
                    width={150}
                    height={2}
                    alt=""
                    className="md:hidden md:h-auto"
                />
            </div>
            {/* Price */}
            <div className="flex items-center justify-start gap-4 md:self-center">
                <span className="bg-secondary2 block h-[2.4rem] w-2"></span>
                <span className="font-latoBold text-[2rem] leading-[2.4rem] text-heading2 md:text-[2.4rem] md:uppercase md:leading-[2.4rem]">
                    £2,400 per eye
                </span>
            </div>
        </div>
    );
};

export default Banner;
