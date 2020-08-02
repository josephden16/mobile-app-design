let close = document.getElementById("close");
let modal = document.querySelector(".modal");
let modalImg = document.getElementById("modalimg");
let imgOne = document.getElementById("imgOne");
let imgTwo = document.getElementById("imgTwo");
let imgThree = document.getElementById("imgThree");

imgOne.addEventListener("click", () => {
    modalImg.src = "img/Photo 1.jpg";
    modal.classList.toggle("open");
});

imgTwo.addEventListener("click", () => {
    modalImg.src = "img/Photo 2.jpg";
    modal.classList.toggle("open");

});

imgThree.addEventListener("click", () => {
    modalImg.src = "img/Photo 3.jpeg";
    modal.classList.toggle("open");
});

close.addEventListener("click", () => {
    modal.classList.remove("open");
});
