import ShareLinks from '@/page-sections/SingleBlogComponents/BlogBody/ShareLinks';
import Link from 'next/link';
import { AiOutlineCheck } from 'react-icons/ai';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import styles from './styles/PanelReveal.module.scss';

/**
 * Thank you component
 * @returns {JSX.Element}
 * @constructor
 */
const ThankYou = (): JSX.Element => {
    const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/suggestion-engine`;
    
    return (
        <div
            className={`${styles.styles} grid h-full w-full place-items-center px-12 md:px-24 xl:px-40 py-12 md:py-24`}>
            <div className="grid h-full place-items-center content-center gap-12">
                <AiOutlineCheck className="fill-[#0186B0] w-[6.8rem] h-[6.8rem]" />
                <span className="text-white font-latoBold text-[3.6rem] leading-[4rem]">Thank you!</span>
                <p className="text-[1.6rem] text-white max-w-[40.6rem] text-center">
                    We will be very happy to book your free suitability check in 3 months’ time.
                </p>
                
                <Link href="/" aria-label="Home"
                      className="rounded-primary md:mt-12 border-2 border-heading2 gap-4 bg-heading2 py-5 px-20 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white transition-all duration-500 hover:border-white hover:bg-transparent flex items-center justify-center">
                    <MdOutlineRemoveRedEye className="fill-white w-[2.4rem] h-[2.4rem]" />
                    Go to home page
                </Link>
                
                <div className="grid gap-12 place-items-center md:mt-12">
                    <p className="text-white font-mulishBold text-[1.8rem]">Share our free screening test with your
                        friends </p>
                    
                    <ShareLinks className="md:flex-row" disableLabel whiteIcon siteUrl={shareUrl} />
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
