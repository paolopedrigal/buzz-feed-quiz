import "./Quiz.css";
import Question from './Question.js';

export default function Quiz() {
    return(
        <div id="quiz">
            <Question 
                question="BREAKFAST :D"
                choices={["Denica's Ube Pancakes",
                    "A Bagel Cafe Bagel",
                    "Green Onion Pancakes",
                    "Soup"
                ]}
            />
            <Question 
                question="Now, it's lunch time!"
                choices={["Pork chop & Rice",
                    "Poke",
                    "Ramen",
                    "Vons"
                ]}
            />
            <Question
                question="What's for dinner?"
                choices={["Korean BBQ & Hotpot",
                    "Sushi & Sashimi",
                    "Mediteranean food",
                    "Hawaiian BBQ"
                ]}
            />
            <Question  
                question="Room for dessert?"
                choices={["Ice cream",
                    "Boba",
                    "Cake",
                    "Cookies"
                ]}
            />
        </div>

    );
}