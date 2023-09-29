// @ts-nocheck

/**
 * FreshChat Component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const FreshChatScript = (): JSX.Element => (
    <>
        <script
            dangerouslySetInnerHTML={{
                __html: `
             function initFreshChat() {
                window.fcWidget.init({
                    token: 'da067b77-369c-43a5-a0b7-581721b0e705',
                    host: 'https://myiclinic-help.freshchat.com'
                });
             }
           
            function initialize(i, t) {
                var e;
                i.getElementById(t)
                    ? initFreshChat()
                    : (((e = i.createElement('script')).id = t),
                      (e.async = !0),
                      (e.src = 'https://myiclinic-help.freshchat.com/js/widget.js'),
                      (e.onload = initFreshChat),
                      i.head.appendChild(e));
            }
            function initiateCall() {
                initialize(document, 'Freshchat-js-sdk');
            }
            window.addEventListener
                ? window.addEventListener('load', initiateCall, !1)
                : window.attachEvent('load', initiateCall, !1);

        `
            }}
        ></script>
    </>
);

export default FreshChatScript;
