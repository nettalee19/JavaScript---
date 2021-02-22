const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
// const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
const food2 = ["Pasta","Ice-cream", "Meat", "Cucumber", "Noodle", "Olives"];


const help = (val, arr) => {
    let count=0;
    for (let i = 0; i < arr.length; i++) {
        count++;
        if (val === arr[i]) {
            console.log("count :",count)
            return true;
        }
    }
    console.log("count :",count)
    return false;
}

const comp = (arr1, arr2) => {
    // let isExist = false , count = 0;
    for (let i = 0; i < arr1.length; i++) {
        let isExist = help(arr1[i], arr2)
        if (!isExist) return false;

        // for(let k=0 ; k< arr2.length ; k++){
        //     count++;
        //     if(arr1[i] === arr2[k]){
        //         isExist = true;
        //     }
        // }
        // if(isExist !== true){
        //     return false;
        // }
        //  isExist = false;

    }//end for
    return 0;
}

console.log(comp(food1, food2));
