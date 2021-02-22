const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];

const doubleArr = [[1,2,3],
                    [4,5,6],
                    [7,8,9]];

const print = (neighbours) => {
    for (let  listOfN of listOfNeighbours) {
        for (let c of listOfN) {
            console.log(c)
        }
    }
}

for(let i=0 ; i < doubleArr.length ; i++){//1
    for(let k=0 ; k < doubleArr[i].length ; k++){//0
        console.log(doubleArr[i][k])
    }

}


// print(listOfNeighbours)
