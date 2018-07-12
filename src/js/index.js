const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close')
const sideNav = document.querySelector('.sidenav');
const carousel = document.querySelectorAll('.carousel');

document.addEventListener('DOMContentLoaded', function() {
    var instances = M.Sidenav.init(sideNav);
    var slider = M.Carousel.init(carousel, {
        fullWidth: true
      });
  });
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

menuToggle.addEventListener('click', function(){
    var instance = M.Sidenav.getInstance(sideNav);
    instance.open();
});

menuClose.addEventListener('click', function(){
    var instance = M.Sidenav.getInstance(sideNav);
    instance.close();
});
