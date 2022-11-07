let dataHours;

const url = "data.json";
accountData();

// daily, weekly and monthly

const daily = document.querySelector(".daily");

const weekly = document.querySelector(".weekly");

const monthly = document.querySelector(".monthly");

// present and previous hours

const workPresent = document.querySelector(".work-present");
const workPrevious = document.querySelector(".work-previous");

const playPresent = document.querySelector(".play-present");
const playPrevious = document.querySelector(".play-previous");

const studyPresent = document.querySelector(".study-present");
const studyPrevious = document.querySelector(".study-previous");

const exercisePresent = document.querySelector(".exercise-present");
const exercisePrevious = document.querySelector(".exercise-previous");

const socialPresent = document.querySelector(".social-present");
const socialPrevious = document.querySelector(".social-previous");

const selfcarePresent = document.querySelector(".selfcare-present");
const selfcarePrevious = document.querySelector(".selfcare-previous");

// fetch json data
function accountData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      dataHours = data;
    });
}

// update daily data

daily.addEventListener("click", function () {
  workPresent.textContent = dataHours[0].timeframes.daily.current;
  workPrevious.textContent = `${dataHours[0].timeframes.daily.previous}hrs`;

  playPresent.textContent = dataHours[1].timeframes.daily.current;
  playPrevious.textContent = `${dataHours[1].timeframes.daily.previous}hrs`;

  studyPresent.textContent = dataHours[2].timeframes.daily.current;
  studyPrevious.textContent = `${dataHours[2].timeframes.daily.previous}hrs`;

  exercisePresent.textContent = dataHours[3].timeframes.daily.current;
  exercisePrevious.textContent = `${dataHours[3].timeframes.daily.previous}hrs`;

  socialPresent.textContent = dataHours[4].timeframes.daily.current;
  socialPrevious.textContent = `${dataHours[4].timeframes.daily.previous}hrs`;

  selfcarePresent.textContent = dataHours[5].timeframes.daily.current;
  selfcarePrevious.textContent = `${dataHours[5].timeframes.daily.previous}hrs`;

  daily.style.color = "white";
  weekly.style.color = "var(--Desaturatedblue)";
  monthly.style.color = "var(--Desaturatedblue)";
});

// weekly update

weekly.addEventListener("click", function () {
  workPresent.textContent = dataHours[0].timeframes.weekly.current;
  workPrevious.textContent = `${dataHours[0].timeframes.weekly.previous}hrs`;

  playPresent.textContent = dataHours[1].timeframes.weekly.current;
  playPrevious.textContent = `${dataHours[1].timeframes.weekly.previous}hrs`;

  studyPresent.textContent = dataHours[2].timeframes.weekly.current;
  studyPrevious.textContent = `${dataHours[2].timeframes.weekly.previous}hrs`;

  exercisePresent.textContent = dataHours[3].timeframes.weekly.current;
  exercisePrevious.textContent = `${dataHours[3].timeframes.weekly.previous}hrs`;

  socialPresent.textContent = dataHours[4].timeframes.weekly.current;
  socialPrevious.textContent = `${dataHours[4].timeframes.weekly.previous}hrs`;

  selfcarePresent.textContent = dataHours[5].timeframes.weekly.current;
  selfcarePrevious.textContent = `${dataHours[5].timeframes.weekly.previous}hrs`;

  weekly.style.color = "white";
  daily.style.color = "var(--Desaturatedblue)";
  monthly.style.color = "var(--Desaturatedblue)";
});

//update monthly

monthly.addEventListener("click", function () {
  workPresent.textContent = dataHours[0].timeframes.monthly.current;
  workPrevious.textContent = `${dataHours[0].timeframes.monthly.previous}hrs`;

  playPresent.textContent = dataHours[1].timeframes.monthly.current;
  playPrevious.textContent = `${dataHours[1].timeframes.monthly.previous}hrs`;

  studyPresent.textContent = dataHours[2].timeframes.monthly.current;
  studyPrevious.textContent = `${dataHours[2].timeframes.monthly.previous}hrs`;

  exercisePresent.textContent = dataHours[3].timeframes.monthly.current;
  exercisePrevious.textContent = `${dataHours[3].timeframes.monthly.previous}hrs`;

  socialPresent.textContent = dataHours[4].timeframes.monthly.current;
  socialPrevious.textContent = `${dataHours[4].timeframes.monthly.previous}hrs`;

  selfcarePresent.textContent = dataHours[5].timeframes.monthly.current;
  selfcarePrevious.textContent = `${dataHours[5].timeframes.monthly.previous}hrs`;

  monthly.style.color = "white";
  daily.style.color = "var(--Desaturatedblue)";
  weekly.style.color = "var(--Desaturatedblue)";
});

const doticons = document.querySelectorAll(".icon_3");
const boxDatas = document.querySelectorAll(".box-data");

for (let i = 0; doticons.length > i; i++) {
  doticons[i].addEventListener("click", function () {
    boxDatas[i].classList.toggle("active");
  });
}
