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


    // Enable tooltips 
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))









});



