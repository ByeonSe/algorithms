# Class

## what is a class?
- classes are blueprints for creating objects (instances) with pre-defined properties and methods 
- classes are good to implement data structures as classes 
- classes are created with the new keyword
- The constructor function is a special function that gets run when the class is instantiated

## class syntax
- constructor 
    - the method to create new objects must be called constructor 
- the class keyword creates a constant, so you can not redefine it. 
- use the ** new ** keyword to create objects from classes 
````Javascript 
class Student {
    constructor(firstNane, lastName) {
        this.firstName =  firstName;
        this.lastName = lastName
    }
}

let firstStudent = new Student ("Selina", "Byeon");
// {firstName: "Selina", lastName = "Steele"}
let secondStudent = new Student("Java", "Script");
// {firstName: "Java", lastName = "Script"}

````
# Instance Methods 
- provides functionality that pertains to a single instance 
````JavaScript
    class Student {
        constructor(firstNane, lastName) {
          this.firstName =  firstName;
          this.lastName = lastName;
          this.scores = [];
        }

        addScore(score) {
            this.scores.push(score);
            return this.scores
        }
        calcualteAcerage() {
            let sum = this.scores.reduce(function(a,b) {return a+b})
            return sum/this.scores.length;
        }
    }

````
- "this" meaning changes depends on concept
    - when inside of the class, "this" referes to the instance. 

````JavaScript
    firstStudent.addScores()
````

# Class Methods

- use "static" in front of the function(method)
- for "utility" function 

````JavaScript 
class Student {
        constructor(firstNane, lastName) {
          this.firstName =  firstName;
          this.lastName = lastName;
          this.scores = [];
        }

        static EnrollStudents {
            return "Enrolling"
        }
    }

Student.EnrollStudents ()

class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a,b) {
        const dx = a.x - b.x;
        const dy = a.y
    }
}
const p1 = new Point (5, 5);
const p2 = new Point (10, 10);

Point.distance(p1, p2)

````
- 'this'
    - inside all of our instance methods and constructor, the keyword 'this' refers to the object created from that class (also known as an instance)
- 