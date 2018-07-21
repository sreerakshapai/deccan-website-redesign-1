const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close')
const sideNav = document.querySelector('.sidenav');
const mainSlider = document.getElementById('main-slider');
const newArrivalCarousel = document.getElementById('new-arrival-carousel');
const requestQuoteBtn = document.querySelectorAll('.request-quote');
const modals = document.querySelectorAll('.modal');
const modalCloseBtn = document.querySelectorAll('.modal-close');
const modalSendBtn = document.querySelectorAll('.modal-send');

document.addEventListener('DOMContentLoaded', function() {
    var instances = M.Sidenav.init(sideNav);
    var slider1 = M.Carousel.init(mainSlider, {
        fullWidth: true
      });
    var carousel1 = M.Carousel.init(newArrivalCarousel, {
        indicators: true
    })
    var quoteModal = M.Modal.init(modals, {
        dismissible: true
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

requestQuoteBtn.forEach(btn => {btn.addEventListener("click", function(){
    const quoteModal = document.getElementById('quote-modal');
    const item = this.getAttribute('data-item');
    quoteModal.childNodes[0].childNodes[0].innerHTML = "Request Quote: " + item;
    console.log(quoteModal.childNodes[0].childNodes[2].dataset.item=item)
})});

modalCloseBtn.forEach(btn => {btn.addEventListener("click", function(event){
    event.preventDefault();
    console.log('Close Btn was clicked');
})});

modalSendBtn.forEach(btn => {btn.addEventListener("click", function(event){
    event.preventDefault();
    const form = document.getElementById('request-quote-form');
    const name = form.childNodes[0].childNodes[0].value;
    const email = form.childNodes[1].childNodes[0].value;
    const contact = form.childNodes[2].childNodes[0].value;
    const pincode = form.childNodes[3].childNodes[0].value;
    const location = form.childNodes[4].childNodes[0].value;
    const message = form.childNodes[5].childNodes[0].value;
    const info = {name, email, contact, pincode, location, message};

    const error = fieldValidation(name, email, contact, message, pincode, location)

    if(error){
        console.log(error)
    }else {
        console.log(info);
    }




})});

function fieldValidation(name, email, contact, message, pincode, location){
    let error = "";

    if(!validateEmpty(name, email, contact, message, pincode, location)){
        error += "Please fill all the fields" + "<br><br>";
    }
    if(!validateEmail(email)){
        error += "Invalid Email Address. Please correct it" + "<br><br>";
    }
    if(!validatePhone(contact)){
         error += "Invalid Mobile Number. Do not prefix +91 or 0. Do not add space or characters." + "<br><br>";
    }
    if(!validatePincode(pincode)){
         error += "Invalid Pincode. Please correct it" + "<br><br>";
    }

    return error;
}

function validateEmpty(name, email, contact, message, pincode, location)
{
    if (name == "" || email == "" || contact == "" || message == "" || pincode == "" || location == ""){
        return false;
    }else{
        return true;
    }
}

function validateEmail(email) {
    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(email)) {
        return true;
    }else {
        return false;
    }
} // End of validateEmail function.

function validatePhone(contact){
    if(contact.length == 10){
        return true;
    }
    else {
        return false;
    }
}

function validatePincode(pincode){
    if(pincode.length == 6){
        return true;
    }
    else {
        return false;
    }
}

function validateLength(word){
    if(word.length > 2){
        return true;
    }
    else {
        return false;
    }
}
