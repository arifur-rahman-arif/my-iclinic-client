import '@/styles/globals.scss';
import '../../build/styles/tailwind.css';

import { MainLayout, NoNavigationLayout } from 'src/layouts';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/store';

import { Lato } from '@next/font/google';
import { Mulish } from '@next/font/google';

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
        noNavigationLayout: NoNavigationLayout
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
            <Provider store={store}>
                <PageLayout>
                    <Component {...pageProps} />
                </PageLayout>
            </Provider>
        </>
    );
}
