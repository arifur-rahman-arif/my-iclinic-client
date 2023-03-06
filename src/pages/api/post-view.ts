import { WpPageResponseInterface } from '@/types';
import { getData, postData } from '@/utils/apiHelpers';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

interface PostAcfDataInterface {
    read_time: string;
    author_avater: string;
    post_views: string;
}

/**
 * Api route for getting the review data URL: '/api/post-view
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const pdfDownloadHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            const postResponse = await getData({
                url: `${process.env.WP_REST_URL}/posts/${req.body.postID}`
            });

            const post: WpPageResponseInterface<PostAcfDataInterface> = await postResponse.json();

            await postData({
                url: `${process.env.WP_REST_URL}/posts/${req.body.postID}`,
                body: {
                    acf: {
                        // eslint-disable-next-line camelcase
                        post_views: (parseInt(post.acf.post_views as string) || 0) + 1
                    }
                }
            });

            res.status(200).send('Views updated successfully');
        } else {
            res.status(404).json({ message: 'Request url not found' });
        }
    } catch (err: any) {
        res.status(500).send(err);
    }
};

export default pdfDownloadHandler;
