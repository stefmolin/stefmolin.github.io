// keep the copyright year updated
document.getElementById("copyright-year").textContent = (new Date()).getFullYear().toString();

// set up the carousel
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, numVisible=2);
});
