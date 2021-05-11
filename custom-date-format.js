function customDate(){
    let fullDate = new Date();
    let month = fullDate.getMonth()
    let currentMonth = (month < 10)? "0"+month : month;
    let date = fullDate.getDate()
    let currentDate = (date < 10)? "0" +date : date;
    let year = fullDate.getFullYear()
    let mdy = `${currentMonth}-${currentDate}-${year}`
    let dmy = `${currentDate}/${currentMonth}/${year}`
    return mdy+ ","+dmy;
}

console.log(customDate());