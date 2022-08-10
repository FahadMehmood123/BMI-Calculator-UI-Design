import React from "react";
import './Upper-part.css'


function Upper() {
    return <>
<h1>BMI Calculator</h1>
        
        <div className="head">
        
            <label>Units</label>
            <input type='text' placeholder="Standard"></input><br></br>
            <label>Weight</label>
            <input type='text' id="pract1" placeholder="160"></input><p>pounds</p><br></br>
            <label>Height</label>
            <input type='text' id="pract2" placeholder="5"></input><p>feet</p><br></br>
            <input type='text' id="pract3" placeholder="9"></input><p>inches</p>

        </div>

    </>
}

export default Upper;
