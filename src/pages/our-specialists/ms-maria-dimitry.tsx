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
export default function MsMariaDimitry(): JSX.Element {
    return (
        <Page title="Ms. Maria Dimitry" description="Ms. Maria Dimitry is a consultant and Surgeon">
            <BreadCrumb />

            <Section className="specialist-single-post py-4 lg:!mt-32">
                <Container className="grid grid-rows-1 gap-12 md:grid-cols-[auto_1fr] md:gap-24">
                    <div>
                        <div className="group/card grid overflow-hidden rounded-primary bg-white pb-12 shadow-md transition-all duration-500 hover:shadow-shadow1">
                            <div className="max-h-[37.5rem] overflow-hidden">
                                <Image
                                    src={'/images/avaters/ms-maria-dimitry.png'}
                                    alt={'Ms. Maria Dimitry'}
                                    width={500}
                                    height={375}
                                    quality={100}
                                    className="rounded-tl-primary rounded-tr-primary transition-all duration-500 group-hover/card:scale-110"
                                />
                            </div>

                            <div className="mt-16 grid px-12">
                                <H4Variant1>{'Ms. Maria Dimitry'}</H4Variant1>
                                <span className="mt-2 font-mulishBold text-[1.4rem] uppercase leading-[2rem] text-[#51585B]">
                                    MBBS, MSc, FRCOphth
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
                                    'General Ophthalmologyn',
                                    'Corneal diseases',
                                    'Cataract',
                                    'Dry Eyes',
                                    'Kerataconus',
                                    'Fuchs dystrophy'
                                ]}
                            />

                            <SpecialistFields title="Cataract surgery" />

                            <SpecialistFields
                                title="Cornea surgeries"
                                fieldList={['Cross-linking', 'Lamellar Corneal Graft', 'Pterygium surgery']}
                            />
                        </div>

                        <div className="grid content-start gap-12">
                            <H2Variant1>Education & Training</H2Variant1>

                            <div className="grid gap-6">
                                <p>
                                    MBBS Bachelor of Medicine and Bachelor of Surgery (2001- 2007)
                                    <br />
                                    Imperial College, School of Science, Technology and Medicine London
                                    <br />
                                    BSc Anatomy and Developmental Biology Bachelor of Science (2005)
                                    <br />
                                    University College London
                                    <br />
                                    MSc Clinical Ophthalmology MSc (2016)
                                    <br />
                                    UCL Institute of Ophthalmology
                                    <br />
                                    FRCOphth Royal College of Ophthalmologists (2017)
                                </p>
                            </div>
                        </div>

                        <div className="grid content-start gap-12">
                            <H2Variant1 className="normal-case">Awards and publications</H2Variant1>

                            <div className="grid gap-6">
                                <p>
                                    Recent change in law and corneal transplantation in the UK. M. Dimitry, H. Lee Eye
                                    35, 1524–1525 (2021).
                                </p>
                                <p>
                                    Changes in symmetry of anterior chamber following routine cataract surgery in
                                    nonglaucomatous eyes. H. Lee, I. Zukaite, V. Juniat, M. Dimitry, A. Lewis, M.
                                    Nanavaty Eye and Vision. Jul 2019, 19
                                </p>
                                <p>
                                    A simple single-pass technique for ultrathin Descemet's Stripping Automated
                                    Endothelial Keratoplasty: a pilot study. M.Dimitry, A.Lewis, F.Zacharaki,
                                    M.Chandran, G.Menon, TR Poole Cornea. 2017 Oct;36 (10):1178-1183.
                                </p>
                                <p>
                                    Heterotopic pregnancy and assisted reproduction (Chap32). Marcus SF, Dimitry E.S,
                                    Dimitry M. Ultrasonography in Reproductive Medicine and Fertility. (In press, April
                                    2010).
                                </p>
                            </div>
                        </div>

                        <div className="grid content-start gap-12">
                            <SpecialistFields
                                title="Fellowships and Memberships in Professional Societies"
                                fieldList={[
                                    'Fellow of the Royal College of Ophthalmologists',
                                    'Member of European Society of Cataract and Refractive Surgeons',
                                    'Member of the BMA Member of the MDU',
                                    'Member of the Coptic Medical Society'
                                ]}
                            />
                        </div>

                        <div className="grid content-start gap-12">
                            <H2Variant1>What you didn’t know…</H2Variant1>

                            <div className="grid gap-6">
                                <p>
                                    “I speak English, French and Arabic. In my spare time, I enjoy travelling, baking,
                                    tennis and walking.”
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </Page>
    );
}
