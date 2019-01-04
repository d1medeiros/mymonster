import React, {Component} from "react";
import {connect} from "react-redux";
import * as Actions from "./monster/monsterRedux";
import {generateElements, generateGrid} from "../assert/models";



class BordTop extends Component {

    maintain = () => {
        let keys = this.props.monster.structure.keys();
        let grid = generateGrid();
        let structure = this.props.monster.structure.get(grid);
        let elements = generateElements();
        this.props.maintain(elements, grid);
    };

    render() {
        return (
            <div className="bord-top">
                <button onClick={()=>this.props.feed()}>cenoura</button>
                <button onClick={()=>this.maintain()}>maintain</button>
            </div>
        );
    }
}


const mapStateToProps = state => ({monster: state.monster});
export default connect(mapStateToProps, Actions)(BordTop)