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
                url: '/laser-eye-surgery/relex-smile-london',
                slug: 'laser-eye-surgery/relex-smile-london'
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
                url: '/laser-eye-surgery/presbyond-london',
                slug: 'laser-eye-surgery/presbyond-london'
            },
            {
                name: 'Lasik',
                url: '/laser-eye-surgery/lasik-london',
                slug: 'laser-eye-surgery/lasik-london'
            },
            {
                name: 'Lasek, PRK, PTK',
                url: '/laser-eye-surgery/lasek-prk',
                slug: 'laser-eye-surgery/lasek-prk'
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
                url: '/eye-treatments/glaucoma',
                slug: 'eye-treatments/glaucoma',
                subMenuOpen: true,
                submenu: [
                    {
                        name: 'Glaucoma Care clinic',
                        url: '/eye-treatments/glaucoma',
                        slug: 'eye-treatments/glaucoma'
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
                        url: '/eye-treatments/childrens-eyes/myopia',
                        slug: 'eye-treatments/childrens-eyes/myopia'
                    },
                    {
                        name: 'Paediatric eye care',
                        url: '/eye-treatments/childrens-eyes/paediatric-eye-care',
                        slug: 'eye-treatments/childrens-eyes/paediatric-eye-care'
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
                        url: '/eye-treatments/macular-degeneration',
                        slug: 'eye-treatments/macular-degeneration'
                    }
                ]
            },
            {
                name: 'Eye Lid surgery',
                url: '/eye-treatments/eyelid-surgery',
                slug: 'eye-treatments/eyelid-surgery',
                subMenuOpen: true,
                submenu: [
                    {
                        name: (
                            <>
                                Eyelid Surgery
                                <br /> (cosmetic & medical treatments)
                            </>
                        ),
                        url: '/eye-treatments/eyelid-surgery',
                        slug: 'eye-treatments/eyelid-surgery'
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
                        url: '/eye-treatments/corneal-treatments',
                        slug: 'eye-treatments/corneal-treatments'
                    },
                    {
                        name: 'Keratoconus',
                        url: '/eye-treatments/keratoconus',
                        slug: 'eye-treatments/keratoconus'
                    },
                    {
                        name: 'Blepharitis',
                        url: '/eye-treatments/blepharitis',
                        slug: 'eye-treatments/blepharitis'
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
                        url: '/eye-treatments/other-eye-conditions/astigmatism',
                        slug: 'eye-treatments/other-eye-conditions/astigmatism'
                    },
                    {
                        name: 'Flashes & Floaters',
                        url: '/eye-treatments/other-eye-conditions/flashes-floaters',
                        slug: 'eye-treatments/other-eye-conditions/flashes-floaters'
                    },
                    {
                        name: 'Conjunctivitis',
                        url: '/eye-treatments/other-eye-conditions/conjunctivitis',
                        slug: 'eye-treatments/other-eye-conditions/conjunctivitis'
                    },
                    {
                        name: 'Dry eyes',
                        url: '/eye-treatments/other-eye-conditions/dry-eyes',
                        slug: 'eye-treatments/other-eye-conditions/dry-eyes'
                    },
                    {
                        name: 'Double Vision',
                        url: '/eye-treatments/other-eye-conditions/double-vision',
                        slug: 'eye-treatments/other-eye-conditions/double-vision'
                    },
                    {
                        name: 'Lazy eyes',
                        url: '/eye-treatments/other-eye-conditions/lazy-eyes',
                        slug: 'eye-treatments/other-eye-conditions/lazy-eyes'
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
        url: '/about-us',
        slug: 'about-us'
    },
    {
        name: 'Contact Us',
        url: '/contact-us',
        slug: 'contact-us'
    },
    {
        name: 'Articles',
        url: '/articles',
        slug: 'articles'
    }
];
