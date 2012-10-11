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



jQuery(window).ready(function(){
            jQuery("#btnInit").click(initiate_geolocation);
        });
        function initiate_geolocation() {
            navigator.geolocation.getCurrentPosition(handle_geolocation_query,handle_errors);
        }
        function handle_errors(error)
        {
            switch(error.code)
            {
                case error.PERMISSION_DENIED: alert("user did not share geolocation data");
                break;
                case error.POSITION_UNAVAILABLE: alert("could not detect current position");
                break;
                case error.TIMEOUT: alert("retrieving position timed out");
                break;
                default: alert("unknown error");
                break;
            }
        }
        function handle_geolocation_query(position){
            alert('Lat: ' + position.coords.latitude +
                  ' Lon: ' + position.coords.longitude);
        }

