import Image from 'next/image';
import { ImageType3 } from '@/types';
import { CataractReviewWidget } from '@/components/page-sections/Masthead/CataractHero';
import BookConsultation from '@/components/page-sections/SectionParts/BookConsultation/BookConsultation';
import { Button2 } from '@/components/Buttons';
import { stripInitialTags } from '@/utils/miscellaneous';
import { BreadCrumb } from '@/components/Breadcrumb';
import { twMerge } from 'tailwind-merge';

export interface Props {
    title: string;
    subTitle?: string;
    largeImage: ImageType3;
    smallImage: ImageType3;
    priceText?: string;
    priceSection?: string;
    titleClass?: string;
    subTitleClass?: string;
    className?: string;
    bannerClass?: string;
    ctaButton?: JSX.Element;
}

/**
 * Yag hero section
 *
 * @returns {*}  {JSX.Element}
 */
const YagHero = ({
    title,
    subTitle,
    largeImage,
    smallImage,
    priceText,
    priceSection,
    titleClass,
    subTitleClass,
    className,
    bannerClass,
    ctaButton
}: Props): JSX.Element => {
    return (
        <div
            className={twMerge(
                'grid lg:min-h-[64rem] lg:grid-cols-2 xl:grid-cols-[auto_25rem_1fr] xl:items-center 2xl:min-h-[70rem]',
                className
            )}
        >
            <Image
                priority={true}
                alt=""
                className=" hidden h-full w-full md:block md:object-cover lg:order-2 xl:col-span-2 xl:col-start-2 xl:row-start-1"
                {...(largeImage as any)}
            />

            <Image alt="" className="w-full md:hidden" priority {...(smallImage as any)} />

            <div
                className={twMerge(
                    'z-[2] grid h-full content-start gap-6 bg-[#003E79] px-8 py-12 lg:grid-rows-[auto_1fr] lg:pl-12 lg:pt-0 xl:col-span-2 xl:col-start-1 xl:row-start-1 xl:max-h-[calc(100%_-_16rem)] xl:rounded-br-[0.5rem] xl:rounded-tr-[0.5rem] xl:pb-24 xl:pl-[calc(calc(100vw_-_var(--container-width))_/_2)] xl:pr-24 xl:pt-6',
                    bannerClass
                )}
            >
                <BreadCrumb
                    linkClassName="text-white"
                    activeLinkClass="text-[#94CAFF]"
                    className="mb-12 !hidden !px-0 lg:!flex"
                    pathClassName="stroke-white"
                />

                <div className="grid content-center gap-6">
                    <CataractReviewWidget />

                    <h1
                        className={twMerge(
                            'whitespace-pre-line text-balance text-[3.6rem] uppercase leading-[4rem] text-white md:max-w-[49rem] md:text-[4.8rem] md:leading-[4.8rem]',
                            titleClass
                        )}
                        dangerouslySetInnerHTML={{ __html: title }}
                    ></h1>
                    {subTitle && (
                        <h2
                            className={twMerge(
                                'font-mulishBold !text-[1.6rem] uppercase !leading-[2.4rem] text-[#D1E8FE] [&_*]:text-[1.6rem] [&_*]:leading-[2.4rem]',
                                subTitleClass
                            )}
                            dangerouslySetInnerHTML={{ __html: stripInitialTags(subTitle) }}
                        ></h2>
                    )}

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

                    {ctaButton ? (
                        ctaButton
                    ) : (
                        <BookConsultation buttonClassName="sitemap-link border-[#007EF5] bg-[#007EF5] hover:!text-[#007EF5] text-center hover:!border-[#007EF5] !border-2">
                            <Button2 type="button" text="Make an enquiry" />
                        </BookConsultation>
                    )}
                </div>
            </div>
        </div>
    );
};

export default YagHero;
