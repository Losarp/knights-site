import logo from './logo.svg';
import './App.css';
import { Button } from "react-bootstrap";
import instantiateContract from './InstantiateContract';
import MintOne from './MintOne';
import { useEffect, useState } from "react";
import { SigningCosmWasmClient } from "secretjs";
import PreloadContractWithData from "./PreloadContractWithData";
import InstantiateContract from "./InstantiateContract";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Knights from './Knights';
import Hero from './Hero';
import Swal from 'sweetalert2';
import Whitelist from './Whitelist';
import DeactivateWhitelist from './DeactivateWhitelist';
import BatchMint from './BatchMint';
import { db } from "./firebase";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import jsonops from './jsonops';

// TestNet
// const chainId = "pulsar-2"
// const chainRPC = "https://rpc.pulsar.griptapejs.com"
// const chainREST = "https://secret-pulsar-2--lcd--full.datahub.figment.io/apikey/530a58b47b58e988f5a44002d8444979"
// // const randomMintContract = "secret1tr6xttk7x3q2xe2ku8y42h87n025llnkatu3dv"
// // const randomMintHash = "acdf910e3f4312ce17122577b1b46633c21edc91bcb76f07214eb3df4a61c525"
// const randomMintContract = "secret1hddza542nyj574d5kk4awzsr5qr0zcgrgd2kxx"
// const randomMintHash = "bfc769376f86876882a15ca3f59412612154dc52ec7bd3a2e47a93d29d022c05"
// const snip20Contract = "secret18vd8fpwxzck93qlwghaj6arh4p7c5n8978vsyg"
// const snip20Hash = "9587D60B8E6B078ACE12014CEEEE089530B9FABCD76535D93666A6C127AD8813"

const chainId = "secret-4"
const chainRPC = "https://rpc-secret.scrtlabs.com/secret-4/rpc"
const chainREST = "https://chameleon-lcd.secret.llc"
const randomMintContract = "secret1t22ulrd0whfh9lpwun47fhevcwe46dlwy3ju92"
const randomMintHash = "bfc769376f86876882a15ca3f59412612154dc52ec7bd3a2e47a93d29d022c05"
const snip20Contract = "secret1k0jntykt7e4g3y88ltc60czgjuqdy4c9e8fzek"
const snip20Hash = "AF74387E276BE8874F07BEC3A87023EE49B0E7EBE08178C49D0A49C3C98ED60E"

let myknights = []

let savedSignature = null

function App() {

    const [client, setClient] = useState();
    const [address, setAddress] = useState(<a href="#" onClick={() => { connectWallet() }}><div className='main-menu-title'>CONNECT</div></a>);
    const [contractAddress, setContractAddress] = useState(randomMintContract);
    const [contractHash, setContractHash] = useState();
    const navigate = useNavigate()
    const [mintCounter, setMintCounter] = useState(0);
    const [dummyCounter, setDummyCounter] = useState(0);

    const knightsData = require('./preload.json');
  
    useEffect(async () => {
      onSnapshot(collection(db, 'knights'), async (snapshot) => {
        setMintCounter(snapshot.docs[0].data().mint_count);
      })
      console.log(mintCounter)
    }, [mintCounter])

    useEffect(() => {
        connectWallet()
        window.addEventListener("keplr_keystorechange", async () => {
            await connectWallet();
        })
    }, [])

    const handleSetCounter = async (count) => {
        const mint_count_db = doc(db, 'knights', 'mintCount');
        await updateDoc(mint_count_db, {
          mint_count: count
        })
      }

    const connectWallet = async () => {
        if (!window.keplr) {
            Swal.fire({
                title: 'Missing Keplr',
                text: 'Please install Keplr extension',
                icon: 'warning'
            })
        } else {
            await window.keplr.experimentalSuggestChain({
                chainId: chainId,
                chainName: chainId,
                rpc: chainRPC,
                rest: chainREST,
                bip44: {
                    coinType: 529
                },
                bech32Config: {
                    bech32PrefixAccAddr: "secret",
                    bech32PrefixAccPub: "secretpub",
                    bech32PrefixValAddr: "secretvaloper",
                    bech32PrefixValPub: "secretvaloperpub",
                    bech32PrefixConsAddr: "secretvalcons",
                    bech32PrefixConsPub: "secretvalconspub"
                },
                currencies: [
                    {
                        coinDenom: "SCRT",
                        coinMinimalDenom: "uscrt",
                        coinDecimals: 6,
                        coinGeckoId: "secret"
                    }
                ],
                feeCurrencies: [
                    {
                        coinDenom: "SCRT",
                        coinMinimalDenom: "uscrt",
                        coinDecimals: 6,
                        coinGeckoId: "secret"
                    },
                ],
                stakeCurrency: {
                    coinDenom: "SCRT",
                    coinMinimalDenom: "uscrt",
                    coinDecimals: 6,
                    coinGeckoId: "secret"
                },
                coinType: 529,
                gasPriceStep: {
                    low: 0.1,
                    average: 0.25,
                    high: 0.3
                },
            });
        }
        if (!window.keplr) {
            Swal.fire({
                title: 'Missing Keplr',
                text: 'Please install Keplr extension',
                icon: 'warning'
            })
        } else {

            await window.keplr.enable(chainId);

            const offlineSigner = window.getOfflineSigner(chainId);
            const enigmaUtils = window.getEnigmaUtils(chainId);

            const accounts = await offlineSigner.getAccounts()
            // console.log(accounts)

            setAddress(accounts[0].address);
            // console.log(chainREST);
            const cosmJS = new SigningCosmWasmClient(
                chainREST,
                accounts[0].address,
                offlineSigner,
                enigmaUtils
            );
            setClient(cosmJS)
            setAddress(accounts[0].address)
            // console.log(cosmJS);
            //document.querySelector("#connect-button").innerHTML = accounts[0].address.substr(0, 8) + '...' + accounts[0].address.substr(-3)
        }
    }

    const handlePreload = async () => {
        const result = await PreloadContractWithData(client, randomMintContract);
        const txhash = { id: result.transactionHash };
        const tx = await client.searchTx(txhash)
        console.log(tx)
    }

    const handleBatchMint = async () => {
        const result = await BatchMint(client, randomMintContract);
        const txhash = { id: result.transactionHash };
        const tx = await client.searchTx(txhash)
        console.log(tx)
    }

    const handleWhitelist = async () => {
        const result = await Whitelist(client, randomMintContract);
        const txhash = { id: result.transactionHash };
        const tx = await client.searchTx(txhash)
        console.log(tx)
    }

    const handleCancelWhitelist = async () => {
        const result = await DeactivateWhitelist(client, randomMintContract);
        const txhash = { id: result.transactionHash };
        const tx = await client.searchTx(txhash)
        console.log(tx)
    }

    const handleMint = async () => {
        // const mintMsg = {
        //     receive: {
        //         sender: "secret1s73zdu4wmhgn0ngh3uxg8qg3rd8mv6kq052hd9",
        //         from: address,
        //         amount: "40000000"
        //     }
        // }
        // const result = await client.execute(randomMintContract, mintMsg)
        if (!window.keplr) {
            Swal.fire({
                title: 'Missing Keplr',
                text: 'Please install Keplr extension',
                icon: 'warning'
            })
            return false;
        }
        document.querySelector('#mint-button').style.display = "none";
        document.querySelector('#mint-loader').style.display = "inline-block";

        const result = await MintOne(client, chainId, snip20Contract, randomMintContract, randomMintHash, "99000000")
        if (result !== false) {
            const txhash = { id: result.transactionHash };
            const tx = await client.searchTx(txhash)
            console.log(tx)
            console.log(tx[0].logs[0].events[1].attributes[2].value)
            let knightData = [];
            //parse to string
            let tokenid = tx[0].logs[0].events[1].attributes[2].value.trim();
            knightData = knightsData.find((knight) => knight.id == tokenid)
            // const knightData = knightsData.find(knight => knight.id == tx[0].logs[0].events[1].attributes[2].value)
            console.log(knightData)
            let swalHtml = 'You\'ve just minted ' + '<b>' + knightData.token_name + '</b> <br/><br/>'
            swalHtml += '<img src="' + knightData.img_url + '" alt="' + knightData.token_name + '" style="width: 400px; height: 400px;"/>'
            swalHtml += '<br/>'
            let attr = knightData.attributes.find(attribute => attribute.trait_type === 'Rarity Ranking')
            swalHtml += 'Rank : ' + attr.value + '</b>'
            Swal.fire({
                width: 600,
                title: 'Success!',
                html: swalHtml,
                icon: 'success',
                showCloseButton: true,
                showCancelButton: true,
                cancelButtonText: `Mint Again!`,
                confirmButtonText: `Show me!`
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.cancel) {
                  handleMint()
                  return;
                } else if (result.isConfirmed) {
                  getKnights();
                }
              })
            const msg = {
                num_tokens: {}
            }
            const resultCount = await client.queryContractSmart(randomMintContract, msg)
            handleSetCounter(resultCount.num_tokens.count)
        }
        document.querySelector('#mint-button').style.display = "inline-block";
        document.querySelector('#mint-loader').style.display = "none";
    }

    const getKnights = async () => {
        if (!window.keplr) {
            Swal.fire({
                title: 'Missing Keplr',
                text: 'Please install Keplr extension',
                icon: 'warning'
            })
            return false;
        } else {
            //setModalContent(() => (<div className="dog-loader-test">Generating permit...</div>))
            console.log("Generating permit...")

            document.querySelector('#knight-button').style.display = "none";
            document.querySelector('#knight-loader').style.display = "inline-block";
            document.querySelector('#knight-loader').innerHTML = "Generating permit...";

            if (address === null) {
                //setModalContent("Please connect your wallet")
                //document.querySelector("#dog-show").style.display = "inline-block"
                //document.querySelector("#dog-wait").style.display = "none"
                alert("Wallet error!")
            }

            if (savedSignature === null || savedSignature === undefined) {

                const { signature } = await window.keplr.signAmino(
                    chainId,
                    address,
                    {
                        chain_id: chainId,
                        account_number: "0", // Must be 0
                        sequence: "0", // Must be 0
                        fee: {
                            amount: [{ denom: "uscrt", amount: "0" }], // Must be 0 uscrt
                            gas: "1", // Must be 1
                        },
                        msgs: [
                            {
                                type: "query_permit", // Must be "query_permit"
                                value: {
                                    permit_name: "getKnights",
                                    allowed_tokens: [contractAddress],
                                    permissions: ["owner"],
                                },
                            },
                        ],
                        memo: "", // Must be empty
                    },
                    {
                        preferNoSetFee: true, // Fee must be 0, so hide it from the user
                        preferNoSetMemo: true, // Memo must be empty, so hide it from the user
                    }
                );
                savedSignature = signature;
            } else {
                const signature = savedSignature;
            }

            //setModalContent(() => (<div className="dog-loader-test">Checking your dogs...</div>))
            console.log("Checking knignts")
            document.querySelector('#knight-loader').innerHTML = "Checking Knights...";

            const tokens = await client.queryContractSmart(
                contractAddress,
                {
                    with_permit: {
                        query: {
                            "tokens": {
                                "owner": address
                            }
                        },
                        permit: {
                            params: {
                                permit_name: "getKnights",
                                allowed_tokens: [contractAddress],
                                chain_id: chainId,
                                permissions: ["owner"],
                            },
                            signature: savedSignature,
                        },
                    },
                }
            );

            const allTokens = tokens.token_list.tokens
            if (allTokens.length < 1) {
                Swal.fire('No Knights', 'You have no knights. Get one from the secondary market!', 'info');
                document.querySelector('#knight-button').style.display = "inline-block";
                document.querySelector('#knight-loader').style.display = "none";
                return false;
            }
            // console.log(allTokens);

            //setModalContent(() => (<div className="dog-loader-test">Acquiring dogs...</div>))
            console.log('Acquiring knights')
            document.querySelector('#knight-loader').innerHTML = "Acquiring Knights...";

            // const fees = {
            //     send: {
            //         amount: [{amount: "80000", denom: "uscrt"}],
            //         gas: "80000",
            //     },
            // }

            let myDogs = []

            for (let i = 0; i < allTokens.length; i++) {
                const msg = {
                    with_permit: {
                        query: {
                            "nft_dossier": {
                                "token_id": allTokens[i]
                            }
                        },
                        permit: {
                            params: {
                                permit_name: "getKnights",
                                allowed_tokens: [contractAddress],
                                chain_id: chainId,
                                permissions: ["owner"],
                            },
                            signature: savedSignature,
                        }
                    }
                }

                let dog = await client.restClient.queryContractSmart(contractAddress, msg);
                // console.log(dog)
                dog['token_id'] = allTokens[i]
                myDogs.push(dog)
            }
            // console.log(myDogs)
            //setDogs(myDogs);

            //setModalContent(
            //    <div>
            //        <ul>
            //            {myDogs.map(singleDog => {
            //                return (
            //                    <li key={singleDog.token_id} style={{borderBottom:"1px solid grey"}}>
            //                        <Dog
            //                            dogID={singleDog.token_id}
            //                            breed={singleDog.nft_dossier.private_metadata.extension.attributes[0].value}
            //                            personality={singleDog.nft_dossier.private_metadata.extension.attributes[1].value}
            //                            privateImage={singleDog.nft_dossier.private_metadata.extension.image}
            //                        />
            //                    </li>
            //                )
            //            })}
            //        </ul>
            //    </div>
            //)
            if (myDogs.length > 0) {
                console.log(myDogs)
                myknights = myDogs;
                document.querySelector('#knight-button').style.display = "inline-block";
                document.querySelector('#knight-loader').style.display = "none";
                navigate('/knights')
                //setButtonVisible(true)
            } else {
                //setModalContent(() => {
                //        return (
                //            <div className="dog-loader-test" style={{display: "flex", flexDirection: "column"}}>
                //                <div style={{marginBottom: "1.5rem"}}>
                //                    You have no dogs.
                //                    &nbsp;<a href="https://stashh.io/collection/secret186wc7z6p88kd4ggyeledvwwe7cqmcnn9xev3su?status=buy_now" rel="noreferrer" target="_blank">Go get one!</a>
                //                </div>
                //                <div className="modal-instance">
                //                    <a target="_blank" rel="noreferrer" className="btn btn--primary type--uppercase" style={{backgroundColor: "#7289da", borderColor: "#7289da"}}
                //                       href="https://discord.gg/VJpZTRZahq">
                //                        <span className="btn__text">DISCORD</span>
                //                    </a>
                //                    <a target="_blank" rel="noreferrer" className="btn btn--primary type--uppercase" style={{backgroundColor: "#1DA1F2", borderColor: "#1DA1F2"}}
                //                       href="https://twitter.com/secretdogsnft">
                //                        <span className="btn__text">TWITTER</span>
                //                    </a>
                //                </div>
                //            </div>
                //        )
                //    }
                //)
            }

            // alert("Breed : " + dog.nft_dossier.private_metadata.extension.attributes[0].value +
            //     "\nPersonality : " + dog.nft_dossier.private_metadata.extension.attributes[1].value)

            //document.querySelector("#dog-show").style.display = "inline-block"
            //document.querySelector("#dog-wait").style.display = "none"
        }
    }

    // const handleInstantiate = async () => {
    //     const result = await InstantiateContract(client, codeId)
    //     const txhash = {id: result.transactionHash};
    //     const tx = await client.searchTx(txhash)
    //     console.log(tx)
    // }

    return (
        <div>
            <div id="wrap" className="boxed ">
                <div className="grey-bg">

                    <Header address={address} />

                    <Hero handleMint={handleMint} getKnights={getKnights} mintCounter={mintCounter} />

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/knights' element={<Knights myknights={myknights} />} />
                    </Routes>


                    <Footer getKnights={getKnights} handlePreload={handlePreload} handleWhitelist={handleWhitelist} handleCancelWhitelist={handleCancelWhitelist} handleBatchMint={handleBatchMint} jsonops={jsonops}/>

                </div>{/*<!-- End BG -->*/}
            </div>{/*<!-- End wrap -->*/}
            {/* <div className="App">
            <header className="App-header">
          <span id="connect-button">
              <Button className="btn btn-danger" onClick={connectWallet}>Connect Wallet</Button>
          </span>
                <Button className="btn btn-primary" onClick={handlePreload}>Preload Data</Button>
                <Button className="btn btn-primary" onClick={handleMint}>Mint NFT</Button>
            </header>
        </div>*/}
        <div id="newdata"></div>
        </div>
    );
}

export default App;
