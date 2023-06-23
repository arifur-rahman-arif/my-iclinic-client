import ShareLinks from '@/page-sections/SingleBlogComponents/BlogBody/ShareLinks';
import { Context } from '@/page-sections/SuggestionEngine/Context';
import Link from 'next/link';
import { useContext } from 'react';
import { AiOutlineCheck, AiOutlineCloseCircle } from 'react-icons/ai';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import styles from './styles/PanelReveal.module.scss';

/**
 * Thank you component
 * @returns {JSX.Element}
 * @constructor
 */
const ThankYou = (): JSX.Element => {
    const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/suggestion-engine`;
    const ctx = useContext(Context);

    return (
        <div
            className={`${styles.styles} grid h-full w-full place-items-center px-8 py-12 sm:px-12 md:px-24 md:py-24 xl:px-40`}
        >
            <button
                className="absolute top-0 right-0 -translate-x-16 translate-y-16"
                title="Restart"
                onClick={ctx.resetAllRouteSteps}
            >
                <AiOutlineCloseCircle className="h-16 w-16 fill-[#0186B0]" />
            </button>

            <div className="grid h-full place-items-center content-center gap-12">
                <AiOutlineCheck className="h-16 w-16 fill-[#0186B0]" />

                <span className="font-latoBold text-[3.6rem] leading-[4rem] text-white">Thank you!</span>
                <p className="max-w-[40.6rem] text-center text-[1.6rem] text-white">
                    We will be very happy to book your free suitability.
                </p>

                <Link
                    href="/"
                    aria-label="Home"
                    className="flex items-center justify-center gap-4 rounded-primary border-2 border-heading2 bg-heading2 py-5 px-20 font-mulishMedium text-[1.6rem] leading-[2.8rem] text-white transition-all duration-500 hover:border-white hover:bg-transparent md:mt-12"
                >
                    <MdOutlineRemoveRedEye className="h-[2.4rem] w-[2.4rem] fill-white" />
                    Go to home page
                </Link>

                <div className="grid place-items-center gap-12 md:mt-12">
                    <p className="font-mulishBold text-[1.6rem] text-white">
                        Share our free screening test with your friends{' '}
                    </p>

                    <ShareLinks className="md:flex-row" disableLabel whiteIcon siteUrl={shareUrl} />
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
