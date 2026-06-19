let day = "Monday";
let Quote = "Every weekday is dreadful, but " + day + " is the worst.";
//let val = Quote.indexOf("day"); 
//console.log(val); //output : 10
let count = 0 
for (let i = 0; i < Quote.length; i++) {
    if (Quote.includes("day")) {
        count++;
    }
}
console.log(count); //output : 1    
