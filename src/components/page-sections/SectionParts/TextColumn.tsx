import { FadeIn } from '@/components/Animations';
import { SpanVariant1 } from '@/components/Headings';
import { SideImageSectionInterface } from '@/components/page-sections';
import { ReactNode } from 'react';
import TextColumnImage from './TextColumnImage';

interface TextColumnInterface extends SideImageSectionInterface {
    h2Heading?: ReactNode;
}

/**
 * Text column of SideImageSection
 *
 * @param {TextColumnInterface} {
 *     normalLightHeading,
 *     h2Heading,
 *     h3LightHeading,
 *     h3BoldHeading,
 *     descriptions,
 *     textColumnExtras
 * }
 * @returns {*}  {JSX.Element}
 */
const TextColumn = ({
    normalLightHeading,
    h2Heading,
    h3LightHeading,
    h3BoldHeading,
    descriptions,
    sectionImage,
    sectionImageDesktop,
    textColumnExtras,
    midExtras,
    textColumnImage,
    textColumnTopElements,
    paragraphAnimation,
    textColumnDefaultClassName,
    textColumnClassName
}: TextColumnInterface): JSX.Element => {
    // Const slideElement = useRef<HTMLHeadingElement | null>(null);
    // slideRightAnimation({
    //     element: slideElement,
    //     trigger: slideElement
    // });

    return (
        <div className={`${textColumnDefaultClassName || 'grid gap-12'} ${textColumnClassName}`}>
            {normalLightHeading ? (
                <div className="md:max-w-[48.3rem]">
                    <h2 className="w-full normal-case">{normalLightHeading}</h2>
                </div>
            ) : (
                <div className="grid grid-cols-[auto_1fr] gap-y-4 gap-x-6">
                    {h2Heading ? <SpanVariant1 className="col-start-2">{h2Heading}</SpanVariant1> : <></>}
                    <span className="h-full w-[0.5rem] rounded-primary bg-yellow"></span>
                    <h2 className="w-full normal-case md:max-w-[55rem]">
                        {h3LightHeading || ''} <strong className="normal-case">{h3BoldHeading || ''}</strong>
                    </h2>
                </div>
            )}

            {textColumnImage && (
                <>
                    {textColumnTopElements}
                    <TextColumnImage image={sectionImage || null} desktopImage={sectionImageDesktop || null} />
                </>
            )}

            {(midExtras || descriptions || textColumnExtras) && (
                <div className={`grid gap-12 ${!normalLightHeading && 'ml-9'}`}>
                    {midExtras}

                    {descriptions?.length && (
                        <div className="flex w-full flex-col items-start justify-start gap-6 md:max-w-[46.7rem]">
                            {descriptions.map((desc, index) => {
                                return paragraphAnimation ? (
                                    <FadeIn key={index}>
                                        <div>{desc}</div>
                                    </FadeIn>
                                ) : (
                                    <div key={index}>{desc}</div>
                                );
                            })}
                        </div>
                    )}

                    {textColumnExtras}
                </div>
            )}
        </div>
    );
};

export default TextColumn;
