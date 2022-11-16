class car1{
    color = "black"
    model = "BMW"
    year = 2014
    constructor(color, model, year){
        this.color = color
        this.model = model
        this.year = year
    }
    engineStart(){
        return console.log(`${this.color} ${this.model} ${this.year} engine started`)
    }
}



class car2{
    color = "red"
    model = "Mercedes"
    year = 2010
    constructor(color, model, year){
        this.color = color
        this.model = model
        this.year = year
    }
    engineStop(){
        return console.log(`${this.color} ${this.model} ${this.year} engine stoped`)
    }
}
let car = {}

console .log(car1 = new car2)