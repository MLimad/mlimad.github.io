// Slider
new Splide( '#splide1' ).mount();
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#splide1',{
        autoplay:true,
        type:"fade",
        direction:"rtl",
        pagination: true,
    } ).mount();
  } );




  // Video PopUp
  $('.videoPopUp').magnificPopup({
    disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
    // other options
  });

    // Counter 
  $( document ).ready(function() {
    $('.c-number').counterUp({
        delay: 10,
        time: 1000
    });
  });





// Customers
  $('.gallery-feedback').magnificPopup({
    delegate: 'a',
		type: 'image',
    gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
    

  });

  // toTop Button and Dark Button
  
    //Get the buttons
  let topButton = document.getElementById("btn-back-to-top");
  let darkButton = document.getElementById("btn-dark-mode");


  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    topButton.style.display = "block";
    darkButton.style.display = "block";

  } else {
    topButton.style.display = "none";
    darkButton.style.display = "none";

  }
}
// When the user clicks on the button, scroll to the top of the document
topButton.addEventListener("click", backToTop);

// When the user clicks on the button will add a class on body element
darkButton.addEventListener("click",classDark);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function classDark() {
  document.body.classList.toggle("dark");
}




// Navbar Class Active

$( document ).ready(function() {
  $(".nav-link").click(function () {
      $('.nav-link').removeClass("active");
      $(this).addClass("active");

  });
});


// Countdown
var deadline = new Date("Apr 18, 2022 16:29:25");

var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = deadline - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(days<10){
    days = "0" + days;
  }
  if(hours<10){
    hours = "0" + hours;
  }
  if(minutes<10){
    minutes = "0" + minutes;
  }
  if(seconds<10){
    seconds = "0" + seconds;
  }
  
  document.getElementById("dealine-date").innerHTML = `
  
  <div data-name="ايام">${days}</div> :
  <div data-name="ساعات">${hours}</div> :
  <div data-name="دقائق">${minutes}</div>:
  <div data-name="ثواني">${seconds}</div>

  
  `;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("dealine-date").innerHTML = "انتهى";
  }
}, 1000);




// Wow JS
new WOW().init();

// Loader
$(window).on("load",function(){
  $(document.body).css({
    overflowY:"scroll",
  });
  $("#loader").fadeOut("slow");
});

// Tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})