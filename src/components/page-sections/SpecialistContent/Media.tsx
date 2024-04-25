import styles from '@/page-sections/SuitabilityCheck/AnswerPanel/styles/PanelReveal.module.scss';
import HTMLReactParser from 'html-react-parser';
import Image from 'next/image';

interface MediaProps {
    content: string;
    list: string[];
}

/**
 * Media component
 *
 * @param {string} content
 * @param {string[]} list
 * @returns {JSX.Element}
 * @constructor
 */
const Media = ({ content, list }: MediaProps): JSX.Element => {
    return (
        <div className={`${styles.styles} grid content-start gap-12 md:px-12`}>
            {content ? <div>{HTMLReactParser(content || '')}</div> : null}

            {list.length ? (
                <div className="grid gap-6">
                    <span className="block font-mulishBold text-[2rem] leading-[2.8rem]">
                        Fellowships and Memberships in Professional Societies
                    </span>

                    <ul className="ml-8 grid gap-3">
                        {list.map((item, i) => (
                            <li className="grid grid-cols-[auto_1fr] items-start gap-3" key={i}>
                                <Image
                                    src="/images/icons/icon-dotted-arrow.svg"
                                    alt="Arrow"
                                    width={10}
                                    height={10}
                                    className="mt-2.5 h-5 w-5"
                                />
                                <span className="text-[#384043]">{item || ''}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default Media;
