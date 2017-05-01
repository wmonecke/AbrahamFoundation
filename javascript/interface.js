$(document).ready(function() {

  setTimeout(() => {
    $('.quote').fadeIn(2000);
  }, 1000);

  $('.landingbackground').vegas({
    preload: false,
    transitionDuration: 3000,
    delay: 10000,
    slides: [
      { src: "images/three.jpg" },
      { src: "images/one.jpg" },
      { src: "images/two.jpg" },
      { src: "images/four.jpg" },
      { src: "images/five.jpg" },
      { src: "images/six.jpg" }
    ],
    animation: 'random',
    overlay: 'images/overlays/05.png'
  });

  // ANCHORTAG SCROLLING

  $('#purpose').on('click', function(event){
    event.preventDefault();
    $('.ourpurpose').animatescroll({scrollSpeed: 1500});
    $('.purposeinfo').css('display', 'none').fadeIn(4000);
  });

  $('#ion-chevron-down, #whatwedo').on('click', function(event){
    event.preventDefault();
    $('.ourpurposeTwo').animatescroll({scrollSpeed: 1500});
    $('.vision').css('display', 'none').fadeIn(2000);
  });

  $('#toTheTeam, #whoweare').on('click', function(event){
    event.preventDefault();
    $('.theTeam').animatescroll({scrollSpeed: 1500});
    $('.theTeamTitle').css('display', 'none').fadeIn(2000);
  });

  $('#toTheForm, .emailNav').on('click', function(event){
    event.preventDefault();
    $('.getInTouch').animatescroll({scrollSpeed: 1700});
    $('.getInTouchTitle').css('display', 'none').fadeIn(2000);
  });

  $('#allTheWayUp').on('click', function(event){
    event.preventDefault();
    $('#navbar').animatescroll({scrollSpeed: 1700});
  });

  // MANAGING INFORMATION OF CLICKS

  $('.thomas').on('click', () => {
    $('.thomas').css('border', '6px solid gold');
    $('.nick, .tom, .norma, .nancy').css({'border': 'none', 'pointer-events': 'none'});

    $('.infoForNancy, .infoForNick, .infoForTom, .infoForNorma').fadeOut(200, () => {
      setTimeout(() => {
        $('.infoForThomas').fadeIn(200, () => {
          $('.nick, .tom, .norma, .nancy').css('pointer-events', 'auto');
        });
      }, 500);
    });

  });

  $('.nancy').on('click', () => {
    $('.nancy').css('border', '6px solid gold');
    $('.thomas, .nick, .tom, .norma').css({'border': 'none', 'pointer-events': 'none'});

    $('.infoForThomas, .infoForNick, .infoForTom, .infoForNorma').fadeOut(200, () => {
      setTimeout(() => {
      $('.infoForNancy').fadeIn(200, () => {
        $('.nick, .tom, .norma, .thomas').css('pointer-events', 'auto');
      });
    }, 500);
    });
  });

  $('.nick').on('click', () => {
    $('.nick').css('border', '6px solid gold');
    $('.thomas, .nancy, .tom, .norma').css({'border': 'none', 'pointer-events': 'none'});

    $('.infoForThomas, .infoForNancy, .infoForTom, .infoForNorma').fadeOut(200, () => {
      setTimeout(() => {
      $('.infoForNick').fadeIn(200, () => {
        $('.thomas, .tom, .norma, .nancy').css('pointer-events', 'auto');
      });
    }, 500);
    });
  });

  $('.norma').on('click', () => {
    $('.norma').css('border', '6px solid gold');
    $('.thomas, .nancy, .tom, .nick').css({'border': 'none', 'pointer-events': 'none'});

    $('.infoForThomas, .infoForNancy, .infoForTom, .infoForNick').fadeOut(200, () => {
      setTimeout(() => {
      $('.infoForNorma').fadeIn(200, ()=> {
        $('.nick, .tom, .thomas, .nancy').css('pointer-events', 'auto');
      });
    }, 500);
    });
  });

  $('.tom').on('click', () => {
    $('.tom').css('border', '6px solid gold');
    $('.thomas, .nancy, .norma, .nick').css({'border': 'none', 'pointer-events': 'none'});

    $('.infoForThomas, .infoForNancy, .infoForNorma, .infoForNick').fadeOut(200, () => {
      setTimeout(() => {
      $('.infoForTom').fadeIn(200, () => {
        $('.nick, .thomas, .norma, .nancy').css('pointer-events', 'auto');
      });
    }, 500);
    });
  });

  // ANIMATE CSS ANIMATIONS

  $(window).one('scroll', function() {
   console.log( $(this).scrollTop() );
  });

  $(window).scroll(function(event) {
   let y = $(this).scrollTop();

    if ( y >= 500 ) {
      $('.abrahampic, .abrahampicCaption').addClass('animated fadeInRight');
      $('.empoweringpic, .empoweringpicCaption, .empoweringpicCaptionTwo').addClass('animated fadeInLeft');
    }

    if ( y >= 1200 ) {
      $('.anthonyAndGenevieve, .anthonyAndGenevieveCaption').addClass('animated fadeInLeft');
      $('.goals').addClass('animated fadeIn');
    }

    if ( y >= 1900 ) {
      $('.imagesContainer').addClass('animated fadeInLeft');
      $('.information').addClass('animated fadeInRight');
    }
 });

 // CSS FOR CONTACT US

 $('input, textarea').on('click', (event) => {
  console.log($(event.currentTarget).data('input'));
 });

 // SLIDEDOWN CSS
  $("#getintouch").on('click', function(){
    $(".getInTouchMenu").stop().slideToggle("slow");
  });

  $('.ladingsection').mouseenter(function() {
    $(".getInTouchMenu").slideUp("slow");
  });

// --------------------- MOBILE JS ---------------------------
  $('.openMenu').on('click', () => {
    $('.mobMenu').fadeIn(500);
  });

  $('#closeMenu').on('click', () => {
    $('.mobMenu').fadeOut(500);
  });

  //-------------------- MENU LINKS ------------------------
  $('#mobOurPurpose').on('click', () => {
    $('section.mobOurPurpose').animatescroll({ scrollSpeed: 500 });
    $('.mobMenu').fadeOut(500);
  });

  $('#mobWhatWeDo').on('click', () => {
    $('section.mobOurVision').animatescroll({ scrollSpeed: 500 });
    $('.mobMenu').fadeOut(500);
  });

  $('#mobWhoWeAre').on('click', () => {
    $('section.mobWhoWeAre').animatescroll({ scrollSpeed: 500 });
    $('.mobMenu').fadeOut(500);
  });

  $('#mobGetInTouch').on('click', () => {
    $('section.mobGetInTouch').animatescroll({ scrollSpeed: 500 });
    $('.mobMenu').fadeOut(500);
  });


  // ---------------------- mobButtons INFOR MANAGEMENT --------------------

  $('#mobAbraham').on('click', () => {
    $('#mobAbraham').css('border', '5px solid gold');
    $('#mobNancy, #mobNick, #mobTom, #mobNorma').css({'border': 'none', 'pointer-events': 'none'});

    $('.infoForNancy, .infoForNick, .infoForTom, .infoForNorma').fadeOut(200, () => {
      setTimeout(() => {
      $('.infoForThomas').fadeIn(200, () => {
        $('#mobNick, #mobTom, #mobNorma, #mobNancy').css('pointer-events', 'auto');
      });
    }, 500);
    });
  });

  $('#mobNancy').on('click', () => {
    $('#mobNancy').css('border', '5px solid gold');
    $('#mobAbraham, #mobNick, #mobTom, #mobNorma').css({'border': 'none', 'pointer-events': 'none'});

    $('.infoForThomas, .infoForNick, .infoForTom, .infoForNorma').fadeOut(200, () => {
      setTimeout(() => {
      $('.infoForNancy').fadeIn(200, () => {
        $('#mobNick, #mobTom, #mobNorma, #mobAbraham').css('pointer-events', 'auto');
      });
    }, 500);
    });
  });

  $('#mobNick').on('click', () => {
    $('#mobNick').css('border', '5px solid gold');
    $('#mobAbraham, #mobNancy, #mobTom, #mobNorma').css({'border': 'none', 'pointer-events': 'none'});

    $('.infoForThomas, .infoForNancy, .infoForTom, .infoForNorma').fadeOut(200, () => {
      setTimeout(() => {
      $('.infoForNick').fadeIn(200, () => {
        $('#mobNancy, #mobTom, #mobNorma, #mobAbraham').css('pointer-events', 'auto');
      });
    }, 500);
    });
  });

  $('#mobNorma').on('click', () => {
    $('#mobNorma').css('border', '5px solid gold');
    $('#mobAbraham, #mobNancy, #mobTom, #mobNick').css({'border': 'none', 'pointer-events': 'none'});

    $('.infoForThomas, .infoForNancy, .infoForTom, .infoForNick').fadeOut(200, () => {
      setTimeout(() => {
      $('.infoForNorma').fadeIn(200, () => {
        $('#mobNancy, #mobTom, #mobNick, #mobAbraham').css('pointer-events', 'auto');
      });
    }, 500);
    });
  });

  $('#mobTom').on('click', () => {
    $('#mobTom').css('border', '5px solid gold');
    $('#mobAbraham, #mobNancy, #mobNorma, #mobNick').css({'border': 'none', 'pointer-events': 'none'});

    $('.infoForThomas, .infoForNancy, .infoForNorma, .infoForNick').fadeOut(200, () => {
      setTimeout(() => {
      $('.infoForTom').fadeIn(200, () => {
        $('#mobNancy, #mobNorma, #mobNick, #mobAbraham').css('pointer-events', 'auto');
      });
    }, 500);
    });
  });

});
