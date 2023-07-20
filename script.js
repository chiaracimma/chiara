function showCookie() {
  let cookie=
document.querySelector("#cookie");
  cookie.style = "display:block;";
}

function hideCookie() {
   let cookie=
  document.querySelector("#cookie");
   cookie.style = "display:none;";
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

/*smooth*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*hamburger-menu*/

$( document ).ready(function() {

 /* Open Panel */
 $( ".hamburger" ).on('click', function() {
   $(".menu").toggleClass("menu--open");
 });

});




// Scroll to top

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Fine scroll to top



// Cookie

let popUp = document.getElementById("cookiePopup");
document.getElementById("acceptCookie").addEventListener("click", () => {
  let d = new Date();
  d.setMinutes(2 + d.getMinutes());
  document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
  popUp.classList.add("hide");
  popUp.classList.remove("show");
});
const checkCookie = () => {
  let input = document.cookie.split("=");
  if (input[0] == "myCookieName") {
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  } else {
    popUp.classList.add("show");
    popUp.classList.remove("hide");
  }
};
window.onload = () => {
  setTimeout(() => {
    checkCookie();
  }, 2000);
};

// Fine cookie
