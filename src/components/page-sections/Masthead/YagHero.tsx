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
    subTitle: string;
    largeImage: ImageType3;
    smallImage: ImageType3;
    priceText: string;
    titleClass?: string;
    className?: string;
    ctaButton?: JSX.Element;
}

/**
 * Yag hero section
 *
 * @returns {*}  {JSX.Element}
 */
const YagHero = ({ title, subTitle, largeImage, smallImage, priceText, titleClass, className, ctaButton }: Props) => {
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

            <div className="z-[2] grid content-start gap-6 bg-[#003E79] py-12 px-8 lg:content-center lg:pt-0 lg:pl-12 xl:col-span-2 xl:col-start-1 xl:row-start-1 xl:content-start xl:rounded-tr-[0.5rem] xl:rounded-br-[0.5rem] xl:pr-20 xl:pb-20 xl:pt-6 xl:pl-[calc(calc(100vw_-_var(--container-width))_/_2)]">
                <BreadCrumb
                    linkClassName="text-white"
                    className="mb-12 !hidden !px-0 lg:!flex xl:mt-12"
                    pathClassName="stroke-white"
                />

                <CataractReviewWidget />

                <h1
                    className={twMerge(
                        'text-[3.6rem] uppercase leading-[4rem] text-white md:max-w-[49rem] md:text-[4.8rem] md:leading-[4.8rem]',
                        titleClass
                    )}
                >
                    {title}
                </h1>
                <h2
                    className="font-mulishBold !text-[1.6rem] uppercase !leading-[2.4rem] text-[#D1E8FE] [&_*]:text-[1.6rem] [&_*]:leading-[2.4rem]"
                    dangerouslySetInnerHTML={{ __html: stripInitialTags(subTitle) }}
                ></h2>

                <span className="mt-6 font-latoBold text-[2rem] uppercase leading-[3.2rem] text-white">
                    {priceText}/<strong className="font-latoBold text-[1.7rem] uppercase text-white">Per eye</strong>
                </span>

                {ctaButton ? (
                    ctaButton
                ) : (
                    <BookConsultation buttonClassName="sitemap-link border-[#007EF5] bg-[#007EF5] hover:!text-[#007EF5] text-center hover:!border-[#007EF5] !border-2">
                        <Button2 type="button" text="Make an enquiry" />
                    </BookConsultation>
                )}
            </div>
        </div>
    );
};

export default YagHero;
