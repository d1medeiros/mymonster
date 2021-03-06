import {fillStructure} from "../../util/utils";
import {
    EyesAngry,
    EyesClosed,
    eyesManipulate,
    EyesNormal
} from "../../assert/models";
import React from "react";

/////////////////////////////////////////////////// TYPES

export const RESERVE = 'RESERVE';
export const MAINTAIN = 'MAINTAIN';
export const COLOR = 'COLOR';
export const STAMINA = 'STAMINA';
export const ENERGY = 'ENERGY';
export const EMOTION = 'EMOTION';
export const ELEMENT = 'ELEMENT';

/////////////////////////////////////////////////// ACTIONS
export const setElement = (element, grid) => {
    return {
        type: ELEMENT,
        element: element,
        grid: grid
    }
};

export const setColor = color => {
    return {
        type: COLOR,
        color: color
    }
};

export const setEmotion = emotion => {
    const grid = "d5";
    return dispatch => {
        dispatch({type: EMOTION, emotion: emotion });
        switch (emotion) {
            case "ANGRY":
                dispatch(setElement(<EyesAngry/>, grid));
                return ;
            case "SLEEPY":
                dispatch(setElement(<EyesClosed/>, grid));
                return <EyesClosed/>;
            default:
                dispatch(setElement(<EyesNormal/>, grid));
                return <EyesNormal/>;
        }
    }
};

export const setStamina = stamina => {
    return {
        type: STAMINA,
        stamina: stamina
    }
};

export const setEnergy = energy => {
    return {
        type: ENERGY,
        energy: energy
    }
};

export const addReserve = reserve => {
    return {
        type: RESERVE,
        reserve: reserve
    }
};

export const maintain = (element, grid) => {
    return dispatch => {
        dispatch({type: MAINTAIN});
        dispatch(setElement(element, grid));
    }
};

export const feed = (food) => {
    return dispatch => {
        dispatch(addReserve(food));
    }
};


/////////////////////////////////////////////////// REDUCER
const MONSTER_INITIAL = {
    square: 9,
    color: {r: 100, g: 100, b: 100},
    stamina: 0,
    energy: 0,
    reserve: [],
    structure: fillStructure(),
    emotion: "NORMAL"
};

export const monsterReducer = (state = MONSTER_INITIAL, action) => {
    switch (action.type) {
        case ELEMENT:
            state.structure.set(action.grid, {element: action.element});
            return Object.assign({}, state);
        case EMOTION:
            return Object.assign({}, state, {emotion: action.emotion});
        case COLOR:
            return Object.assign({}, state, {color: action.color});
        case STAMINA:
            return Object.assign({}, state, {stamina: action.stamina});
        case ENERGY:
            return Object.assign({}, state, {energy: action.energy});
        case RESERVE:
            let newReserve = Array.from(state.reserve);
            newReserve.push(action.reserve);
            return Object.assign(
                {},
                state,
                {reserve: newReserve});
        case MAINTAIN:
            let oldReserve = Array.from(state.reserve);
            oldReserve.forEach(r => {
                if (r.color) {
                    state.color.r += r.color.r;
                    state.color.g += r.color.g;
                    state.color.b += r.color.b;
                }
                if (r.stamina)
                    state.stamina += r.stamina;
                if (r.energy)
                    state.energy += r.energy;
            });
            state.reserve = [];
            return Object.assign({}, state);
        default:
            return state
    }
};