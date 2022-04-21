// preloader
    var loader = document.getElementById("preLoader");
    window.addEventListener("load",function(){
        loader.style.display = "none";
    });
// preloader



document.querySelector(".navbarItems a").addEventListener("click",function(){
    if(true){
        document.querySelector(".navbarItems a").classList.add("active");
    } else{
        document.querySelector(".navbarItems a").classList.remove("active");
    }
});


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
    // hamburger button start
    $(".btn-collapse").click(function(){
        $("#btnCollapseNavbar").show("slow");
    });
    $("#collapsable").click(function(){
        $("#btnCollapseNavbar").hide("slow");
    });
    // hamburger button end
    // wait section slider start
    $(".dot:nth-child(1)").click(function(){
        $(".slider:nth-child(1)").css("display", "block");
        $(this).addClass("dot-active");

        $(".slider:nth-child(2)").css("display", "none");
        $(".dot:nth-child(2)").removeClass("dot-active");

        $(".slider:nth-child(3)").css("display", "none");
        $(".dot:nth-child(3)").removeClass("dot-active");
    });

    $(".dot:nth-child(2)").click(function(){
        $(".slider:nth-child(2)").css("display", "block");
        $(this).addClass("dot-active");

        $(".slider:nth-child(1)").css("display", "none");
        $(".dot:nth-child(1)").removeClass("dot-active");
        
        $(".slider:nth-child(3)").css("display", "none");
        $(".dot:nth-child(3)").removeClass("dot-active");
    });

    $(".dot:nth-child(3)").click(function(){
        $(".slider:nth-child(3)").css("display", "block");
        $(this).addClass("dot-active");

        $(".slider:nth-child(2)").css("display", "none");
        $(".dot:nth-child(2)").removeClass("dot-active");

        $(".slider:nth-child(1)").css("display", "none");
        $(".dot:nth-child(1)").removeClass("dot-active");
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

// about.html
// navbar scroll start 
let scrollAbout = 900;
window.onscroll = function(){
    if(window.scrollY > scrollAbout || window.pageYoffset > scrollAbout){
        document.querySelector(".navbar-mainAbout").classList.add("scrollPosition");
    } else{
        document.querySelector(".navbar-mainAbout").classList.remove("scrollPosition");
    }
}
// navbar scroll end

// donate.html
// donation start
$(document).ready(function(){
    $(".cards li:nth-child(1)").click(function(){
        $(this).css("background-color", "#fcebbd");
        $(".cards li:nth-child(2)").css("background-color", "unset");
        $(".cards li:nth-child(3)").css("background-color", "unset");
        $(".cards li:nth-child(4)").css("background-color", "unset");
    });
    $(".cards li:nth-child(2)").click(function(){
        $(this).css("background-color", "#fcebbd");
        $(".cards li:nth-child(1)").css("background-color", "unset");
        $(".cards li:nth-child(3)").css("background-color", "unset");
        $(".cards li:nth-child(4)").css("background-color", "unset");
    });
    $(".cards li:nth-child(3)").click(function(){
        $(this).css("background-color", "#fcebbd");
        $(".cards li:nth-child(2)").css("background-color", "unset");
        $(".cards li:nth-child(1)").css("background-color", "unset");
        $(".cards li:nth-child(4)").css("background-color", "unset");
    });
    $(".cards li:nth-child(4)").click(function(){
        $(this).css("background-color", "#fcebbd");
        $(".cards li:nth-child(2)").css("background-color", "unset");
        $(".cards li:nth-child(3)").css("background-color", "unset");
        $(".cards li:nth-child(1)").css("background-color", "unset");
    });
});
// donation end
