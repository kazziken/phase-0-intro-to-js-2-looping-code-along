// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

//new empty array to hold the messages

const names = ["Guadalupe", "Ollie", "Aki"]

//build thank you message for each name using string interpolation then add it to the new array
function writeCards(names, event){
    let cards = []
    for (let i = 0; i < names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}

function countDown(){
    let num = 10;
    while (num< 11 && num >=0){
        console.log(num--);
    }
}