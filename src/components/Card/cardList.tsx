import { Card2Interface } from '@/components/Card/Card2';
import { ConsultantCardInterface } from './ConsultantCard';
import { CardInterface } from './Card';
import CardAttribute1 from '@/section-images/card-attribute-1.png';
import CardAttribute2 from '@/section-images/card-attribute-2.png';
import CardAttribute4 from '@/section-images/card-attribute-3.png';
import CardAttribute3 from '@/section-images/card-attribute-4.png';
import IconAngleTeal from '@/icons/icon-angle-teal.svg';
import IconAngleOrange from '@/icons/icon-angle-orange.svg';
import IconAngleViolet from '@/icons/icon-angle-violet.svg';
import IconAngleDarkBlue from '@/icons/icon-angle-dark-blue.svg';

export const cardList: CardInterface[] = [
    {
        image: '/images/section-images/eye-care-service-card-1.png',
        title: 'ReLEx SMILE',
        pillText: 'Age 20 - 39',
        cardList: [
            <>
                The best treatment for{' '}
                <strong className="text-[1.6rem] leading-[2.4rem] text-heading">
                    life without glasses or contact lenses
                </strong>
                .
            </>,
            'No more compromise.'
        ],
        cardLink: '/relex-smile-london'
    },
    {
        image: '/images/section-images/eye-care-service-card-2.png',
        title: 'Cataract Treatment',
        //        pillText: 'Age 55+',
        cardList: [
            <>
                Best treatment for{' '}
                <strong className="text-[1.6rem] leading-[2.4rem] text-heading">removing cloudy vision.</strong>
            </>,
            'Restoring clear, natural vision.'
        ],
        cardLink: '/cataract'
    },
    {
        image: '/images/section-images/eye-care-service-card-3.png',
        title: 'Presbyond Treatment',
        pillText: 'Age 40+',
        cardList: [
            'The best treatment for freedom from spectacles. See at all distances without glasses',
            'Be free from glasses after cataract surgery'
        ],
        cardLink: '/presbyond-london'
    },
    {
        image: '/images/section-images/eye-care-service-card-4.png',
        title: (
            <>
                Implantable
                <br /> Contact Lenses
            </>
        ),
        pillText: 'Age 20+',
        cardList: [
            <>
                Best treatment{' '}
                <strong className="text-[1.6rem] leading-[2.4rem] text-heading">for life without glasses.</strong>
            </>,
            'Be active without risk of contact lens infections.'
        ],
        cardLink: '/icl'
    },
    {
        image: '/images/section-images/eye-care-service-card-5.png',
        title: (
            <>
                Glaucoma Care
                <br />
                <span className="hidden md:invisible md:block">Glaucoma Care</span>
            </>
        ),
        //        pillText: 'Age 40+',
        cardList: [
            <>
                Best treatment for all{' '}
                <strong className="text-[1.6rem] leading-[2.4rem] text-heading">glaucoma types.</strong>
            </>,
            'Get bespoke treatment to manage your glaucoma.'
        ],
        cardLink: '/glaucoma-treatment'
    },
    {
        image: '/images/section-images/eye-care-service-card-6.png',
        title: (
            <>
                Myopia Control
                <br /> Clinic for Children
            </>
        ),
        pillText: 'Age 3+',
        cardList: [
            <>
                Best treatment for{' '}
                <strong className="text-[1.6rem] leading-[2.4rem] text-heading">
                    slowing down the progression of myopia.
                </strong>
            </>,
            'Atropine eye drops available.'
        ],
        cardLink: '/myopia'
    }
];

export const card2List: Card2Interface[] = [
    {
        title: (
            <>
                Begin Your <br />
                Care Journey
            </>
        ),
        cardList: [
            'Easy booking with our patient care liaison',
            'Accessible resources available from our specialists',
            'Detailed understanding & instructions given before your private consultation'
        ],
        borderColor: 'border-teal',
        bannerImage: CardAttribute1,
        listIcon: IconAngleTeal
    },
    {
        title: (
            <>
                Private <br />
                Consultation
            </>
        ),
        cardList: [
            'Comprehensive eye assessments and scans',
            'One-to-one with your dedicated ophthalmologist',
            'Understanding your best treatment options'
        ],
        borderColor: 'border-orange',
        bannerImage: CardAttribute2,
        listIcon: IconAngleOrange
    },
    {
        title: (
            <>
                Quality Care &<br />
                Private Treatment
            </>
        ),
        cardList: [
            'Guidance from our friendly team & clinic nurses',
            'Comfortable, stress-free treatment in our private suites',
            'Your ophthalmologist as your dedicated surgeon with over 30+ years experience'
        ],
        borderColor: 'border-[#8D33FF]',
        bannerImage: CardAttribute4,
        listIcon: IconAngleViolet
    },
    {
        title: (
            <>
                Aftercare
                <br />
                Appointments
            </>
        ),
        cardList: [
            'Free aftercare check ups with your specialist / surgeon',
            'Comprehensive eye assessments & scans',
            'Patient care advice always available'
        ],
        borderColor: 'border-[#004574]',
        bannerImage: CardAttribute3,
        listIcon: IconAngleDarkBlue
    }
];

export const consultantCardList: ConsultantCardInterface[] = [
    {
        image: '/images/avaters/odufuwa-bolger.jpg',
        name: 'Bola Odufuwa-Bolger',
        degree: 'MBBS DO FRCS (Ed) FRCOphth MSc CertLRS; PGDip LRS',
        title: 'Consultant and Surgeon',
        url: '/our-specialists/bola-bolger'
    },
    {
        image: '/images/avaters/mr-john-bolger.png',
        name: 'John Bolger',
        degree: 'M.B., B.Ch., B.A.O., D.O., F.R.C.S., F.E.B.O.S.-CR',
        title: 'Consultant and Surgeon',
        url: '/our-specialists/john-bolger'
    },
    {
        image: '/images/avaters/ms-sancy-low.png',
        name: 'Sancy Low',
        degree: 'MB BS BSc(Hons) PhD FRCOphth',
        title: 'Consultant and Surgeon',
        url: '/our-specialists/sancy-low'
    },
    {
        image: '/images/avaters/mr-radwan-almousa.png',
        name: 'Radwan Almousa',
        degree: 'MD FRCOphth CertLRS',
        title: 'Consultant and Surgeon',
        url: '/our-specialists/radwan-almousa'
    },
    {
        image: '/images/avaters/ms-yvonne-luo.jpg',
        name: 'Yvonne Luo',
        degree: 'M.B., B.Chir., M.A.(Cantab), FRCOphth, PhD',
        title: 'Consultant and Surgeon',
        url: '/our-specialists/yvonne-luo'
    },
    {
        image: '/images/avaters/ms-maria-dimitry.png',
        name: 'Maria Dimitry',
        degree: 'MBBS, MSc, FRCOphth, CertLRS',
        title: 'Consultant and Surgeon',
        url: '/our-specialists/maria-dimitry'
    },
    {
        image: '/images/avaters/tina-khanam.jpeg',
        name: 'Tina Khanam',
        degree: 'MBBS, BSc (intercal), MSc, FRCOPhth, PG Dip CRS, Cert LRS',
        title: 'Consultant and Surgeon',
        url: '/our-specialists/tina-khanam'
    },
    {
        image: '/images/avaters/sheila-luk.jpg',
        name: 'Sheila Luk',
        degree: 'MBBS DO FRCS (Ed) FRCOphth MSc CertLRS; PGDip LRS',
        title: 'Consultant and Surgeon',
        url: '/our-specialists/sheila-luk'
    },
    {
        image: '/images/avaters/qiang-kwong.jpeg',
        name: 'Mr Qiang Kwong',
        degree: 'MA (Cantab) BM BCh (Oxon) FEBO FRCOphth CERTLRS',
        title: 'Consultant and Surgeon',
        url: '/our-specialists/qiang-kwong'
    }
];
