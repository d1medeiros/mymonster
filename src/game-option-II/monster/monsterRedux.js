import {Horn} from "../../assert/models";
import React from "react";

export const AGE = 'AGE';

export const setAge = (age) => {
    return {
        type: AGE,
        age: age
    }
};

export const change = () => {
    return dispatch => {

    }
};


const MONSTER_INITIAL = {
    square: 9,
    age: 'BABY',
    elements: [{fn: () => <Horn/>}]
};

export const monsterReducer = (state = MONSTER_INITIAL, action) => {
    switch (action.type) {
        case AGE:
            return Object.assign(
                {},
                state,
                {age: action.age});
        default:
            return state
    }
};