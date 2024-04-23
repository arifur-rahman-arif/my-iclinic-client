import { Container } from '@/components/Container';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { twMerge } from 'tailwind-merge';
import IconHome from './IconHome';

interface BreadCrumbProps {
    className?: string;
    pathClassName?: string;
    linkClassName?: string;
    activeLinkClass?: string;
}

const NestedRoutes = dynamic(() => import('./NestedRoutes'), {
    ssr: false
});

/**
 * Breadcrumb component
 *
 * @returns {*}  {JSX.Element}
 */
const BreadCrumb = ({ className, pathClassName, linkClassName, activeLinkClass }: BreadCrumbProps): JSX.Element => {
    const router = useRouter();

    return (
        <Container
            className={twMerge(
                'breadcrumb-container mt-4 flex items-center justify-start gap-4 overflow-x-auto overflow-y-hidden pb-4 md:hidden md:pb-0',
                className
            )}
        >
            {router.pathname === '/' ? (
                <Link href="/" aria-label="Home" className="flex items-center justify-start gap-6">
                    <IconHome active={true} pathClassName={pathClassName} />
                    <span
                        className={`translate-y-[0.1rem] cursor-pointer whitespace-nowrap font-mulishBold text-[1.2rem] capitalize leading-[1.6rem] text-heading md:text-[1.5rem]`}
                    >
                        Home
                    </span>
                </Link>
            ) : (
                <Link href="/" aria-label="Home">
                    <IconHome active={false} pathClassName={pathClassName} />
                </Link>
            )}

            <NestedRoutes
                router={router}
                pathClassName={pathClassName}
                linkClassName={linkClassName}
                activeLinkClass={activeLinkClass}
            />
        </Container>
    );
};

export default BreadCrumb;
