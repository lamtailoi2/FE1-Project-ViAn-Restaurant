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
let fbDots = dots.slice(7);
const updateImg = (index, section, img) => {
  img.classList.remove("show", "fade-in");
  img.classList.add("fade-out", "hide");
  setTimeout(() => {
    img.setAttribute("src", `./assets/imgs/${section}${index + 1}.jpg`);
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

const fetchData = async () => {
  try {
    const response = await fetch("../public/feedbacks.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const feedbacks = data.feedbacks;
    const feedbackContent = $(".feedback_content");
    const feedbackDots = $(".feedback_dots");

    const displayFeedback = (id) => {
      const feedback = feedbacks.find((fb) => parseInt(fb.id) === id);
      if (feedback) {
        //clear previous content
        feedbackContent.innerHTML = "";

        //create feedback content
        const feedbackImg = document.createElement("div");
        feedbackImg.className = "feedback_img";
        const img = document.createElement("img");
        img.src = feedback.avatar;
        img.alt = feedback.name;
        feedbackImg.appendChild(img);

        const feedbackText = document.createElement("div");
        feedbackText.className = "feedback_text";
        const p = document.createElement("p");
        p.textContent = feedback.comment;
        feedbackText.appendChild(p);

        const feedbackName = document.createElement("h5");
        feedbackName.id = "feedback_name";
        feedbackName.textContent = feedback.name;

        feedbackContent.appendChild(feedbackImg);
        feedbackContent.appendChild(feedbackText);
        feedbackContent.appendChild(feedbackName);
      }
    };

    //create and append dots
    feedbacks.forEach((feedback, index) => {
      const dot = document.createElement("button");
      dot.className = "switch feedback_switch";
      dot.dataset.id = feedback.id; //set id for each dot
      if (index === 0) {
        dot.classList.add("active"); //set first dot active
      }
      feedbackDots.appendChild(dot);
      //add click event to each dot
      dot.addEventListener("click", (event) => {
        $$(".feedback_switch").forEach((dot) => dot.classList.remove("active"));
        event.currentTarget.classList.add("active");
        displayFeedback(parseInt(event.currentTarget.dataset.id)); //convert string to number
      });
    });

    const startInterval = () => {
      let currentIndex = 0;
      setInterval(() => {
        $$(".feedback_switch").forEach((dot) => dot.classList.remove("active"));
        const currentDot = $$(".feedback_switch")[currentIndex];
        currentDot.classList.add("active");
        displayFeedback(parseInt(currentDot.dataset.id));
        currentIndex = (currentIndex + 1) % feedbacks.length;
      }, 10000);
    };

    if (feedbacks.length > 0) {
      displayFeedback(feedbacks[0].id);
      startInterval();
    }
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

fetchData();
