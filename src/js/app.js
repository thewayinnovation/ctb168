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

// Interactive Berger Events
var interactiveHandleBerger = document.getElementsByClassName('interactive-handle-berger')[0];
var interactiveHandleBergerLine1 = document.getElementsByClassName('interactive-handle-berger-line1')[0];
var interactiveHandleBergerLine2 = document.getElementsByClassName('interactive-handle-berger-line2')[0];
var interactiveHandleBergerLine3 = document.getElementsByClassName('interactive-handle-berger-line3')[0];
var interactiveHandleBergerLine4 = document.getElementsByClassName('interactive-handle-berger-line4')[0];
var interactiveBaconState = document.getElementsByClassName('interactive-bacon-state')[0];

window.addEventListener("resize", function () {
  if (window.innerWidth < 768) {
    gsap.to(interactiveBaconState, {
      display: "none",
      autoAlpha: 0,
      x: '100%',
    });

    gsap.to([interactiveHandleBergerLine2, interactiveHandleBergerLine3], {
      duration: 0.25,
      rotation: 0,

      onComplete() {
        gsap.to(interactiveHandleBergerLine4, {
          duration: 0.25,
          opacity: 1,
        });

        gsap.to(interactiveBaconState, {
          display: "none",
          autoAlpha: 0,
          x: '100%',
        });

        gsap.to([interactiveHandleBergerLine1, interactiveHandleBergerLine4], {
          duration: 0.25,
          opacity: 1,

          onComplete() {
            document.body.removeAttribute('style');
          },
        });
      },
    });
  }
});



if (undefined !== interactiveHandleBerger) {
  interactiveHandleBerger.addEventListener('click', () => {
    activeBaconState = !activeBaconState;

    if (activeBaconState === true) {
      document.body.style.overflow = 'hidden';

      gsap.set([interactiveHandleBergerLine1, interactiveHandleBergerLine4], {
        duration: 0.25,
        opacity: 0,

        onComplete() {
          gsap.to(interactiveHandleBergerLine2, {
            duration: 0.25,
            rotation: 45,
          });

          gsap.to(interactiveHandleBergerLine3, {
            duration: 0.25,
            rotation: -45,
          });

          gsap.to(interactiveBaconState, {
            display: "block",
            autoAlpha: 1,
            x: 0,
          });
        },
      });

    } else {
      gsap.to([interactiveHandleBergerLine2, interactiveHandleBergerLine3], {
        duration: 0.25,
        rotation: 0,

        onComplete() {
          gsap.to(interactiveHandleBergerLine4, {
            duration: 0.25,
            opacity: 1,
          });

          gsap.to(interactiveBaconState, {
            display: "none",
            autoAlpha: 0,
            x: '100%',
          });

          gsap.to([interactiveHandleBergerLine1, interactiveHandleBergerLine4], {
            duration: 0.25,
            opacity: 1,

            onComplete() {
              document.body.removeAttribute('style');
            },
          });
        },
      });
    }
  });

  var activeBaconState = false;
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