$(document).ready(function() {

	//Calculate the height of <header>
	//Use outerHeight() instead of height() if have padding
	wH = $(window).height();
	var aboveHeight = 140;
	$('#fixedHeader').hide();

	// when scroll
	$(window).scroll(function() {

		//if scrolled down more than the header's height
		if ($(window).scrollTop() > aboveHeight) {

			// if yes, add "fixed" class to the <nav>
			// add padding top to the #content (value is same as the height of the nav)
			$('#fixedHeader').removeClass('noShow');
			$('#fixedHeader').slideDown(200).css('top', '0');
		} else {

			// when scroll up or less than aboveHeight, remove the "fixed" class, and the padding-top
			$('#fixedHeader').slideUp(100);
		}
	});
}); 