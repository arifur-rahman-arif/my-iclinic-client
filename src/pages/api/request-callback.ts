import { postData } from '@/utils/apiHelpers';
import { splitName } from '@/utils/miscellaneous';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import * as process from 'process';

/**
 * Api route for getting the review data URL: '/api/request-callback
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const requestCallbackHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            const [firstName, lastName] = splitName(req.body.name);

            const dateObject = new Date(req.body.dateOriginal);

            const formattedDate = `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(
                2,
                '0'
            )}-${String(dateObject.getDate()).padStart(2, '0')}`;

            // Ticket data to be created
            const payload = {
                subject: `Request callback from ${firstName} ${lastName}`,
                description: req.body.optionalMessage,
                email: req.body.email,
                phone: req.body.phone,
                // eslint-disable-next-line camelcase
                custom_fields: {
                    // eslint-disable-next-line camelcase
                    cf_full_name: `${firstName} ${lastName}`,
                    // eslint-disable-next-line camelcase
                    cf_callback_date: formattedDate
                },
                priority: 1,
                status: 2
            };

            const freshdeskApiResponse = await postData({
                url: `https://test8147.freshdesk.com/api/v2/tickets`,
                body: payload,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Basic ${btoa(process.env.FRESHDESK_API_KEY)}`
                }
            });

            if (!freshdeskApiResponse.ok) {
                const freshdeskResponse = await freshdeskApiResponse.json();
                console.log(freshdeskResponse);
                throw new Error(`API error: ${freshdeskApiResponse.status} ${freshdeskApiResponse.statusText}`);
            }

            // Pabau integration
            // const pabauParameters: string[] = [
            //     `Fname=${firstName}`,
            //     `Lname=${lastName}`,
            //     `mobile=${req.body.phone}`,
            //     `email=${req.body.email}`,
            //     `lead_source=Website`,
            //     `redirect_link=${process.env.NEXT_PUBLIC_SITE_URL}`,
            //     `treatment_interest=${req.body.optionalMessage}`,
            //     `custom_field_76880=${req.body.date}`
            // ];
            //
            // const pabauResponse = await postData({
            //     body: '',
            //     url: `${process.env.PABAU_API}?api_key=${process.env.PABAU_API_KEY}&${pabauParameters.join('&')}`
            // });
            //
            // if (pabauResponse.status !== 200) {
            //     return res.status(404).json({ message: 'Form submission failed. Please try again' });
            // }
            // End of pabau integration

            // Send the data to WordPress API
            postData({
                url: `${process.env.CUSTOM_REST_URL}/request-callback`,
                body: req.body
            });

            res.status(200).json({ message: 'Form submitted successfully' });
        } else {
            res.status(404).json({ message: 'Request url not found' });
        }
    } catch (err: any) {
        console.error(err);
        res.status(500).send(err);
    }
};

export default requestCallbackHandler;
