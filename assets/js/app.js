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







    // ====================cart and cart page ================================//


    $(function () {
        // ==== Select elements which may exist on the current page ====//
        const cartSidebar = document.getElementById("cartSidebar");
        const cartItemsEl = document.getElementById("cartItems");
        const cartSubtotalEl = document.getElementById("cartSubtotal");
        const headPrice = document.getElementById("price");
        const clearCartBtn = document.getElementById("clearCart");
        const closeCartBtn = document.getElementById("closeCart");

        const cartToggleDesktop = document.getElementById("cartToggleDesktop");
        const cartCountDesktop = document.getElementById("cartCountDesktop");
        const cartCountCartBar = document.getElementById("item_number");
        const cartHeadCount = document.getElementById("header_item");
        const cartToggleMobile = document.getElementById("cartToggleMobile");
        const cartCountMobile = document.getElementById("cartCountMobile");

        // Cart page elements (may not exist on index.html)
        const cartTableBody = document.getElementById("cartTableBody");
        const summarySubtotal = document.getElementById("summarySubtotal");
        const summaryTotal = document.getElementById("summaryTotal");
        const updateCartBtn = document.getElementById("updateCartBtn");

        // ==== Load cart from localStorage (array of items) ====
        // item: { id, name, price (number), img, quantity (int) }
        let cart = JSON.parse(localStorage.getItem("cart")) || [];



        // Save cart to localStorage
        function saveCart() {
            localStorage.setItem("cart", JSON.stringify(cart));
        }

        // Calculate subtotal (sum of price * qty)
        function calculateSubtotal() {
            return cart.reduce((sum, it) => sum + (it.price * it.quantity), 0);
        }

        // Update badge counts (unique items only)
        function updateBadges() {
            const count = cart.length; // unique product count
            if (cartCountDesktop) cartCountDesktop.textContent = count;
            if (cartCountMobile) cartCountMobile.textContent = count;
            if (cartCountCartBar) cartCountCartBar.textContent = count;
            if (cartHeadCount) cartHeadCount.textContent = count;
        }

        // Render cart items inside sidebar (no plus/minus, only text qty and remove)
        function renderSidebar() {
            if (!cartItemsEl) return;
            cartItemsEl.innerHTML = "";

            if (cart.length === 0) {
                cartItemsEl.innerHTML = `<p style="color:var(--muted)">Your cart is empty.</p>`;
                cartSubtotalEl && (cartSubtotalEl.textContent = `$0.00`);

                return;
            }

            cart.forEach((item, idx) => {
                const itemEl = document.createElement("div");
                itemEl.className = "cart-item";
                itemEl.innerHTML = `
        <div class="row cart_item_row align-items-center">
           <div class="col-4 p-0 image"><a href="details.html"><img class="img-fluid" src="${item.img || ''}" alt="${item.name}"></a></div>
           <div class="info col-6">
             <h4>${item.name}</h4>
             <div class="quentity_price">
                <div class="muted"><span>${item.quantity} kg x</span></div>
                <div class="price"><span>${Number(item.price).toFixed(2)}</span></div>
             </div>
           </div>
           <div class="col-2 p-0 d-flex justify-content-end">
               <span class="remove_item"><iconify-icon class="remove" data-index="${idx}" title="Remove" icon="ic:round-close" width="18" height="18"></iconify-icon></span>
           </div>
           
        </div>
      `;
                cartItemsEl.appendChild(itemEl);
            });

            const subtotal = calculateSubtotal();
            document.getElementById("cartSubtotalNav").textContent = subtotal.toFixed(2);
            cartSubtotalEl && (cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`);
        }

        // Remove item by index (used in sidebar)
        function removeItem(index) {
            cart.splice(index, 1);
            saveCart();
            renderAll();
        }

        // Clear entire cart
        function clearCart() {
            cart = [];
            saveCart();
            renderAll();
        }

        // Add product (called from index.html product buttons)
        function addProductToCart(product) {
            // product = { id, name, price, img }
            const existing = cart.find(it => it.id === product.id);
            if (existing) {
                // if already exists, increase quantity but cap at 5
                if (existing.quantity < 5) {
                    existing.quantity += 1;
                }
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            saveCart();
            renderAll();
        }

        // ==== CART PAGE RENDER (with plus/minus) ====
        function renderCartPage() {
            if (!cartTableBody) return;
            cartTableBody.innerHTML = "";

            if (cart.length === 0) {
                cartTableBody.innerHTML = `<p class="empty" colspan="5" padding:20px;text-align:center">Your cart is empty.</p>`;
                summarySubtotal && (summarySubtotal.textContent = `$0.00`);
                summaryTotal && (summaryTotal.textContent = `$0.00`);
                return;
            }

            cart.forEach((item, idx) => {
                const subtotal = (item.price * item.quantity).toFixed(2);
                const tr = document.createElement("section");
                tr.innerHTML = `
        <div class="row item_row align-items-center m-0" style="width: 100%;">
        
        <div class="prod-info col-5">
            <div class="prod_row row align-items-center">
                <div class="image col-6 p-0">
                    <a href="details.html"><img class="img-fluid" src="${item.img || ''}" alt="${item.name}"></a>
                </div>
                <div class="col-6">
                    <p>${item.name}</p>
                </div>
            </div>
            
        </div>
        
        <div class="col-lg-2 col-4 price_col"><span class="price">$${Number(item.price).toFixed(2)}</span></div><br>
        <div class="col-lg-2 p-0 quentity">
          <div class="qty-control" data-index="${idx}">
            <button class="qty-decrease" data-index="${idx}">-</button>
            <div class="qty-display" id="qty-${idx}">${item.quantity}</div>
            <button class="qty-increase" data-index="${idx}">+</button>
          </div>
        </div>
        <div class="col-2 order-3"><span class="total">$${subtotal}</span></div>
        <div class="col-1 order-3 item_remove"><span><iconify-icon class="remove-row" data-index="${idx}" icon="si:close-fill" width="24" height="24"></iconify-icon></span></div>
        </div>
      `;
                cartTableBody.appendChild(tr);
            });

            const subtotalVal = calculateSubtotal();
            summarySubtotal && (summarySubtotal.textContent = `$${subtotalVal.toFixed(2)}`);
            summaryTotal && (summaryTotal.textContent = `$${subtotalVal.toFixed(2)}`);
            headPrice && (headPrice.textContent = `$${subtotalVal.toFixed(2)}`);
        }

        // Increase quantity on cart page (max 5)
        function increaseQty(index) {
            const item = cart[index];
            if (!item) return;
            if (item.quantity < 5) {
                item.quantity += 1;
                saveCart();
                renderCartPage();
                renderSidebar(); // keep sidebar in sync
                updateBadges();
            }
        }

        // Decrease quantity on cart page (min 1)
        function decreaseQty(index) {
            const item = cart[index];
            if (!item) return;
            if (item.quantity > 1) {
                item.quantity -= 1;
                saveCart();
                renderCartPage();
                renderSidebar();
                updateBadges();
            }
        }

        // Remove item from cart page
        function removeFromCartPage(index) {
            cart.splice(index, 1);
            saveCart();
            renderAll();
        }

        // Update all visible parts (badges, sidebar, cart page)
        function renderAll() {
            updateBadges();
            renderSidebar();
            renderCartPage();
        }

        // ==== EVENT LISTENERS ====
        // ===== Toast Notification System =====
        function showToast(message, type = "error") {
            const toast = document.getElementById("toast");
            if (!toast) return;

            toast.textContent = message;
            toast.className = `toast-message show ${type}`;

            setTimeout(() => {
                toast.classList.remove("show");
            }, 3000);
        }

        // Add to cart buttons (on index.html)
        document.querySelectorAll(".add-to-cart").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const p = e.target.closest(".product");
                const id = p.dataset.id;
                const name = p.dataset.name;
                const price = parseFloat(p.dataset.price);
                const img = p.dataset.img || p.querySelector("img")?.src || "";
                const stock = p.dataset.stock === "true"; // true / false হিসেবে convert

                // 🧠 যদি product out of stock হয়, তাহলে add না করে alert দেখাবে
                if (!stock) {
                    showToast(`${name} is currently out of stock!`, "warning");
                    return;
                }


                addProductToCart({ id, name, price, img });
            });
        });


        // Sidebar remove (event delegation)
        if (cartItemsEl) {
            cartItemsEl.addEventListener("click", (e) => {
                if (e.target.classList.contains("remove")) {
                    const idx = Number(e.target.dataset.index);
                    removeItem(idx);
                }
            });
        }

        // Clear all button in sidebar
        if (clearCartBtn) clearCartBtn.addEventListener("click", clearCart);

        // Sidebar open/close toggles

        if (cartToggleDesktop) cartToggleDesktop.addEventListener("click", () => cartSidebar && cartSidebar.classList.add("active"));
        if (cartToggleMobile) cartToggleMobile.addEventListener("click", () => cartSidebar && cartSidebar.classList.add("active"));
        if (closeCartBtn) closeCartBtn.addEventListener("click", () => cartSidebar && cartSidebar.classList.remove("active"));

        // Cart page quantity controls and remove (event delegation)
        if (cartTableBody) {
            cartTableBody.addEventListener("click", (e) => {
                const target = e.target;
                const idx = target.dataset.index !== undefined ? Number(target.dataset.index) : null;

                if (target.classList.contains("qty-increase") && idx !== null) {
                    increaseQty(idx);
                } else if (target.classList.contains("qty-decrease") && idx !== null) {
                    decreaseQty(idx);
                } else if (target.classList.contains("remove-row") && idx !== null) {
                    removeFromCartPage(idx);
                }
            });
        }

        // Update Cart button (on cart page) - re-calc and save (most changes already saved live)
        if (updateCartBtn) {
            updateCartBtn.addEventListener("click", (e) => {
                // we already update on click, but provide an explicit save/render
                saveCart();
                renderAll();
                // simple feedback:
                updateCartBtn.textContent = "Updated";
                setTimeout(() => updateCartBtn.textContent = "Update Cart", 900);
            });
        }

        // Initial render
        renderAll();


        // =========================== CHECKOUT PAGE RENDER =========================== //


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