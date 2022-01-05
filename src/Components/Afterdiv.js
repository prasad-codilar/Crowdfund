import React, { Component } from 'react';
import './Afterdiv.css';

export default class Afterdiv extends Component {
    render() {
        return (
            <>
                <div className="mainsection">
                    <div className="divs">
                        <div><h1>$37,580 </h1> <p> of $100,000 backed</p></div>
                        <div><h1>5,007 </h1> <p> total backers</p></div>
                        <div><h1>56 </h1><p> days left</p></div>
                    </div>
                    <br />
                    <div id="myProgress">
                        <div id="myBar"></div>
                    </div>
                   
                </div>

            </>
        )
    }
}
