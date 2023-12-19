import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image, { StaticImageData } from 'next/image';
import { ReactNode, useState } from 'react';
import Banner from './Banner';

export interface MastheadInterface {
    imageSmall?: string | StaticImageData;
    imageMedium: string | StaticImageData;
    imageLarge?: string | StaticImageData;
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
const Masthead = ({
    imageMedium,
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
}: MastheadInterface): JSX.Element => {
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    return (
        <Section
            defaultClassName="w-full relative relative masthead grid gap-12"
            className="md:min-h-[50rem] lg:grid-cols-[1fr_40rem_1fr] xl:ml-[calc(calc(100%_-_var(--container-width))_/_2)] xl:grid-cols-[20rem_auto_auto]"
        >
            <div className="relative md:col-span-full md:col-start-2 md:row-start-1 lg:min-h-[63.3rem] xl:max-h-[70rem]">
                <Image
                    src={imageMedium}
                    alt={altText || ''}
                    width={1140}
                    height={633}
                    className={`h-full max-h-[43rem] w-full object-cover lg:max-h-full lg:rounded-bl-primary lg:rounded-tl-primary 2xl:object-[-15rem_center]`}
                    quality={100}
                    placeholder={typeof imageMedium === 'string' ? 'empty' : 'blur'}
                    priority={true}
                    onLoadingComplete={() => setImageLoaded(true)}
                />

                {!imageLoaded ? (
                    <div className="absolute inset-0 h-full w-full animate-pulse bg-gray-200"></div>
                ) : (
                    <></>
                )}
            </div>

            <Container className="relative z-[1] grid h-full grid-cols-1 items-center justify-start lg:col-span-2 lg:col-start-1 lg:row-start-1">
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
                    bannerClassName={bannerClassName}
                />
            </Container>
        </Section>
    );
};

export default Masthead;
