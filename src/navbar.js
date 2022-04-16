import "./navbar.css"
function handleMove(a){
    console.log('TO ' + a);
    document.getElementById(a).scrollIntoView()
}
function navbar() {
    return (
        <div id="navbar_parent">
            <div id="home" className="navbar_item" onClick={() => handleMove("intro_body")}>
                Home
            </div>
            <div id="how_it_works" className="navbar_item" onClick={() => handleMove("five_steps_cnt")}>
                How it Works
            </div>
            <div id="sign_up" className="navbar_item" onClick={() => handleMove("signup_container")}>
                Sign Up
            </div>
        </div>
    )
}

export default navbar;