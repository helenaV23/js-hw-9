let cardSuit = ["clubs", "spades", "diamonds", "hearts"];
let cardNumber = [];

for (let i = 2; i <= 10; i++) {
    cardNumber.push(i);
}

cardNumber.push("J", "Q", "K", "T");

let htmlParts = [`<div class="wrapper">`];

debugger;
for (let i = 0; i < cardNumber.length; i++) { 
    for (let j = 0; j < cardSuit.length; j++) {
        let hasImg = i > 8;
        htmlParts.push(`
        <div class="card ${hasImg ? "card--person" : ""}">
            <div class="card__info">${cardNumber[i]}<img src="images/${cardSuit[j]}.svg" alt="${cardSuit[j]}"></div>`);
        if (hasImg) {
            let cardName;
            switch(cardNumber[i]) {
                case "J": 
                    cardName = "jack";
                    break;
                case "Q":
                    cardName = "queen";
                    break;
                case "K":
                    cardName = "king";
                    break;
                case "T":
                    cardName = cardSuit[j];
                    break;
            }
            htmlParts.push(`<img class="person" src="images/${cardName}.svg" alt="${cardName}"></img>`);
        }
        htmlParts.push(`<div class="card__info">${cardNumber[i]}<img src="images/${cardSuit[j]}.svg" alt="${cardSuit[j]}"></div>
        </div>`);
    }
}

htmlParts.push('</div>');
document.write(htmlParts.join(""));
