import HTMLReactParser from 'html-react-parser';

interface GetDataInterface {
    url: string;
}

/**
 * Utility function to perform GET requests to an API
 *
 * @param {string} url
 * @returns {Promise<Response>}
 */
export const getData = async ({ url }: GetDataInterface): Promise<Response> => {
    try {
        return await fetch(url, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                Authorization: `Bearer ${process.env.WP_JWT_TOKEN}`
            }
        });
    } catch (err) {
        throw err;
    }
};

interface PostDataInterface {
    url: string;
    body: any;
    headers?: any;
}

/**
 * Utility function to perform POST requests to an API
 *
 * @param {string} url
 * @param {any} body
 * @param {Headers | undefined} headers
 * @returns {Promise<Response>}
 */
export const postData = async ({ url, body, headers }: PostDataInterface): Promise<Response> => {
    try {
        return await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: headers || {
                'Content-Type': 'application/json; charset=UTF-8',
                Authorization: `Bearer ${process.env.WP_JWT_TOKEN}`
            }
        });
    } catch (err) {
        throw err;
    }
};

/**
 * Convert an array of objects to array of strings
 *
 * @param {Array<any>} arrayOfObjects
 * @returns {string[]}
 */
export const convertArrayOfObjectsToStrings = (arrayOfObjects: Array<any> | undefined): string[] => {
    if (!arrayOfObjects?.length) return [];
    return arrayOfObjects?.map((obj) => obj[Object.keys(obj)[0]]) || [];
};

/**
 * Convert an array of strings to array of JSX Elements
 *
//  * @param {Array<any>} arrayOfObjects
//  * @returns {string[]}
//  */
// export const stringArrayToElementArray = (arrayOfObjects: Array<string> | undefined): JSX.Element[] => {
//     if (!arrayOfObjects?.length) return [] as JSX.Element[];
//     return (arrayOfObjects?.map((obj) => HTMLReactParser(obj)) || []) as JSX.Element[];
// };

/**
 * Converts an array of strings to an array of JSX elements.
 * @param {Array<string> | undefined} arrayOfObjects - The array of strings to convert.
 * @returns {JSX.Element[]} The array of JSX elements.
 */
export const stringArrayToElementArray = (arrayOfObjects: Array<string> | undefined): JSX.Element[] => {
    if (!arrayOfObjects || !Array.isArray(arrayOfObjects)) return [] as JSX.Element[];
    const validStrings = arrayOfObjects.filter((obj) => typeof obj === 'string');
    return validStrings.map((obj) => HTMLReactParser(obj)) as JSX.Element[];
};
