// // import { warp as warpFunction, configureWallet } from './warp/warpConfigs.js'
// // import * as fs from 'fs'


// // async function deployWarpContract() {

// //     const state = fs.readFileSync('./warp/state.json', 'utf-8')
// //     const contractSrc = fs.readFileSync('./warp/contract.js', 'utf-8')

// //     const wallet = await configureWallet();

// //     const warp = await warpFunction('mainNet')
// //     const { contractTxId, srcTxId: srcTransactionID } = await warp.deploy({
// //         wallet: wallet, 
// //         initState: JSON.stringify(state), 
// //         src: contractSrc
// //     });


// //     return contractTxId
// // }



// // console.log(await deployWarpContract())


// import { sendTxn } from './warp/sendTxn.js'



// const contract_id = 'FaxZkto6494-58WXMx1naNo6kZzUHQqj1GZ8Xq72doo'


// // const startChat = await sendTxn(contract_id, {function: 'startChat', data: { 
// //     recipientId: 'google-oauth2|113378216876216346011', senderId: 'google-oauth2|113378216876216346016'
// // }})

// // console.log(startChat)

// // const sendMessage = await sendTxn(contract_id, {function: 'sendMessage', data: { 
// //     recipientId: '123', senderId: '456', messageContent: 'Lorimer Test'
// //  }})

// // console.log(sendMessage)


// import { getChat } from './functions/warp-stuff/warp/getChat.js'

// console.log(await getChat(contract_id, '123', '456'))


