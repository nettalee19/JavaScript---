// const numbers = [124, 573, 42421, 3550, 23];
//
// function sortNumber(numsArr) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (numsArr.length === 0) {
//                 reject('empty array');
//             } else {
//                 resolve(numsArr.sort((a, b) => {
//                     return a - b
//                 }));
//             }
//         }, 1500)
//     })
// }
//
// function maxInArr(arr) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(arr.reduce((max, val) => {
//                 return val > max ? val : max;
//             }))
//         }, 1000)
//     })
// }
//
// async function main() {
//     // sortNumber(numbers).then((result)=>{
//     //     console.log(result);
//     // }).catch((err)=>{
//     //     console.log(err);
//     // })
//     try {
//         let result = await sortNumber([])
//         console.log(result)
//
//     } catch (err) {
//         console.log('err :',err)
//     }
//     // let maxNumber = await maxInArr(result);
//
//     // console.log(maxNumber)
// }
//
//
// main()


const getIDs = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([532, 543, 753, 1, 5]);
        }, 1500);
    });
}

const getRecipe = (recipeID) => {
    return new Promise((resolve, reject) => {
        setTimeout((ID) => {
                const recipe = {
                    title: "Fresh tomato pasta", publisher: "Pinchas Hodadad",
                };
                resolve(`${ID}: ${recipe.title}`);
            },
            1500,
            recipeID);
    });
};

getIDs().then((IDs) => {
    console.log(IDs);
    return getRecipe(IDs[2]);
})
    .then((recipe) => {
        console.log(recipe);
    })
    .catch((error) => {
        console.log("It is an error!");
    });


async function run(){

}

const run =async ()=>{
    try {
        const listId = await getIDs();
        const recipe = await getRecipe(listId[0])
        console.log(listId)
        console.log(recipe)
    }
    catch (err){
        console.log('error ',err)
    }
}


run();
