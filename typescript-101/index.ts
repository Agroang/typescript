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
