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
export default function Radwan(): JSX.Element {
    return (
        <Page title="Mr. Radwan Almousa" description="Mr. Radwan Almousa is a consultant and Surgeon">
            <BreadCrumb />

            <Section className="lg:!mt-32 py-4 specialist-single-post">
                <Container className="grid grid-rows-1 md:grid-cols-[auto_1fr] gap-12 md:gap-24">
                    <div>
                        <div className="grid bg-white shadow-md rounded-primary overflow-hidden pb-12 group/card transition-all duration-500 hover:shadow-shadow1">
                            <div className="max-h-[37.5rem] overflow-hidden">
                                <Image
                                    src={'/images/avaters/mr-radwan-almousa.png'}
                                    alt={'Mr. Radwan Almousa'}
                                    width={500}
                                    height={375}
                                    quality={100}
                                    className="rounded-tl-primary rounded-tr-primary group-hover/card:scale-110 transition-all duration-500"
                                />
                            </div>

                            <div className="grid mt-16 px-12">
                                <H4Variant1>{'Mr. Radwan Almousa'}</H4Variant1>
                                <span className="text-[1.4rem] leading-[2rem] font-mulishBold text-[#51585B] mt-2 uppercase">
                                    MD FRCOphth CertLRS
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
                                fieldList={['Keratoconus', 'Blepharitis', 'Eyelid Cysts, Chalazion & Styes']}
                            />

                            <SpecialistFields
                                title="Cornea surgeries"
                                fieldList={['Lamellar corneal graft', 'Crosslinking', 'Intracorneal rings']}
                            />

                            <SpecialistFields
                                title="Oculoplastics (Eyelid surgeries)"
                                fieldList={[
                                    'Correction eyelid malposition',
                                    'Entropia',
                                    'Entropion',
                                    'Blepharoplasty',
                                    'Cyst removal',
                                    'Stye removal',
                                    'Chalazion removal',
                                    'Ptosis',
                                    'Pterygium surgery',
                                    'Eyebrow lift'
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

                            <SpecialistFields title="Cataract surgery" />

                            <SpecialistFields title="Glaucoma Surgery" />

                            <SpecialistFields
                                title="Botox and fillers (periocular)"
                                fieldList={['Blepharospasm botox injections']}
                            />
                        </div>

                        <div className="gap-12 grid content-start">
                            <H2Variant1>Education & Training</H2Variant1>

                            <div className="grid gap-6">
                                <p>
                                    <strong>Education</strong>
                                </p>
                                <p>
                                    Certificate in laser and refractive surgery (CertLRS) 07/2018
                                    <br />
                                    Fellowship of the royal college of ophthalmologists (FRCOphth) 04/2012
                                    <br />
                                    Cornea, Anterior Segment and Refractive Surgery Fellowship, Queen Victoria Hospital
                                    04/2010
                                    <br />
                                    Oculoplastic fellowship, National University Hospital, Singapore 12/2008
                                    <br />
                                    Medical Diploma (MD), Damascus University 04/199
                                </p>
                                <p>
                                    <strong>Training</strong>
                                </p>
                                <p>
                                    My-iClinic, North London’s Eye Hospital, North London.
                                    <br />
                                    Moorfields Eye Hospital, Bedford.
                                    <br />
                                    PMC, The Wellington, London
                                    <br />
                                    Barking, Havering and Redbridge University Hospitals NHS Trust.
                                    <br />
                                    University Hospitals Coventry and Warwickshire, UK.
                                    <br />
                                    Locum agency ophthalmology consultant, UK.
                                    <br />
                                    Queen Victoria Hospital, East Grinstead, UK
                                    <br />
                                    National University Hospital, Singapore.
                                    <br />
                                    Royal Cornwall Hospital, Truro, United Kingdom.
                                    <br />
                                    North Devon District Hospital, Barnstaple, United Kingdom.
                                </p>
                            </div>
                        </div>

                        <div className="gap-12 grid content-start">
                            <H2Variant1 className="normal-case">Awards and publications</H2Variant1>

                            <div className="grid gap-6">
                                <p>
                                    Almousa R, Johns S, Gibson RA, Atypical Clinical Presentation of Brown-McLean
                                    Syndrome, Eye. 2007 Feb;21(2):249-0.
                                </p>
                                <p>
                                    Lee J, Almousa R, Amrith S. Eyelid Kimura disease in Indian male. Clin Experiment
                                    Ophthalmol. 2009;37:412-4.
                                </p>
                                <p>
                                    Almousa R, Amrith S, Sundar G. Browlift-a South East Asian experience. Orbit.
                                    2009;28:347-53.
                                </p>
                                <p>
                                    Yeo MS, Al-mousa R, Sundar G, Lim TC. Mydriasis during orbital floor fracture
                                    reconstruction: A novel diagnostic and treatment algorithm. Cranial Maxillofac
                                    Trauma Reconstruction. 2010;3:209-216.
                                </p>
                                <p>
                                    Almousa R, Charlton A, Rajesh S T, Sundar G, Amrith S. Optimising muscle biopsy for
                                    the diagnosis of Mitochondrial Myopathy. Ophthalmic Plast Reconst Surg.
                                    2009;25:366-0.
                                </p>
                                <p>
                                    Amrith S. Almousa R, Sundar G, Blow-out fractures- Surgical outcome in relation to
                                    age, time of intervention and other pre-operative risk factors. CranioMaxillofac
                                    Trauma Reconstruction 2010; 3:131-136.
                                </p>
                                <p>
                                    Almousa R, Liang S, Amrith S, Mani AH., Sundar G. Radiological signs of periorbital
                                    trauma- Singapore Experience. Orbit 2010;29:307-312.
                                </p>
                                <p>
                                    Almousa R, Nga, ME, Sundar G. Marginal Zone B-Cell Orbital Lymphoma With
                                    Intracranial Involvement. OPRS 2010;26:205-206.
                                </p>
                                <p>
                                    Almousa R, Sundar G. Acquired epiblepharon treated by lateral orbital and fat
                                    decompression. Middle East Afr J Ophthalmol. 2011;18:80-81.
                                </p>
                                <p>
                                    Almousa R, Shuen Chao, Sundar G. Acute orbital haemorrhage as presentation of a
                                    lytic bony lesion. Cranial Maxillofac Trauma Reconstruction 2011;4:189-192.
                                </p>
                            </div>
                        </div>

                        <div className="gap-12 grid content-start">
                            <H2Variant1>In The Media</H2Variant1>

                            <div className="grid gap-6">
                                <p>
                                    Eurotimes: Paralesional interferon injections show promise as alternative treatment
                                    for conjunctival papilloma. March 2010.
                                </p>
                                <p>Who’s Who in the World 2011 (28th Edition).</p>
                                <p>Who’s Who in the World 2012 (29th Edition).</p>
                                <p>
                                    Ophthalmology Times Europe: Glaucoma device controls IOP in high-risk PK. 23 July
                                    2013.
                                </p>
                            </div>
                        </div>

                        <div className="gap-12 grid content-start">
                            <SpecialistFields
                                title="Fellowships and Memberships in Professional Societies"
                                fieldList={[
                                    'Cornea, Anterior segment and Refractive Surgery Fellowship. Queen Victoria Hospital, UK 12/2008 - 04/2010',
                                    'Oculoplastic Fellowship, National University Hospital, Singapore 12/2007 - 12/2008',
                                    'Fellowship of the Royal College of Ophthalmologists',
                                    'Membership of the Royal College of Surgeons (Edinburgh)',
                                    'Member of the American Academy of Ophthalmology',
                                    'Member of the International Society of Refractive Surgery of the American Academy of Ophthalmology',
                                    'Membership of General Medical Council, UK',
                                    'Membership of Singapore Medical Council, Singapore',
                                    'Member of Medical Protection Society, UK (Policy No351563)'
                                ]}
                            />
                        </div>

                        <div className="gap-12 grid content-start">
                            <H2Variant1>What you didn’t know…</H2Variant1>

                            <div className="grid gap-6">
                                <p>
                                    “Outside of my professional practice, I enjoy engaging in out-door sports,
                                    especially tennis and football. I value physical activities and adventure so much
                                    that I have completed a training course in Parachute Jumping. I am also fully
                                    competent in a large number of computer applications and statistical analysis which
                                    further aids my investigations in managing corneal diseases which is a special
                                    medical interest of mine.”
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </Page>
    );
}
