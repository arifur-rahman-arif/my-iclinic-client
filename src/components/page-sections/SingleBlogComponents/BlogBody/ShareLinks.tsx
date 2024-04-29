import { copyToClipboard } from '@/utils/miscellaneous';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { twMerge } from 'tailwind-merge';

interface ShareLinksProps {
    className?: string;
    disableLabel?: boolean;
    whiteIcon?: boolean;
    siteUrl?: string;
}

/**
 * Social sharing links component
 *
 * @param {string} linkedin
 * @param {string} twitter
 * @param {string} postLink
 * @param {string} facebook
 * @returns {JSX.Element}
 * @constructor
 */
const ShareLinks = ({ className, disableLabel, whiteIcon, siteUrl }: ShareLinksProps): JSX.Element => {
    const router = useRouter();

    siteUrl = siteUrl || `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/articles/${router.query.slug}`;

    return (
        <div className={twMerge('flex flex-wrap items-center gap-8 md:flex-col', className)}>
            {!disableLabel && (
                <span className="font-mulishBold text-[2rem] leading-[2.8rem] text-heading md:mb-4">Share</span>
            )}

            <Link
                href="#"
                className="cursor-pointer transition-all duration-500 hover:scale-150"
                onClick={(e) => {
                    e.preventDefault();
                    window.open(
                        `https://www.linkedin.com/sharing/share-offsite/?url=${siteUrl}`,
                        'linkedin-share-dialog',
                        'width=700,height=500'
                    );
                    return false;
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[2.2rem] w-[2.2rem]"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                >
                    <path
                        d="M14.667 7.33325C16.1257 7.33325 17.5246 7.91271 18.5561 8.94416C19.5875 9.97562 20.167 11.3746 20.167 12.8333V19.2499H16.5003V12.8333C16.5003 12.347 16.3072 11.8807 15.9634 11.5369C15.6195 11.1931 15.1532 10.9999 14.667 10.9999C14.1808 10.9999 13.7144 11.1931 13.3706 11.5369C13.0268 11.8807 12.8337 12.347 12.8337 12.8333V19.2499H9.16699V12.8333C9.16699 11.3746 9.74645 9.97562 10.7779 8.94416C11.8094 7.91271 13.2083 7.33325 14.667 7.33325Z"
                        stroke={whiteIcon ? '#fff' : '#404A4D'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5.49967 8.25H1.83301V19.25H5.49967V8.25Z"
                        stroke={whiteIcon ? '#fff' : '#404A4D'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3.66634 5.49992C4.67886 5.49992 5.49967 4.67911 5.49967 3.66659C5.49967 2.65406 4.67886 1.83325 3.66634 1.83325C2.65382 1.83325 1.83301 2.65406 1.83301 3.66659C1.83301 4.67911 2.65382 5.49992 3.66634 5.49992Z"
                        stroke={whiteIcon ? '#fff' : '#404A4D'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Link>
            <Link
                href={'#'}
                className="cursor-pointer transition-all duration-500 hover:scale-150"
                onClick={(e) => {
                    e.preventDefault();
                    window.open(
                        `https://twitter.com/intent/tweet?url=${siteUrl}`,
                        'linkedin-share-dialog',
                        'width=700,height=500'
                    );
                    return false;
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[2.2rem] w-[2.2rem]"
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                >
                    <path
                        d="M21 1.00897C20.1294 1.61128 19.1656 2.07195 18.1455 2.37324C17.5979 1.75576 16.8703 1.3181 16.0609 1.11947C15.2516 0.920833 14.3995 0.970799 13.6201 1.26261C12.8406 1.55442 12.1713 2.07399 11.7027 2.75105C11.2341 3.42812 10.9888 4.23001 11 5.04827V5.93995C9.40239 5.98058 7.81934 5.63305 6.39183 4.92829C4.96431 4.22354 3.73665 3.18345 2.81818 1.90065C2.81818 1.90065 -0.818182 9.92575 7.36364 13.4925C5.49139 14.739 3.26105 15.364 1 15.2758C9.18182 19.7342 19.1818 15.2758 19.1818 5.02152C19.181 4.77315 19.1566 4.52539 19.1091 4.28143C20.0369 3.38395 20.6917 2.25082 21 1.00897Z"
                        stroke={whiteIcon ? '#fff' : '#404A4D'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Link>
            <button
                className="cursor-pointer transition-all duration-500 hover:scale-150"
                onClick={() => {
                    copyToClipboard(`${siteUrl}`).then(() => {
                        alert('Link copied to your clipboard');
                    });
                }}
            >
                <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[2.2rem] w-[2.2rem]"
                >
                    <path
                        d="M15.75 7C17.1997 7 18.375 5.82475 18.375 4.375C18.375 2.92525 17.1997 1.75 15.75 1.75C14.3003 1.75 13.125 2.92525 13.125 4.375C13.125 5.82475 14.3003 7 15.75 7Z"
                        stroke={whiteIcon ? '#fff' : '#404A4D'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5.25 13.125C6.69975 13.125 7.875 11.9497 7.875 10.5C7.875 9.05025 6.69975 7.875 5.25 7.875C3.80025 7.875 2.625 9.05025 2.625 10.5C2.625 11.9497 3.80025 13.125 5.25 13.125Z"
                        stroke={whiteIcon ? '#fff' : '#404A4D'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15.75 19.25C17.1997 19.25 18.375 18.0747 18.375 16.625C18.375 15.1753 17.1997 14 15.75 14C14.3003 14 13.125 15.1753 13.125 16.625C13.125 18.0747 14.3003 19.25 15.75 19.25Z"
                        stroke={whiteIcon ? '#fff' : '#404A4D'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7.51562 11.8213L13.4919 15.3038"
                        stroke={whiteIcon ? '#fff' : '#404A4D'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13.4831 5.69629L7.51562 9.17879"
                        stroke={whiteIcon ? '#fff' : '#404A4D'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <Link
                href={'#'}
                className="cursor-pointer transition-all duration-500 hover:scale-150"
                onClick={(e) => {
                    e.preventDefault();
                    window.open(
                        `https://www.facebook.com/sharer.php?u=${siteUrl}`,
                        'facebook-share-dialog',
                        'width=700,height=500'
                    );
                    return false;
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    className="h-[2.6rem] w-[2.6rem]"
                >
                    <path
                        d="M19.2503 2.16663H16.1253C14.744 2.16663 13.4192 2.73731 12.4425 3.75313C11.4657 4.76895 10.917 6.1467 10.917 7.58329V10.8333H7.79199V15.1666H10.917V23.8333H15.0837V15.1666H18.2087L19.2503 10.8333H15.0837V7.58329C15.0837 7.29597 15.1934 7.02042 15.3888 6.81726C15.5841 6.6141 15.8491 6.49996 16.1253 6.49996H19.2503V2.16663Z"
                        stroke={whiteIcon ? '#fff' : '#404A4D'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Link>
        </div>
    );
};

export default ShareLinks;
