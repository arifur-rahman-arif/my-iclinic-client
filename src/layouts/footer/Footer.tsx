import { Container } from '@/components/container';
import IconTelephone from '@/images/icons/icon-telephone-outline.svg';
import IconMail from '@/images/icons/icon-mail-outline.svg';
import IconMapPin from '@/images/icons/icon-map-pin-outline.svg';

/**
 * Footer container
 *
 * @returns JSX.Element
 */
const Footer = () => {
    return (
        <footer className="relative mt-24 w-full bg-headingColor sm:mt-36 md:mt-[30rem]">
            <img
                src="/images/section-images/footer-bg.png"
                className="absolute top-0 right-0 z-[1] h-full max-h-[46.7rem] w-full max-w-[68.3rem] md:-translate-y-2/4"
                alt=""
            />

            <Container className="grid grid-cols-1 justify-items-center pt-32 pb-16">
                <h3 className="mt-4 normal-case text-primary">Get in touch ..</h3>
                <h2 className="mt-[1.5rem] max-w-[38.8rem] text-white">Contact</h2>

                <div className="mt-24 grid grid-cols-[auto_1fr] items-center justify-items-start gap-x-4 gap-y-8">
                    <IconTelephone className="max-h-[2.4rem] max-w-[2.4rem]" />
                    <span className="font-medium leading-[1.9rem] text-white">+44 7550 400 000</span>
                    <IconMail className="max-h-[2.4rem] max-w-[2.4rem]" />
                    <span className="font-medium leading-[1.9rem] text-white">Swim@belugaswimmingacademy.com</span>
                    <IconMapPin className="max-h-[2.4rem] max-w-[2.4rem]" />
                    <span className="font-medium leading-[1.9rem] text-white">Portland Road, London W11 4LQ</span>
                </div>

                <div className="mt-28 flex items-center justify-center gap-4">
                    <a className="cursor-pointer text-[1.6rem] font-bold capitalize leading-8 text-white transition-all hover:underline hover:decoration-white hover:underline-offset-8">
                        Privacy Policy
                    </a>
                    <span className="text-[1.6rem] font-bold capitalize leading-8 text-white">|</span>
                    <a className="cursor-pointer text-[1.6rem] font-bold capitalize leading-8 text-white transition-all hover:underline hover:decoration-white hover:underline-offset-8">
                        Cookies
                    </a>
                </div>

                <p className="mt-12 text-[1.4rem] leading-[1.8rem] text-white">
                    Copy Right © belugaswimmingacademy 2022 | All Right Reserved
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
