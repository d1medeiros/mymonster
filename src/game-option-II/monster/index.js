import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";
import * as Actions from "./monsterRedux";
import {range} from '../../util/utils'
import {PuppyForm, Freckles, Basic} from "../../assert/models";

class Composer {

}

class Monster extends Component {

    componentDidMount() {
        let monster = this.props.monster;
        this.props.setAge('YOUNG');
    }

    modify = (index) => {
        let element = this.props.monster.elements[0];
        let Square = () => <div className={`style div${++index}`}/>;
        if (element) {
            return <div className={`style div${++index}`}>
                {element.fn()}
            </div>;
        }
        return <Square/>;
    };

    draw = () => {
        let {square = 0} = this.props.monster;
        return range(square).map((i, key) => {
            let Square = () => this.modify(i);
            return <Square key={key}/>;
        });
    };

    render() {
        return (
            <Fragment>
                <div className="shape">
                    <Basic/>
                </div>
                {this.draw()}
            </Fragment>
        )
    }

}

const mapStateToProps = state => ({monster: state.monster});
export default connect(mapStateToProps, Actions)(Monster)