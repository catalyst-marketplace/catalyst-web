import logo from './logo.svg';
import Navbar from "./navbar.js";
import "./Introduction.css";

function Introduction() {
    return(
        <div id="intro_body">
            <Navbar />
            <img src={logo} id="logo"/>
            <h1 id="title">CATALYST </h1>
            <h2 id="subtitle">
             On April 22nd, we are going to change the way people learn.
            </h2>
            <h4 id="intro_description">
            Introducing Catalyst, the world’s first
video-subscription marketplace for technique-based learning. Starting with yoga.
            </h4>
            <div className='helping_people_container'>
                <h4>
                    Helping People:
                </h4>
                <ul>
                    <li>
                        Save Time
                    </li>
                    <li> Save Money </li>
                    <li>Get Personalization</li>
                </ul>
            </div>
        </div>
    )
}

export default Introduction;