// Shadow Me Contract

export async function handle(state, action) {
    const inputFunction = action.input.function;
    const inputData = action.input.data;
    
    if (!inputData) {
        throw new ContractError('Input data is missing.');
    }

    const senderId = inputData.senderId;
    const recipientId = inputData.recipientId;

    if (inputFunction === 'startChat') {
        if (!recipientId || !senderId) {
            throw new ContractError('Both sender ID and recipient ID are required.');
        }

        const chatId = senderId + '-' + recipientId;
        if (!state.chats[chatId]) {
            state.chats[chatId] = {
                participants: [senderId, recipientId],
                messages: []
            };
        }

        return { state };
    }

    if (inputFunction === 'sendMessage') {
        if (!recipientId || !senderId) {
            throw new ContractError('Both sender ID and recipient ID are required for sending a message.');
        }

        const messageContent = inputData.messageContent;
        if (!messageContent) {
            throw new ContractError('Message content is required.');
        }

        const chatId = senderId + '-' + recipientId;
        if (!chatId || !state.chats[chatId]) {
            throw new ContractError('Invalid chat ID or chat does not exist.');
        }

        state.chats[chatId].messages.push({
            sender: senderId,
            content: messageContent,
            timestamp: Date.now()
        });

        return { state };
    }

    throw new ContractError(`No function named ${inputFunction} exists.`);
}
