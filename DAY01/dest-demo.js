// destructuring
var array = [11,22,33,44];
var [x,y]=array; // x=11; y=22
console.log("x=",x);
console.log("y=",y);

var [a,b,c] = array;
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);

//object
const person = {
    name: "Duong",
    Age:19,
    city:"Ha Noi"
};

console.log(person.name); //john
console.log(person.age);    //19 

const { name, city}= person;
console.log(name); // john
//console.log(age); //19
console.log(city); //Ha Noi