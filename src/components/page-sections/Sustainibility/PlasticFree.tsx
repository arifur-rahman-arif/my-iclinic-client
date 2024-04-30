import { BulletPoint, SideImageSection, SideImageSectionInterface } from '@/components/page-sections';

interface PlasticFreeInterface extends SideImageSectionInterface {
    image?: string;
    largeImage?: string;
}

/**
 * Plastic free section
 *
 * @returns {*}  {JSX.Element}
 */
const PlasticFree = ({
    h2Heading,
    h3LightHeading,
    h3BoldHeading,
    descriptions,
    image,
    largeImage
}: PlasticFreeInterface): JSX.Element => {
    return (
        <SideImageSection
            h2Heading={h2Heading}
            h3LightHeading={h3LightHeading}
            h3BoldHeading={h3BoldHeading}
            descriptions={descriptions}
            sectionImage={{
                url: image || '/images/section-images/plastic-free-life.webp',
                width: 390,
                height: 390
            }}
            sectionImageDesktop={{
                url: largeImage || '/images/section-images/plastic-free-life-desktop.webp',
                width: 685,
                height: 587
            }}
            positionReversed={true}
            textColumnExtras={
                <div className="grid gap-12">
                    <strong className="max-w-[47.8rem] font-latoBold text-[2rem] leading-[2.4rem] text-heading">
                        Hard to swallow facts about wearing Glasses and Contact lenses:
                    </strong>
                    <ul className="grid gap-6">
                        <li className="flex items-start justify-start gap-4">
                            <BulletPoint />
                            <p>Almost 800 million plastic contact lenses are used by 4 million people each year.</p>
                        </li>
                        <li className="flex items-start justify-start gap-4">
                            <BulletPoint />
                            <p>100,000 tons of plastic are wasted from glasses.</p>
                        </li>
                    </ul>
                    <strong className="max-w-[55rem] font-latoBold text-[2rem] leading-[2.4rem] text-heading">
                        Saving more than just expenses, time and compromise, but saving the planet!
                    </strong>
                </div>
            }
        />
    );
};

export default PlasticFree;
