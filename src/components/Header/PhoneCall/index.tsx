import Tooltip from '@/components/Tooltip/Tooltip';
import Link from 'next/link';

/**
 * Phone call component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const PhoneCall = () => {
    return (
        <div className={`group/wrapper rela flex h-20 w-20 flex-nowrap items-center justify-start`}>
            <Tooltip
                text={
                    <div className="grid justify-items-center gap-3 px-6 py-3">
                        <span className="whitespace-nowrap font-mulishMedium text-[1.4rem] leading-[1.8rem] text-[#384043]">
                            Click to call
                        </span>
                        <Link
                            href="tel:0208 445 8877"
                            className="whitespace-nowrap font-mulishBold text-[1.6rem] leading-[2.4rem] text-heading"
                        >
                            +44 20 8445 8877
                        </Link>
                    </div>
                }
                className=""
            >
                <Link
                    href="tel:0208 445 8877"
                    className="group/phone grid h-[5rem] w-[5rem] cursor-pointer place-items-center rounded-full border-2 border-transparent bg-heading2 transition-all duration-500 hover:border-heading2 hover:bg-transparent"
                >
                    <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_10615_53300)">
                            <path
                                d="M24.0331 18.8334C24.6843 18.9605 25.2827 19.2789 25.7518 19.748C26.221 20.2172 26.5394 20.8156 26.6665 21.4667M24.0331 16.1667C25.386 16.317 26.6475 16.9229 27.6106 17.8848C28.5737 18.8466 29.1811 20.1074 29.3331 21.4601M28.6665 26.7801V28.7801C28.6672 28.9657 28.6292 29.1495 28.5548 29.3196C28.4804 29.4898 28.3713 29.6425 28.2345 29.768C28.0977 29.8935 27.9362 29.9891 27.7603 30.0486C27.5844 30.108 27.398 30.1301 27.2131 30.1134C25.1617 29.8905 23.1911 29.1895 21.4598 28.0667C19.849 27.0432 18.4834 25.6775 17.4598 24.0667C16.3331 22.3276 15.632 20.3474 15.4131 18.2867C15.3965 18.1024 15.4184 17.9166 15.4775 17.7412C15.5365 17.5657 15.6315 17.4045 15.7563 17.2678C15.8811 17.1311 16.033 17.0219 16.2023 16.9471C16.3716 16.8723 16.5547 16.8336 16.7398 16.8334H18.7398C19.0633 16.8302 19.377 16.9448 19.6223 17.1558C19.8676 17.3667 20.0278 17.6597 20.0731 17.9801C20.1575 18.6201 20.3141 19.2486 20.5398 19.8534C20.6295 20.092 20.6489 20.3514 20.5957 20.6007C20.5426 20.85 20.419 21.0788 20.2398 21.2601L19.3931 22.1067C20.3422 23.7758 21.7241 25.1577 23.3931 26.1067L24.2398 25.2601C24.4211 25.0808 24.6499 24.9573 24.8992 24.9041C25.1485 24.851 25.4078 24.8704 25.6465 24.9601C26.2513 25.1858 26.8797 25.3423 27.5198 25.4267C27.8436 25.4724 28.1394 25.6356 28.3508 25.8851C28.5622 26.1346 28.6746 26.4531 28.6665 26.7801Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/phone:stroke-heading2"
                            />
                        </g>
                        <clipPath id="clip0_10615_53300">
                            <rect width="16" height="16" fill="white" transform="translate(14 15.5)" />
                        </clipPath>
                    </svg>
                </Link>
            </Tooltip>

            {/* <div className="flex items-center justify-center gap-2"> */}
            {/*     {[...Array(5)].map((item, index) => ( */}
            {/*         <span key={index} className="block h-[0.7rem] w-[0.7rem] rounded-full bg-heading2"></span> */}
            {/*     ))} */}
            {/* </div> */}

            {/* <Link */}
            {/*     href="tel:0208 445 8877" */}
            {/*     className="whitespace-nowrap font-mulishBold text-[1.6rem] leading-[2.4rem] text-heading" */}
            {/* > */}
            {/*     0208 445 8877 */}
            {/* </Link> */}
        </div>
    );
};

export default PhoneCall;
