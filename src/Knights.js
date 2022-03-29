import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import KnightsInner from "./KnightsInner";

export default function Knights(props) {

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
    return (
        <div style={{backgroundColor: "#eee", paddingTop: "3rem"}}>
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