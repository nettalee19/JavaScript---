
const isLeapYear = (year) => {
  if(year % 4 === 0){
    if(year % 400 === 0){
      console.log("Leap year");
    }
    else if (year % 100 === 0){
      console.log("Not a leap year");
    }
    else {
      console.log("Leap year");
    }
  }
  else {
    console.log("Not a leap year");
  }
}


isLeapYear(2008);
isLeapYear(2012);
isLeapYear(2100);
isLeapYear(2400);
isLeapYear(1997);