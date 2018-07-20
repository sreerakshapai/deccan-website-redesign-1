const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close')
const sideNav = document.querySelector('.sidenav');
const mainSlider = document.getElementById('main-slider');
const newArrivalCarousel = document.getElementById('new-arrival-carousel');


document.addEventListener('DOMContentLoaded', function() {
    var instances = M.Sidenav.init(sideNav);
    var slider1 = M.Carousel.init(mainSlider, {
        fullWidth: true
      });
    var carousel1 = M.Carousel.init(newArrivalCarousel, {
        indicators: true
    })      
  });
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });

menuToggle.addEventListener('click', function(){
    var instance = M.Sidenav.getInstance(sideNav);
    instance.open();
});

menuClose.addEventListener('click', function(){
    var instance = M.Sidenav.getInstance(sideNav);
    instance.close();
});
