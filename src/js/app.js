// Switch Lanuages Event
var interactiveLanuagesSwitch = document.querySelectorAll('.interactive-lanuages-switch');
var interactiveLanuagesModal = document.querySelectorAll('.interactive-lanuages-modal');

if (undefined !== interactiveLanuagesSwitch) {
  document.addEventListener('click', function(e) {
    var node = e.target;
    var inside = false;
    while (node) {
        if (node.classList.contains('interactive-lanuages-switch')) {
            inside = true;
            break;
        }
        node = node.parentElement;
    }

   if (!inside) {
    gsap.to(interactiveLanuagesModal, {
      duration: 0.25,
      autoAlpha: 0,
    });
   } else {
    gsap.to(interactiveLanuagesModal, {
      duration: 0.25,
      autoAlpha: 1,
    });
    }
  });
}


// Hilight Slider
var interactiveHilightSlider = document.getElementsByClassName('interactive-hilight-slider')[0];

if (undefined !== interactiveLanuagesSwitch) {
  var slider = tns({
    container: '.interactive-hilight-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    mouseDrag: true,
    controls: false,
    autoplayButtonOutput: false,
    navPosition: 'bottom',
  });
}