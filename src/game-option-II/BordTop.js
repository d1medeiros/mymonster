import React, {Component} from "react";
import {connect} from "react-redux";
import * as Actions from "./monster/monsterRedux";

class BordTop extends Component {
    render() {
        return (
            <div className="bord-top">
                <button onClick={()=>this.props.feed()}>cenoura</button>
                <button onClick={()=>this.props.maintain()}>maintain</button>
            </div>
        );
    }
}


const mapStateToProps = state => ({monster: state.monster});
export default connect(mapStateToProps, Actions)(BordTop)