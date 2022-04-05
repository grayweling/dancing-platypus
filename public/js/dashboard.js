// alert('this is connecting');

function Menu(e) {
  let list = document.querySelector("ul");

  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[80px]"),
      list.classList.remove(opacity - 100));
}

var button = document.getElementById("platypus"),
  count = 0;
button.onclick = function () {
  count += 1;
  button.innerHTML = "Click me: " + count;
};


/* 
on first click of an image, counter with 60 seconds start. show timer decreasing.
once they click the image, count clicks. show number increasing.
once timer === zero, reset timer, stop counting, hide image, show the result with count with [Play Again] button.
once click [Play Again], reset game and show image
*/