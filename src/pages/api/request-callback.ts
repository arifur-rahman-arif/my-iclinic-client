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

            // Const result = await postData({
            //     url: `${process.env.CUSTOM_REST_URL}/request-callback`,
            //     body: req.body
            // });

            const pabauParameters: string[] = [
                `Fname=${firstName}`,
                `Lname=${lastName}`,
                `mobile=${req.body.phone}`,
                `email=${req.body.email}`,
                `lead_source=Website`,
                `redirect_link=${process.env.NEXT_PUBLIC_SITE_URL}`,
                `treatment_interest=${req.body.optionalMessage}`,
                `custom_field_76880=${req.body.date}`
            ];

            const pabauResponse = await postData({
                body: '',
                url: `${process.env.PABAU_API}?api_key=${process.env.PABAU_API_KEY}&${pabauParameters.join('&')}`
            });

            if (pabauResponse.status !== 200) {
                return res.status(404).json({ message: 'Form submission failed. Please try again' });
            }

            res.status(200).json({ message: 'Form submitted successfully' });
        } else {
            res.status(404).json({ message: 'Request url not found' });
        }
    } catch (err: any) {
        res.status(500).send(err);
    }
};

export default requestCallbackHandler;
