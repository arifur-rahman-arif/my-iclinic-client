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
                url: '/laser-eye-surgery/relex-smile-london'
            },
            {
                text: 'Presbyond',
                url: '/laser-eye-surgery/presbyond-london'
            },
            {
                text: 'LASIK',
                url: '/laser-eye-surgery/lasik-london'
            },
            {
                text: 'LASEK, PRK & PTK',
                url: '/laser-eye-surgery/lasek-prk'
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
                text: 'Presbyond',
                url: '#'
            },
            {
                text: 'Blepharoplasty',
                url: '#'
            },
            {
                text: 'Droopy Eyelid (Ptosis)',
                url: '#'
            },
            {
                text: 'Eye Bags',
                url: '#'
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
                text: 'Myopia Control clinic',
                url: '#'
            },
            {
                text: 'ICL eye surgery',
                url: '/icl'
            },
            {
                text: 'Eyelid Cysts Chalazion and Styes',
                url: '#'
            },
            {
                text: 'Glaucoma Care',
                url: '/eye-treatments/glaucoma'
            }
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
                url: '#'
            },
            {
                text: 'Conveniently located in North London',
                url: '#'
            },
            {
                text: 'Top visual outcomes',
                url: '#'
            },
            {
                text: 'Care Quality Commission',
                url: '#'
            }
        ]
    }
];

export default footerList;
