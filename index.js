let header = document.getElementsByTagName("header")[0];
let aboutUsBtn = document.getElementById("nav-about-us-btn");
let contactUsBtn = document.getElementById("nav-contact-us-btn");
let designBtn = document.getElementById("nav-design-btn");

aboutUsBtn.addEventListener("click",onNavItemClicked);
contactUsBtn.addEventListener("click",onNavItemClicked);
designBtn.addEventListener("click",onNavItemClicked);

function onNavItemClicked (e){
    let target = "";
    if(e.target == aboutUsBtn){
        target += "about-us-section";
    }
    else if(e.target == contactUsBtn){
        target += "contact-us";
    }
    else if(e.target == designBtn){
        target += "design-section";
    }
    let nav_height = document.getElementsByTagName("header")[0].getBoundingClientRect().height;
    const element = document.getElementById(target);
    const topPos = element.getBoundingClientRect().top + window.pageYOffset - nav_height;
    window.scrollTo({
        top: topPos, // scroll so that the element is at the top of the view
        behavior: 'smooth' // smooth scroll
      });
    onNavCloseClicked();
}


let hamburger = document.getElementsByClassName("hamburger")[0];
let navClose = document.getElementsByClassName("nav-close")[0];

let navbar = document.getElementsByClassName("navbar")[0];
let navbarItems = document.getElementsByClassName("nav-items");

hamburger.addEventListener("click",onHamClicked);
navClose.addEventListener("click",onNavCloseClicked);

function onHamClicked(e){
    for(let i = 0; i < 3; i++){
        navbarItems[i].style.marginBottom = "8px";
    }
    navbar.style.display = "flex";
    navbar.style.flexDirection = "column";
    header.style.flexDirection = "column";
    hamburger.classList.remove("hamburger-show");
    navClose.style.display = "flex";
    navbar.style.marginRight = "auto";
}

function onNavCloseClicked(e){
    for(let i = 0; i < 3; i++){
        navbarItems[i].style.marginBottom = "0px";
    }
    navbar.style.display = "none";
    hamburger.classList.add("hamburger-show");
    navClose.style.display = "none";
    navbar.style.flexDirection = "row";
    header.style.flexDirection = "row";
    navbar.style.marginRight = "";
}


var slideIndex = 1;
var myTimer;
var slideIndexDesign = 1;
var myTimerDesign;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
    showSlidesDesign(slideIndexDesign);
    myTimerDesign = setInterval(function(){plusSlidesDesign(1)}, 4000);
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
}




// NEXT AND PREVIOUS CONTROL
function plusSlidesDesign(n){
    clearInterval(myTimerDesign);
    if (n < 0){
      showSlidesDesign(slideIndexDesign -= 1);
    } else {
     showSlidesDesign(slideIndexDesign += 1); 
    }  
    if (n === -1){
      myTimerDesign = setInterval(function(){plusSlidesDesign(n + 2)}, 4000);
    } else {
      myTimerDesign = setInterval(function(){plusSlidesDesign(n + 1)}, 4000);
    }
  }
  
  function showSlidesDesign(n){
    var i;
    var slides = document.getElementsByClassName("mySlides-design");
  //   var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndexDesign = 1}
    if (n < 1) {slideIndexDesign = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  //   for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace(" active", "");
  //   }
    slides[slideIndexDesign-1].style.display = "block";
  //   dots[slideIndex-1].className += " active";
  }
  