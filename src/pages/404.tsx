import Page from '@/components/Page';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

/**
 * 404 page of the website
 *
 * @returns {*}  {JSX.Element}
 */
const Page404: NextPage = (): JSX.Element => {
    const router = useRouter();

    return (
        <Page title="Page not found" seo={null} yoastJson={null}>
            <div className="grid h-screen w-full place-items-center content-center bg-brandLight">
                <div>
                    <Image src="/images/section-images/404.png" alt="404" width={723} height={427} quality={70} />
                </div>
                <div className="mt-12 flex flex-col items-start justify-start gap-6">
                    <h2 className="font-latoBold normal-case">Something is missing!</h2>
                    <p className="max-w-[30.6rem]">The page you are looking for doesn't exist in our website.</p>
                    <div
                        className="mt-24 grid cursor-pointer grid-flow-col place-items-center gap-6"
                        onClick={() => router.back()}
                    >
                        <Image
                            alt=""
                            width={24}
                            height={24}
                            src="/images/icons/icon-arrow-tail-left.svg"
                            quality={70}
                        />
                        <span className="font-mulishBold capitalize">Go back</span>
                    </div>
                </div>
            </div>
        </Page>
    );
};

// @ts-ignore
Page404.layout = 'noNavigationLayout';
export default Page404;
