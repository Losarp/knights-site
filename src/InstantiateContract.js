export default async function InstantiateContract(client, codeId) {
    const initMsg = {
        name: "Test Kn Rand",
        symbol: "uscrt",
        admin: "secret1d3uh3lpvdd6c5ned79q604r9npvspdxjhh3qyz",
        entropy: "VGhpcyBpcyBhIHJhbmRvbSBvbSJpbmchCg==",
        snip20_hash: "9587D60B8E6B078ACE12014CEEEE089530B9FABCD76535D93666A6C127AD8813",
        snip20_address: "secret1t4crj8yjgwe0dmv2fzvf4jlc6se0amz07afs7c",
        mint_funds_distribution_info: {
            decimal_places_in_rates: 2,
            royalties: [
                {
                    recipient: "secret1d3uh3lpvdd6c5ned79q604r9npvspdxjhh3qyz",
                    rate: 100
                }
            ]
        },
        royalty_info: {
            decimal_places_in_rates: 2,
            royalties: [
                {
                    recipient: "secret1d3uh3lpvdd6c5ned79q604r9npvspdxjhh3qyz",
                    rate: 5
                }
            ]
        },
        config: {
            public_token_supply: true,
            public_owner: false,
            minter_may_update_metadata: false,
            owner_may_update_metadata: false,
            enable_burn: false
        }
    }

    const contract = await client.instantiate(codeId, initMsg, "New_test_for_random", "initiate test");
    return contract
}