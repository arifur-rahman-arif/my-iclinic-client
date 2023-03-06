import { SideImageSection } from '@/components/page-sections';

/**
 * Climate Change component
 *
 * @returns {*}  {JSX.Element}
 */
const ClimateChange = (): JSX.Element => {
    return (
        <SideImageSection
            h2Heading="Clearer vision makes a clearer climate"
            h3LightHeading="How restoring your natural sight with vision correction"
            h3BoldHeading="treatment is helping the climate change crisis"
            sectionImage={{
                url: '/images/section-images/clearer-climate.png',
                width: 370,
                height: 352
            }}
            sectionImageDesktop={{
                url: '/images/section-images/clearer-climate-desktop.png',
                width: 675,
                height: 642
            }}
            imageYPosition="bottom"
            textColumnExtras={
                <div className="grid gap-6 md:mt-16">
                    <span className="font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                        Did you know that blurry
                        <br /> vision is rapidly rising?
                    </span>
                    <p>We call this ‘Myopia’ but you might already know Myopia as ‘Nearsightedness’.</p>
                    <p>
                        By 2050 the World Health Organization predicts 4.9 million people will suffer from Myopia which
                        not only affects people's natural sight and quality of life, but also contributes to the masses
                        of plastic waste in our climate.
                    </p>
                    <span className="mt-6 font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                        All of our My-iClinic
                        <br />
                        specialists are very climate conscious
                    </span>
                    <p>
                        We understand how vision correction treatment is a healthier and natural way to not only restore
                        your clear vision, but as an opportunity to see our climate become clean and bright for future
                        generations to come!
                    </p>
                </div>
            }
        />
    );
};

export default ClimateChange;
