
function openGift(evt, whatGet) {
  var i, tabcontent, tablinks;
  tabcontent = 
document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className =
tablinks[i].className.replace(" active", "");
    }
    document.getElementById(whatGet).style.display = 
    "block";
    evt.currentTarget.className += " active";
}


document.querySelector(".prevBtn").addEventListener("click", () => {
changeSlides(-1);
});
document.querySelector(".nextBtn").addEventListener("click", () => {
changeSlides(1);
});
var slideIndex = 1;
showSlides(slideIndex);
function changeSlides(n) {
showSlides((slideIndex += n));
}
function currentSlide(n) {
showSlides((slideIndex = n));
}
function showSlides(n) {
var i;
var slides = document.getElementsByClassName("Slide");
if (n > slides.length) {
slideIndex = 1;
}
if (n < 1) {
slideIndex = slides.length;
}
Array.from(slides).forEach(item => (item.style.display = "none"));
slides[slideIndex - 1].style.display = "block";
}