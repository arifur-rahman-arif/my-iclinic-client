import { GlaucomaPackageInterface } from './GlaucomaPackages3';
import { LinkStyle } from '@/components/Link';

export const defaultList: GlaucomaPackageInterface[] = [
    {
        title: (
            <>
                Glaucoma{' '}
                <strong className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem] text-white md:text-[3.6rem] md:leading-[4rem]">
                    Laser Surgery
                </strong>
            </>
        ),
        packageList: [
            {
                title: 'Selective Laser Trabeculoplasty (SLT)',
                price: '£495 per eye'
            },
            {
                title: 'YAG Laser Iridotomy',
                price: '£395 per eye'
            }
        ]
    },
    {
        title: (
            <>
                Glaucoma{' '}
                <strong className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem] text-white md:text-[3.6rem] md:leading-[4rem]">
                    Eye Surgery
                </strong>
            </>
        ),
        packageList: [
            {
                title: 'Trabeculectomy',
                price: '£3,500 per eye'
            },
            {
                title: 'HFDS (High-frequency deep sclerotomy)',
                price: '£1,200 per eye'
            },
            {
                title: 'PreserFlo',
                price: '£3,500 per eye'
            },
            {
                title: 'Canaloplasty',
                price: '£2,200 per eye'
            }
        ]
    }
];

export const pricePageList1: GlaucomaPackageInterface[] = [
    {
        title: (
            <>
                Our consultation{' '}
                <strong className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem] text-white md:text-[3.6rem] md:leading-[4rem]">
                    prices
                </strong>
            </>
        ),
        packageList: [
            {
                title: 'General Consultation',
                description:
                    'Our specialist will diagnose eye conditions and begin condition management and treatment planning if required. Please note any additional eye assessments and scans required are an extra charge.',
                price: '£200'
            },
            {
                title: 'Cataract Consultation',
                price: (
                    <>
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">From</span> £200
                    </>
                )
            },
            {
                title: 'Glaucoma Consultation',
                price: (
                    <>
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">From</span> £400
                    </>
                ),
                description:
                    'Our glaucoma consultation is a fully comprehensive eye assessment with scans to diagnose the glaucoma condition and discuss treatment with a glaucoma specialist.'
            },
            {
                title: 'Glaucoma Annual Screening Package',
                price: '£550',
                description: (
                    <>
                        This includes <strong>two Glaucoma investigations with our specialist,</strong> plus free
                        unlimited pressure checks. This package will begin on your second visit with us (after your
                        initial Glaucoma consultation).
                    </>
                )
            },
            {
                title: 'Glaucoma Annual Management Package',
                price: '£750',
                description: (
                    <>
                        Providing <strong>three full Glaucoma investigations with our specialist,</strong> plus free
                        unlimited pressure checks. This package will begin on your second visit with us (after your
                        initial Glaucoma consultation). Your consultations in your annual management package will be
                        carried out every four months for the year for a comprehensive checkup.
                    </>
                )
            },
            {
                title: 'Refractive Consultation',
                price: (
                    <>
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">From</span> £200
                    </>
                ),
                description: (
                    <>
                        To assess the most suitable vision correction treatment for you:{' '}
                        <LinkStyle url="/relex-smile-london">ReLEx SMILE</LinkStyle>,{' '}
                        <LinkStyle url="/presbyond-london">Presbyond</LinkStyle>,{' '}
                        <LinkStyle url="/lasik-london">LASIK</LinkStyle>,{' '}
                        <LinkStyle url="/lasek-prk">LASEK, PRK & PTK</LinkStyle> Laser eye surgery and Implantable
                        Contact Lenses.
                    </>
                )
            },
            {
                title: 'Emergency Consultation',
                price: '£300',
                description: 'Our emergency consultation includes one additional follow-up consultation'
            },
            {
                title: 'Pediatric consultation',
                price: '£350',
                description: 'Our pediatric specialists check young infants and teenagers'
            },
            {
                title: 'Pediatric consultation (follow up)',
                price: '£225'
            },
            {
                title: 'New Myopia Control Consultation',
                price: '£350',
                description: [
                    <>
                        An initial Myopia consultation with our specialists is £350 (non-refundable). If you would like
                        to change your appointment after booking,{' '}
                        <b>
                            please inform the clinic 24 hours before your appointment time to ensure you do not lose
                            your appointment fee.
                        </b>
                    </>,
                    'Any cancellations that are not communicated before after our 72 hour period policy is subject to be held by the clinic and any new appointment will need to be a new booking.'
                ]
            },
            {
                title: 'Myopia follow up consultation',
                price: '£200',
                description:
                    'Any Myopia follow up consultations are £200 each, payable at the time of booking. Please note all follow up consultations for Myopia are also subject to our 72 hour cancellation policy.'
            },
            {
                title: 'Virtual consultation',
                price: '£150',
                description:
                    'Need medical advice from a specialist? We provide virtual consultations to assist your health concerns.'
            }
        ]
    }
];

export const cataractPriceList: GlaucomaPackageInterface[] = [
    {
        title: (
            <>
                Cataract{' '}
                <strong className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem] text-white md:text-[3.6rem] md:leading-[4rem]">
                    surgery
                </strong>
            </>
        ),
        packageList: [
            {
                title: 'Cataract surgery',
                price: (
                    <>
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">From</span> £2,400 per eye
                    </>
                ),
                description:
                    'Refractive lens exchange (IOL implants) are an additional cost. Your cataract specialist will assess the right artificial lenses suitable for you. Lens prices and treatment planning will be discussed in your private consultation.'
            },
            {
                title: 'Yag Laser Capsulotomy',
                price: '£395 per eye',
                description:
                    'Permanently removing PCO (Posterior Capsular Opacification) symptoms after cataract surgery.'
            }
        ]
    }
];

export const visionCorrectionPriceList: GlaucomaPackageInterface[] = [
    {
        title: (
            <>
                Vision Correction{' '}
                <strong className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem] text-white md:text-[3.6rem] md:leading-[4rem]">
                    treatments
                </strong>
                {/* <br /> */}
                {/* <span className="text-[2rem] leadign-[2.8rem] font-mulishBold text-white capitalize"> */}
                {/*     (laser eye surgery) */}
                {/* </span> */}
            </>
        ),
        packageList: [
            {
                title: 'Laser eye surgery treatments',
                price: '£2,400 per eye',
                description: 'ReLEx SMILE, Presbyond, LASIK, LASEK, PRK & PTK laser eye surgery for vision correction.'
            },
            {
                title: 'Implantable Contact Lenses',
                price: '£2,750 per eye',
                description:
                    'ICL is a vision correction treatment for people unsuited to laser eye surgery. Implantable contact lenses are gentle and long-lasting collamer lenses replacing everyday disposable contact lenses.'
            },
            {
                title: 'Refractive lens exchange',
                price: (
                    <>
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">From</span> £2,750 per eye
                    </>
                ),
                description:
                    'Correcting your vision with artificial lenses. Our refractive specialist will discuss suitable lens options and lens prices in your private consultation.'
            }
        ]
    }
];

export const glaucomaPriceList: GlaucomaPackageInterface[] = [
    {
        title: (
            <>
                Glaucoma{' '}
                <strong className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem] text-white md:text-[3.6rem] md:leading-[4rem]">
                    surgery
                </strong>
            </>
        ),
        packageList: [
            {
                title: 'Selective Laser Trabeculoplasty (SLT)',
                price: '£495 per eye'
            },
            {
                title: 'Glaucoma Trabeculectomy',
                price: '£3,500 per eye'
            },
            {
                title: 'Glaucoma Preserflo',
                price: '£3,500 per eye'
            },
            {
                title: 'Glaucoma Canaloplasty',
                price: '£2,200'
            },
            {
                title: 'Glaucoma (HFDS',
                price: '£1,200'
            },
            {
                title: 'YAG Laser Iridotomy',
                price: '£395 per eye'
            }
        ]
    }
];

export const maculerDegenerationPriceList: GlaucomaPackageInterface[] = [
    {
        title: (
            <>
                Macular Degeneration{' '}
                <strong className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem] text-white md:text-[3.6rem] md:leading-[4rem]">
                    Treatment
                </strong>
            </>
        ),
        packageList: [
            {
                title: 'Avastin',
                price: 'Cost Per Injection £850'
            },
            {
                title: 'Eyela',
                price: 'Cost Per Injection £1,500'
            },
            {
                title: 'Lucentis',
                price: 'Cost Per Injection £1,750'
            }
        ]
    }
];

export const keratoconusTreatmentPriceList: GlaucomaPackageInterface[] = [
    {
        title: (
            <>
                Keratoconus{' '}
                <strong className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem] text-white md:text-[3.6rem] md:leading-[4rem]">
                    Treatment
                </strong>
            </>
        ),
        packageList: [
            {
                title: 'Corneal cross-linking',
                price: '£1,300'
            },
            {
                title: 'Corneal transplantation (graft)',
                price: '£9,000'
            },
            {
                title: 'Corneal rings',
                price: '£1,500'
            },
            {
                title: 'Corneal therapeutic laser',
                price: '£1,900'
            }
        ]
    }
];

export const eyelidSurgeryPriceList: GlaucomaPackageInterface[] = [
    {
        title: (
            <>
                Eyelid{' '}
                <strong className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem] text-white md:text-[3.6rem] md:leading-[4rem]">
                    Surgery
                </strong>
            </>
        ),
        packageList: [
            {
                title: 'Ectropion treatment',
                price: (
                    <>
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">From</span> £3,000
                    </>
                )
            },
            {
                title: 'Entropion treatment',
                price: (
                    <>
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">From</span> £3,000
                    </>
                )
            },
            {
                title: 'Blepharoplasty',
                price: (
                    <>
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">From</span> £3,000
                    </>
                )
            },
            {
                title: 'Eyelid cyst, chalazion & stye removal',
                price: (
                    <>
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">From</span> £350
                    </>
                )
            },
            {
                title: 'Pterygium surgery',
                price: '£1,900'
            },
            {
                title: 'Ptosis surgery (drooping eyelids)',
                price: (
                    <>
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">From</span> £3,500
                    </>
                )
            },
            {
                title: 'Blepharospasm injections (botox)',
                price: (
                    <>
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">From</span> £550
                    </>
                )
            }
        ]
    }
];

export const diagnosisPriceList: GlaucomaPackageInterface[] = [
    {
        title: (
            <>
                Diagnostics{' '}
                <strong className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem] text-white md:text-[3.6rem] md:leading-[4rem]">
                    Fees
                </strong>
            </>
        ),
        packageList: [
            {
                title: 'Optical Coherence Tomography (OCT)',
                price: '£125'
            },
            {
                title: 'Wavefront Analysis and Topography',
                price: '£125'
            },
            {
                title: 'Biometry',
                price: '£125'
            },
            {
                title: 'Visual Fields',
                price: '£125'
            }
        ]
    }
];

export const botoxSurgeryPriceList: GlaucomaPackageInterface[] = [
    {
        title: <>Botox</>,
        packageList: [
            {
                title: '1 area',
                price: <>£200</>
            },
            {
                title: '2 areas',
                price: <>£300</>
            },
            {
                title: '3+ areas',
                price: <>£400</>
            }
        ]
    }
];

export const vitrectomySurgeryPriceList: GlaucomaPackageInterface[] = [
    {
        title: <>Vitrectomy</>,
        packageList: [
            {
                title: 'Vitrectomy',
                price: (
                    <>
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">From</span> £5800
                    </>
                )
            },
            {
                title: 'Vitrectomy with cataract',
                price: (
                    <>
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">From</span> £6800
                    </>
                )
            },
            {
                title: 'Complex vitrectomy',
                price: (
                    <>
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">From</span> £6500
                    </>
                )
            },
            {
                title: 'Complex vitrectomy with cataract',
                price: (
                    <>
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">From</span> £7500
                    </>
                )
            }
        ]
    }
];
