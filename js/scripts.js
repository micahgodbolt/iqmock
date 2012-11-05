var showMenu = function() {
  $('body').toggleClass("active-mainnav");
  $('.icon-menu').toggleClass("active-button");
};

var clearBodyClasses = function() {
  $('body').removeClass();
};



jQuery(document).ready(function($) {


      // Toggle for nav menu
      $('.icon-mainnav').click(function(e) {
        e.preventDefault();
        if ($('body').hasClass('active-mainnav')){
          showMenu();
        }
        else {
          clearBodyClasses();
          showMenu();
        }
      });

      //show secondary navigation
      $('.opensecondary').click(function(e) {
        e.preventDefault();
        $this = $(this);
        $parentli = $this.closest('li');
        if ($parentli.hasClass('open'))
        {
          $parentli.removeClass('open');
        }
        else
        {
          $parentli.addClass('open').siblings().removeClass('open');
        }
      });


      // open location tab

    $('.icon-location').click(function(e) {
      e.preventDefault();
       if ($('body').hasClass('active-location')){
        $('body').toggleClass("active-location");
      }
      else {
        clearBodyClasses();
        $('body').toggleClass("active-location");
      }

    });

    // open login tab

      $('.icon-login').click(function(e) {
      e.preventDefault();
       if ($('body').hasClass('active-login')){
        $('body').toggleClass("active-login");
      }
        else {
          clearBodyClasses();
          $('body').toggleClass("active-login");
        }
      });



});

//equal height jquery
//
equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 console.log(currentTallest);

 });
}

$(document).ready(function() {
  equalheight('.main article');
});


$(window).resize(function(){
  equalheight('.main article');
});

//Hero Slider
//
  $(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      pauseOnHover: true,
});
  });
