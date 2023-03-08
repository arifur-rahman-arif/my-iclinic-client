import { ReactNode } from 'react';

export interface NavMenuType {
    type: 'icon' | 'text';
    name: ReactNode;
    url: string;
    slug: string;
    icon?: JSX.Element;
    parentMenu?: boolean;
    parentSubmenu?: boolean;
    submenu?: Array<NavMenuType>;
    barAnimation?: boolean;
    dotAnimation?: boolean;
    subMenuOpen?: boolean;
}

export const navMenuList: NavMenuType[] = [
    {
        type: 'text',
        name: 'Cataract',
        url: '/cataract',
        slug: 'cataract',
        parentMenu: true,
        parentSubmenu: true,
        subMenuOpen: false,
        submenu: [
            {
                type: 'text',
                name: 'Cataract Surgery',
                url: '/cataract',
                slug: 'cataract',
                dotAnimation: true
            },
            {
                type: 'text',
                name: (
                    <span className="block">
                        Freedom from glasses
                        <br /> after cataract surgery
                    </span>
                ),
                url: '/cataract/premium-lenses',
                slug: 'cataract/premium-lenses',
                dotAnimation: true
            },
            {
                type: 'text',
                name: (
                    <span className="block">
                        YAG Capsulotomy
                        <br /> for PCO
                    </span>
                ),
                url: '/cataract/yag-capsulotomy-for-pco',
                slug: 'cataract/yag-capsulotomy-for-pco',
                dotAnimation: true
            }
        ]
    },
    {
        type: 'text',
        name: 'Vision Correction',
        url: '/vision-correction',
        slug: 'vision-correction',
        parentMenu: true,
        parentSubmenu: true,
        subMenuOpen: false,
        submenu: [
            {
                type: 'text',
                name: 'ReLEx SMILE',
                url: '/laser-eye-surgery/relex-smile-london',
                slug: 'laser-eye-surgery/relex-smile-london',
                dotAnimation: true
            },
            {
                type: 'text',
                name: (
                    <span className="block">
                        Implantable Contact <br />
                        Lenses
                    </span>
                ),
                url: '/icl',
                slug: 'icl',
                dotAnimation: true
            },
            {
                type: 'text',
                name: 'Presbyond',
                url: '/laser-eye-surgery/presbyond-london',
                slug: 'laser-eye-surgery/presbyond-london',
                dotAnimation: true
            },
            {
                type: 'text',
                name: 'Lasik',
                url: '/laser-eye-surgery/lasik-london',
                slug: 'laser-eye-surgery/lasik-london',
                dotAnimation: true
            },
            {
                type: 'text',
                name: 'Lasek, PRK, PTK',
                url: '/laser-eye-surgery/lasek-prk',
                slug: 'laser-eye-surgery/lasek-prk',
                dotAnimation: true
            }
        ]
    },
    {
        type: 'text',
        name: 'Eye Treatments',
        url: '/eye-Treatments',
        parentMenu: true,
        slug: 'eye-Treatments',
        parentSubmenu: true,
        subMenuOpen: false,
        submenu: [
            {
                type: 'text',
                name: 'Glaucoma care',
                url: '/eye-treatments/glaucoma',
                slug: 'eye-treatments/glaucoma',
                dotAnimation: true,
                subMenuOpen: true,
                submenu: [
                    {
                        type: 'text',
                        name: 'Glaucoma Care clinic',
                        url: '/eye-treatments/glaucoma',
                        slug: 'eye-treatments/glaucoma',
                        dotAnimation: true
                    }
                ]
            },
            {
                type: 'text',
                name: "Children's Eyes",
                url: '/childrens-eyes',
                slug: 'childrens-eyes',
                dotAnimation: true,
                subMenuOpen: true,
                submenu: [
                    {
                        type: 'text',
                        name: 'Myopia Control',
                        url: '/eye-treatments/childrens-eyes/myopia',
                        slug: 'eye-treatments/childrens-eyes/myopia',
                        dotAnimation: true
                    },
                    {
                        type: 'text',
                        name: 'Paediatric eye care',
                        url: '/eye-treatments/childrens-eyes/paediatric-eye-care',
                        slug: 'eye-treatments/childrens-eyes/paediatric-eye-care',
                        dotAnimation: true
                    }
                ]
            },
            {
                type: 'text',
                name: (
                    <>
                        Macular diseases &<br /> treatments
                    </>
                ),
                url: '/macular-diseases-treatments',
                slug: 'macular-diseases-treatments',
                dotAnimation: true,
                subMenuOpen: true,
                submenu: [
                    {
                        type: 'text',
                        name: 'Macular degeneration',
                        url: '/eye-treatments/macular-degeneration',
                        slug: 'eye-treatments/macular-degeneration',
                        dotAnimation: true
                    }
                ]
            },
            {
                type: 'text',
                name: 'Eye Lid surgery',
                url: '/eye-treatments/eyelid-surgery',
                slug: 'eye-treatments/eyelid-surgery-surgery',
                dotAnimation: true,
                subMenuOpen: true,
                submenu: [
                    {
                        type: 'text',
                        name: (
                            <span className="block">
                                Eyelid Surgery
                                <br /> (cosmetic & medical treatments)
                            </span>
                        ),
                        url: '/eye-treatments/eyelid-surgery',
                        slug: 'eye-treatments/eyelid-surgery-surgery',
                        dotAnimation: true
                    }
                ]
            },
            // {
            //     type: 'text',
            //     name: (
            //         <>
            //             Retinal Diseases &<br /> treatments
            //         </>
            //     ),
            //     url: '/retinal-diseases-treatments',
            //     slug: 'retinal-diseases-treatments',
            //     dotAnimation: true,
            //     subMenuOpen: true,
            //     submenu: [
            //         {
            //             type: 'text',
            //             name: 'Retinal Treatments',
            //             url: '/retinal-treatments',
            //             slug: 'retinal-treatments',
            //             dotAnimation: true
            //         }
            //     ]
            // },
            {
                type: 'text',
                name: (
                    <span className="block">
                        Corneal Diseases &<br /> Treatments
                    </span>
                ),
                url: '/corneal-diseases-treatments',
                slug: 'corneal-diseases-treatments',
                dotAnimation: true,
                subMenuOpen: true,
                submenu: [
                    {
                        type: 'text',
                        name: 'Corneal Treatments',
                        url: '/eye-treatments/corneal-treatments',
                        slug: 'eye-treatments/corneal-treatments',
                        dotAnimation: true
                    },
                    {
                        type: 'text',
                        name: 'Keratoconus',
                        url: '/eye-treatments/keratoconus',
                        slug: 'eye-treatments/keratoconus',
                        dotAnimation: true
                    },
                    {
                        type: 'text',
                        name: 'Blepharitis',
                        url: '/eye-treatments/blepharitis',
                        slug: 'eye-treatments/blepharitis',
                        dotAnimation: true
                    }
                ]
            },
            {
                type: 'text',
                name: 'Other Eye Conditions',
                url: '/other-eye-conditions',
                slug: 'other-eye-conditions',
                dotAnimation: true,
                subMenuOpen: true,
                submenu: [
                    {
                        type: 'text',
                        name: 'Astigmatism',
                        url: '/eye-treatments/other-eye-conditions/astigmatism',
                        slug: 'eye-treatments/other-eye-conditions/astigmatism',
                        dotAnimation: true
                    },
                    // {
                    //     type: 'text',
                    //     name: 'Short sightedness',
                    //     url: '/eye-treatments/short-sightedness',
                    //     slug: 'eye-treatments/short-sightedness',
                    //     dotAnimation: true
                    // },
                    // {
                    //     type: 'text',
                    //     name: 'Long sightedness',
                    //     url: '/eye-treatments/long-sightedness',
                    //     slug: 'eye-treatments/long-sightedness',
                    //     dotAnimation: true
                    // },
                    {
                        type: 'text',
                        name: 'Flashes & Floaters',
                        url: '/eye-treatments/other-eye-conditions/flashes-floaters',
                        slug: 'eye-treatments/other-eye-conditions/flashes-floaters',
                        dotAnimation: true
                    },
                    {
                        type: 'text',
                        name: 'Conjunctivitis',
                        url: '/eye-treatments/other-eye-conditions/conjunctivitis',
                        slug: 'eye-treatments/other-eye-conditions/conjunctivitis',
                        dotAnimation: true
                    },
                    {
                        type: 'text',
                        name: 'Dry eyes',
                        url: '/eye-treatments/other-eye-conditions/dry-eyes',
                        slug: 'eye-treatments/other-eye-conditions/dry-eyes',
                        dotAnimation: true
                    },
                    // {
                    //     type: 'text',
                    //     name: 'Diabetic eye disease',
                    //     url: '/eye-treatments/diabetic-eye-disease',
                    //     slug: 'eye-treatments/diabetic-eye-disease',
                    //     dotAnimation: true
                    // },
                    {
                        type: 'text',
                        name: 'Double Vision',
                        url: '/eye-treatments/double-vision',
                        slug: 'eye-treatments/double-vision',
                        dotAnimation: true
                    },
                    {
                        type: 'text',
                        name: 'Lazy eyes',
                        url: '/eye-treatments/other-eye-conditions/lazy-eyes',
                        slug: 'eye-treatments/other-eye-conditions/lazy-eyes',
                        dotAnimation: true
                    }
                ]
            }
        ]
    },
    {
        type: 'text',
        name: 'Our Specialists',
        url: '/our-specialists',
        slug: 'our-specialists',
        parentMenu: true,
        parentSubmenu: true,
        subMenuOpen: false,
        submenu: [
            {
                type: 'text',
                name: 'Our specialist team',
                url: '/our-specialists',
                slug: 'our-specialists',
                dotAnimation: true
            },
            {
                type: 'text',
                name: (
                    <span className="block">
                        Our eye diagnostics &<br /> technology
                    </span>
                ),
                url: '/our-specialists/our-eye-diagnostics-technology',
                slug: 'our-specialists/our-eye-diagnostics-technology',
                dotAnimation: true
            }
        ]
    },
    {
        type: 'text',
        name: 'Pricing & Financing',
        url: '/pricing-and-financing',
        slug: 'pricing-and-financing',
        parentMenu: true,
        parentSubmenu: true,
        subMenuOpen: false,
        submenu: [
            {
                type: 'text',
                name: 'Our prices',
                url: '/pricing-and-financing/our-prices',
                slug: 'pricing-and-financing/our-prices',
                dotAnimation: true
            },
            {
                type: 'text',
                name: 'Financing your treatment',
                url: '/pricing-and-financing/financing-your-treatment',
                slug: 'pricing-and-financing/financing-your-treatment',
                dotAnimation: true
            }
        ]
    }
];
