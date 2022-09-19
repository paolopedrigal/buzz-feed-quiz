import "./Quiz.css";
import Question from "./Question.js";

import UbePancakes from "./Images/ube-pancakes.jpg";
import Bagels from "./Images/bagels.jpg";
import GreenOnionPancakes from "./Images/scallion-pancakes.jpg";
import Soup from "./Images/soup.jpeg";

import PorkChopRice from "./Images/pork-chop-rice.jpg";
import Poke from "./Images/poke.png"; 
import Ramen from "./Images/ramen.jpg";
import Vons from "./Images/vons.png";

import KoreanFood from "./Images/korean-bbq-hot-pot.png";
import SushiSashimi from "./Images/sushi-sashimi.jpg";
import MediterraneanFood from "./Images/mediterranean-food.jpg";
import HawaiianBBQ from "./Images/hawaiian-bbq.jpg";

import IceCream from "./Images/ice-cream-2.jpg";
import Boba from "./Images/boba.jpeg";
import Cake from "./Images/cake.jpg";
import Cookie from "./Images/cookie.jpg";

import Gon from "./Images/gon.jpg";
import Killua from "./Images/killua.jpg";
import Kurapika from "./Images/kurapika.jpg";
import Leorio from "./Images/leorio.jpg";
import Zushi from "./Images/zushi.jpg";
import Chrollo from "./Images/chrollo.png";

import Aang from "./Images/aang.jpg";
import Katara from "./Images/katara.png";
import Zuko from "./Images/zuko.png";
import Toph from "./Images/toph.jpg";

import CardioSurgeon from "./Images/cardio-surgeon.jpg";
import Neurosurgeon from "./Images/neurosurgeon.jpg";
import OBGYN from "./Images/obgyn.jfif";
import PlasticSurgeon from "./Images/plastic-surgeon.jpg";

import Edward from "./Images/edward.jpg";
import Bella from "./Images/bella.jpg";
import Alice from "./Images/alice.avif";
import Aro from "./Images/aro.jpg";

// Food Related [DONE]
// TV Show Related
// Personality Related [Done]
// Memory Related
// Music Related

export default function Quiz() {
    return(
        <div id="quiz">

            {/* Food Related */}
            <Question 
                question="BREAKFAST :D"
                choices={[["Denica's Ube Pancakes", UbePancakes],
                    ["A Bagel Cafe Bagel", Bagels],
                    ["Green Onion Pancakes", GreenOnionPancakes],
                    ["Soup", Soup]
                ]}
            />
            <Question 
                question="Now, it's lunch time!"
                choices={[["Pork Chop & Rice", PorkChopRice],
                    ["Poke", Poke],
                    ["Sushi & Sashimi", SushiSashimi],
                    ["Vons", Vons]
                ]}
            />
            <Question
                question="What's for dinner?"
                choices={[["Korean BBQ & Hotpot", KoreanFood],
                    ["Ramen", Ramen],
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

            {/* Personality Related */}
            
            <Question 
                question="What is your Nen ability?"
                choices={[["Enhancement", Gon],
                    ["Transmution", Killua],
                    ["Conjuration", Kurapika],
                    ["Emission", Leorio],
                    ["Manipulation", Zushi],
                    ["Specialization", Chrollo]
                ]}
            />
            <Question
                question="What bender are you?"
                choices={[["Air Bender", Aang],
                    ["Water Bender", Katara],
                    ["Fire Bender", Zuko],
                    ["Earth Bender", Toph]
                ]}
            />
            <Question
                question="Which type of surgeon are you?"
                choices={[["Cardiothoracic Surgeon", CardioSurgeon],
                    ["Neurosurgeon", Neurosurgeon],
                    ["OB/GYN", OBGYN],
                    ["Plastic Surgeon", PlasticSurgeon]
                ]}
            />

            <Question
                question="What's your vampire power?"
                choices={[["Mind Read", Edward],
                    ["Power Shield", Bella],
                    ["Predict the Future", Alice],
                    ["Memory Access", Aro]
                ]}
            />

            {/* <Question
                question="Which artist do you want to see live?"
                choices={[

                ]}
            /> */}
        </div>

    );
}