import { ReactNode } from 'react';

export interface NavMenuType {
    name: ReactNode;
    url: string;
    slug: string;
    submenu?: NavMenuType[];
    subMenuOpen?: boolean;
    megaMenu?: boolean;
    metaDescription?: string;
}

export const navMenuList: NavMenuType[] = [
    {
        name: 'Cataract',
        url: '/cataract',
        slug: 'cataract',
        subMenuOpen: false,
        submenu: [
            {
                name: 'Cataract surgery',
                url: '/cataract',
                slug: 'cataract',
                metaDescription: 'We’re here to make cataract surgery easy'
            },
            {
                name: 'Freedom from glasses after cataract surgery',
                url: '/cataract/premium-lenses',
                slug: 'cataract/premium-lenses',
                metaDescription: 'Be independent from wearing glasses after your cataract surgery'
            },
            {
                name: 'YAG capsulotomy for PCO',
                url: '/cataract/yag-capsulotomy-for-pco',
                slug: 'cataract/yag-capsulotomy-for-pco',
                metaDescription:
                    'YAG Laser Treatment is a procedure to remove any symptoms that occur after having your cataracts removed. Learn more about the procedure here.'
            }
        ]
    },
    {
        name: 'Vision Correction',
        url: '/vision-correction',
        slug: 'vision-correction',
        subMenuOpen: false,
        submenu: [
            {
                name: 'ReLEx SMILE',
                url: '/relex-smile-london',
                slug: 'relex-smile-london',
                metaDescription:
                    'ReLEx SMILE laser eye surgery is a new vision correction treatment to fix short-sightedness, blurriness & astigmatism. Learn more about fixing your vision with our treatments.'
            },
            {
                name: 'Implantable Contact Lenses',
                url: '/icl',
                slug: 'icl',
                metaDescription: 'Implantable Contact Lenses'
            },
            {
                name: 'Presbyond',
                url: '/presbyond-london',
                slug: 'presbyond-london',
                metaDescription:
                    'Presbyond laser eye surgery is a vision correction treatment to fix presbyopia (long-sightedness). Learn about the treatments available and how we can help.'
            },
            {
                name: 'LASIK',
                url: '/lasik-london',
                slug: 'lasik-london',
                metaDescription:
                    'The traditional laser eye surgery method to remove glasses & contact lenses from everyday life!'
            },
            {
                name: 'LASEK, PRK, PTK',
                url: '/lasek-prk',
                slug: 'lasek-prk',
                metaDescription:
                    'At My-iClinic, we offer a range of laser eye surgery procedures to correct common vision problems. Contact us today for a consultation with a specialist.'
            }
        ]
    },
    {
        name: 'Eye Treatments',
        url: '/eye-treatments',
        slug: 'eye-treatments',
        subMenuOpen: false,
        megaMenu: true,
        submenu: [
            {
                name: 'Glaucoma care',
                url: '/glaucoma-treatment',
                slug: 'glaucoma-treatment',
                subMenuOpen: true,
                submenu: [
                    {
                        name: 'Glaucoma Care clinic',
                        url: '/glaucoma-treatment',
                        slug: 'glaucoma-treatment',
                        metaDescription:
                            'Glaucoma is an eye condition where the optic nerve connecting the eye to the brain becomes damaged. Find out about our glaucoma treatment here.'
                    }
                ]
            },
            {
                name: 'Macular diseases & treatments',
                url: '/macular-diseases-treatments',
                slug: 'macular-diseases-treatments',
                subMenuOpen: true,
                submenu: [
                    {
                        name: 'Macular degeneration',
                        url: '/macular-degeneration',
                        slug: 'macular-degeneration',
                        metaDescription:
                            'Our Macular Degeneration specialists are experienced in treating and providing patients with the efficient care they need. Contact us today to book an appointment.'
                    }
                ]
            },
            {
                name: 'Eye Lid surgery',
                url: '/eyelid-surgery-london',
                slug: 'eyelid-surgery-london',
                subMenuOpen: true,
                submenu: [
                    {
                        name: 'Eyelid Surgery (cosmetic & medical treatments)',
                        url: '/eyelid-surgery-london',
                        slug: 'eyelid-surgery-london',
                        metaDescription:
                            'Our trusted oculoplastic surgeons deliver the best treatment for eyelid conditions. Find out more about our treatments and how we can help you.'
                    }
                ]
            },
            {
                name: "Children's Eyes",
                url: '/childrens-eyes',
                slug: 'childrens-eyes',
                subMenuOpen: true,
                submenu: [
                    {
                        name: 'Myopia Control',
                        url: '/myopia',
                        slug: 'myopia',
                        metaDescription:
                            'Our specialists can provide you with the appropriate treatment for mitigating your Myopia, no matter how severe. Find out more about our services here.'
                    },
                    {
                        name: 'Paediatric eye care',
                        url: '/paediatric-eye-care',
                        slug: 'paediatric-eye-care',
                        metaDescription:
                            'Our trusted paediatric ophthalmologists deliver the best treatment for any eye problems in children. Learn more about our paediatric eye care services.'
                    }
                ]
            },
            {
                name: 'Corneal Diseases & Treatments',
                url: '/corneal-diseases-treatments',
                slug: 'corneal-diseases-treatments',
                subMenuOpen: true,
                submenu: [
                    {
                        name: 'Corneal Treatments',
                        url: '/corneal-treatments',
                        slug: 'corneal-treatments',
                        metaDescription: 'Corneal eye treatments at My-iClinic'
                    },
                    {
                        name: 'Keratoconus',
                        url: '/keratoconus',
                        slug: 'keratoconus',
                        metaDescription: "Keratoconus treatment with London's leading cornea specialists"
                    },
                    {
                        name: 'Blepharitis',
                        url: '/blepharitis-treatment',
                        slug: 'blepharitis-treatment',
                        metaDescription: 'London’s best treatment for Blepharitis symptoms'
                    }
                ]
            },
            {
                name: 'Other Eye Conditions',
                url: '/other-eye-conditions',
                slug: 'other-eye-conditions',
                subMenuOpen: true,
                submenu: [
                    {
                        name: 'Astigmatism',
                        url: '/astigmatism-treatment',
                        slug: 'astigmatism-treatment',
                        metaDescription:
                            'Get the correct vision treatment needed for your eyes. Learn about our personalised care to help restore perfect vision and improve your quality of life.'
                    },
                    {
                        name: 'Flashes & Floaters',
                        url: '/flashes-floaters',
                        slug: 'flashes-floaters',
                        metaDescription:
                            'Get help with understanding and managing the symptoms of eye flashes and floaters with our professional team at My-iClinic.'
                    },
                    {
                        name: 'Conjunctivitis',
                        url: '/conjuctivitis-treatment-london',
                        slug: 'conjuctivitis-treatment-london',
                        metaDescription:
                            'Our team of ophthalmologists are experienced in diagnosing and treating your conjunctivitis. Contact us to begin your journey towards improved vision.'
                    },
                    {
                        name: 'Dry eyes',
                        url: '/dry-eyes-treatment-london',
                        slug: 'dry-eyes-treatment-london',
                        metaDescription:
                            'Our clinic provides an all-inclusive private consultation for investigating and treating symptoms of dry eyes. Get in touch with us to learn more!.'
                    },
                    {
                        name: 'Double Vision',
                        url: '/double-vision-treatment-london',
                        slug: 'double-vision-treatment-london',
                        metaDescription: 'Monitor your double vision symptoms with our private ophthalmologist'
                    },
                    {
                        name: 'Lazy eyes',
                        url: '/lazy-eyes-treatement',
                        slug: 'lazy-eyes-treatement',
                        metaDescription:
                            'My-iClinic offers experienced and comprehensive treatment for Lazy eyes in adults and children (amblyopia). Get in touch with us to learn how we can help.'
                    }
                ]
            }
        ]
    },
    {
        name: 'Our Specialists',
        url: '/our-specialists',
        slug: 'our-specialists',
        subMenuOpen: false,
        submenu: [
            {
                name: 'Our specialist team',
                url: '/our-specialists',
                slug: 'our-specialists',
                metaDescription:
                    'Our commitment to the highest possible care standards are reflected in the dedicated practice from our care specialists.'
            },
            {
                name: 'Our eye diagnostics & technology',
                url: '/our-specialists/our-eye-diagnostics-technology',
                slug: 'our-specialists/our-eye-diagnostics-technology',
                metaDescription: 'My-iClinic diagnostics center for vision testing & optometry practice.'
            }
        ]
    },
    {
        name: 'Pricing & Financing',
        url: '/pricing-and-financing',
        slug: 'pricing-and-financing',
        subMenuOpen: false,
        submenu: [
            {
                name: 'Our prices',
                url: '/pricing-and-financing/our-prices',
                slug: 'pricing-and-financing/our-prices',
                metaDescription: 'Our private consultation and treatment prices'
            },
            {
                name: 'Financing your treatment',
                url: '/pricing-and-financing/financing-your-treatment',
                slug: 'pricing-and-financing/financing-your-treatment',
                metaDescription: 'Let the cost of clear vision make sense'
            }
        ]
    }
];
