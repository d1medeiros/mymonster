
export function range(v) {
    return Array.apply(null, {length: v}).map(Number.call, Number)
}