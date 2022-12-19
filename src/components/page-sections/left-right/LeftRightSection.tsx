import { Container } from '@/components/container';
import { Section } from '@/components/section';
import ImageComponent from './ImageComponent';
import LeftRightTextColumn from './LeftRightTextColumn';

export interface LeftRightSectionChildrenInterface {
    mobileImage: JSX.Element;
    desktopImage: JSX.Element;
    title: string;
    descriptions: string[];
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
    return (
        <>
            <Section className="grid gap-8 overflow-hidden md:gap-40">
                {childrenList.map((childrenElement, index) => {
                    if (index % 2 === 0) {
                        return (
                            <Container
                                className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24"
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
                                className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24"
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
