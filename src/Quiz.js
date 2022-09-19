import "./Quiz.css";
import Question from "./Question.js";


import KoreanFood from "./Images/korean-bbq-hot-pot.png";
import SushiSashimi from "./Images/sushi-sashimi.jpg";
import MediterraneanFood from "./Images/mediterranean-food.jpg";
import HawaiianBBQ from "./Images/hawaiian-bbq.jpg";


import IceCream from "./Images/ice-cream-2.jpg";
import Boba from "./Images/boba.jpeg";
import Cake from "./Images/cake.jpg";
import Cookie from "./Images/cookie.jpg";


export default function Quiz() {
    return(
        <div id="quiz">

            {/* Food Related */}
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
                choices={["Pork Chop & Rice",
                    "Poke",
                    "Ramen",
                    "Vons"
                ]}
            />
            <Question
                question="What's for dinner?"
                choices={[["Korean BBQ & Hotpot", KoreanFood], 
                    ["Sushi & Sashimi", SushiSashimi],
                    ["Mediteranean food", MediterraneanFood],
                    ["Hawaiian BBQ", HawaiianBBQ]
                ]}
            />
            <Question  
                question="Room for dessert?"
                choices={[["Ice Cream", IceCream],
                    ["Boba", Boba],
                    ["Cake", Cake],
                    ["Cookies", Cookie]
                ]}
            />

            {/* TV Show Related

            Personality Related

            Memory Related */}

        </div>

    );
}