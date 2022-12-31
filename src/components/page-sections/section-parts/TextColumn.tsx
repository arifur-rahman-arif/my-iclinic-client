import { SideImageSectionInterface } from '@/components/page-sections';
import TextColumnImage from './TextColumnImage';

interface TextColumnInterface extends SideImageSectionInterface {
    h2Heading?: string;
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
    textColumnTopElements
}: TextColumnInterface): JSX.Element => {
    return (
        <div className="grid gap-12">
            {normalLightHeading ? (
                <div className="md:max-w-[48.3rem]">
                    <h3 className="w-full normal-case">{normalLightHeading}</h3>
                </div>
            ) : (
                <div className="grid grid-cols-[auto_1fr] gap-y-4 gap-x-8 md:gap-x-12">
                    {h2Heading ? <h2 className="col-start-2 text-heading2">{h2Heading}</h2> : <></>}
                    <span className="h-full w-[0.5rem] bg-yellow"></span>
                    <div>
                        <h3
                            className="w-full normal-case md:max-w-[55rem]"
                            dangerouslySetInnerHTML={{ __html: h3LightHeading || '' }}
                        ></h3>
                        <h3 className="w-full normal-case md:max-w-[55rem]">
                            <strong
                                className="normal-case"
                                dangerouslySetInnerHTML={{ __html: h3BoldHeading || '' }}
                            ></strong>
                        </h3>
                    </div>
                </div>
            )}

            {textColumnImage && (
                <>
                    {textColumnTopElements}
                    <TextColumnImage image={sectionImage || null} desktopImage={sectionImageDesktop || null} />
                </>
            )}

            <div className={`grid gap-12 ${!normalLightHeading ? 'ml-10 md:ml-14' : ''}`}>
                {midExtras}

                {descriptions?.length && (
                    <div className="flex w-full flex-col items-start justify-start gap-6 md:max-w-[46.7rem]">
                        {descriptions.map((desc, index) => (
                            <p key={index}>{desc}</p>
                        ))}
                    </div>
                )}

                {textColumnExtras}
            </div>
        </div>
    );
};

export default TextColumn;
