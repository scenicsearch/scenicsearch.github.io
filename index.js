var link = document.getElementById('searchBtn');
var input = document.getElementById("input");
var modal = document.getElementById("modal");
var countdown = document.getElementById("countdown");
var btn = document.getElementById("opener");
var span = document.getElementById("close");
var menu = document.getElementById("menu");
var profile = document.getElementById("profile");
var main = document.getElementById('main');
var loader = document.getElementById('loader');
var linkEngine;

function imgRef() {
  main.style.backgroundImage = "url('https://source.unsplash.com/random/${4*screen.width}x${4*height}/?beautiful,nature,scene,natural')";
}
    
window.addEventListener("message", function(event) {
  linkEngine = event.data;
  updateLink();
});
    
function updateLink() {
  var search = encodeURIComponent(input.value);
  search = "https://www.google.com/search?q=" + search;
  link.setAttribute('href', search);
}

function loaded() {
  loader.style.display = "none";
  main.style.display = "block";
}

btn.onclick = function() { modal.style.display = "block"; menu.style.display = "block";}
span.onclick = function() { modal.style.display = "none"; menu.style.display = "none";}
