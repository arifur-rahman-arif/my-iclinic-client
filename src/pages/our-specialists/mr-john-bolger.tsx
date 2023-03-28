import { BreadCrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import { H4Variant1 } from '@/components/Headings';
import Page from '@/components/Page';
import { SpecialistFields } from '@/components/page-sections';
import { Section } from '@/components/Section';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import Image from 'next/image';
import H2Variant1 from 'src/components/Headings/H2Variant1';

interface JhonBolgerProps {}

/**
 * Home page component for the App
 *
 * * Url: /our-specialists
 *
 * @export
 * @returns {JSX.Element}
 */
export default function JhonBolger({}: JhonBolgerProps): JSX.Element {
    return (
        <Page title="Mr. John Bolger" description="Mr. John Bolger is a consultant and Surgeon">
            <BreadCrumb />

            <Section className="specialist-single-post py-4 lg:!mt-32">
                <Container className="grid grid-rows-1 gap-12 md:grid-cols-[auto_1fr] md:gap-24">
                    <div>
                        <div className="group/card grid overflow-hidden rounded-primary bg-white pb-12 shadow-md transition-all duration-500 hover:shadow-shadow1">
                            <div className="max-h-[37.5rem] overflow-hidden">
                                <Image
                                    src={'/images/avaters/mr-john-bolger.png'}
                                    alt={'Mr. John Bolger'}
                                    width={500}
                                    height={375}
                                    quality={100}
                                    className="rounded-tl-primary rounded-tr-primary transition-all duration-500 group-hover/card:scale-110"
                                />
                            </div>

                            <div className="mt-16 grid px-12">
                                <H4Variant1>{'Mr. John Bolger'}</H4Variant1>
                                <span className="mt-2 font-mulishBold text-[1.4rem] uppercase leading-[2rem] text-[#51585B]">
                                    M.B., B.Ch., B.A.O., D.O., F.R.C.S., F.E.B.O.S.-CR
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
                                fieldList={['Myopia Control for children', 'Cataracts', 'Refractive']}
                            />

                            <SpecialistFields title="Cataract surgery" />

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
                                <p>
                                    Certificate of Higher Surgical Training London 1986
                                    <br />
                                    F.R.C.S. London 1982
                                    <br />
                                    D.O. London 1980
                                    <br />
                                    M.B., B.Ch., B.A.O. Dublin 1976
                                    <br />
                                </p>
                                <p>
                                    St. Thomas Hospital, London.
                                    <br />
                                    The Royal Free Hospital, London.
                                    <br />
                                    Moorfields Eye Hospital, London
                                </p>
                                <p>
                                    Late hyphema after small incision cataract surgery.
                                    <br />
                                    Odufuwa TO, Bolger J. J Cataract Refract Surg. 1994 May;20(3):342-3.
                                </p>
                                <p>
                                    Gains from cataract surgery: visual function and quality of life.
                                    <br />
                                    P Desai, A Reidy, D C Minassian, G Vafidis, and J Bolger
                                    <br />
                                    Br J Ophthalmol. 1996 Oct; 80(10): 868–873.
                                </p>
                            </div>
                        </div>

                        <div className="grid content-start gap-12">
                            <H2Variant1 className="normal-case">Awards and publications</H2Variant1>

                            <div className="grid gap-6">
                                <p>
                                    Auditory evoked phosphenes in optic nerve disease.
                                    <br />
                                    Page NG, Bolger JP, Sanders MD.
                                    <br />J Neurol Neurosurg Psychiatry. 1982 Jan;45(1):7-12.
                                </p>
                                <p>
                                    Rapid development and progression of proliferative retinopathy after strict diabetic
                                    control. Dandona P, Bolger JP, Boag F, Fonesca V, Abrams JD. Br Med J (Clin Res Ed).
                                    1985 Mar 23;290(6472):895-6.
                                </p>
                                <p>
                                    Late hyphema after small incision cataract surgery.
                                    <br />
                                    Odufuwa TO, Bolger J. J Cataract Refract Surg. 1994 May;20(3):342-3.
                                </p>
                                <p>
                                    Gains from cataract surgery: visual function and quality of life.
                                    <br />
                                    P Desai, A Reidy, D C Minassian, G Vafidis, and J Bolger
                                    <br />
                                    Br J Ophthalmol. 1996 Oct; 80(10): 868–873.
                                    <br />
                                </p>
                            </div>
                        </div>

                        <div className="grid content-start gap-12">
                            <H2Variant1>In The Media</H2Variant1>

                            <div className="grid gap-6">
                                <p>
                                    <strong>The BBC</strong>
                                    <br />
                                    Mr. John Bolger has been featured on both BBC Television for cataract investigations
                                    and surgical work.
                                </p>
                                <p>
                                    <strong>The BBC</strong>
                                    <br />
                                    Mr. John Bolder has been featured in
                                </p>
                                <p>
                                    <strong>Independent News</strong>
                                    <br />
                                    Mr. John Bolger has been featured on the Independent News for
                                </p>
                                <p>
                                    On July 30th 1993 Mr. Bolger had the great honour of being presented to Her Late
                                    Majesty Queen Elizabeth II and to take her on a tour of the Ophthalmic Department.
                                    She met Mr. Bolgers patients at the Queen Elizabeth II Hospital who had had their
                                    operation the day before. Mr. Bolger explained to the queen his procedure and talked
                                    her through a video of surgery.
                                </p>
                                <p>
                                    <strong>Daily Mail News</strong>
                                    <br />
                                    Nominated as one of the five most efficient doctors in the NHS by the Daily Mail.
                                </p>
                                <p>
                                    <strong>Optometry today</strong>
                                    <br />A quantum leap My-iClinic’s John Bolger told 100% Optical attendees about a
                                    breakthrough in laser treatment
                                    <br /> The Guardian Newspaper
                                </p>
                            </div>
                        </div>

                        <div className="grid content-start gap-12">
                            <SpecialistFields
                                title="Fellowships and Memberships in Professional Societies"
                                fieldList={[
                                    'Royal college of surgeons',
                                    'Royal college of ophthalmologists',
                                    'Royal society of medicine',
                                    'The medico-legal society',
                                    'Honorary member of the royal jordanian ophthalmological society'
                                ]}
                            />
                        </div>

                        <div className="grid content-start gap-12">
                            <H2Variant1>What you didn’t know…</H2Variant1>

                            <div className="grid gap-6">
                                <p>
                                    “I am an advocate in changing how the future generation can stop climate change and
                                    how we can collectively help our current Myopia crisis. I set up the first myopia
                                    control clinic in the UK to provide children with low dose atropine eye drops, a
                                    treatment known to be effective in ameliorating progression of Myopia. Quickly
                                    however, I realised that the pandemic of myopia was far more complicated. Since then
                                    I have uncovered much more data and research to which now I see myopia as part of
                                    the problemscape we are all facing rather than a separate issue needing a separate
                                    solution. Solve one and we solve them all.”
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </Page>
    );
}

/**
 * Fetch the data from the WordPress database
 *
 * @returns {Promise<{props: {posts: any}}>}
 */
export async function getStaticProps() {
    try {
        return {
            /* eslint-disable */
            props: {},
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
