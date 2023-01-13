let sales = 123;
let course = 'typeScript';
let is_published = true;
let level;
level = 1;
level = "a";
const names = "Ahmad"

function render(document: any) {
    console.log(document);

}

let number: number[] = [1, 3, 4,]
let number1: any[];

let user: [number, string] = [1, 'Ahmad',];
user[0].valueOf
user[1].length
user.push(1);
// enum
const small = 1;
const medium = 2;
const large = 3;
enum Size {Small = 1, Mdium = 2, Large =2}
let mySize: Size = Size.Mdium;
console.log(mySize);

// function
function calculaterTax(income: number, taxYar?: number): number {
    if (income < 400)
    return income * 1.2;
    return income * 1.3;
}
//colculateTax(10_000);
// object
let employee: {
    id: number,
    name: string
} = {id: 1, name: 'Ahmad'}

