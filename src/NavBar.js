import "./NavBar.css";
import Menu from "./Images/burger-menu.png";
import BuzzFeedLogo from "./Images/buzzfeed-logo.png";
import Heart from "./Images/heart.png";
import Search from "./Images/search.png";
import OhReally from "./Images/oh-really-icon.png";
import Real from "./Images/real-icon.png";
import BuzzFeedIconLogo from "./Images/buzzfeed-icon-logo.png";

export default function NavBar() {
    return(
        <nav>
            <div id='menu'>
                <img src={Menu} alt="Hamburger menu." width="22px" height="15px"/>
            </div>
            <img src={BuzzFeedLogo} alt="BuzzFeed logo." id="buzzfeed-logo"/>
            <p className="nav-categories">Quizzes</p>
            <p className="nav-categories">TV & Movies</p>
            <p className="nav-categories">Shopping</p>
            <p className="nav-categories">Videos</p>
            <p className="nav-categories">News</p>
            <p className="nav-categories">Tasty</p>
            <img src={Heart} alt="Favorites." id="heart"/>
            <p id="sign-in">Sign In</p>
            <img src={Search} alt="Search" id="search"/>
            <div id='icon-container'>
                <img src={OhReally} alt="Oh Really?" className="nav-icon" id="oh-really"/>
                <img src={Real} alt="Real Estate" className="nav-icon" id="real"/>
                <img src={BuzzFeedIconLogo} alt="Trending" className="nav-icon" id="buzzfeed-icon-logo"/>
            </div>
        </nav>
    )
}