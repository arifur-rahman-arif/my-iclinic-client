import HTMLReactParser from 'html-react-parser';
import { ReactNode } from 'react';
import styles from './Style.module.scss';

interface CardInterface {
    title: ReactNode;
    descriptions: string[];
}

/**
 * Inner card component
 *
 * @param {JSX.Element} title
 * @param {JSX.Element[]} descriptions
 * @returns {JSX.Element}
 * @constructor
 */
const Card = ({ title, descriptions }: CardInterface): JSX.Element => {
    return (
        <div className="max-w-[58.7rem] flex-grow rounded-radius2 border border-solid border-[#EAECF0] px-12 py-20 transition-all duration-500 hover:shadow-shadow1 md:px-16">
            <div className={`grid content-start gap-6 ${styles.styles}`}>
                <h3 className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem] text-heading">
                    {typeof title === 'string' ? HTMLReactParser(title) : title}
                </h3>
                <span className="h-[1.4rem] w-[6.7rem] rounded-primary bg-[#FF7F00]"></span>

                {descriptions.map((item, index) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: item }}></div>
                ))}
            </div>
        </div>
    );
};

interface MyopiaControlInterface {
    cardList?: CardInterface[];
}

/**
 * Myopia control component
 *
 * @param {CardInterface[] | undefined} cardList
 * @returns {JSX.Element}
 * @constructor
 */
const MyopiaControl = ({ cardList }: MyopiaControlInterface): JSX.Element => {
    return (
        <div className="flex flex-col items-stretch justify-center gap-12 md:flex-row md:justify-start md:gap-6">
            {cardList?.length ? cardList.map((card, index) => <Card {...card} key={index} />) : null}
        </div>
    );
};
export default MyopiaControl;
