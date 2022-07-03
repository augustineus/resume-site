//sticky scroll nav bar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//scroll fadein, onload header fadein
$(document).ready(function() {
  $(window).scroll( function(){
      $('.hideme').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > bottom_of_object ){
              $(this).animate({'opacity':'1'},500);  
          }
      }); 
  });
  $('.fade-in').fadeIn(4000).removeClass('fade-in');
});
