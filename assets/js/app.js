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





  /*****  START CART SIDEBAR *****/
  const addToCartBtns = document.querySelectorAll('.add-to-cart');
  const cartItemsContainer = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const itemCount = document.getElementById('itemCount');
  const productCount = document.getElementById('productCount');
  const cartTotal = document.getElementById('cartTotal');

  let cart = [];

  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-name');
      const price = parseFloat(btn.getAttribute('data-price'));
      const img = btn.getAttribute('data-img');

      const existing = cart.find(item => item.name === name);
      if (existing) {
        existing.qty++;
      } else {
        cart.push({ name, price, img, qty: 1 });
      }

      updateCart();

      // Open offcanvas when product is added
      const cartOffcanvas = new bootstrap.Offcanvas('#cartOffcanvas');
      cartOffcanvas.show();
    });
  });

  function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach((item, index) => {
      total += item.price * item.qty;
      count += item.qty;

      const div = document.createElement('div');
      div.classList.add('cart-item');
      div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="info">
      <h6 class="mb-0">${item.name}</h6>
      <small>$${item.price.toFixed(2)} × ${item.qty}</small>
      </div>
      <button class="remove">&times;</button>
      `;

      div.querySelector('.remove').addEventListener('click', () => {
        cart.splice(index, 1);
        updateCart();
      });

      cartItemsContainer.appendChild(div);
    });

    cartCount.textContent = count;
    itemCount.textContent = count;
    productCount.textContent = `${count} Product${count > 1 ? 's' : ''}`;
    cartTotal.textContent = `$${total.toFixed(2)}`;
  }
  /*****  END CART SIDEBAR *****/




  //***************  CHECKOUT PAGE RENDER *************** //


  const orderItems = document.getElementById("orderItems");
  const checkoutSubtotal = document.getElementById("checkoutSubtotal");
  const checkoutTotal = document.getElementById("checkoutTotal");
  const placeOrderBtn = document.getElementById("placeOrderBtn");

  function renderCheckout() {
    if (!orderItems) return; // যদি checkout page এ না থাকি, কিছু করবে না
    orderItems.innerHTML = "";
    let subtotal = 0;

    if (cart.length === 0) {
      orderItems.innerHTML = `<p class="empty">Your cart is empty.</p>`;
      checkoutSubtotal && (checkoutSubtotal.textContent = `$0.00`);
      checkoutTotal && (checkoutTotal.textContent = `$0.00`);
      return;
    }

    cart.forEach(item => {
      let li = document.createElement("div");
      li.innerHTML = `
                <div class="row product_checking align-items-center" style="width: 100%;">
                <div class="col-3 image"><img class="img-fluid" src="${item.img}" alt="${item.name}"></div>
                <div class="col-6 pr_name p-0"><h6>${item.name} x${item.quantity}</h6></div>
                <div class="col-3 pr_price p-0"><span>$${(item.price * item.quantity).toFixed(2)}</span></div>
                </div>`;
      orderItems.appendChild(li);

      subtotal += item.price * item.quantity;
    });

    checkoutSubtotal && (checkoutSubtotal.textContent = `$${subtotal.toFixed(2)}`);
    checkoutTotal && (checkoutTotal.textContent = `$${subtotal.toFixed(2)}`);
  }

  if (placeOrderBtn) {
    placeOrderBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
      }

      const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value || "cod";
      console.log("Order Placed!", { cart, paymentMethod });

      alert("✅ Order placed successfully!");

      // Clear cart after order
      cart = [];
      saveCart();
      renderAll();
      renderCheckout();
    });
  }

  // Checkout page initial render
  renderCheckout();











});



