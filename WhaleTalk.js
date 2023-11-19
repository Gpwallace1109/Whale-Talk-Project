// Whale Talk Project 

const input = 'tuprentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log(i); used to check work
  for (let j = 0; j < vowels.length; j++) {

    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);

}
}
console.log(resultArray.join('').toUpperCase());
