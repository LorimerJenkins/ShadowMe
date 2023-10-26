import { warp as warpFunction, configureWallet } from './warpConfigs.js'


export async function getChat(contract_id, recipientId, senderId) {

    const wallet = await configureWallet()
    const warp = await warpFunction('mainNet')

    const contract = warp.contract(contract_id).connect(wallet.jwk)

    const { cachedValue } = await contract.readState();

    const { state, validity, errorMessages} = cachedValue

    const chatId = senderId + '-' + recipientId;
    let chat = state.chats[chatId];

    if (!chat) {
        chat = false
    }
    
    return chat
    
}
