import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { twMerge } from 'tailwind-merge';

interface Props {
    items: Array<{
        title: string;
        price: string;
        description: string;
    }>;
    itemClass?: string;
}

/**
 * Cost details component
 *
 * @param {Props} { items }
 * @returns {*}  {JSX.Element}
 */
const CostDetails = ({ items, itemClass }: Props): JSX.Element => {
    return (
        <Section id="cost-details">
            <Container className="flex w-full flex-wrap items-stretch justify-center gap-6">
                {items?.length
                    ? items.map((item, key) => (
                          <div
                              key={key}
                              className={twMerge(
                                  'grid max-w-[45.7rem] grow grid-cols-[auto_1fr]  content-start gap-y-3 gap-x-6 rounded-primary bg-[#005DAF] py-10 px-10 sm:px-16 md:px-24',
                                  itemClass
                              )}
                          >
                              <span className="font-mulishBold text-[2rem] leading-[2.8rem] text-white">
                                  {item.title}
                              </span>
                              <span className="font-mulishBold text-[2rem] leading-[2.8rem] text-[#94CAFF]">
                                  {item.price}
                              </span>
                              <p className="col-span-full text-white">{item.description}</p>
                          </div>
                      ))
                    : null}
            </Container>
        </Section>
    );
};

export default CostDetails;
