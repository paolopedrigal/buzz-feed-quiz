export default function Question(props) {

    return(
        <div>
            <h2>{props.question}</h2>
            <p>{props.choices.map(
                (choice) => <p>{choice}</p>)}
            </p>
        </div>
    );
}