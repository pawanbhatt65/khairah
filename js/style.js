// preloader
    var loader = document.getElementById("preLoader");
    window.addEventListener("load",function(){
        loader.style.display = "none";
    });
// preloader

// cart js start
function shoppingCart(){
    document.querySelector("#cartInformation").classList.toggle("cart-active");
}
document.querySelector("#cart").addEventListener("click", shoppingCart);
// cart js end
// search js start
function searchHere(){
    document.querySelector(".search-any").classList.toggle("search-active");
}
// search js end
$(document).ready(function(){
    $(".navbarHome").hover(function(){
        $(this).toggleClass("active");
    });
    $(".btn-collapse").click(function(){
        $("#btnCollapseNavbar").show("slow");
    });
    $("#collapsable").click(function(){
        $("#btnCollapseNavbar").hide("slow");
    });
    // wait section slider start
    $(".dots li:nth-child(1)").click(function(){
        $(".wait .slider:nth-child(1)").css({
            "display": "block"
        });
        $(this).addClass("dot dot-active");
        $(".wait .slider:nth-child(2)").css({
            "display": "none"
        });
        $(".dots li:nth-child(2)").removeClass("dot-active");
        $(".wait .slider:nth-child(3)").css({
            "display": "none"
        });
        $(".dots li:nth-child(3)").removeClass("dot-active");
    });

    $(".dots li:nth-child(2)").click(function(){
        $(".wait .slider:nth-child(2)").css({
            "display": "block"
        });
        $(this).addClass("dot dot-active");
        $(".wait .slider:nth-child(1)").css({
            "display": "none"
        });
        $(".dots li:nth-child(1)").removeClass("dot-active");
        $(".wait .slider:nth-child(3)").css({
            "display": "none"
        });
        $(".dots li:nth-child(3)").removeClass("dot-active");
    });

    $(".dots li:nth-child(3)").click(function(){
        $(".wait .slider:nth-child(3)").css({
            "display": "block"
        });
        $(this).addClass("dot dot-active");
        $(".wait .slider:nth-child(2)").css({
            "display": "none"
        });
        $(".dots li:nth-child(2)").removeClass("dot-active");
        $(".wait .slider:nth-child(1)").css({
            "display": "none"
        });
        $(".dots li:nth-child(1)").removeClass("dot-active");
    });
    // wait section slider end 
    var slide = document.querySelectorAll(".testimonial-slider");
    var currentSlide = 0;
    $(".testimonial-next").click(function(){
        if(currentSlide == slide.length - 1){
            currentSlide = 0;
        }else{
            currentSlide++;
        }
        document.querySelector(".testimonial-slider.active-slider").classList.remove("active-slider");
        slide[currentSlide].classList.add("active-slider");
    });
    $(".testimonial-prev").click(function(){
        if(currentSlide == 0){
            currentSlide = slide.length-1;
        } else{
            currentSlide--;
        }
        document.querySelector(".testimonial-slider.active-slider").classList.remove("active-slider");
        slide[currentSlide].classList.add("active-slider");
    });


    // scrollTop start
    $(".btn-scrollTop").click(function(){
        $("html").scrollTop(0);
    });

    // scrollTop end
});