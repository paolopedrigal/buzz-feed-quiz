import {useState, useRef} from "react";

import "./Quiz.css";
import Question from "./Question.js";
import Choices from "./Choices.js";
import Result from "./Result.js";

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

    const [locks, setLocks] = useState({
        lock1: false,
        lock2: false,
        lock3: false,
        lock4: false,
        lock5: false,
        lock6: false,
        lock7: false,
        lock8: false,
    })

    const question2 = useRef(null);
    const question3 = useRef(null);
    const question4 = useRef(null);
    const question5 = useRef(null);
    const question6 = useRef(null);
    const question7 = useRef(null);
    const question8 = useRef(null);
    const result = useRef(null);


    const handleClick = (reference, lockObject) => {
        setLocks(lockObject)
        window.scrollTo({top: reference.current.offsetTop, behavior:"smooth"})
    }

    return(
        <div id="quiz">

            {/* Food Related */}
            <Question question="BREAKFAST :D"/>
            <div onClick={() => handleClick(question2, {...locks, lock1: true})}>
                <Choices choices={[["Denica's Ube Pancakes", UbePancakes],
                        ["A Bagel Cafe Bagel", Bagels],
                        ["Green Onion Pancakes", GreenOnionPancakes],
                        ["Soup", Soup]
                    ]}
                    isLocked={locks.lock1}
                />
            </div>

            <div ref={question2}>
                <Question question="Now, it's lunch time!" />
            </div>
            <div onClick={() => handleClick(question3, {...locks, lock2: true})}>
                <Choices choices={[["Pork Chop & Rice", PorkChopRice],
                        ["Poke", Poke],
                        ["Sushi & Sashimi", SushiSashimi],
                        ["Vons", Vons]
                    ]}
                    isLocked={locks.lock2}
                />
            </div>
            
            <div ref={question3}>
                <Question question="What's for dinner?" />
            </div>
            <div onClick={() => handleClick(question4, {...locks, lock3: true})}>
                <Choices choices={[["Korean BBQ & Hotpot", KoreanFood],
                        ["Ramen", Ramen],
                        ["Mediteranean food", MediterraneanFood],
                        ["Hawaiian BBQ", HawaiianBBQ]
                    ]}
                    isLocked={locks.lock3}
                />
            </div>

            <div ref={question4}>
                <Question question="Room for dessert?" />
            </div>   
            <div onClick={() => handleClick(question5, {...locks, lock4: true})}>
                <Choices choices={[["Ice Cream", IceCream],
                        ["Boba", Boba],
                        ["Cake", Cake],
                        ["Cookies", Cookie]
                    ]}
                    isLocked={locks.lock4}
                />
            </div>


            {/* Personality Related */}
            
            <div ref={question5}>
                <Question question="What is your Nen ability?" />
            </div>
            <div onClick={() => handleClick(question6, {...locks, lock5: true})}>
                <Choices choices={[["Enhancement", Gon],
                        ["Transmution", Killua],
                        ["Conjuration", Kurapika],
                        ["Emission", Leorio],
                        ["Manipulation", Zushi],
                        ["Specialization", Chrollo]
                    ]}
                    isLocked={locks.lock5}
                />
            </div>

            <div ref={question6}>
                <Question question="What bender are you?" />
            </div>
            <div onClick={() => handleClick(question7, {...locks, lock6: true})}>
                <Choices choices={[["Air Bender", Aang],
                        ["Water Bender", Katara],
                        ["Fire Bender", Zuko],
                        ["Earth Bender", Toph]
                    ]}
                    isLocked={locks.lock6}
                />
            </div>
            
            <div ref={question7}>
                <Question question="Which type of surgeon are you?" />
            </div>
            <div onClick={() => handleClick(question8, {...locks, lock7: true})}>
                <Choices choices={[["Cardiothoracic Surgeon", CardioSurgeon],
                        ["Neurosurgeon", Neurosurgeon],
                        ["OB/GYN", OBGYN],
                        ["Plastic Surgeon", PlasticSurgeon]
                    ]}
                    isLocked={locks.lock7}
                />
            </div>

            <div ref={question8}>
                <Question question="What's your vampire power?" />
            </div>
            <div onClick={() => handleClick(result, {...locks, lock8: true})}>
                <Choices choices={[["Mind Read", Edward],
                        ["Power Shield", Bella],
                        ["Predict the Future", Alice],
                        ["Memory Access", Aro]
                    ]}
                    isLocked={locks.lock8}
                />
            </div>
            
            <div ref={result}>
                {Object.values(locks).every((val) => {return val === true}) ? <Result /> : ""}
            </div>

            {/* <Question
                question="Which artist do you want to see live?"
                choices={[

                ]}
            /> */}
        </div>

    );
}