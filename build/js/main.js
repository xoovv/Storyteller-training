$(document).ready(function(){var e=$("#writers").lightSlider({item:3,loop:!0,auto:!0,slideMove:2,easing:"cubic-bezier(0.25, 0, 0.25, 1)",speed:600,pager:!1,controls:!1,slideMargin:30,responsive:[{breakpoint:992,settings:{item:2,slideMove:1,slideMargin:20}},{breakpoint:768,settings:{item:1,slideMove:1}}]});$("#articles__slider-prev").on("click",function(){e.goToPrevSlide()}),$("#articles__slider-next").on("click",function(){e.goToNextSlide()});var i=$(".hamburger");menu=$(".header__navbar ul"),menuHeight=menu.height(),$(i).on("click",function(e){e.preventDefault(),menu.slideToggle("slow")}),$(window).resize(function(){$(window).width()>320&&menu.is(":hidden")&&menu.removeAttr("style")});var n=$("#clients-slider").lightSlider({speed:1e3,pauseOnHover:!0,loop:!0,auto:!0,slideEndAnimation:!0,item:6,slideMove:1,controls:!1,pager:!1,slideMargin:2,responsive:[{breakpoint:992,settings:{item:4}},{breakpoint:768,settings:{item:3}},{breakpoint:576,settings:{item:2}}]});$("#clients-slider__prevSlide").on("click",function(){n.goToPrevSlide()}),$("#clients-slider__nextSlide").on("click",function(){n.goToNextSlide()}),$("#gallery-slider").lightSlider({speed:1e3,auto:!0,pauseOnHover:!0,loop:!0,slideEndAnimation:!0,item:3,slideMove:1,controls:!1,slideMargin:.01,responsive:[{breakpoint:768,settings:{item:2}},{breakpoint:576,settings:{item:1}}]})});