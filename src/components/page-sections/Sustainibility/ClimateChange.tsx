import { SideImageSection } from '@/components/page-sections';

interface ClimateChangeProps {
    h2Heading: string | undefined;
    h3LightHeading: string | undefined;
    h3BoldHeading: string | undefined;
    image: string | undefined;
    largeImage: string | undefined;
    descriptions: string[] | undefined;
}

/**
 * Climate Change component
 *
 * @returns {*}  {JSX.Element}
 */
const ClimateChange = ({
    h2Heading,
    h3LightHeading,
    h3BoldHeading,
    image,
    largeImage,
    descriptions
}: Partial<ClimateChangeProps>): JSX.Element => {
    return (
        <SideImageSection
            h2Heading={h2Heading || 'Clearer vision makes a clearer climate'}
            h3LightHeading={h3LightHeading || 'How restoring your natural sight with vision correction'}
            h3BoldHeading={h3BoldHeading || 'treatment is helping the climate change crisis'}
            sectionImage={{
                url: image || '/images/section-images/clearer-climate.png',
                width: 370,
                height: 352
            }}
            sectionImageDesktop={{
                url: largeImage || '/images/section-images/clearer-climate-desktop.png',
                width: 675,
                height: 642
            }}
            imageYPosition="bottom"
            descriptions={
                (descriptions?.length && descriptions) || [
                    `<span class="block font-latoBold text-[2rem] leading-[2.4rem] text-heading md:mt-24">
                        Did you know that blurry
                        <br /> vision is rapidly rising?
                    </span>`,
                    `<p>We call this ‘Myopia’ but you might already know Myopia as ‘Nearsightedness’.</p>`,
                    `<p>
                        By 2050 the World Health Organization predicts 4.9 million people will suffer from Myopia which
                        not only affects people's natural sight and quality of life, but also contributes to the masses
                        of plastic waste in our climate.
                    </p>`,
                    `<span class="mt-6 font-latoBold text-[2rem] leading-[2.4rem] text-heading">
                        All of our My-iClinic
                        <br />
                        specialists are very climate conscious
                    </span>`,
                    ` <p>
                        We understand how vision correction treatment is a healthier and natural way to not only restore
                        your clear vision, but as an opportunity to see our climate become clean and bright for future
                        generations to come!
                    </p>`
                ]
            }
        />
    );
};

export default ClimateChange;
