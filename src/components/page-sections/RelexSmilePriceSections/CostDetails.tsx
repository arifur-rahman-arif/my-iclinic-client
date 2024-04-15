import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

interface Props {
    items: Array<{
        title: string;
        price: string;
        description: string;
    }>;
}

/**
 * Cost details component
 *
 * @param {Props} { items }
 * @returns {*}  {JSX.Element}
 */
const CostDetails = ({ items }: Props): JSX.Element => {
    return (
        <Section id="cost-details">
            <Container className="flex w-full flex-wrap items-stretch justify-center gap-6">
                {items?.length
                    ? items.map((item, key) => (
                          <div
                              key={key}
                              className={`grid max-w-[45.7rem] grow grid-cols-[auto_1fr] content-start gap-y-3 gap-x-6 overflow-hidden rounded-primary bg-[#005DAF] ${
                                  key == 0 ? 'px-10 py-10 sm:px-16 md:px-24' : 'grid-rows-2'
                              }`}
                          >
                              {key == 0 ? (
                                  <>
                                      <span className={`font-mulishBold text-[2rem] leading-[2.8rem] text-white`}>
                                          {item.title}
                                      </span>
                                      <span className="font-mulishBold text-[2rem] leading-[2.8rem] text-[#94CAFF]">
                                          {item.price}
                                      </span>
                                  </>
                              ) : (
                                  <div className="col-span-full flex items-center justify-center gap-6 px-10 py-10">
                                      <span className={`font-mulishBold text-[2rem] leading-[2.8rem] text-white`}>
                                          {item.title}
                                      </span>
                                      <span className="font-mulishBold text-[2rem] leading-[2.8rem] text-[#94CAFF]">
                                          {item.price}
                                      </span>
                                  </div>
                              )}

                              <p
                                  className={`col-span-full ${
                                      key == 0
                                          ? 'text-white'
                                          : 'flex items-center justify-center bg-[#FFD400] px-8 font-latoBold text-[2rem] uppercase leading-[2.8rem] text-heading sm:px-16'
                                  }`}
                              >
                                  {item.description}
                              </p>
                          </div>
                      ))
                    : null}
            </Container>
        </Section>
    );
};

export default CostDetails;
