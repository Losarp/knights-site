import { useState } from "react"

export default function KnightsInner(props) {
    const knight = props.knight

    const traits = require('./traits.json');

    const [toggle, setToggle] = useState(knight.nft_dossier.private_metadata.extension.attributes[0].value)
    const [fullbody, setFullbody] = useState(false)

    let toggleButton =''
    if (knight.nft_dossier.public_metadata.extension.attributes[7].value != 'Shoulders up') {
        toggleButton = <button onClick={() => handleToggle()}>(Click to toggle)</button>
    }

    const handleToggle = () => {
        if (!fullbody) {
            setToggle(knight.nft_dossier.private_metadata.extension.attributes[1].value)
            setFullbody(true)
        } else {
            setToggle(knight.nft_dossier.private_metadata.extension.attributes[0].value)
            setFullbody(false)
        }
    }

    let backgroundIndex = '';
    if (knight.nft_dossier.public_metadata.extension.attributes[3].value == 'Commander Background') {
        backgroundIndex = 'commander background'
    } else if (knight.nft_dossier.public_metadata.extension.attributes[3].value == 'Noble Background') {
        backgroundIndex = 'noble background'
    } else {
        backgroundIndex = knight.nft_dossier.public_metadata.extension.attributes[3].value
    }

    let backgroundScore = '';
    let backgroundPercentage = '';
    if (traits['background'][backgroundIndex] != undefined && traits['background'][backgroundIndex] != null) {
        backgroundScore = traits['background'][backgroundIndex].score;
        backgroundPercentage = traits['background'][backgroundIndex].percentage;
    } else {
        console.log(traits['background'])
    }

    return (  
        <div className="page-section grey-light-bg clearfix" style={{marginTop:"2rem"}}>
            
            <div className="fes7-img-cont col-md-5" style={{marginTop: "3rem"}}>
                <div id="knight-image" className="fes7-img" style={{ backgroundImage: "url(" + toggle + ")", backgroundSize: "contain" }}></div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-6 fes7-text-cont p-80-cont">
                        <h1 style={{marginBottom: '0'}}><span className="font-light">{knight.token_id.replaceAll('_', ' ')}</span></h1>
                        <div style={{fontSize: "small", marginBottom:"3rem"}}><a href={toggle} target="_blank">Go to image</a></div>
                        <div className="row">

                            <div className="col-md-6 col-sm-6">
                                <div className="fes7-box wow fadeIn">
                                    <div className="fes7-box-icon">
                                        <div className="icon"><img src="/images/chivalry/scroll.svg" width={25}/></div>
                                    </div>
                                    <h3>Rank</h3>
                                    <p>{knight.nft_dossier.public_metadata.extension.attributes[0].value} <br/>(score : {traits['rank'][knight.nft_dossier.public_metadata.extension.attributes[0].value].score} - {traits['rank'][knight.nft_dossier.public_metadata.extension.attributes[0].value].percentage})</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <div className="fes7-box wow fadeIn" data-wow-delay="200ms">
                                    <div className="fes7-box-icon">
                                        <div className="icon"><img src="/images/chivalry/scroll.svg" width={25}/></div>
                                    </div>
                                    <h3>Type</h3>
                                    <p>{knight.nft_dossier.public_metadata.extension.attributes[1].value} <br/>(score : {traits['type'][knight.nft_dossier.public_metadata.extension.attributes[1].value].score} - {traits['type'][knight.nft_dossier.public_metadata.extension.attributes[1].value].percentage})</p>
                                </div>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-6 col-sm-6">
                                <div className="fes7-box wow fadeIn" data-wow-delay="400ms">
                                    <div className="fes7-box-icon">
                                        <div className="icon"><img src="/images/chivalry/scroll.svg" width={25}/></div>
                                    </div>
                                    <h3>Badge Color</h3>
                                    <p>{knight.nft_dossier.public_metadata.extension.attributes[2].value} <br/>(score : {traits['badge_color'][knight.nft_dossier.public_metadata.extension.attributes[2].value].score} - {traits['badge_color'][knight.nft_dossier.public_metadata.extension.attributes[2].value].percentage})</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <div className="fes7-box wow fadeIn" data-wow-delay="600ms">
                                    <div className="fes7-box-icon">
                                        <div className="icon"><img src="/images/chivalry/scroll.svg" width={25}/></div>
                                    </div>
                                    <h3>Background</h3>
                                    <p>{knight.nft_dossier.public_metadata.extension.attributes[3].value} <br/>(score : {backgroundScore} - {backgroundPercentage})</p>
                                </div>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-6 col-sm-6">
                                <div className="fes7-box wow fadeIn" data-wow-delay="400ms">
                                    <div className="fes7-box-icon">
                                        <div className="icon"><img src="/images/chivalry/scroll.svg" width={25}/></div>
                                    </div>
                                    <h3>Gadget 1</h3>
                                    <p>{knight.nft_dossier.public_metadata.extension.attributes[4].value} <br/>(score : {traits['gadget_1'][knight.nft_dossier.public_metadata.extension.attributes[4].value].score} - {traits['gadget_1'][knight.nft_dossier.public_metadata.extension.attributes[4].value].percentage})</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <div className="fes7-box wow fadeIn" data-wow-delay="600ms">
                                    <div className="fes7-box-icon">
                                        <div className="icon"><img src="/images/chivalry/scroll.svg" width={25}/></div>
                                    </div>
                                    <h3>Gadget 2</h3>
                                    <p>{knight.nft_dossier.public_metadata.extension.attributes[5].value} <br/>(score : {traits['gadget_2'][knight.nft_dossier.public_metadata.extension.attributes[5].value].score} - {traits['gadget_2'][knight.nft_dossier.public_metadata.extension.attributes[5].value].percentage})</p>
                                </div>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-6 col-sm-6">
                                <div className="fes7-box wow fadeIn" data-wow-delay="400ms">
                                    <div className="fes7-box-icon">
                                        <div className="icon"><img src="/images/chivalry/scroll.svg" width={25}/></div>
                                    </div>
                                    <h3>Gadget 3</h3>
                                    <p>{knight.nft_dossier.public_metadata.extension.attributes[6].value} <br/>(score : {traits['gadget_3'][knight.nft_dossier.public_metadata.extension.attributes[6].value].score} - {traits['gadget_3'][knight.nft_dossier.public_metadata.extension.attributes[6].value].percentage})</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <div className="fes7-box wow fadeIn" data-wow-delay="600ms">
                                    <div className="fes7-box-icon">
                                        <div className="icon"><img src="/images/chivalry/scroll.svg" width={25}/></div>
                                    </div>
                                    <h3>Coverage</h3>
                                    <p>{knight.nft_dossier.public_metadata.extension.attributes[7].value} <br/>(score : {traits['coverage'][knight.nft_dossier.public_metadata.extension.attributes[7].value].score} - {traits['coverage'][knight.nft_dossier.public_metadata.extension.attributes[7].value].percentage})<br/>
                                    {toggleButton}
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-6 col-sm-6">
                                <div className="fes7-box wow fadeIn" data-wow-delay="400ms">
                                    <div className="fes7-box-icon">
                                        <div className="icon"><img src="/images/chivalry/scroll.svg" width={25}/></div>
                                    </div>
                                    <h3>Rarity Score</h3>
                                    <p>{knight.nft_dossier.public_metadata.extension.attributes[9].value}</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <div className="fes7-box wow fadeIn" data-wow-delay="600ms">
                                    <div className="fes7-box-icon">
                                        <div className="icon"><img src="/images/chivalry/scroll.svg" width={25}/></div>
                                    </div>
                                    <h3>Rarity Ranking</h3>
                                    <p>{knight.nft_dossier.public_metadata.extension.attributes[10].value}</p>
                                </div>
                            </div>

                        </div>
                        <div className="row">

                            <div className="col-md-6 col-sm-6">
                                <div className="fes7-box wow fadeIn" data-wow-delay="400ms">
                                    <div className="fes7-box-icon">
                                        <div className="icon"><img src="/images/chivalry/scroll.svg" width={25}/></div>
                                    </div>
                                    <h3>Hash</h3>
                                    <p>{knight.nft_dossier.private_metadata.extension.attributes[2].value}</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}