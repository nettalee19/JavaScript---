function makeAllCaps(arr) {
    return new Promise((resolve, reject) => {
        let allNonString = arr.filter((str) => {
            return typeof str !== "string"
        })
        if (allNonString.length !== 0) {
            reject('one item or more are not string')
        } else {
            resolve(arr.map((str) => {
                return str.toUpperCase()
            }))
        }
    })
}

function sortWords(arr) {
    return new Promise((res, rej) => {
        if (arr.length > 0) {
            res(arr.sort())
        } else {
            rej('the array is empty')
        }
    })

}

const strArr = ['a', 'itay', 'hello', 'world'];
// makeAllCaps(strArr).then((result) => {
    // console.log(result)/
//     sortWords(result).then((sortData) => {
//         console.log(sortData);
//     }).catch((err) => {
//         console.log('error')
//     })
//
// }).catch((err) => {
//     console.log(err)
// })

// makeAllCaps(strArr)
//     .then(sortWords)
//     .then((result) => {
//         console.log(result)
//     }).catch((err) => {
//     console.log(err)
// })


makeAllCaps([1])
    .then(sortWords)
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })
