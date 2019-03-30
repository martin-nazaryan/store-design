import React, {Component, Fragment} from 'react';
import logo from '../../logo.png';

export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className="nmc-header">
                    <p className="nmc-logo-text m-0">Lorem ipsum dolor sit amet.</p>
                    <img className="nmc-logo" alt="Logo" src={logo}/>
                </div>
            </Fragment>
        )
    }
}
