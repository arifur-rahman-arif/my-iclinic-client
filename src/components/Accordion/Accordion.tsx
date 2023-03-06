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
        <div className="mx-auto grid max-w-[53rem] grid-cols-1 gap-14">
            {accordionList.map((accordion, index) => (
                <FaqItem key={index} index={index} accordion={accordion} />
            ))}
        </div>
    );
};

export default Accordion;
