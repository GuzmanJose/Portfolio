var pathName = window.location.pathname;
var wWidth = $(window).width();
var idProject = $('#thumbIndi').text();

// $('a[href^="#"]').on('click', function(event) {

//     var target = $(this.getAttribute('href'));

//     if (target.length ) {
//         event.preventDefault();
//         $('html, body').stop().animate({
//             scrollTop: target.offset().top
//         }, 1000);
//     }

// });


// $('html,body').animate({
//   scrollTop: $(window.location.hash).offset().top
// },1000);

$(document).ready(function() {
    $('html, body').hide();

    if (window.location.hash) {
        setTimeout(function() {
            $('html, body').scrollTop(0).show();
            $('html, body').animate({
                scrollTop: $(window.location.hash).offset().top
                }, 1000)
        }, 0);
    }
    else {
        $('html, body').show();
    }
});


if (wWidth >= 500) {
	$(window).scroll(function () {
		var wScroll = $(this).scrollTop();
		if (wScroll > 5) {
			$(".navbar-custom").addClass('animation-nav');
			$(".navbar-default .navbar-brand").addClass('animation-brand');  
			$(".navbar-default .navbar-nav li a").addClass('animation-links');	
		}
		else if (wScroll <= 5) {
			$(".navbar-custom").removeClass('animation-nav');
			$(".navbar-default .navbar-brand").removeClass('animation-brand');  
			$(".navbar-default .navbar-nav li a").removeClass('animation-links');	
		}
	});
}

switch(pathName) {
	case "/":
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

$(window).ready(function() {
	if (wWidth <= 500) {
		$(".home-logo").delay(500).fadeTo(2000, 1);
		$(".game-text").remove();
	}
	else {
		$(".home-logo").delay(500).fadeTo(2000, 1);
	}
});

$(function() {
$('.portfolio-thumbnail').hover(function () {
	$(this).children(".portfolio-thumbnail-image").css({
		//"filter": "brightness(100%)"
	});
	$(this).children(".portfolio-thumbnail-title").css({
		"transform" : "translateY(-50px)",
		"opacity" : ".6"
	});
	$(this).children(".portfolio-thumbnail-cue").css({
		"transform" : "translateY(-40px)",
		"opacity" : "1"
	});
}, function() {
	$(this).children(".portfolio-thumbnail-image").css({
		//"filter": "brightness(50%)"
	});
	$(this).children(".portfolio-thumbnail-title").css({
		"transform" : "translateY(0px)",
		"opacity" : "1"
	});
	$(this).children(".portfolio-thumbnail-cue").css({
		"transform" : "translateY(0px)",
		"opacity" : "0"
	});
});
});

$(window).scroll(function () {
	var wScroll = $(this).scrollTop();
	if (wScroll > $(".tiles-portfolio").offset().top - $(window).height() / 1.5) {
		$(".tiles-portfolio .portfolio-thumbnail").each(function (i) {
			setTimeout(function () {
				$(".tiles-portfolio .portfolio-thumbnail").eq(i).addClass('animation-entrance');	
			}, 150 * (i+1));
		});
	}
});

	break;

	case "/projects/" + idProject :
$(window).ready(function() {
		$(".project-img").delay(500).css('filter', 'brightness(45%)');
});

$(window).scroll(function () {
	var wScroll = $(this).scrollTop();
	if (wScroll > $(".card-project").offset().top - $(window).height() / 1.4) {
		$(".card-project .card-project-content").addClass('animation-entrance');	
	}
	if ($(".project-photos").length) {
		if (wScroll > $(".project-photos").offset().top - $(window).height() / 1.4) {
			$(".project-photos .project-photos-card").addClass('animation-entrance');	
		}
	}
	if ($(".project-videos").length) {
		if (wScroll > $(".project-videos").offset().top - $(window).height() / 1.4) {
			$(".project-videos .project-videos-card").addClass('animation-entrance');	
		}
	}
	if (wScroll > $(".card-sign").offset().top - $(window).height() / 1.4) {
		$(".card-sign .card-sign-content").addClass('animation-entrance');	
	}
});

	break;

	case	"/resume" :
$(window).load(function() {
	$(".resume-img").delay(500).css('filter', 'brightness(50%)');
});

$(window).scroll(function () {
	var wScroll = $(this).scrollTop();
	if (wScroll > $(".card-resume").offset().top - $(window).height() / 1.4) {
		$(".card-resume .card-resume-content").addClass('animation-entrance');	
	}
});

	break;

	case	"/contact" :
$(window).load(function() {
	$(".contact-img").delay(500).css('filter', 'brightness(50%)');
	$(".card-contact .card-contact-content").delay(1000).addClass('animation-entrance');
});
	break;
}

