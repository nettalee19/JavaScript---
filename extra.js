let numbers = [1, 4, 5, 7, -2];
//0=>1 ,5, 10
const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}
const multi = arr => {
    let mul = 1;
    for (let i = 0; i < arr.length; i++) {
        console.log("[mul] :", mul);
        console.log("[arr[i]] :", arr[i])
        mul *= arr[i];
    }
    return mul;
}
const removeEven = () => {
    let newArr = []; // 1,5,7
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) { //insert the add element
            newArr.push(numbers[i])
        }
    }

    numbers = newArr;
}
const maxInArray = (arr) => {
    if (arr.length === 0) return 'Error'
    let max = arr[0];//-5,-2,-10,-9
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
}
const test = (arr, callback) => {
    return callback(arr);
}
const divArrayByTwo = (arr) => {
    return arr.map((num) => {
        return num / 2
    })
}
const divArrayByTwoForEach = (arr) => {
    let newArr = [];
    arr.forEach((num) => {
        newArr.push(num / 2);
    });

    return newArr;
}
const changeArr = () => {
    numbers.forEach((num, index, theArray) => {
        theArray[index] = theArray[index] * 2
    })

}
const doubleNegative = (arr) => {
    return arr.filter((num) => {
        return num < 0
    }).map((num) => {
        return num * 2
    }).filter((num) => {
        return num > -100
    })
}

const doubleNegativeForeach = (arr) => {
    let temp = [];
    arr.forEach((num) => {
        if (num < 0) {
            if (num * 2 > -100) {
                temp.push(num * 2)
            }
        }
    })

    return temp;
}

// const array1 = [5, 12, 8, 130, 44];
//
// const found = array1.find(element => element > 10);
//
// console.log(found);
// expected output: 12

//area 0-negev - 1 tel aviv 3-north
// const db = [
//     {
//         name : 'itay',
//         age : 30,
//         area : 0,
//         grades : [80,90]
//     },
//     {
//         name : 'yossi',
//         age : 31,
//         area : 1,
//         grades : [90,100]
//     },
//     {
//         name : 'asaf',
//         age : 31,
//         area : 0,
//         grades : [30,40]
//     }
// ]

//find person from tel aviv
// console.log(db.find(per => per.area === 1))
//find  all persons from tel negev
// console.log(db.find(per => per.area === 0))
// console.log(db.filter((per)=>{return per.area ===0}))

// console.log(db.find((per)=>per.grades.includes(100)))

// console.log(db.filter((per)=>per.grades.includes(100)))

// console.log(db.find((per)=> Math.max(per.grades[0],per.grades[1]) > 80))

const obj = {
    itay: [80, 90, 52, 67],
    pini: [85, 41, 78, 100],
    minGrade: function () {
        return this.itay;
    }

}

console.log(obj.minGrade())
