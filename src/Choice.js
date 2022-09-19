import "./Choice.css";

export default function Choice(props) {
    return(
        <div className="choice-container">
            <img src={props.choicePic} alt={props.choiceCaption} className="choice-pic"/>
            <p className="choice-caption">{props.choiceCaption}</p>
        </div>
    );
}