const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Convert NodeList to Array
let dots = Array.from($$(".switch"));

let homeTopImg = $(".hometop-img");
console.log(homeTopImg);
let aboutImg = $(".about-img img");
console.log(aboutImg);

let homeTopDots = dots.slice(0, 2);
let aboutDots = dots.slice(2);

let homeTabIndex = 0;
let aboutTabIndex = 0;

const updateImg = (index, section, img) => {
  console.log(`Updating ${section} image to index ${index}`);
  img.classList.remove("show", "fade-in");
  img.classList.add("fade-out", "hide");
  setTimeout(() => {
    img.setAttribute("src", `./imgs/${section}${index + 1}.jpg`);
    img.classList.remove("fade-out", "hide");
    img.classList.add("fade-in", "show");
  }, 300);
};

const updateDot = (index, sectionDots) => {
  sectionDots.forEach((dot) => {
    dot.classList.remove("active");
  });
  sectionDots[index].classList.add("active");
};

aboutDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    aboutTabIndex = index;
    updateDot(aboutTabIndex, aboutDots);
    updateImg(aboutTabIndex, "about", aboutImg);
  });
});

homeTopDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    homeTabIndex = index;
    updateDot(homeTabIndex, homeTopDots);
    updateImg(homeTabIndex, "hometop", homeTopImg);
  });
});

const refreshHomeImg = setInterval(() => {
  homeTabIndex = (homeTabIndex + 1) % homeTopDots.length;
  updateDot(homeTabIndex, homeTopDots);
  updateImg(homeTabIndex, "hometop", homeTopImg);
}, 15000);

const refreshAboutImg = setInterval(() => {
  aboutTabIndex = (aboutTabIndex + 1) % aboutDots.length;
  updateDot(aboutTabIndex, aboutDots);
  updateImg(aboutTabIndex, "about", aboutImg);
}, 15000);
