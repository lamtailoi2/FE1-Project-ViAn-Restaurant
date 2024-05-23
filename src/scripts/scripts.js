const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let dots = $$(".switch");
let img = $(".slider-item img");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {

    //remove active from other dots
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    
    img.setAttribute("src", `./imgs/slide${index + 1}.jpg`);
    dot.classList.add("active");
  });
});
