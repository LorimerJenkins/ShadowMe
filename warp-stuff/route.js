import { sendTxn } from './warp/sendTxn.js';
import { getChat } from './warp/getChat.js';

export const handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    const body = event.body ? JSON.parse(event.body) : null;
    
    if (!body) {
        return {
            statusCode: 400,
            body: 'Invalid input: body is missing',
        };
    }

    const contract_id = 'FaxZkto6494-58WXMx1naNo6kZzUHQqj1GZ8Xq72doo';

    try {
        switch(body.function) {
            case 'sendMessage':
                const sendMessageResponse = await sendTxn(contract_id, {
                    function: 'sendMessage', 
                    data: { 
                        recipientId: body.recipientId,
                        senderId: body.senderId,
                        messageContent: body.messageContent
                    }
                });
                return {
                    statusCode: 200,
                    body: JSON.stringify(sendMessageResponse),
                };

            case 'getChat':
                const getChatLog = await getChat(contract_id, body.recipientId, body.senderId);
                return {
                    statusCode: 200,
                    body: JSON.stringify(getChatLog),
                };

            default:
                return {
                    statusCode: 400,
                    body: 'Invalid function specified in request',
                };
        }
    } catch (err) {
        console.error(err);
        const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred";
        return {
            statusCode: 500,
            body: JSON.stringify({ error: errorMessage }),
        };
    }
};
