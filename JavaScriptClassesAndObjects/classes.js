// export expose functions, objects, variables, or classes from one file so they can be imported 
// and reused in other files

export class Person {
    occupation = "Software Engineer"
    get location()  {    //getter method to declare properties.
        return "India"
    }

    //constructor is a method which is executed by default whenever an object is created.
    constructor(firstname,lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }
    fullname() {
        console.log(this.firstname +" "+ this.lastname)
    }
}

let person = new Person("Wahida","Borbhuyan")
person.fullname()
console.log(person.occupation)
console.log(person.location) //here inside class, getter function can be accessed like normal property.
