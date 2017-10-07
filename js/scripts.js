$(document).ready(function() {

	$(function() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

		if (scroll >= 90) {
				$('section.col-md-3.aboutnavpo').css({
					"padding-top": "0px",
					"max-height":"90%",
					"top":"30px",
				});
				$('section.col-md-3.aboutnavpo').removeClass('animated fadeInRight');
			$('section.col-md-3.aboutnavpo').addClass('animated fadeInLeft');
			$('.abnav').css({
			"background": "white",
			"-webkit-box-shadow": "0px 0px 25px 4px rgba(0,0,0,0.29)",
			"-moz-box-shadow": "0px 0px 25px 4px rgba(0,0,0,0.29)",
			"box-shadow": "0px 0px 25px 4px rgba(0,0,0,0.29)",
		});
		} else {
			$('section.col-md-3.aboutnavpo').removeClass('animated fadeInLeft');
			$('section.col-md-3.aboutnavpo').addClass('animated fadeInRight');
			$('section.col-md-3.aboutnavpo').css({
				"padding-top":"140px",
				"position":"fixed",
				"padding-left":"6px",
				"padding-right":"14px",
			});
			$('.abnav').css({
				"background": "none",
				"-webkit-box-shadow": "none",
				"-moz-box-shadow": "none",
				"box-shadow": "none",

		});
		}
		});
	});

	/***************** Waypoints ******************/

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInRight');
	}, {
		offset: '75%'
	});
	/***************** Initiate Flexslider ******************/
	$('.flexslider').flexslider({
		animation: "slide"
	});

	/***************** Initiate Fancybox ******************/

	$('.single_image').fancybox({
		padding: 4,
	});

	/***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

	/***************** Nav Transformicon ******************/

	/* When user clicks the Icon */
	$('.nav-toggle').click(function() {
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('open');
		event.preventDefault();
	});
	/* When user clicks a link */
	$('.header-nav li a').click(function() {
		$('.nav-toggle').toggleClass('active');
		$('.header-nav').toggleClass('open');

	});

	/***************** Header BG Scroll ******************/

	$(function() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 20) {
				$('section.navigation').addClass('fixed');
				$('header').css({
					"border-bottom": "none",
					"padding": "35px 0"
				});
				$('header .member-actions').css({
					"top": "26px",
				});
				$('header .navicon').css({
					"top": "34px",
				});
			} else {
				$('section.navigation').removeClass('fixed');
				$('header').css({
					"border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
					"padding": "50px 0"
				});
				$('header .member-actions').css({
					"top": "41px",
				});
				$('header .navicon').css({
					"top": "48px",
				});
			}
		});
	});
	/***************** Smooth Scrolling ******************/

	$(function() {

		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 2000);
					return false;
				}
			}
		});

	});

});
