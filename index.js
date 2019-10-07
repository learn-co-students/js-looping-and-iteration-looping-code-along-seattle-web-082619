'use strict';

function writeCards(people, event) {
  let i = 0; // the initialization moved OUTSIDE the body of the loop!
  const res = []

  while (i < people.length) {
    res.push(`Thank you, ${people[i++]}, for the wonderful ${event} gift!`)
  }

  return res;
}

function countdown(n) {
  while(n >= 0) {
    console.log(n--)
  }
}