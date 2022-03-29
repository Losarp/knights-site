import md5 from "md5";
export default async function PreloadContractWithData(client, contractAddress) {
    // console.log(client)
    // console.log(contractAddress)

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

    let newData = require("./preload.json");

    //create a html table for newData
    let table = '<table border="1">';
    table += '<tr>';
    table += '<th>id</th>';
    table += '<th>Rank</th>';
    table += '</tr>';

    
    for (let i = 0; i < newData.length; i++) {
        table += '<tr>';
        table += '<td>' + newData[i].id + '</td>';
        table += '<td>' + newData[i].attributes[10].value + '</td>';
        table += '</tr>';
    }

    table += '</table>';

    //print out newData on page
    document.getElementById('ranktable').innerHTML = table;

    // const perChunk = 111 // items per chunk    

    // let inputArray = newData

    // let preArray = inputArray.reduce((resultArray, item, index) => {
    //     const chunkIndex = Math.floor(index / perChunk)

    //     if (!resultArray[chunkIndex]) {
    //         resultArray[chunkIndex] = [] // start a new chunk
    //     }

    //     resultArray[chunkIndex].push(item)

    //     return resultArray
    // }, [])


    // try {
    //     const preloadMsg = {
    //         pre_load: {
    //             new_data: preArray[1]
    //         }
    //     }

    //     const result = await client.execute(contractAddress, preloadMsg)
    //     console.log(result)
    //     return result
    // } catch (e) {
    //     console.log(e.message)
    // }
}


// function makeid(length) {
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * 
//  charactersLength));
//    }
//    return result;
// }