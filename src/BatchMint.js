export default function BatchMint(client, contractAddress) {
    console.log(client)
    console.log(contractAddress)

    // for (let i = 0; i < 30; i++) {
    //     newData[i] = {
    //         id: "loopTest" + i,
    //         img_url: "testimgurl" + i,
    //         priv_img_url: "testprivimgurl" + i,
    //         priv_key: "loopTest" + i,
    //         anim_url: "https://animationurl.gen.tr",
    //         attributes: [
    //             {
    //                 trait_type: "publicAttribute" + 1 + "-" + i,
    //                 value: "publicAttr " + 1 + " value-" + i
    //             },
    //             {
    //                 trait_type: "publicAttribute" + 2 + "-" + i,
    //                 value: "publicAttr " + 2 + " value-" + i
    //             }
    //         ],
    //         priv_attributes: [
    //             {
    //                 trait_type: "PrivateAttribute" + 1 + "-" + i,
    //                 value: "PrivateAttr " + 1 + " value-" + i
    //             },
    //             {
    //                 trait_type: "publicAttribute" + 2 + "-" + i,
    //                 value: "PrivateAttr " + 2 + " value-" + i
    //             }
    //         ]
    //     }
    // }

    let newData = [
        {
            "id": "Batch_Minted_1",
            "token_name": "Sienna Knight 1",
            "img_url": "https://arweave.net/cwZTpBu_jyJcFXNIxhrJK3UNe_eHJx62GOoKwUuVb0Y",
            "priv_img_url": "https://arweave.net/KFhNpjAjmSQi1I8mLm-DM3MyL8NzjMCf3SH83fFh5gU",
            "priv_key": "277a3c9e1c3d0de36c98a8b5844bb15470ede55b",
            "attributes": [
                {
                    "trait_type": "Rank",
                    "value": "Commoner"
                },
                {
                    "trait_type": "Type",
                    "value": "5"
                },
                {
                    "trait_type": "Badge Color",
                    "value": "Blue"
                },
                {
                    "trait_type": "Background",
                    "value": "Color/Grey"
                },
                {
                    "trait_type": "Gadget 1",
                    "value": "One-eye Visor"
                },
                {
                    "trait_type": "Gadget 2",
                    "value": "None"
                },
                {
                    "trait_type": "Gadget 3",
                    "value": "None"
                },
                {
                    "trait_type": "Coverage",
                    "value": "Shoulders up"
                },
                {
                    "trait_type": "Low Resolution Image",
                    "value": "https://arweave.net/cwZTpBu_jyJcFXNIxhrJK3UNe_eHJx62GOoKwUuVb0Y"
                },
                {
                    "trait_type": "Rarity Score",
                    "value": "280.79741189216750"
                },
                {
                    "trait_type": "Rarity Ranking",
                    "value": "184"
                }
            ],
            "priv_attributes": [
                {
                    "trait_type": "High Resolution Image",
                    "value": "https://arweave.net/KFhNpjAjmSQi1I8mLm-DM3MyL8NzjMCf3SH83fFh5gU"
                },
                {
                    "trait_type": "Full Body Image",
                    "value": "None"
                }
            ]
        },
        {
            "id": "Batch_Minted_2",
            "token_name": "Sienna Knight 2",
            "img_url": "https://arweave.net/Jb8QA3eioz8HS4GShvnWmv_7GA4NQJJHS4VHsg679Zg",
            "priv_img_url": "https://arweave.net/RqMqcTmHKafmTB6WHN8BY_1PpyoqqsNVKX5fuRdwbjI",
            "priv_key": "aa1d0030c966422485f89e8a402b6dcacd4d8aef",
            "attributes": [
                {
                    "trait_type": "Rank",
                    "value": "Commoner"
                },
                {
                    "trait_type": "Type",
                    "value": "12"
                },
                {
                    "trait_type": "Badge Color",
                    "value": "Yellow"
                },
                {
                    "trait_type": "Background",
                    "value": "Color/Grey"
                },
                {
                    "trait_type": "Gadget 1",
                    "value": "One-eye Visor"
                },
                {
                    "trait_type": "Gadget 2",
                    "value": "Environment Conditioner"
                },
                {
                    "trait_type": "Gadget 3",
                    "value": "None"
                },
                {
                    "trait_type": "Coverage",
                    "value": "Full Body"
                },
                {
                    "trait_type": "Low Resolution Image",
                    "value": "https://arweave.net/Jb8QA3eioz8HS4GShvnWmv_7GA4NQJJHS4VHsg679Zg"
                },
                {
                    "trait_type": "Rarity Score",
                    "value": "333.59490196078434"
                },
                {
                    "trait_type": "Rarity Ranking",
                    "value": "57"
                }
            ],
            "priv_attributes": [
                {
                    "trait_type": "High Resolution Image",
                    "value": "https://arweave.net/RqMqcTmHKafmTB6WHN8BY_1PpyoqqsNVKX5fuRdwbjI"
                },
                {
                    "trait_type": "Full Body Image",
                    "value": "https://arweave.net/6LI-jR4uGymfDsw6862CNJg6zk9bR5CjyDWV_xiMnLk"
                }
            ]
        },
        {
            "id": "Batch_Minted_3",
            "token_name": "Sienna Knight 3",
            "img_url": "https://arweave.net/_GUQ5NGpBdGN3rG2t7RrAgiCMciJM8aofxZcjOenMak",
            "priv_img_url": "https://arweave.net/TXRNi1B8Ngp6sdf8kDWp9s5WPA2rTvj6NKMVDBnoAQE",
            "priv_key": "43b0a4f4883af228ed1cc1ca6f16d095de280d6d",
            "attributes": [
                {
                    "trait_type": "Rank",
                    "value": "Commoner"
                },
                {
                    "trait_type": "Type",
                    "value": "2"
                },
                {
                    "trait_type": "Badge Color",
                    "value": "Red"
                },
                {
                    "trait_type": "Background",
                    "value": "Color/Grey"
                },
                {
                    "trait_type": "Gadget 1",
                    "value": "Movement Detector"
                },
                {
                    "trait_type": "Gadget 2",
                    "value": "None"
                },
                {
                    "trait_type": "Gadget 3",
                    "value": "None"
                },
                {
                    "trait_type": "Coverage",
                    "value": "Shoulders up"
                },
                {
                    "trait_type": "Low Resolution Image",
                    "value": "https://arweave.net/_GUQ5NGpBdGN3rG2t7RrAgiCMciJM8aofxZcjOenMak"
                },
                {
                    "trait_type": "Rarity Score",
                    "value": "293.13875388350950"
                },
                {
                    "trait_type": "Rarity Ranking",
                    "value": "132"
                }
            ],
            "priv_attributes": [
                {
                    "trait_type": "High Resolution Image",
                    "value": "https://arweave.net/TXRNi1B8Ngp6sdf8kDWp9s5WPA2rTvj6NKMVDBnoAQE"
                },
                {
                    "trait_type": "Full Body Image",
                    "value": "None"
                }
            ]
        }
    ]

    try {
        const preloadMsg = {
            batch_mint_nft: {
                mints: newData
            }
        }

        const result = client.execute(contractAddress, preloadMsg)
        return result
    } catch (e) {
        console.log(e.message)
    }
}