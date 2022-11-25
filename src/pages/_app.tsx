import '@/styles/globals.scss';
import '../../build/styles/tailwind.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/app/store';
import MainLayout from '../layouts/MainLayout';

/**
 * Main app component for the application
 *
 * @export
 * @param {AppProps} { Component, pageProps }
 * @return {*}  {JSX.Element}
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Provider store={store}>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </Provider>
        </>
    );
}
