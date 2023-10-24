import { FadeIn } from '@/components/Animations';
import { SpanVariant1 } from '@/components/Headings';
import { SideImageSectionInterface } from '@/components/page-sections';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
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
    return (
        <div className={twMerge(`${textColumnDefaultClassName || 'grid gap-12'}`, textColumnClassName)}>
            {normalLightHeading ? (
                <div className="max-w-[48.3rem]">
                    <h2 className="w-full normal-case">{normalLightHeading}</h2>
                </div>
            ) : (
                <div className="grid grid-cols-[auto_1fr] gap-y-4 gap-x-6">
                    {h2Heading ? <SpanVariant1 className="col-start-2">{h2Heading}</SpanVariant1> : <></>}
                    <span className="h-full w-[0.8rem] bg-[#005DAF]"></span>
                    <h2 className="w-full max-w-[55rem] normal-case">
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
                <div className={`grid gap-12 ${!normalLightHeading && 'ml-10'}`}>
                    {midExtras}

                    {descriptions?.length && (
                        <div className="description-box flex w-full flex-col items-start justify-start gap-6 md:max-w-[46.7rem]">
                            {descriptions.map((desc, index) => {
                                return paragraphAnimation ? (
                                    <FadeIn key={index}>
                                        <div>{desc}</div>
                                    </FadeIn>
                                ) : (
                                    <div key={index} dangerouslySetInnerHTML={{ __html: desc as string }}></div>
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
