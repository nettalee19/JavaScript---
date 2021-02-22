const arr = ["boo", "doooo", "hoo", "ro"];
// let lengths = [];
// for (let i = 0; i < arr.length; i++) {
//     lengths.push(arr[i].length);
// }
// console.log(lengths);
//

let lengths = [], i = 0;
while (i < arr.length) {
    lengths.push(arr[i++].length)
}

// console.log(lengths)


const populations = [10, 1441, 332, 83];

const percentageOfWorld1 = (population) => {
    return (population / 7900) * 100;
};
const populationPercentages = (arr) => {
    const percentages = [];
    let i = 0;
    while (i < arr.length) {
        const percent = percentageOfWorld1(arr[i]);
        percentages.push(percent);
        i++;
    }

    //
    // for (let i = 0; i < arr.length; i++) {
    //     const percent = percentageOfWorld1(arr[i]);
    //     percentages.push(percent);
    // }
    return percentages;
};
// console.log(populationPercentages(populations));

let number = 200, success = false;


while (success === false) {
    //input user
    //random

    let num = Math.floor(Math.random(0) * 500);

    if (num === number) {
        success = true;
    } else {
        console.log(num)
    }
}


