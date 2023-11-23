<script>
	export let imgUrl;
	export let flipped;
	export let found;

	//console.log(imgUrl);
</script>

<div>
	{#if !found}
	<button on:click>
		<img src={imgUrl} alt="test" style={"display": flipped ? "block" : "none"}>
	</button>
	{:else}
		<p>found</p>
	{/if}
</div>

<style>	
	div, button, img {
		height: 200px;
		width: 200px;
		border-radius: 20px;
	}

	div {
		background-color: #fff;
		color: #000;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button {
		background-color: transparent;
	}

	img {
		-webkit-user-drag: none;
	  -khtml-user-drag: none;
	  -moz-user-drag: none;
	  -o-user-drag: none;
	  user-drag: none;
	}
</style>