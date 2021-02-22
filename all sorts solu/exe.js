let arr = [1, 5, 'a', -3, 5, 'b', 'c', 'b', -3,5];

let arr2 = [[1, 2, 1, 1], [2, 4, 6, 1], [8, 9, 1, 1]]
//[1,5,'a',-3,'b','c'] // step 1
//[1,1,1,3,2,1]  //dup elemnts //step 2
const test = (arr) => {
    let newArr = [];
    let counts = [];
    for (let j = 0; j < arr.length; j++) {
        if (newArr.indexOf(arr[j]) === -1) {
            newArr.push(arr[j]);
            counts.push(1);
        } else {
            let countIndex = newArr.indexOf(arr[j]) // =>1
            counts[countIndex]++;
        }
    }

    return maxValue(counts,newArr);
}

//[1,2,3,4,5]
//[1,1,2,1,1]
const maxValue = (counts, newArr)  =>{
    let max = 0;
    for (let i = 0; i < counts.length; i++) {
        if(counts[i] > max){
            max =counts[i];
        }
    }

    // console.log("new arr :", newArr)
    // console.log("counts :", counts)
    // console.log("max :", max)
    let maxIndex =counts.indexOf(max);
    let maxNumber = newArr[maxIndex]
    // console.log("maxNumber",  maxNumber)

    return maxNumber;
}

console.log(test(arr));

// for(let i=0 ; i < arr2.length ; i++){
//     console.log(test(arr2[i]))
// }

