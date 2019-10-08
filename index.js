function writeCards(array, event) {
  let arr = []
  for (let i = 0; i < array.length; i++) {
    arr.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  };
  return arr;
}


function countdown(integer) {
  let i = 0
  while (i <= integer) {
    console.log(integer)
    integer -= 1
  }
}
