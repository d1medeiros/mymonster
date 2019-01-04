
export function range(v) {
    return Array.apply(null, {length: v}).map(Number.call, Number)
}

export function findElementsInArr(arr) {
    if (arr instanceof Array) {
        let size = arr.length;
        let random = getRandom(size);
        return findElementsInArr(arr[random-1]);
    }
    return arr;
}

export function fillStructure() {
    let map = new Map();
    range(9).forEach(i =>{
        map.set(`d${++i}`, {element:undefined})
    });
    return map;
}

function getRandom(size) {
    if(size === 1) return size;
    return Math.floor((Math.random() * size) + 1);
}