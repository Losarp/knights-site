import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import KnightsInner from "./KnightsInner";
import Swal from "sweetalert2";

export default function Knights(props) {

    const [discordId, setDiscordId] = useState('');

    const navigate = useNavigate()
    useEffect(() => {
        if (document.querySelector('#knight-image') !== null) {
            document.querySelector('#knight-page-bottom').scrollIntoView({behavior: "smooth"})
        }
        if (props.myknights.length < 1) {
            navigate('/')
            return false
        }
    })
    const myknights = props.myknights

    const handleDiscordIdChange = (e) => {
        setDiscordId(e.target.value)
    }

    const handleSaveDiscord = async () => {
        console.log(discordId)
        Swal.fire({
                title: 'Saving...',
                text: 'May take a few seconds...',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                }
            }
        )
        for (const knight of myknights) {
            if (discordId == '') {
                Swal.fire({
                    title: 'Error',
                    text: 'Please enter a Discord ID',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    didOpen() {
                        Swal.hideLoading()
                    }
                })
                return false
            }
            const response = await fetch('https://api.siennaknights.com/add_discord', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    discordId: discordId,
                    chameleonId: knight.token_id,
                    hashKey: knight.nft_dossier.private_metadata.extension.attributes[2].value
                })
            })
            const data = await response.json()
            if (!data.success)  {
                Swal.fire({
                    title: 'Error!',
                    text: data.message,
                    icon: 'error',
                    confirmButtonText: 'Ops'
                })
                return false;
            }
        }
        Swal.fire({
            title: 'Success!',
            text: 'Ownership claimed successfully!',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
    }

    return (
        <div style={{backgroundColor: "#eee", paddingTop: "3rem"}}>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
                <input style={{width:"600px"}} type={"text"} placeholder={"Enter Discord ID (my_discord_id#1234)"} onChange={e => handleDiscordIdChange(e)}/>
                <div>
                    <button onClick={() => handleSaveDiscord()} className="button medium thin hover-dark tp-button mr-5 mt-5">Claim Ownership!</button>
                    <a href={"https://discord.sienna.network/"} target={"_blank"} className="button medium thin hover-dark tp-button ml-5 mt-5">Go to Discord</a>
                </div>
            </div>

            { 
                myknights.map(knight => {
                    if (knight.token_id.includes('Sienna')) {
                        return (
                            <KnightsInner knight={knight} key={knight.token_id} />
                        )
                    }
                })
            }
            <div id="knight-page-bottom">&nbsp;</div>
        </div>
    )
}