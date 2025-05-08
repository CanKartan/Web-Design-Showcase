document.addEventListener("DOMContentLoaded", function() {
  const carousels = [
      {
          id: "image-carousel",
          interval: 4000
      },
      {
          className: "service-img",
          interval: 2000
      }
  ];

  carousels.forEach(carousel => {
      const carouselContainer = carousel.id ? document.getElementById(carousel.id) : null;
      const carouselSlides = carousel.className ? document.querySelectorAll("." + carousel.className + " img") : null;
      let currentIndex = 0;

      function showImage(index) {
          const transformValue = -index * 100 + "%";
          if (carouselContainer) {
              carouselContainer.style.transform = "translateX(" + transformValue + ")";
          } else if (carouselSlides) {
              carouselSlides.forEach(slide => slide.classList.remove("active"));
              carouselSlides[index].classList.add("active");
          }
      }

      function nextImage() {
          currentIndex = (currentIndex + 1) % (carouselContainer ? carouselContainer.children.length : carouselSlides.length);
          showImage(currentIndex);
      }

      setInterval(nextImage, carousel.interval);
      showImage(currentIndex);
  });
});



  //wahtsapp  
  (function () {
    var options = {
        whatsapp: "905010982326",
        call_to_action: "Anında Randevu !!",
        position: "left",
        
    };
    var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();
