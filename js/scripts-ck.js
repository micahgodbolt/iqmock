var showMenu=function(){$("body").toggleClass("active-nav");$(".icon-menu").toggleClass("active-button")};jQuery(document).ready(function(e){e(".icon-menu").click(function(e){e.preventDefault();showMenu()})});