window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
    // Adjust the visibility trigger threshold as needed
    var threshold = windowHeight * 0.8;
  
    return (
      rect.top <= windowHeight - threshold &&
      rect.bottom >= threshold
    );
  }
  
  function handleScroll() {
    var fadeImages = document.querySelectorAll('.fade-in-on-scroll');
    fadeImages.forEach(function (fadeImage) {
      if (isElementInViewport(fadeImage)) {
        fadeImage.classList.add('visible');
        fadeImage.classList.remove('fade-in-on-scroll');
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);



    function handleScrollAnimation() {
      var scrollPos = lastScrollPos;
      var h1Element = document.querySelector('h1');
      var h1OffsetTop = h1Element.offsetTop;
      var dripContainer = document.querySelector('.drip-container');

      if (scrollPos > h1OffsetTop) {
        dripContainer.classList.remove('animate');
      } else {
        dripContainer.classList.add('animate');
      }
    }
    