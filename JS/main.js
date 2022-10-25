/* Landing Page Part */
const swipe = document.querySelector(".swipe__up");
const landing_page = document.querySelector(".landing__page");
const landing_page_stars = document.querySelector(".md__stars.hidden");
const register__page = document.querySelector(".register__page");

setTimeout(() => {
  swipe.style.display = "block";
}, 4500);

setTimeout(() => {
  swipe.classList.remove("hidden");
  swipe.classList.add("visible");
  document.body.style.overflow = "visible";
}, 4600);

if (swipe !== null) {
  swipe.addEventListener("click", () => {
    register__page.classList.remove("none");
    landing_page.style.setProperty("transform", "translateY(-100%)");
    register__page.style.display = "block";
    setTimeout(() => {
      landing_page_stars.classList.remove(".hidden");
      landing_page_stars.classList.add("visible");
    }, 800);
    setTimeout(() => {
      landing_page.style.setProperty("display", "none");
    }, 1500);
  });
}

/* Landing Page Part */

/* Register Page Part */
const NextBtn = document.querySelector("#next");
const FormInputs = Array.from(document.querySelectorAll("#info input"));
const Selects = Array.from(document.querySelectorAll("select"));

// card info
const committee = document.querySelector(".com__name");
const ID = document.querySelector(".ID");
const firstName = document.querySelector(".first");
const lastName = document.querySelector(".last");
const level = document.querySelector(".year");
const yearName = document.querySelector(".yearName");
const gender = document.querySelector(".gender");
const prog = document.querySelector(".Program");
const email = document.querySelector(".email");
// card info

const CheckID = (ID) => {
  for (const dig of ID) if (!typeof Number(dig) === "number") return false;
  return ID.length === 11 && ID[0] === "2" && ID[1] === "0";
};

const CheckEmail = (email) => {
  const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  return regex.test(email) && email.length >= 3;
};

FormInputs.forEach((ele) => {
  ele.addEventListener("input", (e) => {
    if (e.target.id === "id") {
      ID.innerHTML = e.target.value;
      if (CheckID(e.target.value)) {
        e.target.style.borderColor = "green";
        e.target.classList.add("valid");
      } else {
        e.target.style.borderColor = "red";
        e.target.classList.remove("valid");
      }
    }

    if (e.target.id === "first__name" || e.target.id === "last__name") {
      if (e.target.id === "first__name") {
        lastName.innerHTML = "";
        firstName.innerHTML = e.target.value;
      }
      if (e.target.id === "last__name") lastName.innerHTML = e.target.value;
      if (e.target.value.length <= 15 && e.target.value.length >= 2) {
        e.target.style.borderColor = "green";
        e.target.classList.add("valid");
      } else {
        e.target.style.borderColor = "red";
        e.target.classList.remove("valid");
      }
    }

    if (e.target.id === "email") {
      email.innerHTML = e.target.value;
      if (CheckEmail(e.target.value)) {
        e.target.style.borderColor = "green";
        e.target.classList.add("valid");
      } else {
        e.target.style.borderColor = "red";
        e.target.classList.remove("valid");
      }
    }

    Selects.forEach((ele) => {
      if (ele.value === "") {
        if (ele.classList.contains("valid")) e.target.classList.remove("valid");

        ele.style.borderColor = "red";
      } else {
        if (!ele.classList.contains("valid")) e.target.classList.add("valid");

        ele.style.borderColor = "green";
      }
    });
  });
});

const YearName = {
  "First Year": "Freshman",
  "Second Year": "Sophomore",
  "Third Year": "Junior",
  "Fourth Year": "Senior",
};

Selects.forEach((ele) => {
  ele.addEventListener("change", (e) => {
    if (ele.value === "") {
      if (ele.classList.contains("valid")) ele.classList.remove("valid");

      ele.style.borderColor = "red";
    } else {
      if (ele.id === "level") {
        level.innerHTML = ele.value;
        yearName.innerHTML = YearName[ele.value];
      }
      if (ele.id === "gender") gender.innerHTML = ele.value;
      if (ele.id === "program") prog.innerHTML = ele.value;
      if (ele.id === "committee") committee.innerHTML = ele.value;
      if (!ele.classList.contains("valid")) ele.classList.add("valid");

      ele.style.borderColor = "green";
    }
  });
});

let validInfo = 0;

if (validInfo != 8)
  setInterval(() => {
    validInfo = Array.from(document.querySelectorAll(".valid")).length;
    if (validInfo === 8) NextBtn.classList.remove("disabled");
  }, 1000);

/* Register Page Part */

/* Date and Time Picker */
let validDate = 0;
const time = document.querySelector(".Time");
const date = document.querySelector(".date");
const dateTimeInps = Array.from(document.querySelectorAll("#inter_date input"));

if (validDate != 2)
  setInterval(() => {
    if (time.innerHTML !== "") validDate++;
    if (date.innerHTML !== "") validDate++;
    if (validDate === 2) submitBtn.classList.remove("disabled");
  }, 1000);

// this must first check the database for available times
dateTimeInps.forEach((ele) => {
  ele.addEventListener("change", (e) => {
    if (ele.id === "time") time.innerHTML = e.target.value;
    if (ele.id === "date") date.innerHTML = e.target.value;
  });
});

/* Date and Time Picker */

/* switch between forms */
const notMobile = window.matchMedia("(min-width: 991px)");
const submitBtn = document.querySelector("#sub");
const infoForm = document.querySelector("form#info");
const dateForm = document.querySelector("form#inter_date");

NextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!NextBtn.classList.contains("disabled")) {
    infoForm.style.setProperty("transform", "translateX(-300%)");
    setTimeout(() => {
      infoForm.style.display = "none";
      NextBtn.style.display = "none";
    }, 1000);
    dateForm.style.display = "flex";
    submitBtn.classList.remove("none");
    setTimeout(() => {
      dateForm.classList.remove("hidden");
      submitBtn.classList.remove("hidden");
      dateForm.classList.add("visible");
      submitBtn.classList.add("visible");
    }, 1000);
  }
});

const card = document.querySelector(".card");
const main = document.querySelector("main");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.style.overflowX = "hidden";
  if (!e.target.classList.contains("disabled")) {
    card.style.setProperty("transform", "translateX(300%)");
    dateForm.style.setProperty("transform", "translateX(-300%)");
    setTimeout(() => {
      window.location = "./../public/success.html";
    }, 1500);
  }
});
/* switch between forms */

/* different media queries actions */
window.onload = (e) => {
  if (notMobile.matches) {
    if (NextBtn.classList.contains("mobile"))
      NextBtn.classList.remove("mobile");
  } else {
    if (!NextBtn.classList.contains("mobile")) NextBtn.classList.add("mobile");
  }
};

notMobile.onchange = (e) => {
  if (e.matches) {
    if (NextBtn.classList.contains("mobile"))
      NextBtn.classList.remove("mobile");
  } else {
    if (!NextBtn.classList.contains("mobile")) NextBtn.classList.add("mobile");
  }
};

/* different media queries actions */
