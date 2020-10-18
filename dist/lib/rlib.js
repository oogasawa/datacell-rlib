"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
function seq(len, start, step) {
    if (start === void 0) { start = 0; }
    if (step === void 0) { step = 1; }
    var result = [];
    for (var i = start; i < start + len * step; i += step) {
        result.push(i);
    }
    return result;
}
exports.seq = seq;
function rep(val, len) {
    var result = [];
    for (var i = 0; i < len; i++) {
        result.push(i);
    }
    return result;
}
exports.rep = rep;
function toArray(func, len) {
    if (len === void 0) { len = 1; }
    var result = [];
    var counter = 0;
    for (var i = 0; i < len; i++) {
        result.push(func.call());
    }
    return result;
}
exports.toArray = toArray;
function extract(func, arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}
exports.extract = extract;
function which(func, arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            result.push(i);
        }
    }
    return result;
}
exports.which = which;
function cumsum(arr) {
    var e_1, _a;
    var result = [];
    var sum = 0.0;
    try {
        for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
            var elem = arr_1_1.value;
            sum += elem;
            result.push(sum);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
exports.cumsum = cumsum;
function cumprod(arr) {
    var e_2, _a;
    var result = [];
    var prod = 1.0;
    try {
        for (var arr_2 = __values(arr), arr_2_1 = arr_2.next(); !arr_2_1.done; arr_2_1 = arr_2.next()) {
            var elem = arr_2_1.value;
            prod *= elem;
            result.push(prod);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (arr_2_1 && !arr_2_1.done && (_a = arr_2.return)) _a.call(arr_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return result;
}
exports.cumprod = cumprod;
function diff(arr) {
    var e_3, _a;
    var result = [];
    var e1 = null;
    var state = 0;
    try {
        for (var arr_3 = __values(arr), arr_3_1 = arr_3.next(); !arr_3_1.done; arr_3_1 = arr_3.next()) {
            var elem = arr_3_1.value;
            if (state == 0) {
                e1 = elem;
                state = 1;
            }
            else {
                result.push(elem - e1);
                e1 = elem;
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (arr_3_1 && !arr_3_1.done && (_a = arr_3.return)) _a.call(arr_3);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return result;
}
exports.diff = diff;
