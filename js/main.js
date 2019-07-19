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


 // Isotope
 $('.iso-cont').isotope({
    filter: '*',
    animationOptions:{
        easing:'easeIn',
        duration:5000,
        queue:false
    }
});

// Sort & Filtering            
$('.isotope-nav-item').click(function(){
    $('.isotope-nav-item').removeClass('.current'); 
    $('.isotope-nav-item').addClass('.current'); 
    var selector = $(this).attr('data-filter');
    $('.iso-cont').isotope({
        filter: selector,
        animationOptions:{
            easing:'linear',
            duration:1500,
            queue:false
        }
    });   
});