// @ts-nocheck

import Head from 'next/head';

/**
 * FreshChat Component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const FreshChatScript = () => (
    //     <div
    //         dangerouslySetInnerHTML={{
    //             __html: `
    // <script type='text/javascript' defer>
    // var fc_JS=document.createElement('script');
    // fc_JS.type='text/javascript';
    // fc_JS.src='https://myiclinic-help.freshchat.com/js/widget.js?t='+Date.now();
    // (document.body?document.body:document.getElementsByTagName('head')[0]).appendChild(fc_JS);
    // window.fcSettings = { token:'da067b77-369c-43a5-a0b7-581721b0e705', host : 'https://myiclinic-help.freshchat.com'};
    // </script>
    //     `
    //         }}
    //     />
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
