import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Card, { CardInterface } from './Card';

const defaultCardList: CardInterface[] = [
    {
        image: {
            url: '/images/section-images/card-improved-vision.png'
        },
        title: 'Improved Vision',
        description: [
            'After cataract surgery, your natural vision is restored.',
            'Our patients have described their vision to be improved and a new'
        ],
        list: [
            "All the colours around me are bright again; I can't believe the detail",
            "The real plus is that I don't have to wear contact lenses and can see better",
            'When I go for country walks, I can now see the birds in the trees, or a bunny hopping...',
            'Now I can finally read all the motorway signs when I drive…'
        ]
    },
    {
        image: {
            url: '/images/section-images/card-man-drinking-water.png'
        },
        title: 'Improved Quality of Life',
        description: [
            'As our vision deteriorates, and colours begin to fade, it affects our perception and experiences in everyday tasks.',
            'A life without cataracts is not only a life of improved vision, but an opportunity to have an improved quality of life!'
        ],
        list: [
            'No more compromise in your daily tasks',
            'Full independence in your routine',
            'An easy discovery of new hobbies'
        ]
    },
    {
        image: {
            url: '/images/section-images/card-user-writing.png'
        },
        title: 'Quick Procedure',
        description: [
            'With our specialist team, your cataract procedure is an average of 60 minutes and our friendly nurses will guide you before and after the surgery for your ease and comfort.'
        ],
        list: [
            'An average of 60 minutes for surgery',
            'Our friendly nurse team always beside you',
            'One specialist dedicated to your treatment '
        ]
    },
    {
        image: {
            url: '/images/section-images/card-lady-smiling.png'
        },
        title: 'Easy Recovery & Aftercare',
        description: [
            'Our patients describe their recovery as a very simple and easy process.',
            'What to expect in your aftercare'
        ],
        list: [
            'A detailed chat about your aftercare routine with our nurses',
            '2 weeks recovery time at home',
            'A detailed assessment of your vision after surgery',
            'A helpful and fully comprehensive appointment with your cataract specialist'
        ]
    }
];

interface HalfRoundedCardProps {
    cardList: CardInterface[];
}

/**
 * Half rounded Card component
 *
 * @returns {*}  {JSX.Element}
 */
const HalfRoundedCard = ({ cardList }: HalfRoundedCardProps): JSX.Element => {
    return (
        <Section>
            <Container className="flex flex-wrap justify-center gap-8">
                {((cardList.length && cardList) || defaultCardList).map((list, index) => {
                    return (
                        <Card
                            title={list.title}
                            key={index}
                            description={list.description}
                            list={list.list}
                            image={list.image}
                            index={index}
                        />
                    );
                })}
            </Container>
        </Section>
    );
};

export default HalfRoundedCard;
