import { BreadCrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import { H4Variant1 } from '@/components/Headings';
import Page from '@/components/Page';
import { SpecialistFields } from '@/components/page-sections';
import { Section } from '@/components/Section';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import Image from 'next/image';
import H2Variant1 from 'src/components/Headings/H2Variant1';

/**
 * Home page component for the App
 *
 * * Url: /our-specialists
 *
 * @export
 * @returns {JSX.Element}
 */
export default function MsYvonneLuo(): JSX.Element {
    return (
        <Page title="Ms. Yvonne Luo" description="Ms. Yvonne Luo is a consultant and Surgeon">
            <BreadCrumb />

            <Section className="specialist-single-post py-4 lg:!mt-32">
                <Container className="grid grid-rows-1 gap-12 md:grid-cols-[auto_1fr] md:gap-24">
                    <div>
                        <div className="group/card grid overflow-hidden rounded-primary bg-white pb-12 shadow-md transition-all duration-500 hover:shadow-shadow1">
                            <div className="max-h-[37.5rem] overflow-hidden">
                                <Image
                                    src={'/images/avaters/ms-yvonne-luo.jpg'}
                                    alt={'Ms. Yvonne Luo'}
                                    width={500}
                                    height={375}
                                    quality={100}
                                    className="rounded-tl-primary rounded-tr-primary transition-all duration-500 group-hover/card:scale-110"
                                />
                            </div>

                            <div className="mt-16 grid px-12">
                                <H4Variant1>{'Ms. Yvonne Luo'}</H4Variant1>
                                <span className="mt-2 font-mulishBold text-[1.4rem] uppercase leading-[2rem] text-[#51585B]">
                                    M.B., B.Chir., M.A.(Cantab), FRCOphth, PhD
                                </span>
                                <span className="mt-6 font-mulishBold text-[1.6rem] leading-[2.4rem]">
                                    Consultant and Surgeon
                                </span>
                            </div>
                            <div className="mt-16 px-12">
                                <BookConsultation buttonClassName="w-full place-content-center" />
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-12 rounded-primary p-12 shadow-md transition-all duration-500 hover:shadow-shadow1 md:gap-24">
                        <div className="grid content-start gap-12">
                            <H2Variant1>Specialties</H2Variant1>

                            <SpecialistFields
                                title="Ophthalmology"
                                fieldList={[
                                    'Retinal conditions / Macular Degeneration',
                                    'Blepharitis',
                                    'Eyelid Cysts, Chalazion & Styes'
                                ]}
                            />

                            <SpecialistFields
                                title="Cornea surgeries"
                                fieldList={['Lamellar corneal graft', 'Cataracts', 'Dry Eyes']}
                            />

                            <SpecialistFields
                                title="Retinal Treatment"
                                fieldList={[
                                    'Vitreoretinal surgery',
                                    'Vitreoretinal disorders',
                                    'Vitreous haemorrhage',
                                    'Retinal detachment',
                                    'Eiretinal membrane',
                                    'Diabetic retinopathy',
                                    'Medical retinal conditions',
                                    'Optical coherence tomography',
                                    'Macular hole'
                                ]}
                            />

                            <SpecialistFields
                                title="Refractive laser eye surgery"
                                fieldList={['YAG Laser Treatment ']}
                            />

                            <SpecialistFields title="Cataract surgery" />
                        </div>

                        <div className="grid content-start gap-12">
                            <H2Variant1>Education & Training</H2Variant1>

                            <div className="grid gap-6">
                                <p>
                                    <strong>Education</strong>
                                </p>
                                <p>
                                    BA (Hons) Bachelor of pharmacology, University of Cambridge (1999)
                                    <br />
                                    MB BChir, Bachelor of medicine and surgery, University of Cambridge (2001)
                                    <br />
                                    MA (Cantab), University of Cambridge (2003)
                                    <br />
                                    MRCOphth (2004 - 2006)
                                    <br />
                                    FRCOphth, Royal College of Ophthalmologists (2010)
                                    <br />
                                    Vitreoretinal ASTO fellow, Moorfields Eye Hospital London (2011 - 2012)
                                    <br />
                                    CCT Specialist Register in Ophthalmology (2012)
                                    <br />
                                    Vitreoretinal clinical research fellow, Moorfields Eye Hospital London (2012 - 2015)
                                    <br />
                                    Vitreoretinal fellow, Moorfields Eye Hospital London (2015 - 2016)
                                    <br />
                                    Medical retina fellow, Moorfields Eye Hospital London (2016 - 2017)
                                    <br />
                                    PhD, Clinical ophthalmology, University College London (2017)
                                </p>
                                <p>
                                    <strong>Training</strong>
                                </p>
                                <p>
                                    My-iClinic, North London’s Eye Hospital, North London.
                                    <br />
                                    Consultant ophthalmologist, cataract and vitreoretinal surgeon and retinal
                                    specialist, Spencer Private Hospitals, Ashford (present)
                                    <br />
                                    Consultant ophthalmologist, Benenden Hospital (present)
                                    <br />
                                    Consultant ophthalmologist with specialist interest in vitreoretinal Surgery, East
                                    Kent Hospitals University NHS Foundation Trust (2017 - present)
                                    <br />
                                    Locum Consultant ophthalmologist with specialist interest in vitreoretinal Surgery,
                                    Moorfields Hospital (2017)
                                </p>
                            </div>
                        </div>

                        <div className="grid content-start gap-12">
                            <H2Variant1 className="normal-case">Awards and publications</H2Variant1>

                            <div className="grid gap-6">
                                <p>
                                    Research award, NIHR Biomedical Research Centre for Ophthalmology travel grant,
                                    Association for Research in Vision and Ophthalmology (ARVO) (2013)
                                </p>
                                <p>
                                    Reports MRI Brain Scans in Two Patients with the Argus II Retinal Prosthesis. Bloch,
                                    E., Luo, Y.H.-L., daCruz, L., 2019.
                                </p>
                                <p>
                                    Advances in retinal prosthesis systems. Ther Adv Ophthalmol 11, 2515841418817501.
                                    daCruz, L., Fynes, K., Georgiadis, O., Kerby, J., Luo, Y.H., Ahmado, A., Vernon, A.,
                                    Daniels, J.T., Nommiste, B., Hasan, S.M., Gooljar, S.B., Carr, A.-J.F., Vugler, A.,
                                    Ramsden, C.M., Bictash, M., Fenster, M., Steer, J., Harbinson, T., Wilbrey, A.,
                                    Tufail, A., Feng, G., Whitlock, M., Robson, A.G., Holder, G.E., Sagoo, M.S., Loudon,
                                    P.T., Whiting, P., Coffey, P.J., 2018.
                                </p>
                                <p>
                                    Phase 1 clinical study of an embryonic stem cell–derived retinal pigment epithelium
                                    patch in age-related macular degeneration. Nature Biotechnology 2018 36:4 36, 328.
                                    doi:10.1038/nbt.4114 Mastropasqua, R., Luo, Y.H.-L., Cheah, Y.S., Egan, C.,Lewis,
                                    J.J., da Cruz, L., 2017.
                                </p>
                                <p>
                                    Black patients sustain vision loss while White and South Asian patients gain vision
                                    following delamination or segmentation surgery for tractional complications
                                    associated with proliferative diabetic retinopathy. Eye (Lond).
                                    doi:10.1038/eye.2017.95 Luke Nicholson, Clara Vazquez-Alfageme, Monica Clemo, Yvonne
                                    Luo, Philip G. Hykin, James W. Bainbridge, SobhaSivaprasad, Quantifying Retinal Area
                                    in Ultra-Widefield Imaging Using a 3-Dimensional Printed Eye Model, Ophthalmology
                                    Retina, 2017, ISSN 2468-6530,Luo, Y.H.-L., Fukushige, E., daCruz, L., 2016.
                                </p>
                                <p>
                                    The potential of the second sight system bionic eye implant for partial sight
                                    restoration. Expert Rev Med Dev 13, 673–681. doi:10.1080/17434440.2016.1195257 Luo,
                                    Y.H.-L., Zhong, J.J., daCruz, L., 2015.
                                </p>
                                <p>
                                    The use of Argus® II retinal prosthesis by blind subjects to achieve localisation
                                    and prehension of objects in 3-dimensional space. Graefe's archive for clinical and
                                    experimental ophthalmology 253, 1907–1914. doi:10.1007/s00417-014- 2912-z Luo YH-L,
                                    daCruz L.
                                </p>
                                <p>
                                    A review and update on the current status of retinal prostheses (bionic eye). Br Med
                                    Bull. 2014. doi:10.1093/bmb/ldu002. Luo YH-L, Davagnanam I, daCruz L.
                                </p>
                                <p>
                                    MRI Brain Scans in Two Patients with the Argus II Retinal Prosthesis. Ophthalmology.
                                    2013;120(8):1711–1711.e8. doi:10.1016/j.ophtha.2013.04.021. Luo YH, Larkin F.
                                </p>
                                <p>
                                    Organ Transplantation – A Clinical Guide Chapter: Corneal Transplantation Cambridge
                                    University Press 2011 Luo YH-L, Poole TRG, Griffiths MF.
                                </p>
                                <p>
                                    Safe and effective visualisation of vitreous in the anterior chamber with
                                    intracameral fluorescein to facilitate its complete removal. Eye (Lond).
                                    2006;20(8):951–955. doi:10.1038/sj.eye.6702062. Beigi, B., Gupta, D., Luo, Y.H.-L.,
                                    Saldana, M., Georgalas, I., Kalantzis, G., El-Hindy, N., 2015.
                                </p>
                                <p>
                                    Punctal function in lacrimal drainage: the “pipette sign” and functional ectropion.
                                    Clin Exp Optom 98, 366–369. doi:10.1111/cxo.12279 Wong R, Luo YH-L, Al-Zahawi MF,
                                    Poole TRG.
                                </p>
                                <p>
                                    Infective crystalline keratopathy secondary to non-tuberculous mycobacterium
                                    (Mycobacterium abscessus) in a nontraumatized eye. Eye (Lond). 2007;21(8):1123–1124.
                                    doi:10.1038/sj.eye.670289
                                </p>
                            </div>
                        </div>

                        <div className="grid content-start gap-12">
                            <SpecialistFields
                                title="Fellowships and Memberships in Professional Societies"
                                fieldList={['Membership of Euretina', 'Membership of FRCOphth']}
                            />
                        </div>

                        <div className="grid content-start gap-12">
                            <H2Variant1>What you didn’t know…</H2Variant1>

                            <div className="grid gap-6">
                                <p>
                                    “In earlier education I achieved a Grade 8 Distinction from Royal College of Music
                                    in piano. I have a passion for mountaineering and have climbed Mt Kenya (5000m) and
                                    Mt Sinai in Africa, the Franz Joseph Gacier in New Zealand, and Mt. Ali (2000m) in
                                    Taiwan.”
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </Page>
    );
}
