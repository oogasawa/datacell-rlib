

export function seq(len: number, start: number = 0, step: number = 1): number[] {
    let result = [];
    for (let i = start; i < start + len * step; i += step) {
        result.push(i);
    }
    return result;
}


export function rep(val: number, len: number): number[] {
    let result = [];
    for (let i = 0; i < len; i++) {
        result.push(val);
    }
    return result;
}



export function toArray(func, len = 1) {
    let result = [];
    let counter = 0;
    for (let i = 0; i < len; i++) {
        result.push(func.call());
    }

    return result;
}



export function extract(func, arr) {

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}


export function which(func, arr) {

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            result.push(i);
        }
    }
    return result;
}





export function cumsum(arr: Array<number>): Array<number> {
    let result = [];
    let sum = 0.0;
    for (let elem of arr) {
        sum += elem;
        result.push(sum);
    }
    return result;
}


export function cumprod(arr: Array<number>): Array<number> {
    let result = [];
    let prod = 1.0;
    for (let elem of arr) {
        prod *= elem;
        result.push(prod);
    }
    return result;
}


export function diff(arr) {
    let result = [];
    let e1 = null;
    let state = 0;
    for (let elem of arr) {
        if (state == 0) {
            e1 = elem;
            state = 1;
        }
        else {
            result.push(elem - e1);
            e1 = elem;
        }
    }
    return result;
}



