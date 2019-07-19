$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplaySpeed: 1000
    });
  });


$(document).ready(function(){
    [...document.querySelectorAll(".isotope-nav-item")].forEach( (item)=>{        
        item.addEventListener("click", ()=>{
            document.querySelector(".isotope-nav-item-active").classList.remove("isotope-nav-item-active");
            window.event.target.classList.add("isotope-nav-item-active");
        });
    });
});