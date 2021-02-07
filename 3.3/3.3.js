function percentageOfWorld1(population){
  let percentage = ((population/worldPop)*100).toFixed(2);

  return percentage;
}
function percentageOfWorld2(population){
  let percentage = ((population/worldPop)*100).toFixed(2);

  return percentage;
}

let worldPop = 7900;

console.log(`China's percentage population is: ${percentageOfWorld1(1441)}%`);
console.log(`USA's percentage population is: ${percentageOfWorld1(343)}%`);
console.log(`India's percentage population is: ${percentageOfWorld1(1366)}%`);

console.log(`China's percentage population is: ${percentageOfWorld2(1441)}%`);
console.log(`USA's percentage population is: ${percentageOfWorld2(343)}%`);
console.log(`India's percentage population is: ${percentageOfWorld2(1366)}%`);