import { Html, Head, Main, NextScript } from 'next/document';
// import Script from 'next/script';

// eslint-disable-next-line require-jsdoc
export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />

                {/* <Script */}
                {/*     strategy="lazyOnload" */}
                {/*     id="iclinic-gtag" */}
                {/*     dangerouslySetInnerHTML={{ */}
                {/*         __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-970733853');` */}
                {/*     }} */}
                {/* /> */}
                {/* <Script */}
                {/*     strategy="lazyOnload" */}
                {/*     id="iclinic-gtag-conversion" */}
                {/*     dangerouslySetInnerHTML={{ */}
                {/*         __html: ` */}
                {/*              window.addEventListener('load', function() { */}
                {/*                 var timer = setInterval(function() { */}
                {/*                 if (document.querySelector('[title="Thank you"]')) { */}
                {/*                 gtag('event', 'conversion', { */}
                {/*                 'send_to': 'AW-970733853/KHfRCL_i5pEZEJ3y8M4D' */}
                {/*                 }); */}
                {/*                     clearInterval(timer); */}
                {/*                 } */}
                {/*                     if (document.querySelector('#request-callback-thank-you')?.getAttributeNames()?.includes('data-gtm-vis-recent-on-screen11870254_61')) { */}
                {/*                     gtag('event', 'conversion', { */}
                {/*                     'send_to': 'AW-970733853/KHfRCL_i5pEZEJ3y8M4D' */}
                {/*                 }); */}
                {/*                 clearInterval(timer); */}
                {/*             } */}
                {/*             }, 1000); */}
                {/*             }); */}
                {/*     ` */}
                {/*     }} */}
                {/* /> */}

                {/* <Script */}
                {/*     strategy="lazyOnload" */}
                {/*     id="iclinic-gtag-phone" */}
                {/*     dangerouslySetInnerHTML={{ */}
                {/*         __html: ` */}
                {/*       gtag('config', 'AW-970733853/6t8GCLr255EZEJ3y8M4D', { */}
                {/*         'phone_conversion_number': '0208 445 8877' */}
                {/*       }); */}
                {/*     ` */}
                {/*     }} */}
                {/* /> */}
            </body>
        </Html>
    );
}
