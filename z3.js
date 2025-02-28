function whatCentury(year){
  let result=Math.ceil(year/100);  
  switch(result%10){
    case 1:  
    return result + "st";
    case 2:
        return result + "nd";
    case 3:
        return result + "rd"
    default: 
    return result + "th"
  }
}
console.log(whatCentury(1999));



