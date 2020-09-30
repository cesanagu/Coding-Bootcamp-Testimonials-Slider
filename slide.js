var slide_1 = document.getElementById("slide1");
var slide_2 = document.getElementById("slide2");

var nextBtn = document.getElementById("next-btn");
var prevBtn = document.getElementById("prev-btn");

nextBtn.onclick = function () {
  slide_2.setAttribute("class", "hidden");
  slide_1.setAttribute("class", "visible");
};

prevBtn.onclick = function () {
  slide_1.setAttribute("class", "hidden");
  slide_2.setAttribute("class", "visible");
};
