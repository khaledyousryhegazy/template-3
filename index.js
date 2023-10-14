// SELECT ELEMENTS
// ========== TO SECTION OUR AWESOME STATS ========== //
const stats = document.querySelector(".our-awesome-stats"),
  number = document.querySelectorAll(
    ".our-awesome-stats .container .stats .num"
  );

// ========== TO SECTION OUR SKILLS ========== //
const ourSkills = document.querySelector(".our-skills"),
  width = document.querySelectorAll(
    ".our-skills .container .right .skill .range div"
  );

let start = false;

//   ================= FUNCTION START COUNT OUR AWESOME STATS =================   //
//
function counter(ele) {
  // SELECT GOAL ATTR
  let goal = ele.dataset.goal;

  let count = setInterval(() => {
    ele.textContent++;

    if (ele.textContent == goal) {
      clearInterval(count);
    }
    // TO DONE IT TOGETHER
  }, 2000 / goal);
}
//   ================= SCROLL EVENT =================   //

window.onscroll = function () {
  /* ========== SCROLL TO SECTION DO IT ========== */
  // ========== TO SECTION OUR AWESOME STATS ========== //
  if (window.scrollY >= stats.offsetTop) {
    // IF START = FALSE
    // TO EXECUTION ONE TIME ONLY
    if (!start) {
      number.forEach((e) => counter(e));
    }
    start = true;
  }
  // ========== TO SECTION OUR SKILLS ========== //
  if (window.scrollY >= ourSkills.offsetTop) {
    width.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
