class Car1{
    num:number;
    constructor(num:number){
        this.num=num;
    }
    printNum(){
        console.log(this.num);
    }
}
// var lexus = new Car1(1);
// console.log(lexus.num);
// lexus.printNum();

//access modifiers
// private
//readonly
//protected
class Van extends Car1{
    printNum(){
        console.log(this.num *2);
    }
}
var lexus = new Van (1);
console.log(lexus.num);
lexus.printNum();