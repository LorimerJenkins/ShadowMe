// postData.ts
import axios, { AxiosResponse } from 'axios';

interface PostDataPayload {
    function: string;
    recipientId: string;
    senderId: string;
    messageContent?: string;
}

export async function postDataToNetlify(payload: PostDataPayload): Promise<AxiosResponse> {

    const endpoint = 'https://shadow-me.netlify.app/.netlify/functions/route';

    try {
        const response = await axios.post(endpoint, payload);
        return response;
    } catch (error) {
        throw error;
    }
}
