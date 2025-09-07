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


    $('#countdown').countdown('2026/01/01', function (event) {
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


});



