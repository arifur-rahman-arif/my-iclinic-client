import { getData } from '@/utils/apiHelpers';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

/**
 * Api route for getting the review data URL: '/api/reviews
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const reviewsHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const response = await getData({
                url: `${process.env.CUSTOM_REST_URL}/get-reviews/?page-url=${req.query['page-url']}`
            });

            const result = await response.json();

            if (!result.success) throw new Error(result.message);

            return res.status(200).send(result);
        } else {
            return res.status(404).json({ message: 'Request url not found' });
        }
    } catch (err: any) {
        return res.status(500).send(err);
    }
};

export default reviewsHandler;
