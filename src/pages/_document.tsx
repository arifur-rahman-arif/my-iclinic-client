import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
// import Script from 'next/script';

// eslint-disable-next-line require-jsdoc
export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />

                <Script
                    strategy="afterInteractive"
                    id="iclinic-gtag"
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-970733853');`
                    }}
                />
                <Script
                    strategy="afterInteractive"
                    id="iclinic-gtag-conversion"
                    dangerouslySetInnerHTML={{
                        __html: `
                             window.addEventListener('load', function() {
                                var timer = setInterval(function() {
                                if (document.querySelector('[title="Thank you"]')) {
                                gtag('event', 'conversion', {
                                'send_to': 'AW-970733853/KHfRCL_i5pEZEJ3y8M4D'
                                });
                                    clearInterval(timer);
                                }
                                    if (document.querySelector('#request-callback-thank-you')?.getAttributeNames()?.includes('data-gtm-vis-recent-on-screen11870254_61')) {
                                    gtag('event', 'conversion', {
                                    'send_to': 'AW-970733853/KHfRCL_i5pEZEJ3y8M4D'
                                });
                                clearInterval(timer);
                            }
                            }, 1000);
                            });
                    `
                    }}
                />

                <Script
                    strategy="afterInteractive"
                    id="iclinic-gtag-phone"
                    dangerouslySetInnerHTML={{
                        __html: `
                      gtag('config', 'AW-970733853/6t8GCLr255EZEJ3y8M4D', {
                        'phone_conversion_number': '0208 445 8877'
                      });
                    `
                    }}
                />

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

                {/* Meta Pixel Code */}
                <Script
                    strategy="afterInteractive"
                    id="iclinic-meta-pixel-code"
                    dangerouslySetInnerHTML={{
                        __html: `
                            !function(f,b,e,v,n,t,s)
                            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                                
                                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                                
                                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                                
                                n.queue=[];t=b.createElement(e);t.async=!0;
                                
                                t.src=v;s=b.getElementsByTagName(e)[0];
                                
                                s.parentNode.insertBefore(t,s)}(window, document,'script',
                            
                            'https://connect.facebook.net/en_US/fbevents.js');
                            
                            fbq('init', '3435821386686735');
                            
                            fbq('track', 'PageView');
                        `
                    }}
                />

                <noscript>
                    <img
                        alt=""
                        height="1"
                        width="1"
                        style={{
                            display: 'none'
                        }}
                        src="https://www.facebook.com/tr?id=3435821386686735&ev=PageView&noscript=1"
                    />
                </noscript>
                {/* End Meta Pixel Code */}

                <Script
                    strategy="afterInteractive"
                    id="iclinic-meta-pixel-code"
                    dangerouslySetInnerHTML={{
                        __html: `
                            !function(f,b,e,v,n,t,s)
                            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                                
                                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                                
                                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                                
                                n.queue=[];t=b.createElement(e);t.async=!0;
                                
                                t.src=v;s=b.getElementsByTagName(e)[0];
                                
                                s.parentNode.insertBefore(t,s)}(window, document,'script',
                            
                            'https://connect.facebook.net/en_US/fbevents.js');
                            
                            fbq('init', '3435821386686735');
                            
                            fbq('track', 'PageView');
                        `
                    }}
                />
            </body>
        </Html>
    );
}
