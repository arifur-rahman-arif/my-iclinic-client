import { getData } from '@/utils/apiHelpers';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

/**
 * Api route for getting the review data URL: '/api/charity-form
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const articlesSearchHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            const response: Response = await getData({
                url: `${process.env.CUSTOM_REST_URL}/get-posts?search=${req.body}&page=1`
            });

            const result = await response.json();

            if (!response.ok) {
                return res.status(response.status).json(result);
            }

            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'Request url not found' });
        }
    } catch (err: any) {
        console.error(err);
        res.status(500).send(err);
    }
};

export default articlesSearchHandler;
