import { postData } from '@/utils/apiHelpers';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

/**
 * Api route for getting the review data URL: '/api/reviews
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const pdfDownloadHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            const result = await postData({
                url: `${process.env.REST_URL}/submit-download-form`,
                body: req.body
            });

            res.status(200).send(result);
        } else {
            res.status(404).json({ message: 'Request url not found' });
        }
    } catch (err: any) {
        res.status(500).send(err);
    }
};

export default pdfDownloadHandler;
