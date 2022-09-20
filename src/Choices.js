import {useState} from "react";
import "./Choices.css";
import Choice from "./Choice.js"

export default function Choices(props) {

    const [pic, setPic] = useState({isClicked: false})

    function handleClick(prevState) {
        if (!props.isLocked) {
            setPic((prevState) => ({isClicked: !prevState.isClicked}))
        }
    }

    return(
        <div className="choices-container" onClick={handleClick}>{props.choices.map(
            (choice) => <Choice choiceCaption={choice[0]} choicePic={choice[1]} isClicked={pic.isClicked}
            isLocked={props.isLocked}/>)}
        </div>
    );
}