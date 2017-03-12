$(document).ready(function() {

  $('.landingbackground').vegas({
    preload: false,
    transitionDuration: 3000,
    delay: 10000,
    slides: [
      { src: "images/two.jpg" },
      { src: "images/one.jpg" },
      { src: "images/three.jpg" },
      { src: "images/four.jpg" },
      { src: "images/five.jpg" },
      { src: "images/six.jpg" }
    ],
    animation: 'random',
    overlay: 'images/overlays/05.png'
  });


});
