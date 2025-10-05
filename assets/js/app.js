// MOBILE SEARCH
$(function () {
  let footerMobileSearch = document.querySelector(".footer_mobile_search");
  let mobileSearch = document.querySelector('#mobile_search');
  let searchClose = document.querySelector('.close');

  footerMobileSearch.addEventListener('click', function () {
    mobileSearch.classList.add('mobile_search_active')
  });
  searchClose.addEventListener('click', function () {
    mobileSearch.classList.remove('mobile_search_active')
  });


  //SHOPERY SLICK SLIDER
  $('.parent_slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: `<span class="right"><iconify-icon icon="tabler:arrow-right" width="24" height="24"></iconify-icon></span>`,
    prevArrow: `<span class="left"><iconify-icon icon="tabler:arrow-left" width="24" height="24"></iconify-icon></span>`,
  });


  // CATEGORY FILTER
  $('.category-button').categoryFilter();



  // DEAL SECTION
  // Enable tooltips 
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


  $('#countdown').countdown('2025/12/30', function (event) {
    $('#days').html(event.strftime('%D'));
    $('#hours').html(event.strftime('%H'));
    $('#minutes').html(event.strftime('%M'));
    $('#seconds').html(event.strftime('%S'));
  });




  // ADVERTISE
  window.addEventListener("load", function () {
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-btn");

    // 2 সেকেন্ড পরে popup দেখাবে
    setTimeout(() => {
      popup.classList.add("active");
    }, 1000);

    // close button এ click করলে popup বন্ধ হবে
    closeBtn.addEventListener("click", () => {
      popup.classList.remove("active");
    });
  });


  // IN STOCK
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    dots: false,
    centerMode: false,
    centerPadding: '0px',
    arrows: true,
    prevArrow: `<span class="top"><iconify-icon icon="iconamoon:arrow-up-2-thin" width="24" height="24"></iconify-icon></span>`,
    nextArrow: `<span class="down"><iconify-icon icon="iconamoon:arrow-down-2-thin" width="24" height="24"></iconify-icon></span>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          vertical: false,
          arrows: false,
        }
      },
    ]
  });


  // ZOOM
  $(function () {
    $(".example").imagezoomsl();
  });


  // start

  let qty = 5;
  const qtyEl = document.getElementById("qty");
  const plusBtn = document.getElementById("plus");
  const minusBtn = document.getElementById("minus");

  function updateButtons() {
    // ✅ যখন qty = 1, minus button এ no symbol
    if (qty <= 1) {
      minusBtn.style.cursor = "not-allowed";
      minusBtn.style.opacity = "0.5";
    } else {
      minusBtn.style.cursor = "pointer";
      minusBtn.style.opacity = "1";
    }

    // ✅ যখন qty = 5, plus button এ no symbol
    if (qty >= 5) {
      plusBtn.style.cursor = "not-allowed";
      plusBtn.style.opacity = "0.5";
    } else {
      plusBtn.style.cursor = "pointer";
      plusBtn.style.opacity = "1";
    }
  }

  plusBtn.addEventListener("click", () => {
    if (qty < 5) {
      qty++;
      qtyEl.textContent = qty;
      updateButtons();
    }
  });

  minusBtn.addEventListener("click", () => {
    if (qty > 1) {
      qty--;
      qtyEl.textContent = qty;
      updateButtons();
    }
  });

  // প্রথমে call করা হচ্ছে যাতে initial state ঠিক থাকে
  updateButtons();

  //IN STOCK END







 new VenoBox({
    selector: '.venobox'
  });



/*****  START DESCRIPTION *****/
// Venobox Init
  new VenoBox({
    selector: '.venobox'
  });

  // Slick Slider Init
  $('.slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    fade: true,
    speed: 500,
    cssEase: 'linear'
  });

  // Bootstrap Tab with Slick Slide Sync
  document.querySelectorAll('.nav-link').forEach((btn, index) => {
    btn.addEventListener('shown.bs.tab', function () {
      $('.slider').slick('slickGoTo', index);
    });
  });

  /*****  END DESCRIPTION *****/




































});



