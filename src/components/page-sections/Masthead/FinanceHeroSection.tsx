import { Section } from '@/components/Section';
import Image, { StaticImageData } from 'next/image';
import { ReactNode, useState } from 'react';
import Banner from './Banner';

interface Props {
    image: string | StaticImageData;
    h1Title: JSX.Element;
    h2Title?: JSX.Element;
    altText?: string;
    priceText?: ReactNode;
    priceTextExtra?: JSX.Element;
    imagePosition?: string;
    bannerWidth?: string;
    excludePriceComponent?: boolean;
    list?: string[];
    bannerExtraComponents?: ReactNode;
    suitabilityButton?: ReactNode;
    googleReviews?: string;
    trustPilotReviews?: string;
    smallImageDefaultClassName?: string;
    smallImageClassName?: string;
    bannerClassName?: string;
}

/**
 * Masthead component for the website
 *
 * @returns {*}  {JSX.Element}
 */
const FinanceHeroSection = ({
                                image,
                                h1Title,
                                h2Title,
                                altText,
                                priceText,
                                priceTextExtra,
                                bannerWidth = 'md:max-w-[60.5rem]',
                                excludePriceComponent = false,
                                list,
                                bannerExtraComponents,
                                suitabilityButton,
                                googleReviews,
                                trustPilotReviews,
                                bannerClassName
                            }: Props): JSX.Element => {
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    return (
        <Section
            defaultClassName="w-full relative relative masthead grid"
            className="md:min-h-[50rem] lg:grid-cols-[1fr_auto] xl:grid-cols-[auto_50rem_1fr] 2xl:grid-cols-[auto_40rem_1fr]"
        >
            <div
                className="relative z-[1] lg:order-2 lg:min-h-[63.3rem] xl:col-span-2 xl:col-start-2 xl:row-start-1 xl:max-h-[70rem]">
                <Image
                    src={image}
                    alt={altText || ''}
                    width={1140}
                    height={633}
                    className={`h-full max-h-[43rem] w-full object-cover lg:max-h-full xl:rounded-bl-primary xl:rounded-tl-primary`}
                    quality={100}
                    placeholder={typeof image === 'string' ? 'empty' : 'blur'}
                    priority={true}
                    onLoadingComplete={() => setImageLoaded(true)}
                />

                {!imageLoaded ? (
                    <div className="absolute inset-0 h-full w-full animate-pulse bg-gray-200"></div>
                ) : (
                    <></>
                )}
            </div>

            <Banner
                h1Title={h1Title}
                h2Title={h2Title}
                priceText={priceText}
                priceTextExtra={priceTextExtra}
                bannerWidth={bannerWidth}
                excludePriceComponent={excludePriceComponent}
                list={list}
                bannerExtraComponents={bannerExtraComponents}
                googleReviews={googleReviews}
                trustPilotReviews={trustPilotReviews}
                suitabilityButton={suitabilityButton}
                bannerClassName="!rounded-none xl:max-w-[75rem] 2xl:max-w-[90rem] md:!pr-16 xl:rounded-none xl:!rounded-tr-primary xl:!rounded-br-primary py-10 bg-[#003E79] xl:self-center md:max-w-full lg:content-center xl:pl-[calc(calc(100vw_-_var(--container-width))_/_2)] relative z-[2] xl:col-start-1 xl:row-start-1 xl:col-span-2"
                breadcrumbClassName="md:!hidden xl:!flex"
                breadcrumbLinkClassName="text-white"
                breadcrumbIconClassName="stroke-white"
                excludeReviews
                excludePinImage
            />
        </Section>
    );
};

export default FinanceHeroSection;
