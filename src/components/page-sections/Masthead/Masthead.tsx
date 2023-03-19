import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { smallSizes, useDeviceSize } from '@/hooks';
import Image, { StaticImageData } from 'next/image';
import { ReactNode, useState } from 'react';
import Banner from './Banner';

export interface MastheadInterface {
    imageSmall: string | StaticImageData;
    imageMedium: string | StaticImageData;
    imageLarge: string | StaticImageData;
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
    googleReviews?: string;
    trustPilotReviews?: string;
    smallImageDefaultClassName?: string;
    smallImageClassName?: string;
}

/**
 * Masthead component for the website
 *
 * @returns {*}  {JSX.Element}
 */
const Masthead = ({
    imageSmall,
    imageMedium,
    imageLarge,
    h1Title,
    h2Title,
    altText,
    priceText,
    priceTextExtra,
    imagePosition = 'object-[0_0rem]',
    bannerWidth = 'md:max-w-[62.5rem]',
    excludePriceComponent = false,
    list,
    bannerExtraComponents,
    googleReviews,
    trustPilotReviews,
    smallImageDefaultClassName = 'w-full object-cover md:hidden',
    smallImageClassName
}: MastheadInterface): JSX.Element => {
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    const deviceSize = useDeviceSize();

    return (
        <Section defaultClassName="mt-12 md:mt-24 w-full xl:h-[11.4rem] relative md:min-h-[70rem] relative">
            {smallSizes.includes(deviceSize) ? (
                <div className="absolute right-0 left-auto -z-[1] min-h-[30rem] w-full max-w-[123.1rem] sm:hidden md:h-full">
                    <Image
                        src={imageSmall}
                        alt={altText || ''}
                        className={`${smallImageDefaultClassName} ${smallImageClassName}`}
                        quality={100}
                        placeholder={typeof imageSmall === 'string' ? 'empty' : 'blur'}
                        fill
                        priority={true}
                        onLoadingComplete={() => setImageLoaded(true)}
                    />
                </div>
            ) : (
                <></>
            )}

            {['medium', 'large'].includes(deviceSize) ? (
                <div
                    className={`${imagePosition} absolute right-0 left-auto -z-[1] hidden h-2/4 w-full max-w-[123.1rem] sm:block md:block md:h-full xl:hidden`}
                >
                    <Image
                        src={imageMedium}
                        alt={altText || ''}
                        fill
                        className={`object-cover object-center`}
                        placeholder={typeof imageMedium === 'string' ? 'empty' : 'blur'}
                        onLoadingComplete={() => setImageLoaded(true)}
                    />
                </div>
            ) : (
                <></>
            )}

            {deviceSize === 'xl' ? (
                <Image
                    src={imageLarge}
                    alt={altText || ''}
                    fill
                    className={`${imagePosition} absolute left-0 hidden h-2/4 w-full object-cover md:!h-[calc(100%_+_2rem)] xl:!left-[calc(calc(100%_-_var(--container-width))_/_2)] xl:block xl:translate-x-[6.9rem]`}
                    quality={100}
                    placeholder={typeof imageLarge === 'string' ? 'empty' : 'blur'}
                    priority={true}
                    onLoadingComplete={() => setImageLoaded(true)}
                />
            ) : (
                <></>
            )}

            {/* Code experiment */}

            {!imageLoaded ? (
                <div className="absolute left-0 min-h-[30rem] w-full animate-pulse bg-gray-200  md:!h-[calc(100%_+_2rem)] xl:!left-[calc(calc(100%_-_var(--container-width))_/_2)] xl:block xl:translate-x-[6.9rem]"></div>
            ) : (
                <></>
            )}

            {/* End code experiment */}
            <Container className="relative z-[2] grid h-full min-h-[50rem] translate-y-[15%] grid-cols-1 items-center justify-start md:min-h-[63rem] md:translate-y-0">
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
                />
            </Container>
        </Section>
    );
};

export default Masthead;
