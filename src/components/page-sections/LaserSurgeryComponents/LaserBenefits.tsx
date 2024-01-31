import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { LaserEyeSurgeryContentInterface } from '@/types';

interface Props extends Pick<LaserEyeSurgeryContentInterface, 'section1'> {}


/**
 * Component to display the benefits of laser eye surgery.
 *
 * @param {Props} props - The component properties.
 * @returns {JSX.Element} The rendered component.
 */
const LaserBenefits = ({ section1 }: Props): JSX.Element => {
  return (
	<Section id="laser-benefits">
		<Container className='grid gap-12 md:grid-cols-2'>
			{section1.card1 && <Card {...section1.card1} />}
			{section1.card2 && <Card {...section1.card2} />}
		</Container>
	</Section>
  );
};

interface CardProps {
	title: string;
	description: string;
}

/**
 * Component to display a card with a title and description.
 *
 * @param {CardProps} props - The component properties.
 * @returns {JSX.Element} The rendered component.
 */
const Card = ({ title, description }: CardProps) => {
  return (
	<div className='border border-[#EAECF0] border-solid shadow-md p-12 lg:p-24 rounded-radius2 grid gap-12 content-start'>
		<h2 className='normal-case'>{title}</h2>
		<p dangerouslySetInnerHTML={{ __html: description }}></p>
	</div>
  );
};


export default LaserBenefits;
