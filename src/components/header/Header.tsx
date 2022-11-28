import { Button } from '@/components/button';
import { Container } from '@/components/container';
import MobileNavbar from '@/components/header/MobileNavbar';
import NavMenu from '@/components/header/NavMenu';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Header component for the app
 * @returns {JSX.Element}
 * @constructor
 */
const Header = (): JSX.Element => {
    return (
        <>
            <MobileNavbar />
            <header className="sticky top-0 left-0 z-[99] hidden h-[6.4rem] w-full xl:mt-[2.3rem] xl:block">
                <Container className="grid h-full grid-cols-[1fr_auto] items-center gap-6">
                    <div className="grid h-full grid-cols-[auto_1fr_auto] items-center rounded-[12rem] bg-white p-2 pl-4 shadow-shadow1">
                        {/* Mobile logo */}
                        <Link href="/" className="md:hidden">
                            <Image
                                src="/images/logos/logo-iclinic.png"
                                alt="My-iClinic"
                                width={154}
                                height={36}
                                priority
                            />
                        </Link>
                        {/* Desktop logo */}
                        <Link href="/" className="hidden md:block">
                            <Image
                                src="/images/logos/logo-iclinic-desktop.png"
                                alt="My-iClinic"
                                width={154}
                                height={36}
                                quality={30}
                                priority
                            />
                        </Link>

                        {/*  Navigation links  */}
                        <NavMenu />

                        {/*    Round box */}
                        <div className="hidden h-[5.8rem] w-[5.8rem] cursor-pointer items-center justify-center gap-[0.06rem] rounded-full border-2 border-brand bg-brand transition-all duration-300 hover:bg-transparent xl:flex">
                            <span className="relative -top-1 font-latoBold text-[2.8rem] capitalize">A</span>
                            <span className="relative top-1 font-latoBold text-[2.8rem]">a</span>
                        </div>
                    </div>

                    <div className="grid place-items-end">
                        <Button
                            type="anchor"
                            text="Book a consultation"
                            iconPosition="left"
                            icon={
                                <Image
                                    src="/images/icons/icon-calendar-outline-darker.svg"
                                    alt=""
                                    width={18}
                                    height={18}
                                    quality={2}
                                />
                            }
                        />
                    </div>
                </Container>
            </header>
        </>
    );
};

export default Header;
