const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//------------------------------------------------------------------------------Home page
let dots = Array.from($$(".switch"));
let homeTopImg = $(".hometop-img");
let aboutImg = $(".about-img img");
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

//handle click event for about dots
aboutDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    aboutTabIndex = index;
    updateDot(aboutTabIndex, aboutDots);
    updateImg(aboutTabIndex, "about", aboutImg);
  });
});

//handle click event for hometop dots
homeTopDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    homeTabIndex = index;
    updateDot(homeTabIndex, homeTopDots);
    updateImg(homeTabIndex, "hometop", homeTopImg);
  });
});

const startInterval = (tabIndex, dots, section, sectionImg) => {
  return setInterval(() => {
    tabIndex = (tabIndex + 1) % dots.length;
    updateDot(tabIndex, dots);
    updateImg(tabIndex, section, sectionImg);
  }, 15000);
};

const refreshHomeImg = startInterval(
  homeTabIndex,
  homeTopDots,
  "hometop",
  homeTopImg
);
const refreshAboutImg = startInterval(
  aboutTabIndex,
  aboutDots,
  "about",
  aboutImg
);
//------------------------------------------------------------------------------Home page
