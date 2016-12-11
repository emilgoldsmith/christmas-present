'use strict';
// Make loading object animate
const dot_timers = [];
function add_timer(id, interval, delay) {
  setTimeout(function () {
    const element = document.getElementById(id);
    element.classList.toggle("invisible");
    dot_timers.push(setInterval(function(id) {
      const element = document.getElementById(id);
      element.classList.toggle("invisible");
    }.bind(null, id), interval));
  }, delay);
}
const CYCLE_TIME = 1500;
add_timer("dot-1", CYCLE_TIME, 0*(CYCLE_TIME/6));
add_timer("dot-2", CYCLE_TIME, 1*(CYCLE_TIME/6));
add_timer("dot-3", CYCLE_TIME, 2*(CYCLE_TIME/6));
add_timer("dot-3", CYCLE_TIME, 3*(CYCLE_TIME/6));
add_timer("dot-2", CYCLE_TIME, 4*(CYCLE_TIME/6));
add_timer("dot-1", CYCLE_TIME, 5*(CYCLE_TIME/6));

function unwrap() {
  const bottom_left = document.getElementById("bottom-left");
  const bottom_right = document.getElementById("bottom-right");
  const top_left = document.getElementById("top-left");
  const top_right = document.getElementById("top-right");
  bottom_left.className += " unwrap unwrap-bottom-left";
  bottom_right.className += " unwrap unwrap-bottom-right";
  top_right.className += " unwrap unwrap-top-right";
  top_left.className += " unwrap unwrap-top-left";

  const body = document.getElementById("body");
  body.removeChild(document.getElementById("unwrap-button"));
}

function removeLoad() {
  const body = document.getElementById('body');
  const loading_screen = document.getElementById('loading-screen');
  body.removeChild(loading_screen);
}

window.addEventListener('load', function() {
  setTimeout(function() {
    const element = document.getElementById("loading-screen");
    element.classList.toggle("invisible");
    element.addEventListener("transitionend", removeLoad);
    element.addEventListener("webkitTransitionEnd", removeLoad)
  }, 3000)
});

const w = document.documentElement.clientWidth;
const h = document.documentElement.clientHeight;
const angle = Math.atan(h/w);
let reindeer_cnt = 0;

function add_reindeer(y, delay, superDelay=false) {
  reindeer_cnt++;
  const initial_style = "left: " + (-15-delay).toString() + "vw; "
    + "top: "+(y+delay).toString()+"vh; "
    + "transform: rotate(-" + angle+"rad);"
    + (superDelay ? " animation-delay: 5s;" : "");
  const class_index = reindeer.search(/class/);
  const reindeer_copy = reindeer.substring(0, class_index)
    + 'style="' + initial_style + '"\n'
    + 'id="reindeer'+reindeer_cnt.toString() + '"\n'
    + reindeer.substring(class_index);
  const loading_screen = document.getElementById('loading-screen');
  loading_screen.innerHTML += reindeer_copy;

}

add_reindeer(20, 36);
add_reindeer(35, 5);
add_reindeer(50, 47);
add_reindeer(65, 3);
add_reindeer(80, 43);
add_reindeer(95, 48);
add_reindeer(110, 2);
add_reindeer(125, 47);
add_reindeer(140, 83);
add_reindeer(155, 55);
add_reindeer(170, 52);
add_reindeer(185, 65);
add_reindeer(200, 53);
add_reindeer(92, 65);
add_reindeer(95, 51);
add_reindeer(50, 58);
add_reindeer(85, 72);
add_reindeer(64, 80);

add_reindeer(28, 43, true);
add_reindeer(149, 39, true);
add_reindeer(49, 40, true);
add_reindeer(191, 7, true);
add_reindeer(116, 16, true);
