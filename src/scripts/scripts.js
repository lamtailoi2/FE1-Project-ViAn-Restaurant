const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//------------------------------------------------------------------------------Home page
let dots = Array.from($$(".switch"));
let homeTopImg = $(".hometop-img");
let aboutImg = $(".about-img img");
let homeTopDots = dots.slice(0, 2);
let aboutDots = dots.slice(2, 7);

let homeTabIndex = 0;
let aboutTabIndex = 0;
//update img
const updateImg = (index, section, img) => {
  img.classList.remove("show", "fade-in");
  img.classList.add("fade-out", "hide");
  setTimeout(() => {
    img.setAttribute("src", `./src/assets/imgs/${section}${index + 1}.jpg`);
    img.classList.remove("fade-out", "hide");
    img.classList.add("fade-in", "show");
  }, 300);
};

//update active dot
const updateDot = (index, sectionDots) => {
  sectionDots.forEach((dot) => dot.classList.remove("active"));
  sectionDots[index].classList.add("active");
};

aboutDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    aboutTabIndex = index;
    updateDot(aboutTabIndex, aboutDots);
    updateImg(aboutTabIndex, "about", aboutImg);
    clearInterval(refreshAboutImg);
    refreshAboutImg = startInterval(
      aboutTabIndex,
      aboutDots,
      "about",
      aboutImg
    );
  });
});

homeTopDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    homeTabIndex = index;
    updateDot(homeTabIndex, homeTopDots);
    updateImg(homeTabIndex, "hometop", homeTopImg);
    clearInterval(refreshHomeImg);
    refreshHomeImg = startInterval(
      homeTabIndex,
      homeTopDots,
      "hometop",
      homeTopImg
    );
  });
});

const startInterval = (tabIndex, dots, section, sectionImg) => {
  return setInterval(() => {
    tabIndex = (tabIndex + 1) % dots.length;
    updateDot(tabIndex, dots);
    updateImg(tabIndex, section, sectionImg);
  }, 10000);
};

let refreshHomeImg = startInterval(
  homeTabIndex,
  homeTopDots,
  "hometop",
  homeTopImg
);
let refreshAboutImg = startInterval(
  aboutTabIndex,
  aboutDots,
  "about",
  aboutImg
);

const fetchData = async () => {
  let intervalId;
  let currentIndex = 0;

  try {
    const response = await fetch("public/feedbacks.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const feedbacks = data.feedbacks;
    const feedbackContent = $(".feedback_content");
    const feedbackDots = $(".feedback_dots");

    feedbacks.forEach((feedback, index) => {
      const dot = document.createElement("button");
      dot.className = "switch feedback_switch";
      dot.dataset.id = feedback.id;
      if (index === 0) dot.classList.add("active"); //set active for the first dot
      feedbackDots.appendChild(dot);

      dot.addEventListener("click", (event) => {
        //add click event for each dot
        $$(".feedback_switch").forEach((dot) => dot.classList.remove("active")); //remove all active state from each dot
        event.currentTarget.classList.add("active"); //add active state for the clicked dot
        currentIndex = index; //keep track
        displayFeedback(parseInt(event.currentTarget.dataset.id));
        startInterval();
      });
    });

    const displayFeedback = async (id) => {
      const feedback = feedbacks.find((fb) => parseInt(fb.id) === id);
      if (feedback) {
        feedbackContent.innerHTML = `
          <div class="feedback_img">
            <img src="${feedback.avatar}" alt="${feedback.name}">
          </div>
          <div class="feedback_text">
            <p>${feedback.comment}</p>
          </div>
          <h5 id="feedback_name">${feedback.name}</h5>
        `; //create feedback content
      }
    };

    const startInterval = () => {
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        $$(".feedback_switch").forEach((dot) => dot.classList.remove("active"));
        const currentDot = $$(".feedback_switch")[currentIndex];
        currentDot.classList.add("active");
        displayFeedback(parseInt(currentDot.dataset.id));
        currentIndex = (currentIndex + 1) % feedbacks.length;
      }, 10000);
    };

    if (feedbacks.length > 0) {
      displayFeedback(feedbacks[0].id); //display the first feedback
      startInterval();
    }
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

fetchData();

//------------------------------------------------------------------------------Home page
