// Switch Lanuages Event
var interactiveLanuagesSwitch = document.getElementsByClassName('interactive-lanuages-switch')[0];
var interactiveLanuagesModal = document.getElementsByClassName('interactive-lanuages-modal')[0];

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
