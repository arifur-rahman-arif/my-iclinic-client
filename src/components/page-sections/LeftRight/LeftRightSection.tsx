import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { getElementTopPosition } from '@/utils/miscellaneous';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import ImageComponent from './ImageComponent';
import LeftRightTextColumn from './LeftRightTextColumn';

export interface LeftRightSectionChildrenInterface {
    mobileImage?: JSX.Element;
    desktopImage?: JSX.Element;
    lottieComponent?: JSX.Element;
    title?: string;
    alternativeHeading?: ReactNode;
    descriptions: string[] | ReactNode[];
    descriptionClassName?: string;
    excludeNumbers?: boolean;
    dynamicMediaColumn?: ReactNode;
    sectionId?: string;
}

interface LeftRightSectionInterface {
    childrenList: LeftRightSectionChildrenInterface[];
    positionReversed?: boolean;
    containerDefaultClassName?: string;
    containerClassName?: string;
    sectionDefaultClassName?: string;
    sectionClassName?: string;
    sectionId?: string;
}

/**
 * Left right section design component
 *
 * @param {LeftRightSectionInterface} { childrenList }
 * @returns {*}  {JSX.Element}
 */
const LeftRightSection = ({
    childrenList,
    positionReversed,
    sectionDefaultClassName = 'grid gap-8 overflow-hidden md:gap-40',
    sectionClassName,
    containerDefaultClassName = 'grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-32',
    containerClassName,
    sectionId
}: LeftRightSectionInterface): JSX.Element => {
    const sectionPosition = positionReversed ? 1 : 0;

    const router = useRouter();

    // Use the useEffect hook to detect the query parameter for the target section and scroll to it with an offset
    useEffect(() => {
        // Get the query parameters from the router
        const targetSectionId = router.asPath.split('#')[1]; // The query parameter for the target section

        // If the target section ID exists
        if (targetSectionId) {
            // Check if it's a string to avoid potential security risks
            // Get the DOM element of the target section by its ID
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                // Use setTimeout to delay scrolling by 1000ms (1 second)
                setTimeout(() => {
                    window.scrollTo(0, getElementTopPosition(targetSection as HTMLElement) - 200);
                }, 200); // Change the delay time as needed
            }
        }
    }, []);

    return (
        <>
            <Section className={`${sectionDefaultClassName} ${sectionClassName}`} id={sectionId}>
                {childrenList.map((childrenElement, index) => {
                    if (index % 2 === sectionPosition) {
                        return (
                            <Container
                                className={`${containerDefaultClassName} ${containerClassName}`}
                                key={index}
                                id={childrenElement?.sectionId}
                            >
                                {childrenElement.mobileImage && childrenElement.desktopImage ? (
                                    <ImageComponent
                                        mobileImage={childrenElement.mobileImage}
                                        desktopImage={childrenElement.desktopImage}
                                    />
                                ) : null}
                                {childrenElement.lottieComponent ? childrenElement.lottieComponent : null}
                                {childrenElement.dynamicMediaColumn && childrenElement.dynamicMediaColumn}

                                <LeftRightTextColumn index={index} {...childrenElement} />
                            </Container>
                        );
                    } else {
                        return (
                            <Container
                                className={`${containerDefaultClassName} ${containerClassName}`}
                                key={index}
                                id={childrenElement?.sectionId}
                            >
                                <LeftRightTextColumn index={index} {...childrenElement} />
                                {childrenElement.mobileImage && childrenElement.desktopImage ? (
                                    <ImageComponent
                                        mobileImage={childrenElement.mobileImage}
                                        desktopImage={childrenElement.desktopImage}
                                    />
                                ) : null}
                                {childrenElement.lottieComponent ? childrenElement.lottieComponent : null}
                                {childrenElement.dynamicMediaColumn && childrenElement.dynamicMediaColumn}
                            </Container>
                        );
                    }
                })}
            </Section>
        </>
    );
};

export default LeftRightSection;
