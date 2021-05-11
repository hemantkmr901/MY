function leapYear(){
    let sundayYear = [];
    for (let index = 2014; index <= 2050; index++) {
        if((new Date(index,0).getDay()) === 0){
            sundayYear.push(index);
        }
    }
    return sundayYear;
}
console.log(leapYear().join(" "));

// function leapYear(year){
//     return ((year % 100) === 0)? "Its a leap Year": "Its Not leap Year"
// }

// console.log(leapYear(2100));
