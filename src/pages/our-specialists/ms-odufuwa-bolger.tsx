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
export default function MsOdufuwaBolger(): JSX.Element {
    return (
        <Page title="Ms. Odufuwa- Bolger" description="Ms. Bola Odufuwa-Bolger is a consultant and Surgeon">
            <BreadCrumb />

            <Section className="specialist-single-post py-4 lg:!mt-32">
                <Container className="grid grid-rows-1 gap-12 md:grid-cols-[auto_1fr] md:gap-24">
                    <div>
                        <div className="group/card grid overflow-hidden rounded-primary bg-white pb-12 shadow-md transition-all duration-500 hover:shadow-shadow1">
                            <div className="max-h-[37.5rem] overflow-hidden">
                                <Image
                                    src={'/images/avaters/odufuwa-bolger.png'}
                                    alt={'Ms. Odufuwa- Bolger'}
                                    width={500}
                                    height={375}
                                    quality={100}
                                    className="rounded-tl-primary rounded-tr-primary transition-all duration-500 group-hover/card:scale-110"
                                />
                            </div>

                            <div className="mt-16 grid px-12">
                                <H4Variant1>{'Ms. Odufuwa- Bolger'}</H4Variant1>
                                <span className="mt-2 font-mulishBold text-[1.4rem] uppercase leading-[2rem] text-[#51585B]">
                                    MBBS DO FRCS (Ed) FRCOphth MSc CertLRS; PGDip LRS
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
                                    'Glaucoma',
                                    'Cataract',
                                    "Paediatric (Children's eye care)",
                                    'Refractive laser eye surgery'
                                ]}
                            />

                            <SpecialistFields title="Cataract surgery" />

                            <SpecialistFields
                                title="Glaucoma Surgery"
                                fieldList={[
                                    'Minimally Invasive Glaucoma Surgery (MIGS)',
                                    'PresserFlo',
                                    'Selective Laser Trabeculoplasty (SLT)',
                                    'YAG Laser iridotomy',
                                    'HFDS (High-frequency deep sclerotomy)',
                                    'Glaucoma Canaloplasty'
                                ]}
                            />

                            <SpecialistFields
                                title="Refractive laser eye surgery"
                                fieldList={[
                                    'ReLEX SMILE',
                                    'LASIK',
                                    'Presbyond',
                                    'LASEK',
                                    'Photorefractive keratectomy (PRK)',
                                    'Photo-Therapeutic Keratectomy (PTK)'
                                ]}
                            />
                        </div>

                        <div className="grid content-start gap-12">
                            <H2Variant1>Education & Training</H2Variant1>

                            <div className="grid gap-6">
                                <p>Certificate in Laser Refractive of the Royal College of Ophthalmologists in 2018</p>
                                <p>
                                    PGDiploma in Cataract &amp; Refractive Surgery at the Ulster University Distinction
                                    2018.
                                </p>
                                <p>
                                    Masters in Medical Informatics The Royal College of Surgeons of Edinburgh April
                                    2006.
                                </p>
                                <p>CCST. London. March 2003</p>
                                <p>Diploma in Ophthalmology of the Royal College of Surgeons in Ireland - 1992</p>
                                <p>M.B.,B.S. College of Medicine University of Lagos, Nigeria -1986</p>
                            </div>
                        </div>

                        <div className="grid content-start gap-12">
                            <H2Variant1 className="normal-case">Awards and publications</H2Variant1>

                            <div className="grid gap-6">
                                <p>
                                    1st place – ESCRS Special Cases in Video presentation competition.
                                    <br />
                                    ‘Wound dehiscence of radial keratotomy 10 years post-op.’ Awarded by the Congress of
                                    the European Society of Cataract and Refractive Surgeons. Prague, Czech Republic.
                                    September 1997.
                                </p>
                                <p>
                                    Ophthalmological Society of Nigeria award – ‘In recognition of selfless service to
                                    eye care serviced in Nigeria‘ – Awarded at the 34th Annual congress. Lagos 2009.
                                </p>
                            </div>
                        </div>

                        <div className="grid content-start gap-12">
                            <SpecialistFields
                                title="Fellowships and Memberships in Professional Societies"
                                fieldList={[
                                    'Senior Clinical Fellowship in Ophthalmology 2002 TO 2007',
                                    'Final Fellowship Examination of the Royal College of Ophthalmologists, London 1993',
                                    'Final Fellowship Examination of the Royal College of Surgeons of Edinburgh 1993',
                                    'Member of the Royal College of Ophthalmologists'
                                ]}
                            />
                        </div>
                    </div>
                </Container>
            </Section>
        </Page>
    );
}
