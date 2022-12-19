import '@/styles/globals.scss';
import '../../build/styles/tailwind.css';

import { MainLayout, NoNavigationLayout } from 'src/layouts';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/store';

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
            <Provider store={store}>
                <PageLayout>
                    <Component {...pageProps} />
                </PageLayout>
            </Provider>
        </>
    );
}
