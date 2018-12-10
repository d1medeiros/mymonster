import React, {Component} from 'react';
import './App.css';
import * as style from './Basico.module.scss';
import {AgeFactory, HornCompose} from "./game/Monster";


class App extends Component {
    render() {

        const elements = new Map();
        elements.set(4,
            <HornCompose
                quantity={5}
                color1="brown"
                color2="orange"/>);

        let YoungMonster = new AgeFactory()
            // .get("BABY");
        .get("YOUNG");

        return (
            <div className={style.container}>
                <div>x</div>
                <div className={style.item}>
                    <div className={style.itemWrap}>
                        <YoungMonster
                            nome={"diego"}
                            colorFill="green"
                            elements={elements}/>
                    </div>
                </div>
                <div>x</div>
            </div>
        );
    }
}

export default App;
