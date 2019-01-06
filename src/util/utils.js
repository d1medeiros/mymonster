export function range(v) {
    return Array.apply(null, {length: v}).map(Number.call, Number)
}

export function findElementsInArr(arr) {
    if (arr instanceof Array) {
        let size = arr.length;
        let random = getRandom(size);
        return findElementsInArr(arr[random - 1]);
    }
    return arr;
}

export function fillStructure() {
    let map = new Map();
    range(9).forEach(i => {
        map.set(`d${++i}`, {element: undefined})
    });
    return map;
}

export function getRandom(size) {
    if (size === 1) return size;
    return Math.floor((Math.random() * size) + 1);
}

export function contrastRGB(color, value) {
    const plus = value ? value : 50;
    return Object.assign({},
        color,
        {r: color.r + plus},
        {g: color.g + plus},
        {b: color.b + plus})
}

export function parseColorRGB(color) {
    let {r, g, b} = color;
    return `rgb(${r},${g},${b})`
}

export function rullingColor(color) {
    let {r, g, b} = color;
    let bigger = Math.max(r, g, b);
    if (r === bigger)
        return Object.assign({}, color, {g: 0}, {b: 0});
    else if (g === bigger)
        return Object.assign({}, color, {r: 0}, {b: 0});
    else if (b === bigger)
        return Object.assign({}, color, {g: 0}, {r: 0});
}
