// Code your solutions in this file
function writeCards(names, event) {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
  }
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  const names = ["Alice", "Bob", "Charlie"];
const event = "birthday";

const thankYouMessages = writeCards(names, event);
console.log(thankYouMessages);
// Output: ["Thank you, Alice, for the wonderful birthday gift!", "Thank you, Bob, for the wonderful birthday gift!", "Thank you, Charlie, for the wonderful birthday gift!"]

countDown(5);
// Output: 5, 4, 3, 2, 1, 0
