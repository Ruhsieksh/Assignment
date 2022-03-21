export {};
let message = "welcome back again";
console.log(message);

let isBeginner: boolean = true;
let age: number = 22;
let name: string = "rushikesh";

let sentence: string = `my name is ${name} and my age is ${age} 
I am beginner in Typescript`;

console.log(sentence);

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3, 4];

let person: [string, number] = ["unknown", 22];

enum Color {
  Red = 5,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log(c);

let anyType: any;
anyType = 22;
anyType = true;
anyType = "max";

let multiType: Number | Boolean;
multiType = 20;
multiType = true;

function add(num1: number, num2?: number): number {
  return num1 + num2;
}
add(5, 10);
add(5);

interface Person {
  firstName: string;
  lastName?: string;
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: "Tony",
  // lastName: "Stark",
};

fullName(p);

class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`good morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("rushikesh");
console.log(emp1.employeeName);
emp1.greet();
