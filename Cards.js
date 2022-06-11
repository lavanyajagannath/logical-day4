const suits = ["Spades","Diamonds","Club","Heart"];
const values = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
];
let deck = [];
for (let i = 0; i < suits.length; i++){
    for (let x = 0; x < values.length; x++){
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}