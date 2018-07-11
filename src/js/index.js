const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close')
const sideNav = document.querySelector('.sidenav');

document.addEventListener('DOMContentLoaded', function() {
    var instances = M.Sidenav.init(sideNav);
    console.log(M);
    console.log(instances);
  });

menuToggle.addEventListener('click', function(){
    var instance = M.Sidenav.getInstance(sideNav);
    instance.open();
});

menuClose.addEventListener('click', function(){
    var instance = M.Sidenav.getInstance(sideNav);
    instance.close();
});
