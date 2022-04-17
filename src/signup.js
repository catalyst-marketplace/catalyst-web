import "./signup.css"
import Input from "./input"




function signup(props) {

    return (
        <div id="signup_container">
            <p id="app_store_label">
                April 22.
                <br/>
                THE APP STORE.
                Android
                <br/>
                &
                <br/>
                IOS
            </p>
            <p id="signup_subtitle">
            If you’re interested in changing the learning process by being our early adopter:
            </p>
            <Input style="container" db={props.db}/>
        </div>
    )
}


export default signup;