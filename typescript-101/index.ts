// assigning types in typescript
let age: number = 34
let firstName: string = 'Angela'
let busy: boolean = true

// what the above means is that now age can only be a number, firstname a string
// and busy a boolean, this is how you assign types in typescript

// Example usage of typescript, we give a number type to the function and debug
// as needed (need to make strings and sometimes integers)

const reviewTotalDisplay = document.querySelector('#reviews')


const reviews = [
  {
    name: 'Sheia',
    stars: 5,
    loyaltyUser: true,
    date: '01-04-2021'
  },
  {
    name: 'Andrzej',
    stars: 3,
    loyaltyUser: false,
    date: '28-03-2021'
  },
  {
    name: 'Omar',
    stars: 4,
    loyaltyUser: true,
    date: '27-03-2021'
  },
]

const reviewNumber = reviews.length

function reviewCount(number: number) {
  reviewTotalDisplay.innerHTML = number.toString()
}

reviewCount(reviewNumber);

// To be able to actually use this the typescript compiler must be installed!

// There is usually type inference in Typescript, so TS understand that for
// example const age = 23 will have the value of 23 (number) and that let age
// = 23 will have a type of number as well, so we don't have to tell TS the type
// of variable that it is in those cases. For functions we are doing it because
// TS doesn't know what to expect from the parameters. At the same time we also
// have to do it if the value of the variable has not been declared yet, like
// let age (and if we hover it will say "type: any"

// For type "object" you need to define the type of each of the keys that go
// into the object itself (not really needed as TS inference exists, but it's
// best practice and useful, it seems, in React)

// Although it looks really like another object, each type is separated by a
// semicolon instead of a comma like the actual object

const you: {
  firstName: string;
  isReturning: boolean;
  age: number;
  lastName: string;
} = {
  firstName: 'Bobby',
  isReturning: true,
  lastName: 'Perez',
  age: 25
}

// Although TS has an array type, usually you will define the type based on
// what is inside the array, so for example an array of strings would be
// the following: (stayedAt key on the following object is the example)

const youTwo: {
  firstName: string;
  isReturning: boolean;
  age: number;
  lastName: string;
  stayedAt: string[];
} = {
  firstName: 'Bobby',
  isReturning: true,
  lastName: 'Perez',
  age: 25,
  stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

// If you have more than 1 type inside the array you need an union types
// stayedAt: (string | number)[];
// stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow', 23]

// Goof example of how to iterate through an array of objects, don't rely
// all the time on forEach, sometimes a for loop can be really useful as you
// get the "i" value for free (which serves as a counter for the index of
// the array)

//("properties" here is an array of objects)

// for (let i = 0; i < properties.length; i++) {
//   const card = document.createElement('div')            //create div element
//   card.classList.add('card')                     //add de "card" class to it
//   card.innerHTML = properties[i].title      //grabs the title of the index 0
//   const image = document.createElement('img')           //create img element
//   image.setAttribute('src', properties[i].image)         //set the src of it
//   card.appendChild(image)                        //append the img to the div
//   propertyContainer.appendChild(card)//append the card to the container(div)
// }

// Tuple Type: Allow you to express an array with a fixed number of elements
// whose types are known (is not an array!). You define the number of elements
// and the type of those elements, it follows that.
// To make something a tuple type you would have to do as the following example:
// (these are both inside an object, they are keys, the first as part of the
// type declaration)

// contact: [number, string];
// contact: [+1123495082908, 'marywinkle@gmail.com'],

// The above, will take only 2 elements, the first one a number and the second
// a string. That would be a tuple.

// Enum Type (or "Enumerations") are quite a new data type supported in TS.
// Enums help to be very specific about certain values that you can choose
// and you can make your "own" Types with enums. Example:

// const ADMIN = 'admin' // making Constants that have a value
// const READ_ONLY = 'read-only'


// enum Permissions { //use those constants as the options inside the type
//                    Permissions
//   ADMIN,
//   READ_ONLY
// }

// const you = {
//   firstName: 'Bobby',
//   lastName: 'Brown',
//   permissions: Permissions.ADMIN, //you can read those like an object and
//                                   now permissions only accept type Permissions
//   isReturning: true,
//   age: 35,
//   stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
// }

// The Any Type is similar to vanilla javascript, and we use it mainly when
// we don't know what kind of type to expect. This is to avoid a typechecking
// error as if you have a type already declared then you are expecting that type.
// In any case, it's better to avoid using it unless really necesarry as it can
// lead to bugs and errors.

// With the Union Type you convine types as a certain value could have more than
// one possible type, could it be an object, or an array, or number, etc. This
// will still limit what you can use as you define exactly the types that are
// expected. The syntax uses () and | (for the "or"):

// function add(firstValue : (number | string),
// secondValue: (number | string)) {} //first and second argument can only be a
// number or a string

// Literal Types are the ones tha besides specifying a type (like string, number,
// etc,), also specifies the value, something like:

// something :24, or something :'bob', so besides being a number, the number
// must be 24. The same for the following, besides being a string, it has to
// be the string 'bob'.
// It can be really useful when a standardization is needed, for example if we
// only want a certain price to be available we could do the following:

// (this is known as type Alias, creates a name to refer to these types bellow)
// type Price = 45 | 30 | 25 //so this is the Literal, only accept the numbers
// 45, 30, or 25
// Then, inside the actual declaraction of type for the variable, we would add
// this new type Alias, something like:

// const properties: {
//   image: string;
//   title: string;
//   price: Price; // Ofc it's also possible to put 45 | 30 | 25 directly here
//   location: {
//     firstLine: string;
//     city: string;
//     code: number;
//     country: string;
//   };
//   contact: [number, string];
//   isAvailable: boolean;
// }[] = [
//     {
//       image: 'images/colombia-property.jpg',
//       title: 'Colombian Shack',
//       price: 45,
//       location: {
//         firstLine: 'shack 37',
//         city: 'Bogota',
//         code: 45632,
//         country: 'Colombia'
//       },
//       contact: [+112343823978921, 'marywinkle@gmail.com'],
//       isAvailable: true
//     }

// There is also a Function Type in TS. Usually a function is expected to
// return something and although TS inferences it's pretty much there to
// infer that for you, you can also be literal and put it as well:

function add(firstValue: number, secondValue: number): number { // this last
  // number is saying that is a number to be returned from this function
  return firstValue + secondValue
}

// There is also a Void Type, which is different from the JS undefined. Some
// functions do not return anything are just part of a something else, in those
// cases what you are returning is void. If you try to set the type to undefined
// you will get an error and the only way to avoid the error while keeping the
// type of undefined would be to literally write at the end of the function:
// return undefined.

// If the function HAS a return inside, then there is no need to add the :void
// as it is returning something, you could add exactly what is returning, like
// defining all over again the contents as types, or put :any but that is not
// really the best practice.

// "Interfaces" in TS: In TypeScript, two types are compatible if their internal
// structure is compatible. This allows us to implement an interface just by
// having the shape the interface requires. An interface declaration is another
// way to name an object type:

interface Point {
  x: number;
  y: number;
}

interface Review {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}

// Type aliases and interfaces are very similar, and in many cases you can
// choose between them freely. Almost all features of an interface are available
// in type, the key distinction is that a type cannot be re-opened to add new
// properties vs an interface which is always extendable (inherit).

// Extending an interface

interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

// const bear = getBear()
//   bear.name
//   bear.honey

// Adding new fields to an existing interface

interface Window {
  title: string
}

// interface Window {
//   ts: TypeScriptAPI
// }

// const src = 'const a = "Hello World"';
// window.ts.transpileModule(src, {});

// The above add the ts field to Window.
// This cannot be done with a Type alias, it will trow an error. In few words,
// Interfaces are more fexible and can be modified.

// export default when there is only one thing that you are exporting
// so when you import it you don't have to put it in {} and you can name if
// whatever you want. Regular exports must be in curly braces and need to have
// the same name they had in the original file.

// Defining a class in TS is a little bit different from JS as you need to
// define the types as well:
// class in TS bellow:

// class Car {
//     make: string
//     year: number
//     color: string
//     constructor(make: string, year: number, color: string) {
//         this.make = make
//         this.year = year
//         this.color = color
//     }
// }

// for a JS class you only need the constructor (and not even the type
// inside it declarations)

// In TS you can have "optional" properties inside an object, which is different
// from saying that a property may have the value, for example, of
// number | undefined.
// To make it an optional property we use the question mark (?)

// function printCar(car: {
//   make: string
//   model: string
//   year: number
//   chargeVoltage?: number
// }) {
//   let str = `${car.make} ${car.model} (${car.year})`
//   car.chargeVoltage
// ------ This section over here is a guard, creating a branch if the value is
// not undefined, meaning that it can only be a number
//     (property) chargeVoltage ?: number | undefined
//   if (typeof car.chargeVoltage !== "undefined")
//     str += `// ${car.chargeVoltage}v`
// ------
//       (property) chargeVoltage ?: number
//   console.log(str)
// }

// The guard is usually referred as "narrowing" and it is a type guard. Very
// used in TS.

// There is also an "Intersection Type" in TS that is represented with a &, just
// like the Union Type uses the pipe | . Intersection only accept values that
// include both A & B types, and is FAR less common than Union Types, but it's
// good to know that they exist as you may find them around.

// There is also a "Recursive Type":
// Recursive types, are self - referential, and are often used to describe
// infinitely nestable types (something like an array of numbers that can be
// nested infinitely)

// type NestedNumbers = number | NestedNumbers[] (defining it as a type alias)
// this will take numbers or nested arrays of numbers

// void type means: the return value of this function should be ignored, and it
// shouldn't be used anywhere else than in those situations.

// when using "this" in TS you also need to define what "this" will be, even
// if you know exactly what you are calling it on. So if it's part of a call
// for an event handler, you need to write something like:

// function clickHandler(
//  this.HTMLButtonElement,
//  event: Event
// ) {
//  this.disabled = true //this is actually what the function does
// }

// we can this will be an HTMLButtonElement (is an event on
// click on the <button>), so this would be the "this type"

// In TS you "top types" that are "any" and "unknown", the difference between
// these two is that unkwnoen MUST be used with type guards or it will give you
// an error, in few words, it could take any value that is allowed in the JS
// world but when you are using it you need to put type guards ( if (typeof ===
// 'string') { do this }, else if (other types for example)).

// The opposite of the "top types" are "button types" with the "never"
// type. "never" type is very abstract and sometimes hard to grasp but in few
// words what is saying is, if the options for any and unknown were pretty much
// "everything" that was allowed in JS, the opposite goes for "never", something
// that has a type of never, in few words, has the value of nothing. This is
// used if you want to be exhaustive with your type guards. This is called
// "exhaustive conditional", Let say you have a union type that can take the
// value of one or another type, but in the type guard you can write the else
// as never, so if it isn't one of the two, all what's left is nothing (never).

// class Car {
//   drive() {
//     console.log("vroom")
//   }
// }
// class Truck {
//   tow() {
//     console.log("dragging something")
//   }
// }
// type Vehicle = Truck | Car

// let myVehicle: Vehicle = obtainRandomVehicle()

// // The exhaustive conditional
// if (myVehicle instanceof Truck) {
//   myVehicle.tow() // Truck
// } else if (myVehicle instanceof Car) {
//   myVehicle.drive() // Car
// } else {
//   // NEITHER!
//   const neverValue: never = myVehicle
// }

// You have the "nullish" types in TS that are null, undefined, and void.
// void should only be used for functions! and it's when you want that the
// return value to be ignored.

// "Generics" in TS allow us to parameterize types. The syntax looks like
// <T> next to a function for example:

function listToDict<T>(
  list: T[],
  idGen: (arg: T) => string
): { [k: string]: T } {
  const dict: { [k: string]: T } = {}
  return dict
}

// You can think of it as the parameter for the type (usually "T" is used),
// and it will adapt the type to whichever is passed or used on the function
// This is way better than mane the value an "any" for usability.

// In the above example TypeScript will infer what T is, on a per-usage basis,
// depending on what kind of array we pass in. If we use a string[], T will be
// string, if we use a number[], T will be number.

// Generic Constraints: Generic constraints allow us to describe the “minimum
// requirement” for a type param, such that we can achieve a high degree of
// flexibility, while still being able to safely assume some minimal structure
// and behavior. The way we define constraints on generics is by using the
// "extends" keyword.
// function listToDict<T extends HasId>(list: T[]): Dict<T> {
// T extends HasId guarantees that “T is at least a HasId”.

// The type params (from generics) also have a scope, so you have a function
// within a function that started with 1 type param and you added another
// inside the second function, the second function has access to the first
// type param, in a similar fashion as variable or a regular parameter.
