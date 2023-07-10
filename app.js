"use strict";

let first_num = document.querySelector(".first_num");
let second_num = document.querySelector(".second_num");
let btn_plus = document.querySelector(".btn_plus");
let btn_minus = document.querySelector(".btn_minus");
let btn_res = document.querySelector(".res");
let res_field = document.querySelector(".res_field");

function calc() {
  first_num.value = "";
  second_num.value = "";

  btn_plus.addEventListener("click", (event) => {
    event.target.setAttribute("data-status", "active");
    console.log(btn_plus);
    btn_minus.removeAttribute("data-status", "active");
  });

  btn_minus.addEventListener("click", (event) => {
    event.target.setAttribute("data-status", "active");
    console.log(btn_minus);
    btn_plus.removeAttribute("data-status", "active");
  });

  btn_res.addEventListener("click", () => {
    if (btn_plus.getAttribute("data-status") === "active") {
      res_field.textContent = +first_num.value + +second_num.value;
    } else if (btn_minus.getAttribute("data-status") === "active") {
      res_field.textContent = +first_num.value - +second_num.value;
    }
  });
}

calc();
