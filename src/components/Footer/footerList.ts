type FooterLinkListType = {
    text: string;
    url: string;
};

interface FooterListInterface {
    listHeading: string;
    listLinks: FooterLinkListType[];
}

const footerList: FooterListInterface[] = [
    {
        listHeading: 'Laser eye surgery',
        listLinks: [
            {
                text: 'ReLEx Smile',
                url: '/relex-smile-london'
            },
            {
                text: 'Presbyond',
                url: '/presbyond-london'
            },
            {
                text: 'LASIK',
                url: '/lasik-london'
            },
            {
                text: 'LASEK, PRK & PTK',
                url: '/lasek-prk'
            }
        ]
    },
    {
        listHeading: 'Eye treatments',
        listLinks: [
            {
                text: 'Cataract Surgery',
                url: '/cataract'
            },
            {
                text: 'Myopia Control Clinic',
                url: '/myopia'
            },
            {
                text: 'ICL Eye Surgery',
                url: '/icl'
            },
            {
                text: 'Eyelid Cysts Chalazion and Styes',
                url: '/eyelid-surgery-london'
            },
            {
                text: 'Paediatric Eye Care',
                url: '/paediatric-eye-care'
            },
            {
                text: 'Vitreoretinal Surgery',
                url: '/vitreoretinal-surgery'
            }
        ]
    },
    {
        listHeading: 'Why choose us?',
        listLinks: [
            {
                text: '5 star technology and treatment',
                url: '/our-specialists/our-eye-diagnostics-technology'
            },
            {
                text: 'Located In North London',
                url: '/contact-us'
            },
            {
                text: 'Our Specialist Team',
                url: '/our-specialists'
            },
            {
                text: 'Our Clinic',
                url: '/about-us'
            }
        ]
    },
    {
        listHeading: 'Eyelid surgery',
        listLinks: [
            {
                text: 'Entropia',
                url: '/eyelid-surgery-london#Medical-eyelid-surgery'
            },
            {
                text: 'Blepharoplasty',
                url: '/blepharitis-treatment'
            },
            {
                text: 'Eyelid Surgery',
                url: '/eyelid-surgery-london'
            },
            {
                text: 'Blepharospasm Correction',
                url: '/eyelid-surgery-london#Blepharospasm-botox-injections'
            }
        ]
    }
];

export default footerList;
