import { postData } from '@/utils/apiHelpers';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

/**
 * Api route for getting the review data URL: '/api/request-callback
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const businessFormHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            // Ticket data to be created
            const payload = {
                subject: `Request callback from ${req.body.name}`,
                description: req.body.message,
                email: req.body.email,
                phone: req.body.phone,
                custom_fields: {
                    cf_full_name: req.body.name
                },
                priority: 1,
                status: 2
            };

            const freshdeskApiResponse = await postData({
                url: `https://myiclinic-help.freshdesk.com/api/v2/tickets`,
                body: payload,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Basic ${btoa(process.env.FRESHDESK_API_KEY || '')}`
                }
            });

            if (!freshdeskApiResponse.ok) {
                const freshdeskResponse = await freshdeskApiResponse.json();
                console.log(freshdeskResponse.message);
                return res.status(404).json({ message: freshdeskResponse.message });
            }

            const response = await postData({
                url: `${process.env.CUSTOM_REST_URL}/business-form`,
                body: req.body
            });

            if (!response.ok) {
                const jsonResponse = await response.json();
                return res.status(404).json({ message: jsonResponse.data.message });
            }

            res.status(200).json({ message: 'Form submitted successfully' });
        } else {
            res.status(404).json({ message: 'Request url not found' });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
};

export default businessFormHandler;
