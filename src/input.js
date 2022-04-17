import "./input.css"
import {getDatabse, ref, set} from "firebase/database";

async function write(db, name, email, status){
    set(ref(db, ))
    
}

function input(props) {
    const db = props.db;
    return (
        <div id={props.style}>
            <form>
                <input type="text" name="name" class="question" id="nme" required autocomplete="off" />
                <label for="nme"><span>What's your name?</span></label>
                <input type="text" name="email" class="question" id="nme" required autocomplete="off" />
                <label for="nme"><span>What's your email?</span></label>
                
                
                <input type="radio" defaultChecked={true} id="Client" name="user" value="Client"/>
                <label for="Client" className="choice">Client</label>
                <input type="radio" id="Trainer" name="user" value="Trainer"/>
                <label for="Trainer" className="choice">Trainer</label>
                <input id="submit_button" type="submit" value="Sign Up" />
            </form>
        </div>
    )
}

export default input;