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

    //Messaging
    $("div.footer-btn input").click(() => {
      var from = $("input[name='email']");
      var body = $("textarea[name='message']");
      if( from.val() === "" && body.val() === "" ) {
        from.addClass("missing-input");
        body.addClass("missing-input");
        setTimeout(() => {from.removeClass("missing-input"); body.removeClass("missing-input");}, 1000);
      }
      else if ( from.val() === "" && body.val() !== "" ) {
        from.addClass("missing-input");
        setTimeout(() => {from.removeClass("missing-input")}, 1000);
      }
      else if ( from.val() !== "" && body.val() === "" ) {
        body.addClass("missing-input");
        setTimeout(() => {body.removeClass("missing-input")}, 1000);
      }
      else {
        //Check formatting of email
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var format = re.test(String(from.val()).toLowerCase());
        if (format === true) {
          Email.send({
            SecureToken : "cd5e643b-b21b-4a95-a4e5-4b696f8f9032",
            To : 'calle.svedhag@live.se',
            From : "carlsvedhag@gmail.com",
            Subject : "Portfolio message from " + from.val(),
            Body : body.val()
          }).then(
            message => alert("Your message has been sent to me. I will try to get back to you as soon as possible."),
            body.val(""),
            from.val(""))
        }
        else {
          from.addClass("missing-input");
          setTimeout(() => {from.removeClass("missing-input")}, 1000);
        }
      }
    });

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
          $(".navbar .menu").removeClass("active");
          $(".menu-btn i").removeClass("active");
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
