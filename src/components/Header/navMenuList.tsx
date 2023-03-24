import { ReactNode } from 'react';

export interface NavMenuType {
    name: ReactNode;
    url: string;
    slug: string;
    submenu?: Array<NavMenuType>;
    subMenuOpen?: boolean;
    megaMenu?: boolean;
}

export const navMenuList: NavMenuType[] = [
    {
        name: 'Cataract',
        url: '/cataract',
        slug: 'cataract',
        subMenuOpen: false,
        submenu: [
            {
                name: 'Cataract Surgery',
                url: '/cataract',
                slug: 'cataract'
            },
            {
                name: (
                    <>
                        Freedom from glasses
                        <br /> after cataract surgery
                    </>
                ),
                url: '/cataract/premium-lenses',
                slug: 'cataract/premium-lenses'
            },
            {
                name: (
                    <>
                        YAG Capsulotomy
                        <br /> for PCO
                    </>
                ),
                url: '/cataract/yag-capsulotomy-for-pco',
                slug: 'cataract/yag-capsulotomy-for-pco'
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
                slug: 'relex-smile-london'
            },
            {
                name: (
                    <>
                        Implantable Contact <br />
                        Lenses
                    </>
                ),
                url: '/icl',
                slug: 'icl'
            },
            {
                name: 'Presbyond',
                url: '/presbyond-london',
                slug: 'presbyond-london'
            },
            {
                name: 'Lasik',
                url: '/lasik-london',
                slug: 'lasik-london'
            },
            {
                name: 'Lasek, PRK, PTK',
                url: '/lasek-prk',
                slug: 'lasek-prk'
            }
        ]
    },
    {
        name: 'Eye Treatments',
        url: '/eye-Treatments',
        slug: 'eye-Treatments',
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
                        slug: 'glaucoma-treatment'
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
                        slug: 'myopia'
                    },
                    {
                        name: 'Paediatric eye care',
                        url: '/paediatric-eye-care',
                        slug: 'paediatric-eye-care'
                    }
                ]
            },
            {
                name: (
                    <>
                        Macular diseases &<br /> treatments
                    </>
                ),
                url: '/macular-diseases-treatments',
                slug: 'macular-diseases-treatments',
                subMenuOpen: true,
                submenu: [
                    {
                        name: 'Macular degeneration',
                        url: '/macular-degeneration',
                        slug: 'macular-degeneration'
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
                        name: (
                            <>
                                Eyelid Surgery
                                <br /> (cosmetic & medical treatments)
                            </>
                        ),
                        url: '/eyelid-surgery-london',
                        slug: 'eyelid-surgery-london'
                    }
                ]
            },
            {
                name: (
                    <>
                        Corneal Diseases &<br /> Treatments
                    </>
                ),
                url: '/corneal-diseases-treatments',
                slug: 'corneal-diseases-treatments',
                subMenuOpen: true,
                submenu: [
                    {
                        name: 'Corneal Treatments',
                        url: '/corneal-treatments',
                        slug: 'corneal-treatments'
                    },
                    {
                        name: 'Keratoconus',
                        url: '/keratoconus',
                        slug: 'keratoconus'
                    },
                    {
                        name: 'Blepharitis',
                        url: '/blepharitis-treatment',
                        slug: 'blepharitis-treatment'
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
                        slug: 'astigmatism-treatment'
                    },
                    {
                        name: 'Flashes & Floaters',
                        url: '/flashes-floaters',
                        slug: 'flashes-floaters'
                    },
                    {
                        name: 'Conjunctivitis',
                        url: '/conjuctivitis-treatment-london',
                        slug: 'conjuctivitis-treatment-london'
                    },
                    {
                        name: 'Dry eyes',
                        url: '/dry-eyes-treatment-london',
                        slug: 'dry-eyes-treatment-london'
                    },
                    {
                        name: 'Double Vision',
                        url: '/double-vision-treatment-london',
                        slug: 'double-vision-treatment-london'
                    },
                    {
                        name: 'Lazy eyes',
                        url: '/lazy-eyes-treatement',
                        slug: 'lazy-eyes-treatement'
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
                slug: 'our-specialists'
            },
            {
                name: (
                    <>
                        Our eye diagnostics &<br /> technology
                    </>
                ),
                url: '/our-specialists/our-eye-diagnostics-technology',
                slug: 'our-specialists/our-eye-diagnostics-technology'
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
                slug: 'pricing-and-financing/our-prices'
            },
            {
                name: 'Financing your treatment',
                url: '/pricing-and-financing/financing-your-treatment',
                slug: 'pricing-and-financing/financing-your-treatment'
            }
        ]
    },
    {
        name: 'About Us',
        // Url: '/about-us',
        url: '#',
        slug: 'about-us'
    },
    {
        name: 'Contact Us',
        // Url: '/contact-us',
        url: '#',
        slug: 'contact-us'
    },
    {
        name: 'Articles',
        url: '/articles',
        slug: 'articles'
    }
];
