/*как будет осуществляться закрытие?*/
var link = document.querySelector(".button-search");
var popup = document.querySelector(".search");

var form = popup.querySelector("form");

var arriveDate = popup.querySelector("[name=arrival-date]");
var leaveDate = popup.querySelector("[name=leave-date]");
var adultsNumber = popup.querySelector("[name=adults]");
var childrenNumber = popup.querySelector("[name=children]");

var adultsMinus = popup.querySelector(".adults-minus");
var adultsPlus = popup.querySelector(".adults-plus");
var childrenMinus = popup.querySelector(".children-minus");
var childrenPlus = popup.querySelector(".children-plus");

var isStorageSupport = !!window.localStorage;

form.classList.add("search-form-show");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (form.classList.contains("search-form-show")) {
    form.classList.remove("search-form-show");
  } else {
    form.classList.add("search-form-show");
  }
  if ((isStorageSupport) && (localStorage.getItem("adultsNumber") != null && localStorage.getItem("childrenNumber") != null)) {
    adultsNumber.value = localStorage.getItem("adultsNumber");
    childrenNumber.value = localStorage.getItem("childrenNumber");
  } else {
    adultsNumber.value = 2;
    childrenNumber.value = 0;
  }
  arriveDate.focus();
});

form.addEventListener("submit", function (evt) {
  if (!arriveDate.value || !leaveDate.value || !adultsNumber.value || !childrenNumber.value) {
    evt.preventDefault();
    form.classList.remove("search-form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("search-form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adultsNumber", adultsNumber.value);
      localStorage.setItem("childrenNumber", childrenNumber.value);
    }
  }
});

adultsMinus.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (adultsNumber.value > 1) {
    --adultsNumber.value;
  }
});

adultsPlus.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (adultsNumber.value < 99) {
    ++adultsNumber.value;
  }
});

childrenMinus.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (childrenNumber.value > 0) {
    --childrenNumber.value;
  }
});

childrenPlus.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (childrenNumber.value < 99) {
    ++childrenNumber.value;
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("search-form-show")) {
      popup.classList.remove("search-form-show");
      popup.classList.remove("search-form-error");
    }
  }
});
