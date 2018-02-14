document.addEventListener('DOMContentLoaded', function () {
  Typed.new('.typewriter', {
    strings: ["Samanjate Sood.",
              "a Computer Science graduate student at Northeastern University.",
              "specializing in Software Engineering and Database Management.",
              "also interested in Artifical Intelligence and Web Development.",
              "a pretty good photographer too!"],
    startDelay: 2000,
    typeSpeed: 15,
    backSpeed: 0,
    loop: true
  })
});



$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

