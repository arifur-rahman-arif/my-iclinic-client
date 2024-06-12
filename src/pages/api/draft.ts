import { NextApiRequest, NextApiResponse } from 'next/types';

/**
 * Enables draft mode for a given slug.
 *
 * @param {NextApiRequest} req - The request object.
 * @param {NextApiResponse} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the function is done.
 */
const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    // Check the secret and next parameters
    // This secret should only be known to this API route and the CMS
    if (!req.query.slug) {
        return res.status(401).json({ message: 'Invalid slug' });
    }

    if (req.query.slug !== 'vision-correction') {
        return res.status(404).json({ message: 'Page not found' });
    }

    // Fetch the headless CMS to check if the provided `slug` exists
    // getPostBySlug would implement the required fetching logic to the headless CMS
    // const post = await getPostBySlug(req.query.slug);

    // If the slug doesn't exist prevent draft mode from being enabled
    // if (!post) {
    //     return res.status(401).json({ message: 'Invalid slug' });
    // }

    // Enable Draft Mode by setting the cookie
    res.setDraftMode({ enable: true });

    // Redirect to the path from the fetched post
    // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
    res.redirect('https://www.my-iclinic.co.uk/vision-correction');
};

export default handler;
