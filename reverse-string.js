function reverseString(){
    let str = "w3resource"
    // let arrayString = []

    let custom = str.replace(str.charAt(0),str.charAt(str.length-1));
    console.log(custom);
    // for (let index = 0; index < str.length; index++) {
    // }
    // return arrayString.reverse().join(" ");
    
}

console.log(reverseString());