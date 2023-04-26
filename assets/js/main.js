/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');
		$quote = $('#quote');
		$said_by = $('#said_by');
		$history = $('#history');
		$getquote = $('#getquote');
		$tour_dest_1 = $('#tour_dest_1');
		$tour_img_1 = $('#tour_img_1');
		$tour_descr_1 = $('#tour_descr_1');
		$tour_dest_2 = $('#tour_dest_2');
		$tour_img_2 = $('#tour_img_2');
		$tour_descr_2 = $('#tour_descr_2');
		$tour_dest_3 = $('#tour_dest_3');
		$tour_img_3 = $('#tour_img_3');
		$tour_descr_3 = $('#tour_descr_3');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);

			$.getJSON("./assets/quotes.json", function (data) {

				var random = Math.floor(Math.random() * 100);
				$quote.text(data['quotes'][random]['quote']);
				$said_by.text(data['quotes'][random]['said_by']);
				$history.text(data['quotes'][random]['history']);
			})

			$.getJSON("./assets/destinations.json", function (data) {
				var random_1 = Math.floor(Math.random() * 15);
				var destination = data['destinations'][random_1]['name'];
				$tour_dest_1.text(destination);
				$tour_img_1.attr("src","images/"+destination+".jpg");
				$tour_descr_1.text(data['destinations'][random_1]['history']);
			
				var random_2 = Math.floor(Math.random() * 15);
				while(random_1==random_2){
					random_2 = Math.floor(Math.random() * 15);
				}

				destination = data['destinations'][random_2]['name'];
				$tour_dest_2.text(destination);
				$tour_img_2.attr("src","images/"+destination+".jpg");
				$tour_descr_2.text(data['destinations'][random_2]['history']);
				
				var random_3 = Math.floor(Math.random() * 15);
				while (random_3 == random_1 || random_3 == random_2){
					random_3 = Math.floor(Math.random() * 15);
				}

				destination = data['destinations'][random_3]['name'];
				$tour_dest_3.text(destination);
				$tour_img_3.attr("src","images/"+destination+".jpg");
				$tour_descr_3.text(data['destinations'][random_3]['history']);
			
			})

		});

		$getquote.on('click', function(){
			$.getJSON("./assets/quotes.json", function (data) {
				$quote.text(data['quotes'][Math.floor(Math.random() * 100)]['quote']);
				$said_by.text(data['quotes'][Math.floor(Math.random() * 100)]['said_by']);
				$history.text(data['quotes'][Math.floor(Math.random() * 100)]['history']);
			})
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);