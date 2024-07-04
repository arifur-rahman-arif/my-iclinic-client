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
        name: 'EVO ICL',
        url: '/icl',
        slug: 'icl'
    },
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
                metaDescription: 'Cataract Surgery Made Easy'
            },
            {
                name: 'Freedom from glasses after cataract surgery',
                url: '/cataract/premium-lenses',
                slug: 'cataract/premium-lenses',
                metaDescription: 'No More Glasses Post Cataract'
            },
            {
                name: 'YAG capsulotomy for PCO',
                url: '/cataract/yag-capsulotomy-for-pco',
                slug: 'cataract/yag-capsulotomy-for-pco',
                metaDescription: 'Restoring vision, removing haze'
            }
        ]
    },
    {
        name: 'Laser eye surgery',
        url: '/laser-eye-surgery',
        slug: 'laser-eye-surgery',
        subMenuOpen: false,
        submenu: [
            {
                name: 'All Laser Surgeries',
                url: '/laser-eye-surgery',
                slug: 'laser-eye-surgery',
                metaDescription: 'Advanced procedures for precise vision correction.'
            },
            {
                name: 'ReLEx SMILE',
                url: '/relex-smile-london',
                slug: 'relex-smile-london',
                metaDescription: 'Pioneering Vision Correction with Precision'
            },
            {
                name: 'Presbyond',
                url: '/presbyond-london',
                slug: 'presbyond-london',
                metaDescription: 'Presbyond: Clarity Beyond Years'
            },
            {
                name: 'LASIK',
                url: '/lasik-london',
                slug: 'lasik-london',
                metaDescription: 'LASIK: Life in Focus'
            },
            {
                name: 'LASEK, PRK, PTK',
                url: '/lasek-prk',
                slug: 'lasek-prk',
                metaDescription: 'Surface Reshaping, Precision & Clarity'
            }
        ]
    },
    {
        name: 'Eye treatments',
        url: '/eye-treatments-london',
        slug: 'eye-treatments-london',
        subMenuOpen: false,
        megaMenu: true,
        submenu: [
            {
                name: 'Eye conditions',
                url: '/other-eye-conditions',
                slug: 'other-eye-conditions',
                submenu: [
                    {
                        name: 'Astigmatism',
                        url: '/astigmatism-treatment',
                        slug: 'astigmatism-treatment',
                        metaDescription: 'Astigmatism Resolved, Sight Improved.'
                    },
                    {
                        name: 'Flashes & Floaters',
                        url: '/flashes-floaters',
                        slug: 'flashes-floaters',
                        metaDescription: 'Flashes, Floaters, Clearer Vision.'
                    },
                    {
                        name: 'Conjunctivitis',
                        url: '/conjuctivitis-treatment-london',
                        slug: 'conjuctivitis-treatment-london',
                        metaDescription: 'Redness Vanished, Eyes Relieved.'
                    },
                    {
                        name: 'Dry eyes',
                        url: '/dry-eyes-treatment-london',
                        slug: 'dry-eyes-treatment-london',
                        metaDescription: 'Eyes Hydrated, Dryness Gone.'
                    },
                    {
                        name: 'Double Vision',
                        url: '/double-vision-treatment-london',
                        slug: 'double-vision-treatment-london',
                        metaDescription: 'Single Focus, Clear Vision.'
                    },
                    {
                        name: 'Lazy eyes',
                        url: '/lazy-eyes-treatement',
                        slug: 'lazy-eyes-treatement',
                        metaDescription: 'Empowering Lazy Eyes.'
                    }
                ]
            },
            {
                name: 'Corneal diseases & treatments',
                url: '/corneal-diseases-treatments',
                slug: 'corneal-diseases-treatments',
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
                name: "Children's Eyes",
                url: '/childrens-eyes',
                slug: 'childrens-eyes',
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
                name: 'Glaucoma care',
                url: '/glaucoma-treatment',
                slug: 'glaucoma-treatment',
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
                name: 'Eyelid surgery',
                url: '/eyelid-surgery-london',
                slug: 'eyelid-surgery-london',
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
                name: 'Macular diseases & treatments',
                url: '/macular-diseases-treatments',
                slug: 'macular-diseases-treatments',
                submenu: [
                    {
                        name: 'Macular degeneration',
                        url: '/macular-degeneration',
                        slug: 'macular-degeneration',
                        metaDescription:
                            'Our Macular Degeneration specialists are experienced in treating and providing patients with the efficient care they need. Contact us today to book an appointment.'
                    }
                ]
            }
        ]
    },
    {
        name: 'Cost & finance',
        url: '/pricing-and-financing/financing-your-treatment',
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
    },
    {
        name: 'Our Specialists',
        url: '/our-specialists',
        slug: 'our-specialists',
        subMenuOpen: false,
        submenu: [
            {
                name: 'Our specialist',
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
    }
];
