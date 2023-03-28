import { getNavMenuData } from '@/lib';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

/**
 * Api route for getting the review data URL: '/api/nav-menus
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const navMenuHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const navMenuData = await getNavMenuData();

            res.status(200).send(navMenuData);
        } else {
            res.status(404).json({ message: 'Request url not found' });
        }
    } catch (err: any) {
        res.status(500).send(err);
    }
};

export default navMenuHandler;
