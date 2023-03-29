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
    } catch (err: any) {
        console.error(err);
        return res.status(500).send(err);
    }
};

export default businessFormHandler;
