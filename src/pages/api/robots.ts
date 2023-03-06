import { NextApiRequest, NextApiResponse } from 'next';

/**
 * This code creates an API route that responds to requests with the text/plain MIME type and returns the contents of the robots.txt file.
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const robotsHandler = (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Content-Type', 'text/plain');
    res.write(`User-agent: *\nDisallow:`);
    res.end();
};

export default robotsHandler;
