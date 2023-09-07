import store from '@/store';
import '@/styles/globals.scss';
import '@/styles/wordpress-variables.scss';

import { Lato, Mulish } from '@next/font/google';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { MainLayout, NoNavigationLayout } from 'src/layouts';
import '../../build/styles/tailwind.css';
import IclLayout from 'src/layouts/IclLayout';

const latoLight = Lato({
    weight: '300',
    subsets: ['latin'],
    display: 'block'
});
const latoMedium = Lato({
    weight: '400',
    subsets: ['latin'],
    display: 'block'
});
const latoBold = Lato({
    weight: '700',
    subsets: ['latin'],
    display: 'block'
});
const latoExtraBold = Lato({
    weight: '900',
    subsets: ['latin'],
    display: 'block'
});

const muslishLight = Mulish({
    weight: '300',
    subsets: ['latin'],
    display: 'block'
});
const muslishMedium = Mulish({
    weight: '500',
    subsets: ['latin'],
    display: 'block'
});
const muslishBold = Mulish({
    weight: '700',
    subsets: ['latin'],
    display: 'block'
});
const muslishExtraBold = Mulish({
    weight: '900',
    subsets: ['latin'],
    display: 'block'
});

/**
 * Main app component for the application
 *
 * @export
 * @param {AppProps} { Component, pageProps }
 * @returns {*}  {JSX.Element}
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
    const navLayouts = {
        mainLayout: MainLayout,
        noNavigationLayout: NoNavigationLayout,
        iclLayout: IclLayout
    };

    // @ts-ignore
    const layout: any = Component.layout ? Component.layout : 'mainLayout';
    // @ts-ignore
    const PageLayout = navLayouts[layout] || ((children) => <>{children}</>);

    return (
        <>
            <style jsx global>{`
                :root {
                    --lato-light: ${latoLight.style.fontFamily};
                    --lato-medium: ${latoMedium.style.fontFamily};
                    --lato-bold: ${latoBold.style.fontFamily};
                    --lato-extra-bold: ${latoExtraBold.style.fontFamily};

                    --mulish-light: ${muslishLight.style.fontFamily};
                    --mulish-medium: ${muslishMedium.style.fontFamily};
                    --mulish-bold: ${muslishBold.style.fontFamily};
                    --mulish-extra-bold: ${muslishExtraBold.style.fontFamily};
                }
            `}</style>

            {/* /!* Google Tag Manager *!/ */}
            {/* <script */}
            {/*     async */}
            {/*     dangerouslySetInnerHTML={{ */}
            {/*         __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': */}
            {/*                     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], */}
            {/*                     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= */}
            {/*                     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); */}
            {/*                     })(window,document,'script','dataLayer','GTM-MFT6DQQ');` */}
            {/*     }} */}
            {/* /> */}
            {/* /!* End Google Tag Manager *!/ */}

            <Provider store={store}>
                <PageLayout>
                    <Component {...pageProps} />
                </PageLayout>
            </Provider>
        </>
    );
}
