// var element = documentById('tel');
// var maskOptions = {
//    mask: '+7(000)000-00-00',
//    lazy: false
// }
// var mask = new mask(element, maskOptions);







//main.html

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
   showDivs(slideIndex += n);
}

function showDivs(n) {
   var i;
   var x = document.getElementsByClassName("mySlides");
   if (n > x.length) { slideIndex = 1 }
   if (n < 1) { slideIndex = x.length }
   for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
   }
   x[slideIndex - 1].style.display = "block";
}



