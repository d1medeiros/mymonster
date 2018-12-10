import React, {Fragment} from "react"
import * as style from "../Basico.module.scss";


//util
function range(v) {
    return Array.apply(null, {length: v}).map(Number.call, Number)
}

function renderChoise(arr, element, r) {
    return arr.includes(element) ? r : " ";
}

//components
const Square = props => {
    console.log("Square", props);
    const styleSquare = `${style.square}`;
    return (
        <div className={styleSquare}>
            {props.children}
        </div>
    )
};

const elements = new Map();
elements.set(4, <Horn quantity={5} color1="brown" color2="orange"/>);

const Age = props => {
    let {
        qtd = 9,
        colorFill = "#333",
        ageStyle = style.ageContainer
    } = props;
    return (
        <Fragment>
            <div className={style.squareBase}>
                <Basic colorFill={colorFill}/>
            </div>
            <div className={ageStyle}>
                {range(qtd)
                    .map((i, key) => {
                        console.log(`Age drawing square ${i}`);
                        let element = elements.get(i);
                        return (
                            <Square key={key}>
                                {element}
                            </Square>
                        )
                    })}
            </div>
        </Fragment>
    )
};

const Baby = props => (<Age />);

const Young = props => (<Age colorFill="green" {...props}/>);

const Basic = props => {
    console.log("Basic", props);
    let {colorFill = "#333"} = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 100 100" width="250" height="250">
            <path
                d=" M 76 16.167 C 72.262 16.79 56.949 8.987 52.333 7.833 C 44.454 7.833 38.814 13.5 31.333 13.5 C 24.369 13.5 15.284 20.316 14 24.167 C 11.654 31.205 9.255 37.813 7.667 44.167 C 5.684 52.096 7.333 61.39 7.333 68.167 C 7.333 77.598 14.895 82.132 22 84.5 C 28.399 86.633 38.729 91.146 44.667 89.167 C 51.551 86.872 61.752 85.5 68 85.5 C 74.446 85.5 84.288 75.257 86.667 70.5 C 89.794 64.246 90.667 54.075 90.667 48.5 C 90.667 38.748 86.764 33.458 84.333 26.167 C 83.095 22.45 78.758 17.046 76 16.167 Z "
                fill={colorFill}/>
        </svg>
    )
};

const Horn = props => {
    console.log("Horn", props);
    let {color1 = "brown", color2 ="orange", quantity = 1 } = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 100 100" width="30" height="30">
            <path d=" M 26.036 49.083 L 16.161 65.193 L 16.8 65.21 C 16.381 65.998 16.161 66.812 16.161 67.646 C 16.161 74.464 30.86 80 48.964 80 C 67.068 80 81.767 74.464 81.767 67.646 C 81.767 67.403 81.748 67.161 81.711 66.921 L 82 66.928 L 81.476 65.996 C 81.255 65.374 80.911 64.766 80.452 64.176 L 65.995 38.464 L 49.991 10 L 33.076 37.597 L 26.036 49.083"
                  fill={color1}/>
            <path d=" M 64.679 43.254 L 64.076 42.18 L 49.783 16.761 L 34.677 41.406 L 33.482 43.356 C 37.954 44.398 43.225 45 48.866 45 C 54.688 45 60.117 44.359 64.679 43.254 Z "
                  fill={color2}/>
        </svg>
    );
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


