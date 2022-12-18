interface GetDataInterface {
    url: string;
}

/**
 * Get the data from api abstract function
 *
 * @param {GetDataInterface} { url, cb }
 */
export const getData = async ({ url }: GetDataInterface): Promise<any> => {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${process.env.WP_JWT_TOKEN}`
        }
    });

    return response.json();
};

interface PostDataInterface {
    url: string;
    body: any;
}

/**
 * Get the data from api abstract function
 *
 * @param {GetDataInterface} { url, cb }
 */
export const postData = async ({ url, body }: PostDataInterface): Promise<any> => {
    console.log(body);
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${process.env.WP_JWT_TOKEN}`
        }
    });

    return response.json();
};
