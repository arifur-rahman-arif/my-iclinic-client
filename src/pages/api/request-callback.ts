import { postData } from '@/utils/apiHelpers';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

/**
 * Api route for getting the review data URL: '/api/request-callback
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const requestCallbackHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            const bodyPayload: any = JSON.parse(req.body);
            // Send the data to WordPress API
            const response = await postData({
                url: `${process.env.CUSTOM_REST_URL}/request-callback`,
                body: { ...bodyPayload, status: 'Completed' }
            });

            const dateObject = new Date();

            const formattedDate = `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(
                2,
                '0'
            )}-${String(dateObject.getDate()).padStart(2, '0')}`;

            // Ticket data to be created
            const payload = {
                subject: `Request callback from ${bodyPayload.name}`,
                description: bodyPayload.optionalMessage || 'N/A',
                email: bodyPayload.email,
                phone: bodyPayload.phone,
                custom_fields: {
                    cf_full_name: bodyPayload.name,
                    cf_callback_date: formattedDate
                },
                priority: 1,
                status: 2
            };

            const freshdeskApiResponse = await postData({
                url: `https://myiclinic-help.freshdesk.com/api/v2/tickets`,
                body: payload,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Basic ${btoa(process.env.FRESHDESK_API_KEY || '')}`
                }
            });

            if (!freshdeskApiResponse.ok) {
                const freshdeskResponse = await freshdeskApiResponse.json();
                console.error(freshdeskResponse);
                throw new Error(`API error: ${freshdeskResponse.message}`);
            }

            // ===================================
            // Pabau integration
            // ===================================
            // const pabauParameters: string[] = [
            //     `Fname=${firstName}`,
            //     `Lname=${lastName}`,
            //     `mobile=${bodyPayload.phone}`,
            //     `email=${bodyPayload.email}`,
            //     `lead_source=Website`,
            //     `redirect_link=${process.env.NEXT_PUBLIC_SITE_URL}`,
            //     `treatment_interest=${bodyPayload.optionalMessage}`,
            //     `custom_field_76880=${bodyPayload.date}`
            // ];
            //
            // const pabauResponse = await postData({
            //     body: '',
            //     url: `${process.env.PABAU_API}?api_key=${process.env.PABAU_API_KEY}&${pabauParameters.join('&')}`
            // });
            //
            // if (pabauResponse.status !== 200) {
            //     return res.status(404).json({ message: 'Form submission failed. Please try again' });
            // }
            // ===================================
            // End of pabau integration
            // ===================================

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

export default requestCallbackHandler;
