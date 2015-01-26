$(document).ready(
	function()
	{
		//
		// TILE
		//
		
		
		//initMasonry();
		
		
		// $('#portfolio-link a').click( function(e) {
		// 	e.preventDefault();
		// 	initMasonry();
		// });
		//console.log('link: ',$('#portfolio-link a'));
	}
);

function xinitMasonry() {
	console.log('mansonry');
	setTimeout( function() {
		var container = document.querySelector('#tilesContainer');
		var msnry = new Masonry( container, {
	  		// options
			columnWidth: 200,
			itemSelector: '.tile'
		});
	}, 300);
};