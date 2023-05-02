                     //Question 1
//  1) Create a Car class or function constructor that has the following properties:
// a. make (string): The make of the car, e.g., "Toyota".
// b. model (string): The model of the car, e.g., "Camry".
// c. year (number): The year the car was manufactured, e.g., 2020.
// d. isAvailable (boolean): Indicates if the car is currently available for rent

class Car {
    constructor(make,model,year,isAvailable){
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
    }
    toggleAvailability(){
        this.isAvailable=false
        console.log(this.isAvailable);
    }
}

let car = new Car('Toyota','Camry',2020,true)
console.log({car});
car.toggleAvailability()


// 2) Create a Rental class or function constructor that has the following properties:
// ● car (Car object): The car that has been rented.
// ● renterName (string): The name of the person who rented the car.
// ● rentalStartDate (Date object): The start date of the rental period.
// ● rentalEndDate (Date object): The end date of the rental period.
// The Rental class or function constructor should also have a method called
// calculateRentalDuration that returns the rental duration in days.
class Rental{
    constructor(car,rentalName,rentalStartDate,rentalEndDate){
        this.car = car;
        this.rentalName = rentalName;
        this.rentalStartDate = rentalStartDate;
        this.rentalEndDate = rentalEndDate;
    }
    rentalCarDuration(){
        let duration= Math.round(Math.abs(this.rentalEndDate-this.rentalStartDate))/(1000*60*60*24);
        return duration
    }
}
 let rental = new Rental ('Toyota','Rebecca Simiyu',new Date('12/3/2015'),new Date('2/12/2016'))
 console.log(rental);
console.log( rental.rentalCarDuration());

//  ) Create an instance of the Car class or function constructor for a car in the
// inventory. Then, create an instance of the Rental class or function constructor for
// a rental involving the car you created. Finally, calculate the rental duration using
// the calculateRentalDuration method.

// Question 2
// 1. Create a Question class with the following properties:
// ● text(string): The text of the question.
// ● options(array): An array containing the multiple-choice options.
// ● correctAnswer(string): The correct answer to the question.
// The Question class should also have a method called checkAnswer that takes a
// user's answer as a parameter and returns true if the answer is correct and false
// otherwise.

class Question{
    constructor(text,options,correctAnwers){
        this.text = text;
        this.options = options;
        this.correctAnwers =correctAnwers;
    }
    checkAnwer(answer){
        if (this.answer=='Friday') {
            return true
            
        } else {
            return false
        }
    }
}
let question = new Question('when is today?',['Monday','Tuesday','Friday'],'Friday');
console.log(question);
let answer='Monday'
console.log(question.checkAnwer(answer));


// 2. Create a Quiz class with the following properties:
// ● questions(array):An array of Question objects.
// ● currentQuestionIndex(number): The index of the current question in the
// questions array.
// ● score(number): The user’s current score.
class Quiz{
    constructor(questions,currentQuestionIndex,score){
        this.questions = questions;
        this.currentQuestionIndex = currentQuestionIndex;
        this.score = score;
    }
}
let quiz = new Quiz([question.text],1,0)
console.log(quiz);