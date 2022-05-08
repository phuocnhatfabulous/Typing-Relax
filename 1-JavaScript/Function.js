//Type 1: A function as a statement
function showName(lastName) {
    var lastName = 'Phuoc Nhat';
    alert('My name is: ' + lastName);
}
showName(); //Result: Phuoc Nhat

//Type 2: A function as an expression
let myname = function name(first, last) {
    // OR let myname = function (first, last) { }
    let fullname = first + last;
    return fullname;
}
let res = myname('Phuoc', 'Nhat');
console.log(res); // result: PhuocNhat

//Type 3: A function as an arrow function
let Fullname = (firstName, lastName) => ({
    firstName: firstName,
    lastName: lastName
})
let Myname = Fullname('Phuoc', 'Nhat');
console.log(Myname); //Result: PhuocNhat
//Type 4: A function created using the function constructor
var add = Function('num1', 'num2', 'return num1+num2');
let Results = add(7, 8);
console.log(res); // 15
