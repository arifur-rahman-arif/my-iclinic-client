import { BreadCrumb } from '@/components/Breadcrumb';
import { CataractReviewWidget } from '@/components/page-sections/Masthead/CataractHero';
import { Section } from '@/components/Section';
import { ImageType3 } from '@/types';
import Image from 'next/image';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface Props {
    className?: string;
    title: string;
    subTitle: string;
    image: ImageType3;
    imageClass?: string;
    priceText?: string;
    financeText?: string;
    suitabilityButton?: ReactNode;
    textContainerClass?: string;
}

/**
 * Masthead component for the website
 *
 * @returns {*}  {JSX.Element}
 */
const RelexHero = ({
    className,
    title,
    subTitle,
    image,
    priceText,
    financeText,
    suitabilityButton,
    imageClass,
    textContainerClass
}: Props): JSX.Element => {
    return (
        <Section
            defaultClassName="w-full relative relative masthead grid gap-12"
            className={twMerge('bg-[#003E79] md:min-h-[50rem] xl:min-h-[62rem]', className)}
        >
            <div className="grid gap-12 !px-0 lg:grid-cols-2 lg:gap-0">
                <Image
                    alt=""
                    {...(image as any)}
                    className={twMerge('h-full max-h-[43rem] w-full object-cover lg:order-2 lg:max-h-full', imageClass)}
                    quality={100}
                    priority={true}
                />

                {/* Grid item 2 */}
                <div
                    className={twMerge(
                        'grid content-start gap-6 px-8 pb-12 xl:px-0 xl:pl-[calc(50vw_-_var(--container-width)/2)] xl:pr-12',
                        textContainerClass
                    )}
                >
                    <BreadCrumb
                        linkClassName="text-white"
                        activeLinkClass="text-[#94CAFF]"
                        className="mb-12 !hidden !px-0 md:!flex xl:mt-12"
                        pathClassName="stroke-white"
                    />

                    <CataractReviewWidget />

                    {/* Headings */}
                    <div
                        className={`grid w-full grid-cols-1 gap-6 [&_*]:!uppercase [&_*]:!text-white [&_h2]:!text-[1.6rem] [&_h2]:!leading-[2.4rem] [&_h2]:!text-[#D1E8FE]`}
                    >
                        <h1 className="whitespace-pre-line text-balance">{title}</h1>
                        <h2 className="whitespace-pre-line text-balance">{subTitle}</h2>
                    </div>

                    {/* Price */}
                    {priceText ? (
                        <span className="mt-6 font-latoBold text-[2rem] uppercase leading-[3.2rem] text-white md:mt-12">
                            {priceText || '£2,400 per eye'}
                        </span>
                    ) : null}

                    {financeText ? (
                        <span className="-mt-6 font-latoBold text-[2.4rem] uppercase leading-[3.2rem] text-[#00BFFF]">
                            {financeText}
                        </span>
                    ) : null}

                    {suitabilityButton ? <div className="mt-6">{suitabilityButton}</div> : null}
                </div>
            </div>
        </Section>
    );
};

export default RelexHero;
