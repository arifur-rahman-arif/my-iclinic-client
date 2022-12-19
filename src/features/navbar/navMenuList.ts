export interface NavMenuType {
    type: 'icon' | 'text';
    name: string;
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
        parentMenu: true,
        slug: 'cataract'
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
                name: 'Premium Lenses',
                url: '/vision-correction/premium-lenses',
                slug: 'vision-correction/premium-lenses',
                dotAnimation: true
            },
            {
                type: 'text',
                name: 'Presbyond',
                url: '/vision-correction/presbyond',
                slug: 'vision-correction/presbyond',
                dotAnimation: true
            }
        ]
    },
    {
        type: 'text',
        name: 'Eye Treatments',
        url: '/eye-treatments',
        parentMenu: true,
        slug: 'eye-Treatments'
    },
    {
        type: 'text',
        name: 'Our Specialists',
        url: '/our-specialists',
        slug: 'our-specialists',
        parentMenu: true
    },
    {
        type: 'text',
        name: 'Pricing & Financing',
        url: '/pricing-and-financing',
        parentMenu: true,
        slug: 'pricing-and-financing'
    }
];
