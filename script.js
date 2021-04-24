$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }
    });
    
    //toggle menu-btn
    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    //typing animation
    var typed = new Typed(".typing", {
      strings: ["Media Engineer","Developer", "Master of science", "Gamer", "Interaction Designer", "Team Player"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    var typed = new Typed(".typing2", {
      strings: ["Media Engineer","Developer", "Master of science", "Gamer", "Interaction Designer", "Team Player"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    //modal
    $("div.box").click(function(){
      //console.log($(this).closest(".card").attr("id"));
      var modalID = $(this).closest(".card").attr("id");
      $("#" + modalID).children("div.modal").css( "display", "block" );
    });

    $("div.close").click(function(){
      var modalID = $(this).closest(".card").attr("id");
      $("#" + modalID).children("div.modal").css( "display", "none" );
      var videoSrc = $("#" + modalID).find("iframe").attr("src");
      if ( !( videoSrc == null ) ) {
        $("#" + modalID).find("iframe").attr("src", videoSrc);
      }
    });

    $(window).click(function(e) {
      if($(e.target).attr("class") == "modal") {
        $(e.target).css( "display", "none" );
        var modalID = $(e.target).closest(".card").attr("id");
        var videoSrc = $("#" + modalID).find("iframe").attr("src");
        if ( !( videoSrc == null ) ) {
          $("#" + modalID).find("iframe").attr("src", videoSrc);
        }
      }
    });

    /*document.getElementById('video-iframe'+id).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
        
                var src= $(this).attr('src');
        $(this).attr('src',src);  */

});

    //smooth scrolling
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });