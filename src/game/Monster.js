import React from "react"
import * as style from "../Basico.module.scss";


//util
function range(v) {
    return Array.apply(null, {length: v}).map(Number.call, Number)
}

function generateSquare(quantity){
   return range(quantity).map((i, key)=>(<Square key={key}/>))
}


//components
const Square = props => {
    return (
        <div className={style.square}>
            square
        </div>
    )
}

const Baby = props => {
    return (
        <div className={style.ageContainer}>
            <Square/>
        </div>
    )
};

const Young = props => {
    return (
        <div className={style.ageContainer}>
           {generateSquare(6)}
        </div>
    )
};

//logic
export class AgeFactory {
    _ageModel;
    constructor() {
        this._ageModel = new Map();
        this._ageModel.set("BABY", () => <Baby/>);
        this._ageModel.set("YOUNG", () => <Young/>);
    }

    get(key) {
        return this._ageModel.get(key)
    }
}


