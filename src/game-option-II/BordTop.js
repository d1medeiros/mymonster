import React, {Component} from "react";
import {connect} from "react-redux";
import * as Actions from "./monster/monsterRedux";
import {generateElements, generateGrid} from "../assert/models";


class BordTop extends Component {
    getFreeGrid = structure => {
        let arr = [];
        let entries = structure.entries();
        Array.from(entries).forEach(i => {
            let e = i[i.length - 1];
            if (e.element)
                arr.push(i[0]);
        });
        console.log(arr);
        return generateGrid(arr);
    };

    maintain = () => {
        let grid = this.getFreeGrid(this.props.monster.structure);
        let elements = generateElements();
        this.props.maintain(elements, grid);
    };

    render() {
        return (
            <div className="bord-top">
                <button onClick={() => this.props.setEmotion("ANGRY")}>angry</button>
                <button onClick={() => this.props.setEmotion("SLEEPY")}>sleepy</button>
                <button onClick={() => this.props.setEmotion("NORMAL")}>normal</button>
                <button onClick={() => this.props.feed()}>cenoura</button>
                <button onClick={() => this.maintain()}>maintain</button>
            </div>
        );
    }
}


const mapStateToProps = state => ({monster: state.monster});
export default connect(mapStateToProps, Actions)(BordTop)