export default function DeactivateWhitelist(client, contractAddress) {
    try {
        const whitelistMsg = {
            all_tokens: {}
        }

        const result = client.queryContractSmart(contractAddress, whitelistMsg)
        return result
    } catch (e) {
        console.log(e.message)
    }
}