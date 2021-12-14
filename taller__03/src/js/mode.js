const list1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
];

const list1Count = {};
console.log(list1Count);

list1.map(item => {
    if (list1Count[item]) {
        list1Count[item]++;
    } else {
        list1Count[item] = 1;
    }
});

const list1Array = Object.entries(list1Count).sort(
    ( acc, curr) => {
        return acc[1] - curr[1];
    }
);

const mode = list1Array[list1Array.length - 1][0];

const calc_mode = ( list ) =>{
    const list1Count = {};
    console.log(list1Count);

    list.map(item => {
        if (list1Count[item]) {
            list1Count[item]++;
        } else {
            list1Count[item] = 1;
        }
    });

    const list1Array = Object.entries(list1Count).sort(
        ( acc, curr) => {
            return acc[1] - curr[1];
        }
    );

    const mode = list1Array[list1Array.length - 1][0];

    return mode;
};