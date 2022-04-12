import "./five_steps.css"
import item_1_b from "./numbers/one.svg"
import item_2_b from "./numbers/two.svg"
import item_3_b from "./numbers/three.svg"
import item_4_b from "./numbers/four.svg"
import item_5_b from "./numbers/five.svg"
function five_steps() {
    return (
        <div id="five_steps_cnt">
            <h2 id="five_steps_title">
                5 Simple Steps:
            </h2>
            <div>
                <div>
                    <img src={item_1_b} id="item_1_b" />
                    <h4 id="item_1">
                        Client scrolls through marketplace & filters based upon criteria (experience, type of yoga, cost/month, etc.)
                    </h4>
                </div>
                <div>
                    <img src={item_2_b} id="item_2_b" />
                    <h4 id="item_2">
                        Client selects the trainer that matches criteria and subscribes for
                        $x/month (avg price is $30/month)
                    </h4>
                </div>
                <div>
                    <img src={item_3_b} id="item_3_b" />
                    <h4 id="item_3">
                        Client fills out survey that the trainer wrote before-hand to gauge client’s personadivzed needs.
                    </h4>
                </div>
                <div>
                    <img src={item_4_b} id="item_4_b" />
                    <h4 id="item_4">
                        Client receives personalized video flow at frequency selected during subscription.
                    </h4>
                </div>
                <div>
                    <img src={item_5_b} id="item_5_b" />
                    <h4 id="item_5">
                        Client can direct message trainer with any question!
                    </h4>
                </div>
            </div>
        </div>
    )
}


export default five_steps;