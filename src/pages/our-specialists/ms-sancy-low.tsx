import { BreadCrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import { H4Variant1 } from '@/components/Headings';
import { LinkStyle } from '@/components/Link';
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
export default function MsSancyLow(): JSX.Element {
    return (
        <Page title="Ms. Sancy Low" description="Consultant ophthalmic surgeon">
            <BreadCrumb />

            <Section className="lg:!mt-32 py-4 specialist-single-post">
                <Container className="grid grid-rows-1 md:grid-cols-[auto_1fr] gap-12 md:gap-24">
                    <div>
                        <div className="grid bg-white shadow-md rounded-primary overflow-hidden pb-12 group/card transition-all duration-500 hover:shadow-shadow1">
                            <div className="max-h-[37.5rem] overflow-hidden">
                                <Image
                                    src={'/images/avaters/ms-sancy-low.png'}
                                    alt={'MB BS BSc(Hons) PhD FRCOphth'}
                                    width={500}
                                    height={375}
                                    quality={100}
                                    className="rounded-tl-primary rounded-tr-primary group-hover/card:scale-110 transition-all duration-500"
                                />
                            </div>

                            <div className="grid mt-16 px-12">
                                <H4Variant1>{'Ms. Sancy Low'}</H4Variant1>
                                <span className="text-[1.4rem] leading-[2rem] font-mulishBold text-[#51585B] mt-2 uppercase">
                                    {'MB BS BSc(Hons) PhD FRCOphth'}
                                </span>
                                <span className="mt-6 font-mulishBold text-[1.6rem] leading-[2.4rem]">
                                    Consultant and Surgeon
                                </span>
                            </div>
                            <div className="px-12 mt-16">
                                <BookConsultation buttonClassName="w-full place-content-center" />
                            </div>
                        </div>
                    </div>

                    <div className="shadow-md transition-all duration-500 hover:shadow-shadow1 rounded-primary p-12 grid gap-12 md:gap-24">
                        <div className="gap-12 grid content-start">
                            <H2Variant1>Specialties</H2Variant1>

                            <SpecialistFields
                                title="Ophthalmology"
                                fieldList={[
                                    'Cataract',
                                    'Glaucoma',
                                    'Dry Eyes',
                                    'Astigmatism',
                                    'Blepharitis',
                                    'Conjunctivitis'
                                ]}
                            />

                            <SpecialistFields title="Cataract surgery" />

                            <SpecialistFields
                                title="Glaucoma Surgery"
                                fieldList={[
                                    'Trabeculoplasty (SLT)',
                                    'Cyclodiode',
                                    'Minimally Invasive Glaucoma Surgery (MIGS)',
                                    'Laser iridoplasty'
                                ]}
                            />

                            <SpecialistFields title="Laser Refractive Surgery" />
                        </div>

                        <div className="gap-12 grid content-start">
                            <H2Variant1>Education & Training</H2Variant1>

                            <div className="grid gap-6">
                                <p>
                                    2000 BSc(Hons) 2:1 in Pharmacology and Toxicology, Imperial College London
                                    <br />
                                    2002 MB BS Bachelor of Medicine and Surgery, Imperial College London
                                    <br />
                                    2006 MRCOphth Member of the Royal College of Ophthalmologists
                                    <br />
                                    2013 PhD in Molecular Genetics, University College London
                                    <br />
                                    2015 FRCOphth Fellow of the Royal College of Ophthalmologists
                                    <br />
                                    2020 PgDipCRS Post-graduate diploma in cataract and refractive surgery, University
                                    of Ulster
                                    <br />
                                    2022 CertLRS Certificate of Laser and Refractive Surgery, Royal College of
                                    Ophthalmologists
                                </p>
                            </div>
                        </div>

                        <div className="gap-12 grid content-start">
                            <H2Variant1 className="normal-case">Awards and publications</H2Variant1>

                            <div className="grid gap-6">
                                <p>
                                    2006 Dorey Bequest Travel Award (Royal College of Ophthalmologists)
                                    <br />
                                    2007 Allergan Fellowship Award
                                    <br />
                                    2008 IGA Fellowship Award
                                    <br />
                                    2009 Beacon Bursary UCL Public Engagement Award Unit Award
                                </p>
                                <p>
                                    Hamada S, Low S, Walters B, Nischal KK. (2006) Five year experience of the
                                    2-incision push pullcapsulorhexis in paediatric cataract surgery. Ophthalmology
                                    2006:113(8):1309-1314
                                </p>
                                <p>
                                    Low S, Hamada S, Niscal KK (2008) Antimetabolite and releasable suture augmented
                                    filtrationsurgery in refractory pediatric glaucomas. J AAPOS 2008: 12(2):166-72.
                                </p>
                                <p>
                                    Low S, Harsum S, Chang L, Foster PJ, Khaw PT.Angle-closure. Ophthalmology 2008
                                    115(8): 1434-5
                                </p>
                                <p>
                                    Harsum S, Low S. Reversed vaulted AcrySof intraocular lens presenting as a pupillary
                                    block. Eye 2009 23(9):1880-2. Change L, Aung T, Low S, Wong TY, Khaw PT, Foster PJ.
                                    Is measurement of adult height useful in screening for primary angle closure? Eye
                                    2009 23(9):1775-8.
                                </p>
                                <p>
                                    Low S, Nolan WP. Anterior segment imaging for glaucoma: where are we and what next?
                                    Clin ExpOphthal 2009 37(5): 431-3.
                                </p>
                                <p>
                                    Subak-Sharpe I, Low S, Nolan WP, Foster PJ. Drug and environmental factors in
                                    primary angleclosure glaucoma. Br Med Bull 2009 93:125-43.
                                </p>
                                <p>
                                    Davidson AE, Sergouniotis P, Burgess-Mullan R, Hart-Holden N, Low S, Foster PJ,
                                    Manson FD,
                                </p>
                                <p>
                                    Black GC, Webster AR. A synonymous codon variant in two patients with autosomal
                                    recessive bestrophinopathy alters in vitro splicing of BEST1. Mol Vision 2010
                                    16:2916-22.
                                </p>
                                <p>
                                    Low S, Siddiqi. Anterior segment optical coherence tomography and ultrasound
                                    biomicroscopy in glaucoma. CML Ophthalmology 2011
                                </p>
                                <p>
                                    Low S, Davidson AE, Holder GE, Hogg CR, Bhattacharya SS, Black GC, Foster PJ,
                                    Webster AR. Autosomal Best disease with an unusual electrooculographic light rise
                                    and risk of angle-closure glaucoma: a clinical and molecular genetic study. Mol
                                    Vision 2011 17:2272-82.
                                </p>
                                <p>
                                    Maubaret C, Kosmaoglou M, Low S, Chakarova CF, Bidot S, Thauvin-Robinet C, Robson
                                    AG,Waseem N, Cheetham ME, Bhattacharya SS. Functional characterisation of a novel
                                    c.614-622del
                                </p>
                                <p>
                                    rhodopsin mutation in a French pedigree with retinitis pigmentosa. Mol Vision 2012
                                    18:581-82.
                                </p>
                                <p>
                                    Vithana EN, Khor CC, Qiao C, Nongpiur ME, George R, Chen LJ, Do T, Abu-Amero K,
                                    Huang CK,
                                </p>
                                <p>
                                    Low S, et al. Genome-wide association analyses identify three new susceptibility
                                    loci for primary angle closure glaucoma. Nat Genet 2012 44(10):1142-6.
                                </p>
                                <p>
                                    Day AC, Luben R, Khawaja A, Low S, Hayat S, Dalzell N, Wareham NJ, Khaw KT, Foster
                                    PJ.
                                    <br />
                                    Genotype-phenotype analysis of SNPs associated with primary angle closure glaucoma
                                    (rs1015213, rs3753841 and rs11024102) and ocular biometry in the EPIC-Norfolk Eye
                                    Study. Br J of Ophthal 2013 97(6):704-7.
                                </p>
                                <p>
                                    <LinkStyle>Visit more publications by Ms. Sancy Low</LinkStyle>
                                </p>
                            </div>
                        </div>

                        <div className="gap-12 grid content-start">
                            <SpecialistFields
                                title="Fellowships and Memberships in Professional Societies"
                                fieldList={[
                                    'Member of the Royal College of Ophthalmologists',
                                    'Royal Society of Medicine',
                                    'European Society of Glaucoma',
                                    'Member of the European Society of Cataract and Refractive Surgeons',
                                    'Local Negotiating Committee member of the British Medical Association.'
                                ]}
                            />
                        </div>

                        <div className="gap-12 grid content-start">
                            <H2Variant1>What you didn’t know…</H2Variant1>

                            <div className="grid gap-6">
                                <p>
                                    “Outside of the consulting room I have a deep passion for photography and the
                                    founder of of ICSMART; a development room for photography. I am passionate about
                                    reducing the burden of sight loss in my community andI work closely with
                                    optometrists delivering higher education and co-authored the Diploma in Optometry at
                                    UCL Institute of Ophthalmology.”
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </Page>
    );
}
