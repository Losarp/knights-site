export default function Whitelist(client, contractAddress) {
    try {
        const whitelistMsg = {
            load_whitelist: {
                whitelist: [
                    "secret1mut7dra74dnxxnw68f272vhgfe508zxys29rqh",
                    "secret1qlgs28dkufkz6s70yfctm0vy9yctm2u262ruj5",
                    "secret16dmvh2rg9n9zlql6k87ls3pr5g9qcg5agpmpzl",
                    "secret1rn7gu2vy24jlwvgt4nrwx5e55d5qqck3dadlgs",
                    "secret1v630rt5lzdffzeewwfpg3q3fh04zu3wdudlwje",
                    "secret153jlt04jgqadwymc7vxw3eyed3wgqs7uz765d2",
                    "secret1jmukgsw7elrf7ttmdm5s3y2madpr9aarga092h",
                    "secret1zrkrdu9c5svml5eqk9jg0x0skc95gvpz9kddhn",
                    "secret17w5q28meh00n2psv2k68v23eve8a0jp2dnt6d8",
                    "secret1mut7dra74dnxxnw68f272vhgfe508zxys29rqh",
                    "secret1dv7z8z653x4qgttknawgfceudydwvxeatlcgl8",
                    "secret1mpq5kr6e0gcjm69n7an08cqt6mk5333wjp9qjd",
                    "secret1f5hpz6t0jv3e5zsc3d2sq24dudumnpd974d9x6",
                    "secret1y7d0yzdkwajrdzkmq7yluj0298myzy4hf5c229",
                    "secret1spshkrsq2dcafqdr3er2yxtq4ev6ezpmlk7zl7",
                    "secret1xnjznds2g4veyvcf3rky5qqpplt70hhdk4csye",
                    "secret1ullxwua0tv2wwst8a6wd8jwd4cvcvaxug9t46w"
                ]
            }
        }

        const result = client.execute(contractAddress, whitelistMsg)
        return result
    } catch (e) {
        console.log(e.message)
    }
}