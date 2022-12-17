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
            const result = await getData({
                url: `${process.env.REST_URL}/get-reviews/?page-url=${req.query['page-url']}`
            });

            res.status(200).send(result);
        } else {
            res.status(404).json({ message: 'Request url not found' });
        }
    } catch (err: any) {
        res.status(500).send(err);
    }
};

export default reviewsHandler;
