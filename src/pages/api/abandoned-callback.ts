import { postData } from '@/utils/apiHelpers';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

/**
 * Api route for getting the review data URL: '/api/abandoned-callback
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const abandonedCallbackHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            // Send the data to WordPress API
            const result = await (
                await postData({
                    url: `${process.env.CUSTOM_REST_URL}/request-callback`,
                    body: { ...req.body, status: 'Abandoned' }
                })
            ).json();

            const postId = result.data.data;

            if (postId) {
                setTimeout(async () => {
                    await postData({
                        url: `${process.env.CUSTOM_REST_URL}/request-callback`,
                        body: { ...req.body, status: 'Scheduled', postId }
                    });
                }, 180 * 1000);
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

export default abandonedCallbackHandler;
