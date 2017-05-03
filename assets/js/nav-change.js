var menu = document.getElementsByClassName("menu");

var lastScrollTop = 0;
window.addEventListener('scroll', function(){
  var currentScroll = window.pageYOffset || document.body.scrollTop;
  if(currentScroll > lastScrollTop){  //cuando baja scroll
    document.getElementById("logo").src= "assets/img/logo-pink.png";
    document.getElementById("nav-header").style.background= "white";
    changeColor();
  }
  else{
    document.getElementById("logo").src= "assets/img/logo-pink.png";
    changeColor();

      if(currentScroll<=3)
      {
        document.getElementById("logo").src= "assets/img/logo-white.png";
        document.getElementById("nav-header").style.background= "none";
        menu[0].classList.remove("color-grey");
        menu[1].classList.remove("color-grey");
        menu[2].classList.remove("color-grey");
        menu[3].classList.remove('color-grey');
        menu[3].classList.remove('border-grey');
        menu[4].style.visibility="hidden";
        menu[4].classList.remove("color-purple");
      }
  }
  lastScrollTop = currentScroll;
}, false);

function changeColor(){
  menu[0].classList.add("color-grey");
  menu[1].classList.add("color-grey");
  menu[2].classList.add("color-grey");
  menu[3].classList.add('color-grey');
  menu[3].classList.add('border-grey');
  menu[4].style.visibility="visible";
  menu[4].classList.add("color-purple");
}
