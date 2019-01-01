import React, {Component} from "react";
import {EyesAngry, EyesClosed, EyesNormal} from "../../../../assert/models";
import {connect} from "react-redux";
import * as Actions from "../../monsterRedux";


class EyesContainer extends Component {
    constructor(props) {
        super(props);
        this.eyesType = new Map();
        this.eyesType.set("NORMAL", <EyesNormal/>);
        this.eyesType.set("ANGRY", <EyesAngry/>);
        this.eyesType.set("SLEEPY", <EyesClosed/>);
    }

    render() {
        let {type = "NORMAL"} = this.props;
        return this.eyesType.get(type);
    }
};

const mapStateToProps = state => ({monster: state.monster});
export default connect(mapStateToProps, Actions)(EyesContainer)