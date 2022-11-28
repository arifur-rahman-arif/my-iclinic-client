export interface NavMenuType {
    type: 'icon' | 'text';
    name: string;
    url: string;
    icon?: JSX.Element;
    activeIcon?: JSX.Element;
    submenu?: Array<{
        type: 'icon' | 'text';
        name: string;
        url: string;
        icon?: JSX.Element;
        activeIcon?: JSX.Element;
    }>;
}

export const navMenuList: NavMenuType[] = [
    {
        type: 'text',
        name: 'Cataract',
        url: '/cataract'
    },
    {
        type: 'text',
        name: 'Vision Correction',
        url: '/vision-correction',
        submenu: [
            {
                type: 'text',
                name: 'Premium Lenses',
                url: '/premium-lenses'
            }
        ]
    },
    {
        type: 'text',
        name: 'Eye Treatments',
        url: '/eye-treatments'
    },
    {
        type: 'text',
        name: 'Our Specialists',
        url: '/our-specialists'
    },
    {
        type: 'text',
        name: 'Pricing & Financing',
        url: '/pricing-and-Financing'
    }
];
