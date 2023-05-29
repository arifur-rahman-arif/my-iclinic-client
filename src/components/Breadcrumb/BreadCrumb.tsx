import { Container } from '@/components/Container';
import IconArrow from '@/icons/icon-double-arrow.svg';
import { generateBreadcrumbs } from '@/utils/miscellaneous';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import IconHome from './IconHome';
import { twMerge } from 'tailwind-merge';

interface BreadCrumbProps {
    className?: string;
}

/**
 * Breadcrumb component
 *
 * @returns {*}  {JSX.Element}
 */
const BreadCrumb = ({ className }: BreadCrumbProps): JSX.Element => {
    const router = useRouter();
    const paths = generateBreadcrumbs(router);
    const excludeUrls = ['/eye-treatments', '/vision-correction', '/pricing-and-financing', '/laser-eye-surgery'];
    return (
        <Container
            className={twMerge(
                'breadcrumb-container mt-4 flex items-center justify-start gap-4 overflow-x-auto overflow-y-hidden pb-4 md:hidden md:pb-0',
                className
            )}
        >
            {router.pathname === '/' ? (
                <Link href="/" aria-label="Home" className="flex items-center justify-start gap-6">
                    <IconHome active={true} />
                    <span
                        className={`translate-y-[0.1rem] cursor-pointer whitespace-nowrap font-mulishBold text-[1.2rem] capitalize leading-[1.6rem] text-heading md:text-[1.5rem]`}
                    >
                        Home
                    </span>
                </Link>
            ) : (
                <Link href="/" aria-label="Home">
                    <IconHome active={false} />
                </Link>
            )}

            {paths.map((path, index) => (
                <Fragment key={index}>
                    {!excludeUrls.includes(path.url) && (
                        <div className="flex min-w-max items-center justify-start gap-2" key={index}>
                            <Image src={IconArrow} alt="" className="h-8 w-8 translate-y-[0.1rem]" />

                            <Link href={!excludeUrls.includes(path.url) ? path.url : '/'}>
                                <span
                                    className={`whitespace-nowrap font-mulishBold text-[1.2rem] capitalize leading-[1.6rem] md:text-[1.5rem] ${
                                        index == paths.length - 1 ? 'text-heading2' : 'text-[#697072]'
                                    }`}
                                >
                                    {path.name}
                                </span>
                            </Link>
                        </div>
                    )}
                </Fragment>
            ))}
        </Container>
    );
};

export default BreadCrumb;
