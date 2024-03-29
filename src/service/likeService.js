import request from '../utils/request';

export const likeVideo = async ({ token, idVideo }) => {
    try {
        const res = await request.post(
            `videos/${idVideo}/like`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const unLikeVideo = async ({ token, idVideo }) => {
    try {
        const res = await request.post(
            `videos/${idVideo}/unlike`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const likeComment = async ({ idComment, token }) => {
    try {
        const res = await request.post(
            `comments/${idComment}/like`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );

        return res.data;
    } catch (error) {
        throw error;
    }
};

export const unLikeComment = async ({ idComment, token = '' }) => {
    try {
        const res = await request.post(
            `comments/${idComment}/unlike`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );

        return res.data;
    } catch (error) {
        throw error;
    }
};
