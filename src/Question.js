import "./Question.css";

export default function Question(props) {
    return(
        <div>
            <h2 id="question">{props.question}</h2>
            <div id="choice-container">{props.choices.map(
                (choice) => <p className="choice">{choice}</p>)}
            </div>
        </div>
    );
}