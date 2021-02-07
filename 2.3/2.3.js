function circleArea(radius){
  let area = (Math.PI) * Math.pow(radius, 2);
  area = area.toFixed(2);

  console.log("The area of a circle with a radius of " + radius + " is: " + area);
}

circleArea(3);
circleArea(8);