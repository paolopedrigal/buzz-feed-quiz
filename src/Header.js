import "./Header.css";
import UserIcon from "./Images/hedgehog.jpg";
import CommunityTeamIcon from "./Images/buzzfeed-community-team-icon.jpg";
import CommentIcon from "./Images/comment-icon.png";
import FacebookIcon from "./Images/facebook-icon.png";
import PinterestIcon from "./Images/pinterest-icon.png";
import TwitterIcon from "./Images/twitter-icon.png";
import EmailIcon from "./Images/email-icon.png";
import CopyLinkIcon from "./Images/copy-link-icon.jpg";

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
            <div id="header-first-line">
                <p style={{textDecoration:"underline", fontWeight: "bolder"}} className="first-line">Community </p>
                <p className="first-line">•</p>
                <p className="first-line">Updated on {month[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</p>
            </div>
            <h1 id="quiz-title">Pick Your Favorites And See What Your Birthday Present Is.</h1>
            <p id="quiz-caption">I mean, how hard can it be?</p>
            <div id="header-info">
                <div className="info-container">
                    <img src={UserIcon} alt="Author icon." id="user-icon"/>
                    <div className="info">
                        <p>by <span style={{textDecoration: "underline", fontWeight: "bold"}}>paaowie</span></p>
                        <p>Community Contributor</p>
                    </div>
                </div>
                <div className="info-container">
                    <img src={CommunityTeamIcon} alt="BuzzFeed Community Team icon." id="community-team-icon"/>
                    <div className="info">
                        <p>Approved and edited by</p>
                        <p style={{textDecoration: "underline", fontWeight: "bold"}}>BuzzFeed Community Team</p>
                    </div>
                </div>
            </div>
            <div id="external-link-container">
                <img src={CommentIcon} alt="Comments icon." id="comment-icon"/>
                <p id="comment-text">View {randomNumber} comments</p>
                <img src={FacebookIcon} alt="Facebook logo." className="external-icon"/>
                <img src={PinterestIcon} alt="Pinterest logo." className="external-icon"/>
                <img src={TwitterIcon} alt="Twitter logo." className="external-icon"/>
                <img src={EmailIcon} alt="Email icon." className="external-icon"/>
                <img src={CopyLinkIcon} alt="Copy link icon." className="external-icon"/>
            </div>
        </div>
    );
}