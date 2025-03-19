  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("#hero-carousel");

    if (carousel) {
      carousel.addEventListener("slide.bs.carousel", function (event) {
        let activeItem = event.relatedTarget;
        activeItem.classList.add("slide-in");

        setTimeout(() => {
          activeItem.classList.remove("slide-in");
        }, 3000);
      });
    }
  });
