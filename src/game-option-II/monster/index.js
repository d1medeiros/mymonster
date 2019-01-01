import React, {Component} from 'react'
import {connect} from "react-redux";
import * as Actions from "./monsterRedux";
import {range} from '../../util/utils'
import {Basic, Horn} from "../../assert/models";
import EyesContainer from "./elements/eyes"

function parseColorRGB(color) {
    let {r, g, b} = color;
    return `rgb(${r},${g},${b})`
}

function drawElements(index, monster) {
    let item = monster.structure.get(`d${index}`);
    if (item && item.element) {
        return item.element;
    }
    return;
}

class Monster extends Component {

    componentDidMount() {
        this.props.setElement(<EyesContainer/>, "d5");
    }

    draw = () => {
        let {square} = this.props.monster;
        return range(square).map((i, key) => {
            return <div key={key}
                        className={`style div${++i}`}
                        children={drawElements(i, this.props.monster)}
            />;
        });
    };

    render() {
        let {color} = this.props.monster;
        return <>
            <div className="shape">
                <Basic colorFill={parseColorRGB(color)}/>
            </div>
            {this.draw()}
        </>;
    }

}

const mapStateToProps = state => ({monster: state.monster});
export default connect(mapStateToProps, Actions)(Monster)