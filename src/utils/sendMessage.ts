import axios, { AxiosResponse } from 'axios';

interface MessagePayload {
  contract_id: string;
  function: string;
  data: {
    recipientId: string;
    senderId: string;
    messageContent: string;
  };
}

async function sendMessage(payload: MessagePayload): Promise<AxiosResponse> {
    
  const { contract_id, function: fn, data } = payload;

  try {
    const response = await axios.post('https://your-api-endpoint-here.com', {
      function: fn,
      data
    });

    return response;
  } catch (error) {
    throw new Error(`Error sending message: ${error}`);
  }
}

// Example usage:
const payload: MessagePayload = {
  contract_id: 'some_id',
  function: 'some_function',
  data: {
    recipientId: 'recipient_123',
    senderId: 'sender_456',
    messageContent: 'Hello!'
  }
};

sendMessage(payload).then(response => {
  console.log(response.data);
}).catch(error => {
  console.error(error.message);
});
