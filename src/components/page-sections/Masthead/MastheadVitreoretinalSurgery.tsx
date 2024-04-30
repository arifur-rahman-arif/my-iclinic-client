import { BreadCrumb } from '@/components/Breadcrumb';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';
import Image from 'next/image';
import Link from 'next/link';
import VitreoretinalSurgeryContent from 'src/types/pages/vitreoretinal-surgery';

interface Masthead3Props extends Partial<Pick<VitreoretinalSurgeryContent, 'masthead'>> {}

/**
 * Masthead component
 *
 * @param {{heading: string, subheading: string, description: string, image: {url: string, width: number, height: number, alt: string}} | undefined} masthead
 * @returns {JSX.Element}
 * @constructor
 */
const MastheadVitreoretinalSurgery = ({ masthead }: Masthead3Props): JSX.Element => {
    return (
        <div className="relative">
            <Image
                src="/images/masthead/vitreoretinal-surgery-bg.webp"
                alt=""
                fill
                className="absolute left-0 top-0 -z-[1] h-full w-full"
            />

            <BreadCrumb
                className="mt-0 hidden pt-20 md:flex"
                linkClassName="text-white"
                activeLinkClass="text-[#94CAFF]"
            />

            <div className="grid gap-8 pt-16 md:grid-cols-2 xl:grid-cols-2 xl:pl-[calc(calc(100vw_-_var(--container-width))_/_2)] xl:pt-0">
                <div className="grid content-center gap-6 px-8 md:pb-24 xl:px-0">
                    <BreadCrumb className="mt-0 !px-0 md:hidden" linkClassName="text-white" />

                    <h1 className="font-latoExtraBold text-[3.6rem] uppercase leading-[4rem] text-white md:text-[4.8rem] md:leading-[4.8rem]">
                        {masthead?.heading}
                    </h1>
                    <p className="font-mulishBold uppercase text-[#95ABED]">{masthead?.subheading}</p>
                    <p className="mt-6 max-w-[32rem] font-mulishRegular text-white md:max-w-[47.6rem]">
                        {stripInitialTags(masthead?.description || '')}
                    </p>

                    <div className="mt-16 flex flex-wrap items-center justify-start gap-12">
                        <button
                            onClick={openFreshdeskChat}
                            className="rounded-[0.5rem] border border-solid border-white px-10 py-5 font-mulishBold text-white transition-all duration-500 hover:border-[#0099FF] hover:bg-white hover:text-[#0099FF]"
                        >
                            Let`s connect
                        </button>

                        <SocialLinks />
                    </div>
                </div>

                {masthead?.image ? (
                    <Image
                        src={masthead.image.url}
                        {...masthead.image}
                        className="max-h-[31.1rem] max-w-[22.1rem] self-end justify-self-end md:max-h-full md:max-w-full"
                    />
                ) : null}
            </div>
        </div>
    );
};

export default MastheadVitreoretinalSurgery;

/**
 * Social share link component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const SocialLinks = (): JSX.Element => {
    return (
        <div className="flex items-center justify-start gap-8 md:gap-4 lg:gap-8">
            <Link
                href="https://www.linkedin.com/in/yvonne-luo-55aab422/"
                target="_blank"
                className="cursor-pointer transition-all duration-500 hover:scale-150"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                    <path
                        d="M15.1667 7.33331C16.6253 7.33331 18.0243 7.91278 19.0557 8.94423C20.0872 9.97568 20.6667 11.3746 20.6667 12.8333V19.25H17V12.8333C17 12.3471 16.8068 11.8808 16.463 11.537C16.1192 11.1931 15.6529 11 15.1667 11C14.6804 11 14.2141 11.1931 13.8703 11.537C13.5265 11.8808 13.3333 12.3471 13.3333 12.8333V19.25H9.66666V12.8333C9.66666 11.3746 10.2461 9.97568 11.2776 8.94423C12.309 7.91278 13.708 7.33331 15.1667 7.33331Z"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.00001 8.25H2.33334V19.25H6.00001V8.25Z"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4.16668 5.49998C5.1792 5.49998 6.00001 4.67917 6.00001 3.66665C6.00001 2.65412 5.1792 1.83331 4.16668 1.83331C3.15415 1.83331 2.33334 2.65412 2.33334 3.66665C2.33334 4.67917 3.15415 5.49998 4.16668 5.49998Z"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Link>
            {/* <Link href={'#'} target="_blank" className="cursor-pointer transition-all duration-500 hover:scale-150"> */}
            {/*     <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
            {/*         <g clipPath="url(#clip0_1658_5994)"> */}
            {/*             <path */}
            {/*                 d="M14.7041 3.55265C15.8402 3.55265 16.8659 4.01748 17.5885 4.76377C18.4874 4.58983 19.3347 4.27289 20.0961 3.83392C19.8015 4.72838 19.1749 5.47877 18.3599 5.95348C19.1574 5.85964 19.9208 5.65477 20.6293 5.34848C20.0982 6.11642 19.4296 6.79258 18.6576 7.33295C18.6648 7.49692 18.6689 7.66261 18.6689 7.82759C18.6689 12.8921 14.6941 18.7334 7.42589 18.7334C5.19496 18.7334 3.11699 18.0968 1.36938 17.0098C1.68202 17.0462 1.99651 17.0643 2.31126 17.0641C4.16235 17.0641 5.86699 16.4519 7.21964 15.4227C5.48955 15.3932 4.0293 14.2839 3.52846 12.7621C3.77375 12.808 4.02277 12.8312 4.27233 12.8312C4.63155 12.8312 4.98149 12.7848 5.31218 12.6968C3.50474 12.3458 2.14246 10.7965 2.14246 8.93852V8.88939C2.67561 9.17676 3.28439 9.34932 3.93305 9.36926C2.87224 8.68105 2.17477 7.50958 2.17477 6.17959C2.17477 5.47662 2.37004 4.81799 2.71001 4.2539C4.65838 6.57146 7.56995 8.09771 10.8545 8.25824C10.7867 7.97841 10.7517 7.6828 10.7517 7.38546C10.7517 5.2683 12.521 3.55265 14.7041 3.55265ZM20.6293 5.34919H20.6327H20.6293ZM14.704 2.17773C12.0042 2.17773 9.76752 4.15019 9.42306 6.69876C7.21412 6.25497 5.20525 5.08554 3.76184 3.36988C3.63281 3.21639 3.47176 3.09297 3.28999 3.0083C3.10822 2.92363 2.91013 2.87974 2.7096 2.87971C2.67359 2.87972 2.63759 2.8811 2.60169 2.88384C2.38374 2.90129 2.17307 2.97038 1.98711 3.08539C1.80116 3.20039 1.64525 3.35801 1.53228 3.54521C1.05291 4.34061 0.799632 5.25172 0.799726 6.1804C0.799726 6.80018 0.91108 7.40381 1.12216 7.96825C0.897351 8.21815 0.767757 8.54506 0.767757 8.89018V8.93934C0.767757 10.2862 1.30023 11.536 2.18435 12.4727C2.13348 12.7086 2.14482 12.9554 2.22251 13.1919C2.52744 14.1196 3.08259 14.9192 3.8024 15.5283C3.31907 15.6359 2.82031 15.6902 2.31119 15.6902C2.04204 15.6902 1.7801 15.6754 1.53226 15.6452C1.47726 15.6383 1.42294 15.6359 1.36829 15.6359C0.790789 15.6359 0.26657 15.9999 0.0720073 16.5551C-0.141461 17.1635 0.0954038 17.838 0.642632 18.1786C2.67353 19.4423 5.01926 20.1095 7.42551 20.1095C15.2465 20.1095 19.9511 13.9869 20.0425 8.00636C20.6843 7.4754 21.2512 6.85999 21.7279 6.17692C21.9089 5.93924 22.0068 5.64862 22.0064 5.34986C22.0064 4.88202 21.7723 4.46848 21.4158 4.21993C21.5702 3.6909 21.3941 3.11821 20.9644 2.76828C20.7135 2.56409 20.4059 2.46028 20.0965 2.46028C19.8553 2.46005 19.6184 2.52349 19.4097 2.64418C18.9552 2.90614 18.4692 3.11342 17.9573 3.26263C17.0312 2.56585 15.8831 2.17776 14.704 2.17773Z" */}
            {/*                 fill="#fff" */}
            {/*                 strokeWidth={4} */}
            {/*             /> */}
            {/*         </g> */}
            {/*         <defs> */}
            {/*             <clipPath id="clip0_1658_5994"> */}
            {/*                 <rect width="22" height="22" fill="white" transform="translate(0 0.142578)" /> */}
            {/*             </clipPath> */}
            {/*         </defs> */}
            {/*     </svg> */}
            {/* </Link> */}
            {/* <Link href={'#'} className="cursor-pointer transition-all duration-500 hover:scale-150"> */}
            {/*     <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
            {/*         <path */}
            {/*             d="M13.6352 1.75225C13.7244 1.75225 13.7758 1.75574 13.7758 1.75574H15.7344L15.7243 3.84502H13.7788C12.7082 3.84502 12.7329 4.69395 12.7329 4.69395V8.00616H16.5212L15.9924 10.0927H12.7205V20.5342H10.4728L10.4713 10.0927H7.48515L7.47915 8.00616H10.4724V4.75941C10.4727 1.92843 13.0048 1.75223 13.6352 1.75223V1.75225ZM15.7344 1.75571H15.7381H15.7344ZM13.6352 0.359375C13.0959 0.359375 12.0421 0.442272 11.0439 1.00081C10.0989 1.5287 8.97273 2.60988 8.97273 4.75908V6.61296H7.47948C7.08085 6.61296 6.69873 6.7606 6.41673 7.02248C6.2774 7.15238 6.16705 7.30654 6.09202 7.47612C6.017 7.6457 5.97876 7.82737 5.9795 8.01071L5.9855 10.0972C5.9885 10.8643 6.65938 11.4852 7.4855 11.4852H8.97163L8.97313 20.5339C8.97313 21.3031 9.64478 21.9267 10.4731 21.9267H12.7209C13.5493 21.9267 14.2209 21.3031 14.2209 20.5339V11.4852H15.9928C16.6584 11.4852 17.2445 11.0778 17.432 10.4848L17.9608 8.39827C18.0939 7.9773 18.0054 7.52219 17.7219 7.17151C17.5824 6.99811 17.4012 6.85733 17.1928 6.76036C16.9845 6.6634 16.7546 6.61293 16.5215 6.61298H14.2332V5.23858L15.7246 5.23788C16.55 5.23788 17.2209 4.61841 17.2246 3.85129L17.2347 1.83269C17.2362 1.80706 17.237 1.7814 17.237 1.75574C17.237 0.986531 16.5669 0.362879 15.7385 0.362879H13.8181C13.775 0.36079 13.7128 0.359397 13.6352 0.359375Z" */}
            {/*             fill="#fff" */}
            {/*         /> */}
            {/*     </svg> */}
            {/* </Link> */}
            {/* <Link */}
            {/*     href="mailto:enquiries@my-iclinic.co.uk" */}
            {/*     target="_blank" */}
            {/*     className="cursor-pointer transition-all duration-500 hover:scale-150" */}
            {/* > */}
            {/*     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> */}
            {/*         <path */}
            {/*             d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" */}
            {/*             stroke="white" */}
            {/*             strokeWidth="2" */}
            {/*             strokeLinecap="round" */}
            {/*             strokeLinejoin="round" */}
            {/*         /> */}
            {/*         <path */}
            {/*             d="M22 6L12 13L2 6" */}
            {/*             stroke="white" */}
            {/*             strokeWidth="2" */}
            {/*             strokeLinecap="round" */}
            {/*             strokeLinejoin="round" */}
            {/*         /> */}
            {/*     </svg> */}
            {/* </Link> */}
        </div>
    );
};
