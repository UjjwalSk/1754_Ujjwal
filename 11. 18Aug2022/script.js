// document.getElementById("myBtn").addEventListener("click", function () {
//   alert("Hello World!");
// });

var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);
function myFunction() {
  document.getElementById("demo").innerHTML += "Moused over!<br>";
}
function mySecondFunction() {
  document.getElementById("demo").innerHTML += "Clicked!<br>";
}
function myThirdFunction() {
  document.getElementById("demo").innerHTML += "Moused out!<br>";
}
    