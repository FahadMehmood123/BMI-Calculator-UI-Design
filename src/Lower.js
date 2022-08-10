import React from "react";
import './Lower.css';

function Lower() {
    return (<>
        <div className="parent1">
            <div className="childA"><p id="pa1">Under Weight<br></br>&#60;18.5</p></div>
            <div className="childB"><p id="pa1">Normal Weight<br></br>18.5-25</p></div>
            <div className="childC"><p id="pa1">OverWeight<br></br>25-30</p></div>
            <div className="childD"><p id="pa2">Obese<br></br>&#62;30</p></div>
        </div>

    </>)
}

export default Lower