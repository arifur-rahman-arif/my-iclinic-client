import Button from '@/components/Buttons/Button';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';

/**
 * Chat with us component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ChatWithUs = () => {
    return (
        <Section id="chat-with-us">
            <Container className="grid content-start justify-items-center gap-12">
                <Image src="/images/section-images/customer-support.png" alt="" width={391} height={157} />
                <h2 className="text-center font-latoBold text-[2.8rem] normal-case leading-[3.2rem] text-heading md:text-[3.6rem] md:leading-[4rem]">
                    Chat with our ICL enthusiasts now
                    <br /> They're as friendly as they come!
                </h2>
                <Button
                    type="anchor"
                    text="0208 445 8877"
                    link="tel:0208 445 8877"
                    className="border-[#003E79] bg-[#003E79] !px-20 hover:text-[#003E79]"
                />
            </Container>
        </Section>
    );
};

export default ChatWithUs;
