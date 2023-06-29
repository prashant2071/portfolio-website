var swiper = new Swiper(".slider-content", {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor:'true', 
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets:true,  //dyanamic bullet pagination
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
        breakpoints:{
      0:{
        slidesPerView:1,
      },
      520:{
        slidesPerView:2,
      },
      960:{
        slidesPerView:3,
      },
    }
  });
