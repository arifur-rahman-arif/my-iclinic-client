import { FadeIn } from '@/components/Animations';
import { SpanVariant1 } from '@/components/Headings';
import { SideImageSectionInterface } from '@/components/page-sections';
import { Fragment, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import TextColumnImage from './TextColumnImage';
import styles from './TextColumn.module.scss';

interface TextColumnInterface extends SideImageSectionInterface {
    h2Heading?: ReactNode;
    h2Class?: string;
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
    descriptionWrapperClass,
    textColumnClassName,
    sectionImage,
    sectionImageDesktop,
    textColumnExtras,
    midExtras,
    textColumnImage,
    textColumnTopElements,
    paragraphAnimation,
    textColumnDefaultClassName,
    h2Class
}: TextColumnInterface): JSX.Element => {
    return (
        <div className={twMerge(`${textColumnDefaultClassName || 'grid gap-12'}`, textColumnClassName)}>
            {normalLightHeading ? (
                <div className="max-w-[48.3rem]">
                    <h2 className="w-full normal-case">{normalLightHeading}</h2>
                </div>
            ) : (
                <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4">
                    {h2Heading ? <SpanVariant1 className="col-start-2">{h2Heading}</SpanVariant1> : <></>}
                    <span className="h-full w-[0.8rem] bg-[#005DAF]"></span>
                    <h2
                        className={twMerge(
                            'w-full max-w-[60rem] whitespace-pre-line text-balance normal-case',
                            h2Class
                        )}
                    >
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
                <div className={`grid gap-12 ${!normalLightHeading && 'ml-10'} ${styles.styles}`}>
                    {midExtras}

                    {descriptions?.length ? (
                        <div
                            className={twMerge(
                                'description-box flex w-full flex-col items-start justify-start gap-6 md:max-w-[46.7rem] [&_a]:font-mulishBold [&_a]:decoration-[#0099FF] [&_a]:underline-offset-8 [&_a_*]:font-mulishBold [&_strong]:text-[1.6rem] [&_strong]:leading-[2.4rem] [&_strong]:text-heading [&_strong_*]:text-[1.6rem] [&_strong_*]:leading-[2.4rem]',
                                descriptionWrapperClass
                            )}
                        >
                            {descriptions.map((desc, index) => (
                                <Fragment key={index}>
                                    {paragraphAnimation ? (
                                        <FadeIn>
                                            <div dangerouslySetInnerHTML={{ __html: desc as string }}></div>
                                        </FadeIn>
                                    ) : (
                                        <>
                                            {typeof desc === 'string' ? (
                                                <div dangerouslySetInnerHTML={{ __html: desc as string }}></div>
                                            ) : (
                                                <div>{desc}</div>
                                            )}
                                        </>
                                    )}
                                </Fragment>
                            ))}
                        </div>
                    ) : null}

                    {textColumnExtras}
                </div>
            )}
        </div>
    );
};

export default TextColumn;
