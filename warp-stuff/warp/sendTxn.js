import { warp as warpFunction, configureWallet } from './warpConfigs.js'


export async function sendTxn(contract_id, data) {
    
    const wallet = await configureWallet()
    const warp = await warpFunction('mainNet')

    const contract = warp.contract(contract_id).connect(wallet.jwk)

    const tags = [{ name: "Contract-App", value: "io" }]
    const options = { tags }
    const transaction = await contract.writeInteraction({
        function: data.function,
        data: data.data

    }, options);

    const { cachedValue } = await contract.readState();
    const { state, validity, errorMessages } = cachedValue;
    const transactionId = transaction.originalTxId;

    if (errorMessages[transactionId]) {
        return { success: false, transactionId, bundlrId: transaction.bundlrResponse.id, errors: errorMessages[transactionId], entry, logs };
    }

    return transactionId


}