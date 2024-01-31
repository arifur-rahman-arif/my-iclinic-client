import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import SectionTextColumn from '@/components/SectionTextColumn';
import { stripInitialTags } from '@/utils/miscellaneous';
import HTMLReactParser from 'html-react-parser';
import Image from 'next/image';
import styles from './styles/ComparisonTable.module.scss';


interface Props {
    heading: string;
    table: any;
}

/**
 * afas
 *
 * @returns {*}  {JSX.Element}
 */
const ComparisonTable = ({ heading, table }: Props): JSX.Element => {
    return (
        <Section id="comparison-table">
            <Container className="grid gap-12 content-start">
                <SectionTextColumn heading={heading} headingClassName="max-w-[49.8rem]" />

                <div
                    className="grid grid-cols-[1fr_2rem] pb-16 lg:pb-12 sm:grid-cols-[1fr_3rem] shadow-md border border-solid border-[#EAECF0] rounded-radius2  p-8 pr-0 sm:p-12 sm:pr-0 overflow-x-auto">
                    <table className={`${styles.styles} min-w-[80rem]`}>
                        <thead className="">
                        <tr>
                            {table[0].tableRows.map((item: any, key: any) =>
                                <th key={key}
                                    dangerouslySetInnerHTML={{ __html: stripInitialTags(item.value) }}></th>
                            )}
                        </tr>
                        </thead>
                        <tbody>

                        {(table as any).slice(1).map((row: any, key: any) => (
                            <tr key={key}>
                                {row.tableRows.map((item: any, index: any) =>
                                    <td key={index}>{item.value === '1' ?
                                        <Image src="/images/icons/icon-tick-light.svg" alt="tick" width={24}
                                               height={24} /> : HTMLReactParser(stripInitialTags(item.value))}</td>
                                )}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    {/* div for empty spacing on right side */}
                    <div></div>
                </div>
            </Container>
        </Section>
    );
};

export default ComparisonTable;
