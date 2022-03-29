export default function Hero(props)
{
    const handleMint = props.handleMint
    const getKnights = props.getKnights
    return (
        <div className="relative">
                <div className="rs-fullscr-container">

                    <div id="rs-fullwidth" className="tp-banner dark-bg">
                        <ul>
                            <li data-transition="zoomout" data-slotamount="1" data-masterspeed="1500"
                                data-thumb="images/chivalry/bgbg.png" data-saveperformance="on" data-title="HASWELL">

                                <img src="images/chivalry/bgbg.png" alt="slidebg1" data-lazyload="images/chivalry/bgbg.png"
                                    data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />

                                {/*<!-- LAYERS -->*/}

                                {/*<!--PARALLAX & OPACITY container -->*/}
                                <div className="rs-parallaxlevel-4 opacity-scroll2">

                                    <div className="tp-caption font-white light-73-wide sfb tp-resizeme" data-x="center" data-hoffset="0"
                                        data-y="center" data-voffset="-50" data-speed="500" data-start="850" data-easing="Power1.easeInOut"
                                        data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1"
                                        style={{ zIndex: "7", maxWidth: "auto", maxHeight: "auto", whiteSpace: "nowrap" }}><span
                                            className="bold">SIENNA KNIGHTS </span>NFT
                                    </div>

                                    <div className="tp-caption font-white norm-16-wide tp-left sfb tp-resizeme hide-0-736" data-x="center"
                                        data-hoffset="0" data-y="center" data-voffset="25" data-speed="900" data-start="1500"
                                        data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1"
                                        data-endelementdelay="0.1"
                                        style={{ zIndex: "9", maxWidth: "auto", maxHeight: "auto", whiteSpace: "nowrap" }}>
                                        The Official SecretNFT
                                        PFP Collection of Sienna Network
                                    </div>

                                    <div className="tp-caption center-0-478 sfb" data-x="center" data-hoffset="0" data-y="center"
                                        data-voffset="115" data-speed="900" data-start="1350" data-easing="Power3.easeInOut"
                                        data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1"
                                        style={{ zIndex: "9", maxWidth: "auto", maxHeight: "auto", whiteSpace: "nowrap", display:"flex", flexDirection:"column", alignItems:"center"  }}>
                                        <div id="mint-button" style={{ display: "inline-flex", justifyContent:"center", marginTop:"4rem" }}>
                                            {/* <button onClick={() => handleMint()}
                                                className="button medium thin hover-dark tp-button white">MINT</button>
                                            <span id="mint-loader" className="button medium thin hover-dark tp-button white" disabled style={{ display: "none" }}>Minting...</span> */}
                                            <button id="knight-button" onClick={() => getKnights()} className="button medium thin hover-dark tp-button white ml-20">SHOW MY KNIGHTS</button>
                                            <span id="knight-loader" className="button medium thin hover-dark tp-button white ml-20" disabled style={{ display: "none"}}>Working...</span>
                                            <a target={"_blank"} href={"https://stashh.io/collection/secret1t22ulrd0whfh9lpwun47fhevcwe46dlwy3ju92?sort=name+asc&status=buy_now"} id="knight-button" className="button medium thin hover-dark tp-button white ml-20">BUY SIENNA KNIGHTS</a>
                                        </div>
                                        <div style={{ display: "flex", flexDirection:"column" }}>
                                            {/* <div style={{marginTop:"2rem", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center", fontSize:"2rem", color:"white"}}><span>SOLD OUT!</span><span style={{fontSize:"1.5rem"}}>(The remaining tokens are reserved for whitelisted wallets)</span></div> */}
                                            <div style={{marginTop:"2rem", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center", fontSize:"2rem", color:"white"}}><span>SOLD OUT!</span></div>
                                            <div style={{marginTop:"2rem", display:"flex", justifyContent:"center", fontSize:"2rem", fontWeight:"bold", color:"white"}}>222<span style={{fontWeight:"normal", marginLeft:"0.7rem"}}>minted out of 222</span></div>
                                        </div>
                                    </div>
                                </div>

                            </li>

                        </ul>

                    </div>

                </div>

            </div>
    )
}