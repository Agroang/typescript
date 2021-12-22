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
