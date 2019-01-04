import React, {Component} from 'react'
import {connect} from "react-redux";
import * as Actions from "./monsterRedux";
import {range} from '../../util/utils'
import {Basic, EyesNormal} from "../../assert/models";

function contrastRGB(color) {
const plus = 50;
    return Object.assign({},
        color,
        {r:color.r+plus},
        {g:color.g+plus},
        {b:color.b+plus})
}

function parseColorRGB(color) {
    let {r, g, b} = color;
    return `rgb(${r},${g},${b})`
}

function drawElements(index, monster) {
    let item = monster.structure.get(`d${index}`);
    if (item && item.element) {
        let Element = props => item.element.type(props);
        return <Element colorFill={parseColorRGB(monster.color)}/>;
    }
    return;
}

class Monster extends Component {

    componentDidMount() {
        this.props.setElement(<EyesNormal/>, "d5");
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
                <Basic colorFill={parseColorRGB(contrastRGB(color))}/>
            </div>
            {this.draw()}
        </>;
    }

}

const mapStateToProps = state => ({monster: state.monster});
export default connect(mapStateToProps, Actions)(Monster)