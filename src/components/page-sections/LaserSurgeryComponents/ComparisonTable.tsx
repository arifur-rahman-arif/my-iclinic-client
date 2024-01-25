import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import SectionTextColumn from '@/components/SectionTextColumn';
import Image from 'next/image';
import styles from './styles/ComparisonTable.module.scss';

interface Props {
	heading: string;
}

/**
 *afas
 *
 * @returns {*}  {JSX.Element}
 */
const ComparisonTable = ({ heading }: Props): JSX.Element => {
  return (
	<Section id='comparison-table'>
		<Container className='grid gap-12 content-start'>
			<SectionTextColumn heading={heading} headingClassName="max-w-[49.8rem]"/>

			<div className='grid grid-cols-[1fr_2rem] pb-16 lg:pb-12 sm:grid-cols-[1fr_3rem] shadow-md border border-solid border-[#EAECF0] rounded-radius2  p-8 pr-0 sm:p-12 sm:pr-0 overflow-x-auto'>
				<table className={`${styles.styles} min-w-[80rem]`}>
					<thead className="">
						<tr>
							<th>Benefits</th>
							<th>XXX clinic</th>
							<th>XXX clinic</th>
							<th>XXX clinic</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Free consultation</td>
							<td><Image src='/images/icons/icon-tick-light.svg' alt='tick' width={24} height={24} /></td>
							<td>Free consultation</td>
							<td>Free consultation</td>
						</tr>
					</tbody>
				</table>
				<div></div>
			</div>
		</Container>
	</Section>
  );
};

export default ComparisonTable;
