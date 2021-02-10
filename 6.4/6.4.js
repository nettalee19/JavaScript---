

const avgJumper = () => {
    let array = [];
    
    for (let i = 0; i < jumpers.length; i++) {
        array.push(jumpers[i])
        if ((i + 1) % 3 === 0) {
            console.log(avg(array))
            array =[];
        }
    }
}

const avg = (array) => {
    let avgC = 0;
    let count =0;

    for (let i = 0; i < array.length; i++) {
        if(array[i] !== -1){
            avgC += array[i];
            count++;
        }
    }
    if(count ===0) return -1;
    return avgC/count;
}

const bestAvgJump = () => {
    let array = avgJumper();

    let max = array[0];
    for(let i=1 ; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
        }
    }
    return max;
}

const bestJump = (jumpers) => {
    let bestJump = jumpers[0];

    for(let i=1 ; i < jumpers.length; i++){
        if (jumpers[i] > bestJump){
            bestJump = jumpers[i];
        }
    }
    return bestJump;
}

const jumpers = [5, 5, 8, 7, 3, -1];

avgJumper();

bestAvgJump();

bestJump(jumpers);
