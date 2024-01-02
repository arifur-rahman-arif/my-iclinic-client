// @ts-nocheck
import HTMLReactParser from 'html-react-parser';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface PropInterface {
    children?: JSX.Element | JSX.Element[];
    title: string;
    description?: string;
    seo?: any;
    yoastJson?: any;
}

/**
 * Page component which will be use in every page as a wrapper
 *
 * @param {JSX.Element | JSX.Element[] | undefined} children
 * @param {string} title
 * @param {string | undefined} description
 * @param {any} seo
 * @param {any} yoastJson
 * @param {Omit<PropInterface, 'description' | 'title' | 'seo' | 'children' | 'yoastJson'>} other
 * @returns {JSX.Element}
 * @constructor
 */
const Page = ({ children, title, description, seo, yoastJson }: PropInterface): JSX.Element => {
    const router = useRouter();

    return (
        <>
            <Head>
                {/* Google Tag Manager */}
                <script
                    async
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer','GTM-MFT6DQQ');`
                    }}
                />
                {/* End Google Tag Manager */}
                <script async={true} src="https://www.googletagmanager.com/gtag/js?id=AW-970733853"></script>
                <script
                    async
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-970733853');`
                    }}
                />

                {/* Meta Pixel Code */}
                <script async
                        dangerouslySetInnerHTML={{
                            __html: `!function(f,b,e,v,n,t,s)
                    
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                    
                    'https://connect.facebook.net/en_US/fbevents.js');
                    
                    fbq('init', '3435821386686735');
                    
                    fbq('track', 'PageView');`
                        }}
                />
                <noscript><img alt="" height="1" width="1" style={{
                    display: 'none'
                }} src="https://www.facebook.com/tr?id=3435821386686735&ev=PageView&noscript=1"

                /></noscript>
                {/* End Meta Pixel Code */}

                {!yoastJson?.title && <title>{title}</title>}
                {!yoastJson?.description && <meta name="description" content={description} />}

                <meta name="google-site-verification" content="SAbAmq8u2_y-9zCpgFoI4X7bPFEeDxtda1gDc12Hr-w" />
                <meta name="p:domain_verify" content="da57493c63d00becdd459241e65ec009" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} />
                <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} />
                {seo && HTMLReactParser(seo)}
            </Head>

            {/* Google Tag Manager (noscript) */}
            <noscript
                dangerouslySetInnerHTML={{
                    __html: `
                            <iframe
                              src="https://www.googletagmanager.com/ns.html?id=GTM-MFT6DQQ"
                              height="0"
                              width="0"
                              style={{ display: 'none', visibility: 'hidden' }}
                            ></iframe>
                          `
                }}
            />
                {/* End Google Tag Manager (noscript) */}

                {children}
        </>
    );
};

export default Page;
