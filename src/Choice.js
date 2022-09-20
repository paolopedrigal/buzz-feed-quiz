import {useState} from "react";

import "./Choice.css";

export default function Choice(props) {

    const [pic, setPic] = useState({
        isHovered: false,
        isClicked: false
    })

    function handleHovered(prevState) {
        setPic((prevState) => ({isHovered: !prevState.isHovered, isClicked: prevState.isClicked}))
    } 

    function handleClicked(prevState) {
        if (!props.isLocked) {
            setPic((prevState) => ({isHovered: prevState.isHovered, isClicked: !prevState.isClicked}))
        }
    }

    return(
        <div className="choice-container">
            <img src={props.choicePic} alt={props.choiceCaption} onMouseEnter={handleHovered} onMouseLeave={handleHovered}
                onClick={handleClicked}
                className="choice-pic" style={{transform: `${pic.isHovered ? "scale(1.05)" : "scale(1)"}`,
                filter: `${pic.isClicked ? "opacity(1)" : `${props.isClicked ? "opacity(0.4)" : "opacity(1)"}`}`}}/>
            <p className="choice-caption">{props.choiceCaption}</p>
        </div>
    );
}