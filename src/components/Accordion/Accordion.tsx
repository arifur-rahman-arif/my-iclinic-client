import FaqItem from '@/components/Accordion/faq/FaqItem';

interface AccordionComponentInterface {
    accordionList: Array<any>;
}

/**
 * The accordion component
 *
 * @param {Array<any>} accordionList
 * @returns {JSX.Element}
 * @constructor
 */
const Accordion = ({ accordionList }: AccordionComponentInterface): JSX.Element => {
    return (
        <div className="mx-auto grid w-full max-w-[53rem] grid-cols-1 justify-center gap-14 md:max-w-full md:grid-cols-[repeat(auto-fit,_minmax(40rem,_53rem))] md:gap-24 xl:gap-32">
            {accordionList.map((accordion, index) => (
                <FaqItem key={index} index={index} accordion={accordion} />
            ))}
        </div>
    );
};

export default Accordion;
