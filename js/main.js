var burger = document.getElementById("burger");
var navbar = document.getElementById("navbar");
var main = document.getElementById("main")



burger.onclick = function() {
  navbar.style.right = "0";
}

window.onclick = function(event) {
  if (event.target == burger) {
  navbar.style.right = "-11110";
  }
} 
