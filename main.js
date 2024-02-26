$(document).ready(function() {
	$('.nav-logo').hover(
	  function() {
		$(this).addClass('rotate');
	  }, function() {
		$(this).removeClass('rotate');
	  }
	);
  });

  window.addEventListener('scroll', function() {
	var h1 = document.querySelector('h1');
	var aboutP = document.querySelector('.about-p p', 'about-p-page p');
	var portrait = document.querySelector('.portrait');

	if (window.pageYOffset > 100) { // adjust this value as needed
		h1.classList.add('slide-out-left');
		aboutP.classList.remove('hide');
    	aboutP.classList.add('slide-in-right');
		aboutP.classList.remove('slide-out-right');
		portrait.classList.add('slide-out-right');
		portrait.classList.remove('slide-in-left');
	} else {
		h1.classList.remove('slide-out-left');
		aboutP.classList.remove('slide-in-right');
    	aboutP.classList.add('slide-out-right');
		portrait.classList.remove('slide-out-right');
		portrait.classList.add('slide-in-right');
	}
});