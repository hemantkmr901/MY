function currentDate(){
    let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    let date = new Date();
    let currentDay ="Today is : "+days[date.getDay() - 1]
    let hour = date.getHours();
    if(hour > 12)
    {
        hour = (hour - 12) + " PM";
    }   else {
        hour = hour + " AM";
    }
    let currentTime = `Current time is : ${hour} : ${date.getMinutes()} : ${date.getSeconds()}`
    return currentDay + "\n"+currentTime;
}

console.log(currentDate());