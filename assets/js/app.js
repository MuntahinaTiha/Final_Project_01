let footerMobileSearch = document.querySelector(".footer_mobile_search");
let mobileSearch = document.querySelector('#mobile_search');
let searchClose = document.querySelector('.close');

footerMobileSearch.addEventListener('click', function () {
    mobileSearch.classList.add('mobile_search_active')
});
searchClose.addEventListener('click', function () {
    mobileSearch.classList.remove('mobile_search_active')
});