jQuery(document).ready(function() {

new WOW({mobile:false}).init();

$('#burger_icon').on('click', function() {
	if (switch_menu == true) {
		$('body').css('overflow-y', 'hidden');
		$(this).addClass('clickMenuOne');
		overlay_mobMn.css('display', 'block'),
		setTimeout(function() {
			overlay_mobMn.addClass('overlay-active')
		}, 0),
		setTimeout(function() {
			$('.mobile-menu').css('display', 'block')
		}, 200),
		setTimeout(function() {
			$('.mobile-nav').addClass('mobile-nav-active');
		}, 250);
		switch_menu = false;
	}
	else if (switch_menu == false) {
		closeMobMenu()
	}
});

$(window).on('scroll, resize', function() {
	closeMobMenu();
});


$(function tab_clicked() {
$(document).ready(function () {
    $('.tab_clicked').click();
});
$('.tabs').on('click', function() {
	$('.tabs').each(function() {
		$(this).siblings('.descr_we_do').removeClass('tabs_active');
	})
	$(this).siblings('.descr_we_do').addClass('tabs_active');
	$(this).siblings('.descr_we_do').slideDown();
	$(this).find('.tab_arrow').addClass('tab_arrow_rotate');

	$('.tabs').each(function() {
		if (!$(this).siblings('.descr_we_do').hasClass('tabs_active')) {
			$(this).siblings('.descr_we_do').slideUp();
			$(this).find('.tab_arrow').removeClass('tab_arrow_rotate');
		}
	})
})
});


$('.slider-jon_doe').slick({
    slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	speed: 700,
	cssEase: 'ease-out',
	autoplaySpeed: 7000,
	pauseOnHover: false,
	pauseOnFocus: false,
	arrows: true,
	dots: false,
	infinite: true,
	responsive: [
    {
      breakpoint: 577,
      settings: {
        arrows: false
      }
    }
  ]
});
$('.slider-joshua_earle').slick({
    slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	speed: 700,
	cssEase: 'ease-out',
	autoplaySpeed: 7000,
	pauseOnHover: false,
	pauseOnFocus: false,
	arrows: true,
	dots: false,
	infinite: true,
	responsive: [
    {
      breakpoint: 577,
      settings: {
        arrows: false
      }
    }
  ]
});

var mapSwitch = false;
$('.map').on('click', function() {
	if (mapSwitch == false) {
		$(this).addClass('map-active');
		// $('html, body').animate({
  //       	scrollTop: $("#suqa").offset().top
  //  		}, 300);
   		$('.map-container').addClass('map-cont-opacy');
		setTimeout(function() {
			$('.coordinates').fadeIn(200);
		}, 300);
		setTimeout(function() {
			$('.close-map').animate({
        	opacity: 1, top: '-32'
   		}, 300);
		}, 400);
		mapSwitch = true;
	}
})
$('.close-map').on('click', function() {
	if (mapSwitch == true) {
		$('.coordinates').fadeOut(0);
		$('.close-map').animate({
        	opacity: 0, top: '0'
   		}, 200);
		$('.map-container').removeClass('map-cont-opacy');
		$('.map').removeClass('map-active');
		mapSwitch = false;
	}
});
function isEmail(email) {
      var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
};
function completeInviteForm() {
            $.ajax({ 
                type: 'POST', 
                url: 'save.php',  
                data: 'email='+$("#email").val(),  
                success: function(){
                $('.subscribe').before('<span class="msg">Done!</span>');
             	console.log(data);	}
    });
};
var erdiv    = $("#error");
var btnwrap  = $(".btn-wrap");
$("#sendbtn").on("click", function(e){
         e.preventDefault();
         var emailval = $("#email").val();
         if(!isEmail(emailval)) {
       erdiv.html("Wrong email address!");
       erdiv.css("display", "block");
    }
if(isEmail(emailval)) {
       erdiv.html("load...");
       (completeInviteForm(), 900);
}
});


$('#load_more').on('click', function() {
	$(this).fadeOut();
	$('.hidden-works').fadeIn();
})


function countup(className){
		var countBlockTop = $("."+className).offset().top;
		var windowHeight = window.innerHeight;
		var show = true;
					
		$(window).scroll( function (){
			if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
				show = false;
						
				$('.'+className).spincrement({
					from: 1,
					duration: 5000,
				});
			}
		})	
	}
$(function() {
countup("countup", $(".countup").text());
});

function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}
if (hasTouch()) {
    try {
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}


})


var switch_menu = true;
var overlay_mobMn = $('.overlay');
function closeMobMenu() {
$('body').css('overflow-y', 'visible');
$('.menuOne').removeClass('clickMenuOne');
$('.mobile-nav').removeClass('mobile-nav-active'),
	setTimeout(function() {
		$('.mobile-menu').css('display', 'none')
	}, 200,
	setTimeout(function() {
		overlay_mobMn.removeClass('overlay-active')
	}, 200,
	setTimeout(function() {
		overlay_mobMn.css('display', 'none')
	}, 400)));
		switch_menu = true;
};