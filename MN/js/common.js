$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

  $(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		navText: ["<i class='icon-left'></i>", "<i class='icon-right'></i>"]
	});


	var action = 'click';
	var speed = "500";
	// Question handler
	$('li.q').on(action, function(){
		// gets next element
		// opens .a of selected question
		$(this).next().slideToggle(speed)    
		// selects all other answers and slides up any open answer
		// .siblings('li.a').slideUp();  
		// Grab img from clicked question
		var img = $(this).children('img');
		// remove Rotate class from all images except the active
		// $('img').not(img).removeClass('rotate');
		// toggle rotate class
		img.toggleClass('rotate');
	});
});
