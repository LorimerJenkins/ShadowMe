import axios, { AxiosResponse } from 'axios';

interface PostDataPayload {
    recipientId: string;
    senderId: string;
    function: string;
}

export async function getChats(payload: PostDataPayload): Promise<AxiosResponse> {

    const endpoint = 'https://shadow-me.netlify.app/.netlify/functions/route';

    try {
        const response = await axios.post(endpoint, payload);
        return response;
    } catch (error) {
        throw error;
    }
}
