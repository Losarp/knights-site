import {Buffer} from "buffer";
import Swal from "sweetalert2";

export default async function MintOne(client, chainId, snip20Address, contractAddress, contractHash, price) {
    await window.keplr.suggestToken(chainId, snip20Address)
    const mintMsg = {
        receive_mint: {}
    };
    const snip20SendMsg = {
        send: {
            amount:price,
            recipient: contractAddress,
            recipient_code_hash: contractHash,
            msg: Buffer.from(JSON.stringify(mintMsg)).toString('base64')
        }
    }
    // Set the handleMsg for contract
    let exec
    try {
        exec = await client.execute(snip20Address, snip20SendMsg)
    } catch (e) {
        if (e.message.includes('insufficient funds')) {
            Swal.fire({
                title: "Insufficient funds!",
                icon: "error"
            })
        }
        if (e.message.includes('All tokens have been minted')) {
            Swal.fire({
                title: "All tokens have been minted!",
                icon: "info"
            })
        }
        if (e.message.includes('Remaining tokens are reserved')) {
            Swal.fire({
                title: "Remaining tokens are reserved!",
                icon: "info"
            })
        }
        console.log(e.message)
        return false
    }
    return exec
}