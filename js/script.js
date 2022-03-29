function newQuote(){

	let quotes = [
	"The most difficult thing is the decision to act, the rest is merely tenacity.",
	"Life shrinks or expands in proportion to one’s courage.",
	"If you do what you’ve always done, you’ll get what you’ve always gotten.",
	"The best time to plant a tree was 20 years ago. The second best time is now.",
	"Either write something worth reading or do something worth writing.",
	"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
	"The best revenge is massive success.",
	"The most difficult thing is the decision to act, the rest is merely tenacity.",
	"Nothing is impossible, the word itself says, “I’m possible!”",
	"The only way to do great work is to love what you do.",
	"I would rather die of passion than of boredom.",
];

	let randomNumber = Math.floor(Math.random() * 11);
	
	document.getElementById('quote').innerHTML = quotes[randomNumber];
}