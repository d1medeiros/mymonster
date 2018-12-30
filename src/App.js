import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from "react-redux";
import configureStore from "./store";
import Monster from "./game-option-II/monster";
import './assert/scss/Basico.scss';
import './App.css';

const store = configureStore();

function Container(props) {
    return <div className="main">
        <div/>
        <div className="container">
            <div className="bord-top"/>
            <div className="bord-bottom"/>
            <div className="bord-left"/>
            <div className="bord-right"/>
            <div className="central">
                <div className="frame">
                    {props.children}
                </div>
            </div>
        </div>
        <div/>
    </div>;
}

class App extends Component {
    render() {
        return (
            <Container>
                <Provider store={store}>
                    <Router>
                        <Route
                            path="/monster"
                            component={Monster}/>
                    </Router>
                </Provider>
            </Container>
        );
    }
}

export default App;
