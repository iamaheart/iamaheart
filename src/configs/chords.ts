const major = [0, 16, 19];
const minor = [0, 15, 19];
const aug = [0, 16, 20];
const dim = [0, 15, 18];
const sus4 = [0, 17, 19];
const major7 = [0, 11, 16, 19];
const minor7 = [0, 10, 15, 19];
const dim7 = [0, 9, 15, 18];
const mM7 = [0, 10, 16, 19, 23];
const b5 = [0, 16, 18];
const mb5 = [0, 15, 18];
const six = [0, 7, 16, 21];
const seven = [0, 10, 16, 19];
const nine = [0, 10, 14, 16, 19];
const eleven = [0, 4, 10, 17, 19];
const thirteen = [0, 10, 16, 21];
const seven913 = [0, 10, 14, 16, 21];
const sevenF9F13 = [0, 4, 7, 10, 13, 20];
const sevenS9F13 = [0, 4, 7, 10, 15, 20];
const seven9S1113 = [0, 4, 7, 10, 14, 17, 21];

const add2 = [0, 14, 16, 19];
const fNine = [0, 10, 13, 16, 19];
const sNine = [0, 10, 15, 16, 19];
const sEleven = [0, 4, 10, 18, 19];
const fThirteen = [0, 10, 16, 20];

export const list = [
    major,
    minor,
    add2,
    aug,
    dim,
    sus4,
    minor7,
    major7,
    dim7,
    mM7,
    b5,
    mb5,
    six,
    seven,
    fNine,
    nine,
    sNine,
    eleven,
    sEleven,
    fThirteen,
    thirteen,
    seven913,
    sevenF9F13,
    sevenS9F13,
    seven9S1113,
];

export enum chordList {
    major,
    minor,
    add2,
    aug,
    dim,
    sus4,
    minor7,
    major7,
    dim7,
    mM7,
    b5,
    mb5,
    six,
    seven,
    fNine,
    nine,
    sNine,
    eleven,
    sEleven,
    fThirteen,
    thirteen,
    seven913,
    sevenF9F13,
    sevenS9F13,
    seven9S1113,
}

export enum keyList {
    c,
    cb,
    d,
    eb,
    e,
    f,
    gb,
    g,
    ab,
    a,
    bb,
    b,
}

export const noteList = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

export const scaleList = ['1', '2m', '3m', '4', '5', '6m', '7dim'];

export const START_NOTE = 36;
