let json;
let workTimeCurrent = document.querySelector(
  ".work-time",
);
let workTimePrevious = document.querySelector(
  ".work-previous",
);
let playTimeCurrent = document.querySelector(
  ".play-time",
);
let playTimePrevious = document.querySelector(
  ".play-previous",
);
let studyTimeCurrent = document.querySelector(
  ".study-time",
);
let studyTimePrevious = document.querySelector(
  ".study-previous",
);
let exerciseTimeCurrent = document.querySelector(
  ".exercise-time",
);
let exerciseTimePrevious = document.querySelector(
  ".exercise-previous",
);
let socialTimeCurrent = document.querySelector(
  ".social-time",
);
let socialTimePrevious = document.querySelector(
  ".social-previous",
);
let selfCareTimeCurrent = document.querySelector(
  ".self-care-time",
);
let selfCareTimePrevious = document.querySelector(
  ".self-care-previous",
);

let dailyButton = document.querySelector(".dashboard__profile__time__daily");
let weeklyButton = document.querySelector(".dashboard__profile__time__weekly");
let monthlyButton = document.querySelector(
  ".dashboard__profile__time__monthly",
);

function updateTimeframe(data, timeframe) {
  switch (timeframe) {
    case "daily":
      dailyButton.classList.add("active");
      weeklyButton.classList.remove("active");
      monthlyButton.classList.remove("active");
      workTimeCurrent.textContent =
        data[0].timeframes.daily.current +
        (data[0].timeframes.daily.current > 1 ? "hrs" : "hr");
      workTimePrevious.textContent =
        "Yesterday - " +
        data[0].timeframes.daily.previous +
        (data[0].timeframes.daily.previous > 1 ? "hrs" : "hr");
      playTimeCurrent.textContent =
        data[1].timeframes.daily.current +
        (data[1].timeframes.daily.current > 1 ? "hrs" : "hr");
      playTimePrevious.textContent =
        "Yesterday - " +
        data[1].timeframes.daily.previous +
        (data[1].timeframes.daily.previous > 1 ? "hrs" : "hr");
      studyTimeCurrent.textContent =
        data[2].timeframes.daily.current +
        (data[2].timeframes.daily.current > 1 ? "hrs" : "hr");
      studyTimePrevious.textContent =
        "Yesterday - " +
        data[2].timeframes.daily.previous +
        (data[2].timeframes.daily.previous > 1 ? "hrs" : "hr");
      exerciseTimeCurrent.textContent =
        data[3].timeframes.daily.current +
        (data[3].timeframes.daily.current > 1 ? "hrs" : "hr");
      exerciseTimePrevious.textContent =
        "Yesterday - " +
        data[3].timeframes.daily.previous +
        (data[3].timeframes.daily.previous > 1 ? "hrs" : "hr");
      socialTimeCurrent.textContent =
        data[4].timeframes.daily.current +
        (data[4].timeframes.daily.current > 1 ? "hrs" : "hr");
      socialTimePrevious.textContent =
        "Yesterday - " +
        data[4].timeframes.daily.previous +
        (data[4].timeframes.daily.previous > 1 ? "hrs" : "hr");
      selfCareTimeCurrent.textContent =
        data[5].timeframes.daily.current +
        (data[5].timeframes.daily.current > 1 ? "hrs" : "hr");
      selfCareTimePrevious.textContent =
        "Yesterday - " +
        data[5].timeframes.daily.previous +
        (data[5].timeframes.daily.previous > 1 ? "hrs" : "hr");
      break;
    case "weekly":
      weeklyButton.classList.add("active");
      dailyButton.classList.remove("active");
      monthlyButton.classList.remove("active");
      workTimeCurrent.textContent =
        data[0].timeframes.weekly.current +
        (data[0].timeframes.weekly.current > 1 ? "hrs" : "hr");
      workTimePrevious.textContent =
        "Last Week - " +
        data[0].timeframes.weekly.previous +
        (data[0].timeframes.weekly.previous > 1 ? "hrs" : "hr");
      playTimeCurrent.textContent =
        data[1].timeframes.weekly.current +
        (data[1].timeframes.weekly.current > 1 ? "hrs" : "hr");
      playTimePrevious.textContent =
        "Last Week - " +
        data[1].timeframes.weekly.previous +
        (data[1].timeframes.weekly.previous > 1 ? "hrs" : "hr");
      studyTimeCurrent.textContent =
        data[2].timeframes.weekly.current +
        (data[2].timeframes.weekly.current > 1 ? "hrs" : "hr");
      studyTimePrevious.textContent =
        "Last Week - " +
        data[2].timeframes.weekly.previous +
        (data[2].timeframes.weekly.previous > 1 ? "hrs" : "hr");
      exerciseTimeCurrent.textContent =
        data[3].timeframes.weekly.current +
        (data[3].timeframes.weekly.current > 1 ? "hrs" : "hr");
      exerciseTimePrevious.textContent =
        "Last Week - " +
        data[3].timeframes.weekly.previous +
        (data[3].timeframes.weekly.previous > 1 ? "hrs" : "hr");
      socialTimeCurrent.textContent =
        data[4].timeframes.weekly.current +
        (data[4].timeframes.weekly.current > 1 ? "hrs" : "hr");
      socialTimePrevious.textContent =
        "Last Week - " +
        data[4].timeframes.weekly.previous +
        (data[4].timeframes.weekly.previous > 1 ? "hrs" : "hr");
      selfCareTimeCurrent.textContent =
        data[5].timeframes.weekly.current +
        (data[5].timeframes.weekly.current > 1 ? "hrs" : "hr");
      selfCareTimePrevious.textContent =
        "Last Week - " +
        data[5].timeframes.weekly.previous +
        (data[5].timeframes.weekly.previous > 1 ? "hrs" : "hr");
      break;
    case "monthly":
      monthlyButton.classList.add("active");
      weeklyButton.classList.remove("active");
      dailyButton.classList.remove("active");
      workTimeCurrent.textContent =
        data[0].timeframes.monthly.current +
        (data[0].timeframes.monthly.current > 1 ? "hrs" : "hr");
      workTimePrevious.textContent =
        "Last Month - " +
        data[0].timeframes.monthly.previous +
        (data[0].timeframes.monthly.previous > 1 ? "hrs" : "hr");
      playTimeCurrent.textContent =
        data[1].timeframes.monthly.current +
        (data[1].timeframes.monthly.current > 1 ? "hrs" : "hr");
      playTimePrevious.textContent =
        "Last Month - " +
        data[1].timeframes.monthly.previous +
        (data[1].timeframes.monthly.previous > 1 ? "hrs" : "hr");
      studyTimeCurrent.textContent =
        data[2].timeframes.monthly.current +
        (data[2].timeframes.monthly.current > 1 ? "hrs" : "hr");
      studyTimePrevious.textContent =
        "Last Month - " +
        data[2].timeframes.monthly.previous +
        (data[2].timeframes.monthly.previous > 1 ? "hrs" : "hr");
      exerciseTimeCurrent.textContent =
        data[3].timeframes.monthly.current +
        (data[3].timeframes.monthly.current > 1 ? "hrs" : "hr");
      exerciseTimePrevious.textContent =
        "Last Month - " +
        data[3].timeframes.monthly.previous +
        (data[3].timeframes.monthly.previous > 1 ? "hrs" : "hr");
      socialTimeCurrent.textContent =
        data[4].timeframes.monthly.current +
        (data[4].timeframes.monthly.current > 1 ? "hrs" : "hr");
      socialTimePrevious.textContent =
        "Last Month - " +
        data[4].timeframes.monthly.previous +
        (data[4].timeframes.monthly.previous > 1 ? "hrs" : "hr");
      selfCareTimeCurrent.textContent =
        data[5].timeframes.monthly.current +
        (data[5].timeframes.monthly.current > 1 ? "hrs" : "hr");
      selfCareTimePrevious.textContent =
        "Last Month - " +
        data[5].timeframes.monthly.previous +
        (data[5].timeframes.monthly.previous > 1 ? "hrs" : "hr");
      break;
  }
}
let currentTimeframe = "weekly";

fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    updateTimeframe(data, currentTimeframe);
    dailyButton.addEventListener("click", () => {
      currentTimeframe = "daily";
      updateTimeframe(data, currentTimeframe);
    });
    monthlyButton.addEventListener("click", () => {
      currentTimeframe = "monthly";
      updateTimeframe(data, currentTimeframe);
    });
    weeklyButton.addEventListener("click", () => {
      currentTimeframe = "weekly";
      updateTimeframe(data, currentTimeframe);
    });
  }).catch((error) => {
    console.error("Fetch error:", error);
    document.body.innerHTML =
      "<p style='color:white;text-align:center'>Failed to load data.</p>";
  });
