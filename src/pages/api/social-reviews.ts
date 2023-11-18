import { getReviews } from '@/lib';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
// import { google } from 'googleapis';
// import key from 'iclinic-key.json' assert { type: 'json' };


// async function getReviews() {
//     const token = await authenticate();
//     const accountId = 'YOUR ACCOUNT ID';
//     const locationId = 'YOUR LOCATION ID';
//     const url  `https://mybusiness.googleapis.com/v4/accounts/` + `${accountId}/locations/${locationId}/reviews`;
//     const resp = await axios.get(url, {
//         headers: {
//             authorization: `Bearer ${token}`
//         }
//     });
//     return resp.data.reviews;
// }
//
// async function authenticate() {
//     const scopes = ['https://www.googleapis.com/auth/business.manage'];
//
//     const jwt = new google.auth.JWT({
//         email: key.client_email,
//         key: key.private_key,
//         subject: 'ADMIN EMAIL',
//         scopes
//     });
//
//     const resp = await jwt.authorize();
//     return resp.access_token.replace(/\.{2,}/g, '');
// }

// const getGoogleReviews = async () => {
//     // const auth = new google.auth.GoogleAuth({
//     //     keyFile: './iclinic-key.json',
//     //     scopes: ['https://www.googleapis.com/auth/business.manage']
//     // });
//     //
//     // const businessApi = google.mybusinessaccountmanagement('v4');
//     // console.log(businessApi);
//
//     const auth = new google.auth.GoogleAuth({
//         keyFile: './iclinic-key.json',
//         scopes: [
//             'https://www.googleapis.com/auth/business.manage',
//             'https://www.googleapis.com/auth/plus.business.manage'
//         ]
//     });
//     const client = await auth.getClient();
//     const url = 'https://mybusinessaccountmanagement.googleapis.com/v1/accounts';
//     const res = await client.request({ url });
//     console.log(res.data);
//     //
//     // const res = await webmasters.searchanalytics.query({
//     //     siteUrl: 'https://my-iclinic.co.uk',
//     //     requestBody: {
//     //         startDate: '2018-01-01',
//     //         endDate: '2018-04-01'
//     //     },
//     //     auth: auth
//     // });
//     // console.log(res.data);
//
//     // const data = google.
// };

/**
 * Api route for getting the review data URL: '/api/reviews
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const socialReviews: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const reviews = await getReviews();

    try {
        if (req.method === 'GET') {
            return res.status(200).json({
                reviews
            });
        } else {
            return res.status(404).json({ message: 'Request url not found' });
        }
    } catch (err: any) {
        return res.status(500).send(err);
    }
};

export default socialReviews;
