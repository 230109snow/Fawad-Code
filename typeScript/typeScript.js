"use strict";
let sales = 123;
let course = 'typeScript';
let is_published = true;
let level;
level = 1;
level = "a";
const names = "Ahmad";
function render(document) {
    console.log(document);
}
let number = [1, 3, 4,];
let number1;
let user = [1, 'Ahmad',];
user[0].valueOf;
user[1].length;
user.push(1);
// enum
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Mdium"] = 2] = "Mdium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
let mySize = Size.Mdium;
console.log(mySize);
// function
function calculaterTax(income, taxYar) {
    if (income < 400)
        return income * 1.2;
    return income * 1.3;
}
//colculateTax(10_000);
// object
let employee = { id: 1, name: 'Ahmad' };
