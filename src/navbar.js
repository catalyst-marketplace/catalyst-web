import "./navbar.css"

function navbar() {
    return (
        <div>
            <ul id="navbar_parent">
                <li id="home" className="navbar_item">
                    Home
                </li>
                <li id="how_it_works" className="navbar_item">
                    How it Works
                </li>
                <li id="sign_up" className="navbar_item">
                    Sign Up
                </li>
            </ul>
        </div>
    )
}

export default navbar;