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

var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function () {
  count += 1;
  button.innerHTML = "Click me: " + count;
};
