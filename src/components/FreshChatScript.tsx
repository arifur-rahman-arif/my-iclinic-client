// @ts-nocheck

import Head from 'next/head';

/**
 * FreshChat Component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const FreshChatScript = () => (
    <Head>
        <script type="text/javascript" src="https://myiclinic-help.freshchat.com/js/widget.js" defer />
        <script
            dangerouslySetInnerHTML={{
                __html: `
              window.fcSettings = { token:'da067b77-369c-43a5-a0b7-581721b0e705', host : 'https://myiclinic-help.freshchat.com'};
            `
            }}
        />
    </Head>
);

export default FreshChatScript;
