import { postData } from '@/utils/apiHelpers';
import { isLocalStorageEnabled } from '@/utils/miscellaneous';
import { useEffect } from 'react';

interface PostViewHookInterface {
    postID: number;
}

/**
 * Update post view hook to set unique post view per page
 *
 * @param {number} postID
 */
const usePostView = ({ postID }: PostViewHookInterface) => {
    useEffect(() => {
        try {
            if (!isLocalStorageEnabled()) {
                alert('Your local storage is disabled');
                return;
            }

            if (!localStorage.getItem(`post_id-${postID}`)) {
                postData({
                    body: {
                        postID
                    },
                    url: `/api/post-view`
                })
                    .then(() => localStorage.setItem(`post_id-${postID}`, `true`))
                    .catch((err) => {
                        throw err;
                    });
            }
        } catch (err) {
            console.error(err);
        }
    });
};

export default usePostView;
