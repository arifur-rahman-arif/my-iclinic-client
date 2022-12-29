import { Button } from '@/components/button';
import { Container, ContainerFluid } from '@/components/container';
import { Section } from '@/components/section';
import { largeSizes, useDeviceSize } from '@/hooks';
import Image, { StaticImageData } from 'next/image';

interface BottomBannerInterface {
    bannerImage: StaticImageData;
    bannerBg: string;
}

/**
 * Bottom banner
 *
 * @returns {*}  {JSX.Element}
 */
const BottomBanner = ({ bannerImage, bannerBg }: BottomBannerInterface): JSX.Element => {
    const deviceSize = useDeviceSize();
    return (
        <Section>
            <ContainerFluid className="z-[2] px-0">
                <div
                    style={{ background: 'linear-gradient(180deg, #30CAD3 0%, rgba(204, 231, 254, 0) 100%)' }}
                    className="w-full"
                >
                    <div className="relative w-full md:hidden">
                        <Image src={bannerImage} alt="" quality={70} className="absolute right-0 top-0 h-auto w-auto" />
                        {/* Hidden image to take the actual space for absolute positioned element */}
                        <Image src={bannerImage} alt="" quality={1} className="invisible h-auto w-auto" />
                    </div>
                    <Container className="relative grid grid-cols-1 items-center py-12 md:min-h-[57.5rem] md:grid-cols-[auto_1fr] md:py-0">
                        {/* Banner */}
                        <div className="relative z-10 grid max-w-[33.8rem] grid-cols-1 content-start gap-x-6 justify-self-center rounded-primary md:max-w-[56rem] md:grid-cols-[auto_1fr] md:gap-y-24 md:justify-self-start md:bg-brandLight md:py-24 md:px-12 md:shadow-shadow2">
                            <h2 className="font-latoLight text-[3.2rem] font-light normal-case leading-[3.6rem] text-heading md:col-span-2 md:text-[4.8rem] md:leading-[4.8rem]">
                                Want to be free from reading glasses?
                            </h2>
                            <Button
                                type="anchor"
                                text="Book a consultation"
                                iconPosition="left"
                                className="mt-24 justify-self-center md:mt-0 md:justify-self-start"
                                icon={
                                    <Image
                                        src="/images/icons/icon-calendar-outline-darker.svg"
                                        alt=""
                                        width={20}
                                        height={20}
                                        quality={2}
                                        className="h-8 w-8"
                                    />
                                }
                            />
                            <Button
                                type="anchor"
                                text="0208 445 8877"
                                iconPosition="left"
                                className="mt-6 place-content-center justify-self-center border !bg-transparent md:mt-0 md:min-w-[23.3rem] md:justify-self-start md:text-[2rem] md:leading-[2.4rem]"
                                icon={
                                    <Image
                                        src="/images/icons/icon-phone-dark.svg"
                                        alt=""
                                        width={20}
                                        height={20}
                                        quality={2}
                                        className="h-8 w-8"
                                    />
                                }
                            />
                        </div>
                    </Container>
                    {/* md:bg-[url('/images/section-images/presbyond-banner-bg-desktop.webp)] */}
                    <div
                        className={`absolute top-0 left-0 z-[1] h-full w-full bg-[100%_100%] bg-no-repeat lg:bg-[auto_100%] lg:bg-[right_center]`}
                        style={{ backgroundImage: largeSizes.includes(deviceSize) ? `url(${bannerBg})` : '' }}
                    ></div>
                </div>
            </ContainerFluid>
        </Section>
    );
};

export default BottomBanner;
