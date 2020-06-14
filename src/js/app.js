// Switch Lanuages Event
// var interactiveLanuagesSwitch = document.querySelectorAll('.interactive-lanuages-switch');
// var interactiveLanuagesModal = document.querySelectorAll('.interactive-lanuages-modal');

// if (undefined !== interactiveLanuagesSwitch) {
//   document.addEventListener('click', function (e) {
//     var node = e.target;
//     var inside = false;

//     while (node) {
//       if (node.classList.contains('interactive-lanuages-switch')) {
//         inside = true;

//         break;
//       }

//       node = node.parentElement;
//     }

//     if (!inside) {
//       gsap.to(interactiveLanuagesModal, {
//         duration: 0.25,
//         autoAlpha: 0,
//       });
//     } else {
//       gsap.to(interactiveLanuagesModal, {
//         duration: 0.25,
//         autoAlpha: 1,
//       });
//     }
//   });
// }

// Interactive Focus Events
var interactiveInputUsername = document.getElementsByClassName('interactive-input-username')[0];
var interactiveInputMobileusername = document.getElementsByClassName('interactive-input-mobileusername')[0];
var interactiveHandleFocus = document.getElementsByClassName("interactive-handle-focus")

if (undefined !== interactiveHandleFocus) {
  for (let interactive of interactiveHandleFocus) {
    interactive.addEventListener('click', function (e) {
      e.preventDefault();
      interactiveInputUsername.focus();
      interactiveInputMobileusername.focus();
    });
  }
}


// Hilight Slider
var interactiveHilightSlider = document.getElementsByClassName('interactive-hilight-slider')[0];

if (undefined !== interactiveHilightSlider) {
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

// Provider Slider Hilight
var interactiveCarouselProducts = document.getElementsByClassName('interactive-carousel-products')[0];

if (undefined !== interactiveCarouselProducts) {
  var carouselProviders = tns({
    container: '.interactive-carousel-products',
    items: 5,
    autoplay: true,
    mouseDrag: true,
    controls: false,
    nav: false,
    autoplayButtonOutput: false,
    responsive: {
      0: {
        items: 3,
      },
      576: {
        items: 4,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 5,
      }
    }
  });
}

// Provider Slider Footer
var interactiveCarouselProviders = document.getElementsByClassName('interactive-carousel-providers')[0];

if (undefined !== interactiveCarouselProviders) {
  var carouselProviders = tns({
    container: '.interactive-carousel-providers',
    autoplay: true,
    mouseDrag: true,
    controls: false,
    nav: false,
    autoplayButtonOutput: false,
    responsive: {
      0: {
        items: 3,
      },
      576: {
        items: 4,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 5,
      }
    }
  });
}

// Provider Slider Mobile
var interactiveButtonProducts = document.getElementsByClassName('interactive-button-products')[0];
var interactiveSlideMobileproviders = document.getElementsByClassName('interactive-slide-mobileproviders')[0];

if (undefined !== interactiveButtonProducts) {
  interactiveButtonProducts.addEventListener('click', () => {
    showMobileproviders = !showMobileproviders;

    if (showMobileproviders === true) {
      gsap.to(interactiveButtonProducts, {
        className: "+=button-navbar interactive-button-products -active",
      });

      gsap.to(interactiveSlideMobileproviders, {
        duration: 0.25,
        autoAlpha: 1,
        display: 'block',
      });
    } else {
      gsap.to(interactiveButtonProducts, {
        className: "-=button-navbar interactive-button-products",
      });

      gsap.to(interactiveSlideMobileproviders, {
        duration: 0.25,
        autoAlpha: 0,
        display: 'none',
      });
    }
  });

  var showMobileproviders = false;
}