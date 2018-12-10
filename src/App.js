import React, {Component} from 'react';
import './App.css';
import * as style from './Basico.module.scss';
import {AgeFactory} from "./game/Monster";


class App extends Component {
    render() {
        let YoungMonster = new AgeFactory()
            // .get("BABY");
        .get("YOUNG");
        return (
            <div className={style.container}>
                <div>x</div>
                <div className={style.item}>
                    <div className={style.itemWrap}>
                        <YoungMonster/>
                    </div>
                </div>
                <div>x</div>
            </div>
        );
    }
}

export default App;
