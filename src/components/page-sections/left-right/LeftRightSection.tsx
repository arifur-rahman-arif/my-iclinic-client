import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { ReactNode, useEffect } from 'react';
import ImageComponent from './ImageComponent';
import LeftRightTextColumn from './LeftRightTextColumn';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export interface LeftRightSectionChildrenInterface {
    mobileImage: JSX.Element;
    desktopImage: JSX.Element;
    title: string;
    descriptions: string[] | ReactNode[];
}

interface LeftRightSectionInterface {
    childrenList: LeftRightSectionChildrenInterface[];
}

/**
 * Left right section design component
 *
 * @param {LeftRightSectionInterface} { childrenList }
 * @returns {*}  {JSX.Element}
 */
const LeftRightSection = ({ childrenList }: LeftRightSectionInterface): JSX.Element => {
    useEffect(() => {
        ScrollTrigger.refresh();
    }, []);

    return (
        <>
            <Section className="grid gap-8 overflow-hidden md:gap-40" id="section">
                {childrenList.map((childrenElement, index) => {
                    if (index % 2 === 0) {
                        return (
                            <Container
                                className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-32"
                                key={index}
                            >
                                <ImageComponent
                                    mobileImage={childrenElement.mobileImage}
                                    desktopImage={childrenElement.desktopImage}
                                />
                                <LeftRightTextColumn
                                    index={index}
                                    title={childrenElement.title}
                                    descriptions={childrenElement.descriptions}
                                />
                            </Container>
                        );
                    } else {
                        return (
                            <Container
                                className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-32"
                                key={index}
                            >
                                <LeftRightTextColumn
                                    index={index}
                                    title={childrenElement.title}
                                    descriptions={childrenElement.descriptions}
                                />
                                <ImageComponent
                                    mobileImage={childrenElement.mobileImage}
                                    desktopImage={childrenElement.desktopImage}
                                />
                            </Container>
                        );
                    }
                })}
            </Section>
        </>
    );
};

export default LeftRightSection;
