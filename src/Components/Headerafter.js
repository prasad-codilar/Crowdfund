import React, { Component } from 'react';
import './Headerafter.css';

export default class Headerafter extends Component {
    render() {
        return (
            <>
                <div className="main">
                    <div className="logo1">
                        <img src="images/logo-mastercraft.svg" alt="" />
                    </div>
                    <h1>Mastercraft Bamboo Monitor Riser</h1>
                    <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                    <div className="centerbutton">
                        <button>Back this project</button>
                        <div className='s'>
                            <img src="images/icon-bookmark.svg" width={95} alt="" />
                            <span>Bokkmark</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
