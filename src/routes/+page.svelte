<script>
	import Card from "$lib/components/Card.svelte"
	let name = 'world';

	const imgs = [
		"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png",
		"https://cdn.worldvectorlogo.com/logos/next-js.svg",
		"https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg",
		"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
		"data:image/png;base64,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",
		"https://emberjs.com/images/brand/ember-tomster-lockup-4c.svg",
		"https://cdn.worldvectorlogo.com/logos/meteor-icon.svg",
		"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/1200px-NestJS.svg.png"
	]

	function createCards(imgs) {
		const cards = [];
		for (let i = 0; i < imgs.length * 2; i+=2) {
			const imgUrl = imgs[i / 2];
			cards.push([imgUrl, i, i], [imgUrl, i + 1, i]); //imgUrl, imgId, groupId
		}

		return cards
	}

	const cards = createCards(imgs);

	function shuffleCards() {
		for (let i = cards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[cards[i], cards[j]] = [cards[j], cards[i]]
		}

	}

	shuffleCards();

	let flippedCards = {};
	let alreadyFound = [];
	let flippingEnabled = true;
	
	function handleCardFlip(cardId, groupId) {
		if (!flippingEnabled) return;

		const flippedCardsValues = Object.values(flippedCards);
		
		if (flippedCardsValues.length === 0) {
			flippedCards = {...flippedCards, [cardId]: groupId};
		} else if (flippedCardsValues.length === 1 && Object.keys(flippedCards)[0] === cardId) {
			console.log("Cannot click the same card twice!");
		} else if (flippedCardsValues.length === 1 && flippedCardsValues[0] === groupId) {
			console.log("Cards of the same group found!");
			
			if (alreadyFound.length === imgs.length - 1) {
				flippedCards = {};
				alreadyFound = [];
				shuffleCards();
				return;
			}
			
			flippedCards = {...flippedCards, [cardId]: groupId};

			flippingEnabled = false;
			setTimeout(() => {
				flippingEnabled = true
				flippedCards = {};
				alreadyFound = [...alreadyFound, groupId];
			}, 1000);
			
		} else {
			console.log("Cards of different groups found!");
			flippedCards = {...flippedCards, [cardId]: groupId};

			flippingEnabled = false;
			setTimeout(() => {
				flippingEnabled = true;
				flippedCards = {};
			}, 1000);
		}
	} 
	
</script>

<div class="container">
	{#each cards as [cardImg, cardId, groupId]}
		<Card 
			imgUrl = {cardImg} 
			flipped = {Object.keys(flippedCards).includes(String(cardId))}
			found = {alreadyFound.includes(groupId)}
			on:click={() => handleCardFlip(cardId, groupId)}
		/>
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(4, 200px);
		gap: 2rem;
	}
</style>