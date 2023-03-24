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
            }
            // {
            //     text: 'Glaucoma Care',
            //     url: '/glaucoma-treatment'
            // }
        ]
    },
    {
        listHeading: 'Why choose us?',
        listLinks: [
            {
                text: 'Affordable high-quality vision correction',
                url: '#'
            },
            {
                text: '5 star technology and treatment',
                url: '/our-specialists/our-eye-diagnostics-technology'
            },
            {
                text: 'Conveniently located in North London',
                url: ''
            },
            {
                text: 'Top visual outcomes',
                url: ''
            },
            {
                text: 'Care Quality Commission',
                url: ''
            }
        ]
    },
    {
        listHeading: 'Eyelid surgery',
        listLinks: [
            {
                text: 'Entropia',
                url: '#'
            },
            {
                text: 'Blepharoplasty',
                url: '/blepharitis-treatment'
            },
            {
                text: 'Droopy Eyelid (Ptosis)',
                url: '/eyelid-surgery-london'
            },
            {
                text: 'Eye Bags',
                url: '#'
            }
        ]
    }
];

export default footerList;
