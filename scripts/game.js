const drawCard = document.querySelector(".game__card-draw");
const dragCard = document.querySelector(".game__card-drag");

class Card {
    constructor(sign, value, color) {
        this.sign = sign;
        this.value = value;
        this.color = color
    }
}

const cards = Array(51);

cards[0] = new Card ("A", "13", "spades");
cards[1] = new Card ("K", "12", "spades");
cards[2] = new Card ("Q", "11", "spades");
cards[3] = new Card ("J", "10", "spades");
cards[4] = new Card ("10", "9", "spades");
cards[5] = new Card ("9", "8", "spades");
cards[6] = new Card ("8", "7", "spades");
cards[7] = new Card ("7", "6", "spades");
cards[8] = new Card ("6", "5", "spades");
cards[9] = new Card ("5", "4", "spades");
cards[10] = new Card ("4", "3", "spades");
cards[11] = new Card ("3", "2", "spades");
cards[12] = new Card ("2", "1", "spades");

cards[13] = new Card ("A", "13", "clubs");
cards[14] = new Card ("K", "12", "clubs");
cards[15] = new Card ("Q", "11", "clubs");
cards[16] = new Card ("J", "10", "clubs");
cards[17] = new Card ("10", "9", "clubs");
cards[18] = new Card ("9", "8", "clubs");
cards[19] = new Card ("8", "7", "clubs");
cards[20] = new Card ("7", "6", "clubs");
cards[21] = new Card ("6", "5", "clubs");
cards[22] = new Card ("5", "4", "clubs");
cards[23] = new Card ("4", "3", "clubs");
cards[24] = new Card ("3", "2", "clubs");
cards[25] = new Card ("2", "1", "clubs");

cards[26] = new Card ("A", "13", "hearts");
cards[27] = new Card ("K", "12", "hearts");
cards[28] = new Card ("Q", "11", "hearts");
cards[29] = new Card ("J", "10", "hearts");
cards[30] = new Card ("10", "9", "hearts");
cards[31] = new Card ("9", "8", "hearts");
cards[32] = new Card ("8", "7", "hearts");
cards[33] = new Card ("7", "6", "hearts");
cards[34] = new Card ("6", "5", "hearts");
cards[35] = new Card ("5", "4", "hearts");
cards[36] = new Card ("4", "3", "hearts");
cards[37] = new Card ("3", "2", "hearts");
cards[38] = new Card ("2", "1", "hearts");

cards[39] = new Card ("A", "13", "diamonds");
cards[40] = new Card ("K", "12", "diamonds");
cards[41] = new Card ("Q", "11", "diamonds");
cards[42] = new Card ("J", "10", "diamonds");
cards[43] = new Card ("10", "9", "diamonds");
cards[44] = new Card ("9", "8", "diamonds");
cards[45] = new Card ("8", "7", "diamonds");
cards[46] = new Card ("7", "6", "diamonds");
cards[47] = new Card ("6", "5", "diamonds");
cards[48] = new Card ("5", "4", "diamonds");
cards[49] = new Card ("4", "3", "diamonds");
cards[50] = new Card ("3", "2", "diamonds");
cards[51] = new Card ("2", "1", "diamonds");

function drawRandomCardHandler() {
    const index = Math.floor(Math.random()*52);
    console.log(cards[index]);
    dragCard.innerHTML = cards[index].sign + "<br>" + cards[index].color;
    if(dragCard.innerHTML.includes("diamonds") || dragCard.innerHTML.includes("hearts")) {
        dragCard.style.color = "red";
    } else {dragCard.style.color = "black"}
}

drawCard.addEventListener("click", drawRandomCardHandler);