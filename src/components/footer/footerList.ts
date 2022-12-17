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
                text: 'ReLEX Smile',
                url: '#'
            },
            {
                text: 'Presbyond',
                url: '#'
            },
            {
                text: 'LASIK',
                url: '#'
            },
            {
                text: 'LASEK, PRK & PTK',
                url: '#'
            }
        ]
    },
    {
        listHeading: 'Entropion',
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
                url: '#'
            },
            {
                text: 'Myopia Control clinic',
                url: '#'
            },
            {
                text: 'ICL eye surgery',
                url: '#'
            },
            {
                text: 'Eyelid Cysts Chalazion and Styes',
                url: '#'
            },
            {
                text: 'Glaucoma Care',
                url: '#'
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
