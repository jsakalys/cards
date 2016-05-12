var cards = [
	{
		title: 'First Card',
		description: 'lsa;kdjf;alskjdf;lasjdk'
	},
	{
		title: 'Second Card',
		description: 'las;dlkfjas;ld'
	},
	{
		title: 'Third Card',
		description: 'a;slkdj'
	}
]


document.addEventListener('DOMContentLoaded', function(){
	var wrapper = document.getElementById('wrapper');
	cards.forEach(function(card){
		console.log(card)
		wrapper.innerHTML += '<div class="card"><div class="card-content"><h1>' + card.title + '</h1><p>' + card.description + '</p></div></div>';	
	})
});