//Object is a collection of properties
import { Person } from "./classes"
let person =  {
    firstname : 'Wahida',
    lastname : "Borbhuyan",
    age : 28,
    fullname : function() {
        console.log(this.firstname +" "+ this.lastname) //"this" represents current object
    }
}
console.log("=========================================================================")

//printing an object
console.log(person.firstname)
console.log(person['lastname'])
person.fullname()

console.log("=========================================================================")

//altering an object
person.firstname = "Tuku" 
console.log(person.firstname)

console.log("=========================================================================")

//Creating property at runtime 
person.gender = "Female"
console.log(person)

console.log("=========================================================================")

//To check if property exists
console.log('gender' in person)

console.log("=========================================================================")

//Iterate over the object
for(let key in person){
    console.log(person[key])
}