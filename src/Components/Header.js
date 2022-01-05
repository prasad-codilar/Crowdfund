import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            state1: false,
        }
    }
    toggle = () => {
        this.setState({
            state1: this.state.state1 === true ? false : true
        })


    }
    render() {
        console.log(this.state.state1);
        return (
            <>
                <div className="parent">
                    <div className="top">
                        <div className="logo">
                            <img src="images/logo.svg" alt="" width={200} />
                        </div>
                        <div className={this.state.state1 ? ('listitems1') : ('listitems')}>
                            <ul>
                                <li>About</li>
                                <li>Discover</li>
                                <li>Get started</li>
                            </ul>
                        </div>
                        <div className='menu'>
                            <img src="images/menu.svg" alt="" onClick={this.toggle} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
