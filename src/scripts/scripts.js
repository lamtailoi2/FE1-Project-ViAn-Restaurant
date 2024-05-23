const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let dots = $$(".switch");
let img = $(".slider-item img");

let length = dots.length;
let tabIndex = 0;

const reloadImg = (index) => {
    dots.forEach((dot) => {
        dot.classList.remove("active");
      });
      img.classList.remove("show");
      img.classList.remove("fade-in");
      img.classList.add("fade-out");
      img.classList.add("hide");
      setTimeout(() => {
        img.setAttribute("src", `./imgs/slide${index + 1}.jpg`);
        img.classList.remove("fade-out");
        img.classList.remove("hide");
        img.classList.add("fade-in");
        img.classList.add("show");
      }, 300);
      dots[index].classList.add("active");
}

const intervalSwitchImg = setInterval(() => {
  
  if (tabIndex + 1  > length - 1  ) {
    tabIndex = 0;
  } else {
    tabIndex += 1;
  }
  reloadImg(tabIndex);
}, 15000);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    tabIndex = index;
    reloadImg(tabIndex);
  });
});

