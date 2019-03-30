import React, {Component, Fragment} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import {Alert} from "reactstrap";


class App extends Component {
    render() {
        return (
            <Fragment>
                <Alert color="dark" className="nmc-top-alert m-0 text-muted">
                    This is a dark alert — check it out!
                </Alert>
                <div className="nmc-container">
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
            </Fragment>
        );
    }
}

export default App;
