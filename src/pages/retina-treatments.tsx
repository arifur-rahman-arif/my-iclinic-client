import { BreadCrumb } from '@/components/Breadcrumb';
import Page from '@/components/Page';
import MastheadOphthalmologyClinic from '@/page-sections/Masthead/MastheadOphthalmologyClinic';
import EpiretinalMembrane from '@/page-sections/OphthalmologyPage/EpiretinalMembrane';
import Floaters from '@/page-sections/OphthalmologyPage/Floaters';
import OphthalmologistDoctors from '@/page-sections/OphthalmologyPage/OphthalmologistDoctors';
import RetinalDetachment from '@/page-sections/OphthalmologyPage/RetinalDetachment';
import WhyMyIClinic from '@/page-sections/OphthalmologyPage/WhyMyIClinic';
import YvonneLuo from '@/page-sections/OphthalmologyPage/YvonneLuo';
import CtaSection from '@/page-sections/VitreoretinalSurgery/CtaSection';

/**
 * Home page component for the App
 *
 * Url: /
 *
 * @export
 * @returns {JSX.Element}
 */
export default function RetinaTreatments(): JSX.Element {
    return (
        <Page
            title="London Retina treatments For Eye Health"
            description="Ophthalmology for eye health solutions including, cataracts, glaucoma, diabetic retinopathy, macular degeneration & corneal diseases."
        >
            <BreadCrumb className="md:hidden"/>

            <MastheadOphthalmologyClinic/>

            <OphthalmologistDoctors/>

            <WhyMyIClinic/>

            <YvonneLuo/>

            <Floaters/>

            <RetinalDetachment/>

            <RetinalDetachment
                heading="Macular Hole"
                descriptions={[
                    'A macular hole is a condition that affects the central part of the retina known as the macula, which is responsible for sharp and detailed central vision.',
                    'This disorder occurs when there is a small break or hole in the macular tissue, leading to distorted and blurred central vision.',
                    'Macular holes usually develop due to age-related changes of the vitreous body in eyes with abnormally strong adhesion of the vitreous at the macula.',
                    'As the vitreous body liquefies with age, the strong adhesion causes avulsion of the retinal tissue at macula, resulting in a macular hole.',
                    'Treatment of macular hole involves surgical procedures known as vitrectomy, peeling of internal limiting membrane, and gas tamponade.',
                    'During vitrectomy, the vitreous gel inside the eye is removed with a high speed pneumatic cutter and replaced with fluid. This removes all the traction on the retina.',
                    'A dye is then injected to stain a very thin connective tissue membrane on the surface of the retina, known as the internal limiting membrane.',
                    'By removing the (peeling away) the internal limiting membrane, the tissue around the macular hole becomes more mobile, and migrate to fill in the gap, thereby closing the macular hole. Finally, a gas bubble is injected to encourage migration of the surrounding tissue to fill the hole.',
                    'The visual outcome of the macular hole surgery is directly related to the size of the macular hole, which tends to enlarge with time.'
                ]}
                bulletPoint="Early diagnosis and prompt intervention are essential for achieving the best possible visual outcomes in macular hole cases."
                sectionImage={{
                    src: '/images/section-images/macular-hole.png',
                    width: 405,
                    height: 788
                }}
                sectionImageLarge={{
                    src: '/images/section-images/macular-hole-large.png',
                    width: 684,
                    height: 852
                }}
                textColumnClassName="md:col-start-2"
            />

            <EpiretinalMembrane/>

            <RetinalDetachment
                heading="Diabetic Retinopathy"
                descriptions={[
                    'Diabetic retinopathy is a sight-threatening complication of diabetes that affects the blood vessels in the retina, the light-sensitive tissue at the back of the eye.',
                    'Over time, high levels of blood sugar can damage these delicate blood vessels, leading to leakage, swelling, and the development of abnormal blood vessels.',
                    '<strong class="text-[1.6rem] text-heading uppercase">If left untreated, diabetic retinopathy can cause severe vision loss, including blindness.</strong>',
                    'The treatment for diabetic retinopathy varies depending on the stage and severity of the condition.',
                    'In the early stages, managing blood sugar levels, blood pressure, and cholesterol can slow its progression.',
                    'For more advanced cases, laser therapy (photocoagulation) or anti-VEGF injections may be recommended.',
                    'Regular eye examinations are crucial for early detection and management of diabetic retinopathy to preserve vision and prevent complications.',
                    'These treatments aim to reduce abnormal blood vessel growth and prevent further damage. In advanced cases, surgery such as vitrectomy may be necessary to remove blood or scar tissue from the eye.'
                ]}
                bulletPoint="Regular eye examinations are crucial for early detection and management of diabetic retinopathy to preserve vision and prevent complications."
                sectionImage={{
                    src: '/images/section-images/diabetic-retinopathy-small.png',
                    width: 385,
                    height: 852
                }}
                sectionImageLarge={{
                    src: '/images/section-images/diabetic-retinopathy.png',
                    width: 684,
                    height: 852
                }}
                specialistCtaButton
            />

            <CtaSection/>
        </Page>
    );
}
