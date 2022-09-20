import "./Result.css";
import WaterLanternFestival from "./Images/water-lantern-festival.jpg";

export default function Result() {
    return(
        <div id="outer-box">
            <div id="inner-box">
                <h1 id="result-title">Water Lantern Festival</h1>
                <p id="result-caption">Happy birthday! You will be going to the Water Lantern Festival in San Jose on October 22, 2022! Yay! :D</p>
                <img src={WaterLanternFestival} alt="Water Lantern Festival" id="result-pic"/>
            </div>
        </div>
    );
}