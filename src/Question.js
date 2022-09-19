import "./Question.css";
import Choice from "./Choice.js";

export default function Question(props) {
    return(
        <div>
            <h2 className="question">{props.question}</h2>
            <div className="choices-container">{props.choices.map(
                (choice) => <Choice choiceCaption={choice[0]} choicePic={choice[1]}/>)}
            </div>
        </div>
    );
}