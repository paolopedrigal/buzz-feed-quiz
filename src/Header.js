import "./Header.css";

export default function Header() {

    const date = new Date()
    const month = {0: "January", 
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September", 
        9: "October", 
        10: "November",
        11: "December"
    }

    const randomNumber = Math.floor(Math.random() * 100)

    return(
        <div id="header">
            <img src="" alt="Quiz." />
            <div>
                <p>Community</p>
                <p>Updated on {month[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</p>
            </div>
            <h1>Pick Your Favorites And See What Your Birthday Present Is.</h1>
            <p>I mean, how hard can it be?</p>
            <div>
                <div>
                    <img src="" alt="Author icon." />
                    <p>by Paolo Pedrigal</p>
                    <p>Community Contributor</p>
                </div>
                <div>
                    <img src="" alt="BuzzFeed Community Team icon."/>
                    <p>BuzzFeed Community Team</p>
                </div>
            </div>
            <div>
                <img src="" alt="Comments icon." />
                <p>View {randomNumber} comments</p>
                <img src="" alt="Facebook logo."/>
                <img src="" alt="Pinterest logo." />
                <img src="" alt="Twitter logo." />
                <img src="" alt="Email icon." />
                <img src="" alt="Copy link icon." />
            </div>
        </div>
    );
}