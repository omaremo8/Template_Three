
let skills = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".the-progress span");


// Increase The Number In the Section
let nums = document.querySelectorAll(".stats .number");
let section = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= skills.offsetTop- 50) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= section.offsetTop - 300) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}


////////////////////
// The End Of The Year Date To Countdown To

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;
  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days < 10 ?  `0${days}`: days;
  document.querySelector(".hours").innerHTML = hours < 10 ?  `0${hours}`: hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ?  `0${minutes}`: minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ?  `0${seconds}`: seconds;
    if (dateDiff = 0) {
      clearInterval(counter)
  }
}, 1000);
