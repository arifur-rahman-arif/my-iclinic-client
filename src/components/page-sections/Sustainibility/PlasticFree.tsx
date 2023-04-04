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
                url: image || '/images/section-images/plastic-free-life.png',
                width: 390,
                height: 390
            }}
            sectionImageDesktop={{
                url: largeImage || '/images/section-images/plastic-free-life-desktop.png',
                width: 685,
                height: 587
            }}
            positionReversed={true}
            textColumnExtras={
                <div className="grid gap-12">
                    <span className="max-w-[36.7rem] font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                        Hard to swallow facts about wearing Glasses and Contact lenses:
                    </span>
                    <ul className="ml-6 grid gap-6">
                        <li className="flex items-start justify-start gap-4">
                            <BulletPoint />
                            <p>Almost 800 million plastic contact lenses are used by 4 million people each year.</p>
                        </li>
                        <li className="flex items-start justify-start gap-4">
                            <BulletPoint />
                            <p>100,000 tons of plastic are wasted from glasses.</p>
                        </li>
                    </ul>
                    <p className="sm:max-w-[36.7rem]">
                        Saving more than just expenses, time and compromise, but{' '}
                        <span className="font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                            saving the planet!
                        </span>
                    </p>
                </div>
            }
        />
    );
};

export default PlasticFree;
