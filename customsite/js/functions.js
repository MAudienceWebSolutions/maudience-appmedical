;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		$('.btn-menu').on('click', function (event) {
		    $(this).toggleClass('active');  
		    event.preventDefault();
		});

		$('.btn-menu').on('click', function() {
			$('.nav').toggleClass('visible');
		});		
	});
})(jQuery, window, document);
