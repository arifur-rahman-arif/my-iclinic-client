import { useReviewHook } from '@/hooks';
import localLargeImage from '@/masthead/masthead-cataract-large.webp';
import localSmallImage from '@/masthead/masthead-cataract-small.webp';
import { ImageType3 } from '@/types';
// import { BookConsultation } from '@/page-sections/index';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { Button2 } from '@/components/Buttons';
import BookConsultation from '@/components/page-sections/SectionParts/BookConsultation/BookConsultation';
import { stripInitialTags } from '@/utils/miscellaneous';
import { twMerge } from 'tailwind-merge';
import { ReactNode } from 'react';
import { BreadCrumb } from '@/components/Breadcrumb';

interface Props {
    title: string;
    subTitle: string;
    largeImage: ImageType3;
    smallImage: ImageType3;
    priceText?: string;
    priceSection?: string;
    financeText?: string;
    smallImageClass?: string;
    headingClassName?: string;
    subTitleClass?: string;
    contentContainerClassName?: string;
    suitabilityButton?: ReactNode;
}

/**
 * safddf
 *
 * @param {Props} { title, subTitle, image }
 * @returns {*}  {JSX.Element}
 */
const CataractHero = ({
    title,
    subTitle,
    largeImage,
    smallImage,
    priceText,
    priceSection,
    financeText,
    smallImageClass,
    headingClassName,
    subTitleClass,
    contentContainerClassName,
    suitabilityButton
}: Props): JSX.Element => {
    return (
        <main className="relative grid h-full w-full content-start overflow-hidden bg-[#0052A0] md:min-h-max md:grid-cols-2 md:gap-12 lg:gap-20 xl:max-h-[73.5rem] xl:grid-cols-[auto_1fr] xl:gap-32">
            <Image
                src={localLargeImage}
                priority={true}
                alt=""
                {...(largeImage as any)}
                className="order-2 hidden h-full justify-self-end object-cover md:block xl:object-fill"
            />

            <div className="grid gap-12 px-8 pt-6 md:grid-rows-[auto_1fr] xl:pl-[calc(calc(100vw_-_var(--container-width))_/_2)]">
                <BreadCrumb
                    linkClassName="text-white"
                    activeLinkClass="text-[#94CAFF]"
                    className="mb-12 !hidden !px-0 md:!flex"
                    pathClassName="stroke-white"
                />

                <div
                    className={twMerge(
                        'grid content-center gap-6 pb-12 pt-12 md:pb-24 md:pt-0',
                        contentContainerClassName
                    )}
                >
                    <CataractReviewWidget />

                    <h1
                        className={twMerge(
                            'text-balance text-[3.6rem] uppercase leading-[4rem] text-white md:max-w-[49rem] md:text-[4.8rem] md:leading-[4.8rem]',
                            headingClassName
                        )}
                    >
                        {title}
                    </h1>

                    <h2
                        className={twMerge(
                            'max-w-[56rem] font-mulishBold !text-[1.6rem] uppercase !leading-[2.4rem] text-[#D1E8FE] [&_*]:text-[1.6rem] [&_*]:leading-[2.4rem]',
                            subTitleClass
                        )}
                        dangerouslySetInnerHTML={{ __html: stripInitialTags(subTitle) }}
                    ></h2>

                    {priceSection ? (
                        <span className="mt-6 font-latoBold text-[2rem] uppercase leading-[3.2rem] text-white">
                            {priceSection}
                        </span>
                    ) : (
                        <>
                            {priceText && (
                                <span className="mt-6 font-latoBold text-[2rem] uppercase leading-[3.2rem] text-white">
                                    {priceText}/
                                    <strong className="font-latoBold text-[1.7rem] uppercase text-white">
                                        Per eye
                                    </strong>
                                </span>
                            )}
                        </>
                    )}

                    {financeText ? (
                        <strong className="-mt-6 max-w-[50rem] text-balance uppercase leading-[2.8rem] text-[#00BFFF]">
                            {financeText}
                        </strong>
                    ) : null}

                    {suitabilityButton ? (
                        suitabilityButton
                    ) : (
                        <>
                            <BookConsultation buttonClassName="sitemap-link border-[#007EF5] bg-[#007EF5] hover:!text-[#007EF5] text-center hover:!border-[#007EF5] !border-2">
                                <Button2 type="button" text="Make an enquiry" />
                            </BookConsultation>
                        </>
                    )}
                </div>
            </div>

            <Image
                src={localSmallImage}
                alt=""
                className={twMerge('mt-12 w-full md:hidden', smallImageClass)}
                priority
                {...(smallImage as any)}
            />

            {/* <Link
                href="/suitability-check"
                title="Free suitability check"
                className="sitemap-link group/link relative -mt-12 grid w-full max-w-[55.5rem] grid-cols-[auto_1fr] content-start gap-1 rounded-tr-[6rem] bg-[#003E79] py-10 px-8 pr-16 sm:-mt-40 md:row-span-2 md:mt-0 md:self-end lg:pl-12 xl:col-span-2 xl:col-start-1 xl:row-span-1 xl:row-start-2 xl:max-w-max xl:gap-x-40 xl:self-end xl:pl-[calc(calc(100vw_-_var(--container-width))_/_2)]"
            >
                <span className="flex items-center justify-start gap-4">
                    <span className="h-[1.2rem] w-[1.2rem] rounded-full bg-[#00BFFF]"></span>
                    <span className="font-mulishBold text-[1.4rem] uppercase leading-8 text-[#00BFFF]">
                        Free suitability check
                    </span>
                </span>
                <span className="leading-8 text-[#E1F1FF] xl:hidden">Suitable for laser eye surgery?</span>
                <span className="hidden max-w-[25rem] leading-8 text-[#E1F1FF] xl:block">{suitabilityText}</span>

                <Image
                    src="/images/icons/icons-arrow-blue-bg.svg"
                    alt=""
                    width={78}
                    height={78}
                    className="col-start-2 row-span-2 row-start-1 max-h-[5.2rem] max-w-[5.2rem] justify-self-end transition-all duration-500 group-hover/link:translate-x-4 md:max-h-full md:max-w-full"
                />
            </Link> */}
        </main>
    );
};

interface CataractReviewWidgetProps {
    className?: string;
}

/**
 * Review widget
 *
 * @param {CataractReviewWidgetProps} {className}
 * @returns {*}  {JSX.Element}
 */
export const CataractReviewWidget = ({ className }: CataractReviewWidgetProps): JSX.Element => {
    const { data, isLoading } = useReviewHook();

    return (
        <div className="flex flex-wrap items-stretch justify-start gap-8 ">
            {/* Review 1 */}
            <Link
                href="https://www.trustpilot.com/review/my-iclinic.co.uk"
                title="Trustpilot all reviews"
                target="_blank"
                className="grid grid-cols-1 place-items-center gap-4 rounded-[0.5rem] bg-white px-8 py-4 md:w-full md:max-w-[19.8rem] md:py-4 md:shadow-shadow1 xl:gap-2"
            >
                <span className="grid place-items-start">
                    <Image src="/images/icons/icon-trustpilot-stars.svg" alt="" width={77} height={14} quality={70} />
                </span>
                {isLoading ? (
                    <Image src="/images/icons/icon-loader.svg" alt="Loading..." width={24} height={24} />
                ) : (
                    <>
                        <span className="hidden font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading xl:block">
                            Trust Pilot
                        </span>
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
                className="grid grid-cols-[auto_1fr] items-center justify-start gap-2 rounded-[0.5rem] bg-white px-8 py-4 md:w-full md:max-w-[19.8rem] md:grid-cols-[auto_auto] md:justify-center md:gap-0 md:py-4 md:shadow-shadow1 "
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

export default CataractHero;
