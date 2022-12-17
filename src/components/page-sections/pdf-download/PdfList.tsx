import Image from 'next/image';

/**
 * Individual pdf list component
 *
 * @param {{ listText: string }} { listText }
 * @returns {*}  {JSX.Element}
 */
const PdfList = ({ listText }: { listText: string }): JSX.Element => {
    return (
        <li className="grid grid-cols-[auto_1fr] items-start gap-4">
            <Image
                src="/images/icons/icon-check-grey.svg"
                alt=""
                quality={20}
                width={20}
                height={20}
                className="mt-2"
            />
            <p className="text-left font-mulishMedium text-[1.6rem]">{listText}</p>
        </li>
    );
};

export default PdfList;
