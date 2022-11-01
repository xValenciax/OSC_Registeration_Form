/* eslint-disable */

const Questions = {
  "Science&Tech": [
    "Github Link",
    "Can Java classes suffer from the diamond problem in inheritance ?",
    "What does the single responsibility principle mean? (optional)",
  ],
  Flutter: ["What are widgets?"],
  Web: [
    `Explain What this code is supposed to do
    <br>
      <code>
        div>p{
          border: 1px solid red;
          font-size: 24px;
          color: lightgreen;
        }
      </code>`,
  ],
  Blender: [
    "What is the shortcut to scale objects in blender?",
    "What is the shortcut to start edit mode in blender?",
    "What is the shortcut to enter a new object in blender?",
  ],
  "UX&Design": ["What is UX research?(optional)"],
};

/* Landing Page Part */
const swipe = document.querySelector(".swipe__up");
const landing_page = document.querySelector(".landing__page");
const landing_page_stars = document.querySelector(".md__stars.hidden");
const register__page = document.querySelector(".register__page");

setTimeout(() => {
  swipe.style.display = "block";
}, 2000);

setTimeout(() => {
  swipe.classList.remove("hidden");
  swipe.classList.add("visible");
  document.body.style.overflow = "visible";
}, 2500);

if (swipe !== null) {
  swipe.addEventListener("click", () => {
    landing_page.style.setProperty("transform", "translateY(-100%)");
    setTimeout(() => {
      landing_page_stars.classList.remove(".hidden");
      landing_page_stars.classList.add("visible");
    }, 2000);
    setTimeout(() => {
      register__page.classList.remove(".hidden");
      register__page.classList.add("visible");
      landing_page.style.setProperty("display", "none");
    }, 1500);
    setTimeout(() => {
      register__page.classList.remove("none");
    }, 1000);
  });
}

/* Landing Page Part */

/* Register Page Part */
const NextBtn = document.querySelector("#next");
const FormInputs = Array.from(document.querySelectorAll("#info input"));
const Selects = Array.from(document.querySelectorAll("select"));

const infoForm = document.querySelector("form .info");
const moreInfoForm = document.querySelector("form .more__info");
const dateForm = document.querySelector("form .date");
const techForm = document.querySelector("form .tech_questions");
const sec_techForm = document.querySelector("form .sec_tech_questions");

// card info
const committee = document.querySelector(".com__name");
const sec_committee = document.querySelector(".sec_com_name");
const ID = document.querySelector(".ID");
const firstName = document.querySelector(".first");
const lastName = document.querySelector(".last");
const level = document.querySelector(".year");
const yearName = document.querySelector(".yearName");
const gender = document.querySelector(".gender");
const prog = document.querySelector(".Program");
const email = document.querySelector(".email");
const univ = document.querySelector(".univ");
const faculty = document.querySelector(".faculty");
const phone = document.querySelector(".phone");

const number = document.querySelector("#phone__number");
const university = document.querySelector("#university");
const fact = document.querySelector("#Faculty");

const time = document.querySelector(".Time");
const date = document.querySelector(".date");

let SecComm = false;
// card info

const showTextArea = (comm, sec = false) => {
  if (Questions[comm] === undefined) return;

  let areaCount = 0;
  let textareas = [],
    lbls = [];
  if (!sec) {
    textareas = Array.from(
      document.querySelectorAll(".tech_questions textarea")
    );
    lbls = Array.from(document.querySelectorAll(".tech_questions label"));
  } else {
    textareas = Array.from(
      document.querySelectorAll(".sec_tech_questions textarea")
    );

    lbls = Array.from(document.querySelectorAll(".sec_tech_questions label"));
  }

  console.log(textareas[0].parentNode);
  for (let i = 0; i < Questions[comm].length; i++) {
    setTimeout(() => {
      textareas[i].classList.remove("none");
    }, 200);

    setTimeout(() => {
      textareas[i].classList.remove("hidden");
      textareas[i].classList.add("visible");
    }, 400);

    lbls.forEach((lbl) => {
      if (lbl.getAttribute("for") === textareas[i].id) {
        lbl.classList.remove("none");
        lbl.classList.remove("hidden");
        lbl.classList.add("visible");
        lbl.innerHTML = Questions[comm][i];
      }
    });
  }
};

const addQuestion = (comm) => {
  return (
    comm === "Science&Tech" ||
    comm === "Web" ||
    comm === "Blender" ||
    comm === "UX&Design" ||
    comm === "Flutter"
  );
};
const CheckName = (username) => {
  username = username.trim();
  for (const char of username) {
    if (!isNaN(char)) return false;
  }
  return username.length <= 15 && username.length >= 2;
};

const CheckID = (ID) => {
  ID = ID.trim();
  for (const dig of ID) if (!typeof Number(dig) === "number") return false;
  return ID.length === 11 && ID[0] === "2" && ID[1] === "0";
};

const CheckEmail = (email) => {
  email = email.trim();
  const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  return regex.test(email) && email.length >= 3;
};

const CheckPhone = (number) => {
  const regex = /^01[0-2,5]{1}[0-9]{8}$/;
  return regex.test(number);
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

      if (CheckName(e.target.value)) {
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

    if (e.target.id === "phone__number") {
      phone.innerHTML = e.target.value;
      if (CheckPhone(e.target.value)) {
        e.target.style.borderColor = "green";
        e.target.classList.add("valid");
      } else {
        e.target.style.borderColor = "red";
        e.target.classList.remove("valid");
      }
    }
    if (e.target.id === "otheruniv") univ.innerHTML = ele.value;

    if (e.target.id === "otherfact") faculty.innerHTML = ele.value;

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
      } else if (ele.id === "gender") gender.innerHTML = ele.value;
      else if (ele.id === "program") prog.innerHTML = ele.value;
      else if (ele.id === "committee") {
        showTextArea(ele.value);
        committee.innerHTML = ele.value;
        Array.from(document.querySelector("#sec__committee").options).forEach(
          (child) => {
            if (child.value === ele.value)
              child.setAttribute("hidden", "hidden");
          }
        );
      } else if (ele.id === "sec__committee") {
        showTextArea(ele.value, true);
        sec_committee.innerHTML = ele.value;
        SecComm = true;
        console.log("sec com from input ", SecComm);
      } else if (ele.id === "university") {
        univ.innerHTML = ele.value;
        if (ele.value === "Other") {
          const otherUniv = document.querySelector("#otheruniv");
          setTimeout(() => {
            otherUniv.style.setProperty("display", "block");
          }, 200);
          setTimeout(() => {
            otherUniv.classList.remove("hidden");
            otherUniv.classList.add("visible");
          }, 400);
        }
      } else if (ele.id === "Faculty") {
        faculty.innerHTML = ele.value;
        if (ele.value === "Other") {
          const otherFact = document.querySelector("#otherfact");
          setTimeout(() => {
            otherFact.style.setProperty("display", "block");
          }, 200);
          setTimeout(() => {
            otherFact.classList.remove("hidden");
            otherFact.classList.add("visible");
          }, 400);
        }
      } else if (ele.id === "date") date.innerHTML = ele.value;
      else if (ele.id === "time") time.innerHTML = ele.value;
      if (!ele.classList.contains("valid")) ele.classList.add("valid");

      ele.style.borderColor = "green";
    }
  });
});

//check that all fields have been entered for first form
let validInfo = 0;
let whichForm = 0;

if (validInfo !== 8) {
  let validateInfo = setInterval(() => {
    validInfo = Array.from(document.querySelectorAll(".valid")).length;
    if (validInfo === 8) NextBtn.classList.remove("disabled");
    if (whichForm === 1) clearInterval(validateInfo);
  }, 1000);
}

/* Register Page Part */

/* Date and Time Picker */

//check that all fields have been entered for last form
let validateDate = setInterval(() => {
  if (!SecComm) {
    if (
      document.querySelector("#time").value !== "" &&
      document.querySelector("#date").value !== "" &&
      NextBtn.innerHTML === "Submit"
    )
      NextBtn.classList.remove("disabled");
  } else {
    if (
      document.querySelector("#time").value !== "" &&
      document.querySelector("#date").value !== "" &&
      document.querySelector("#sec__date").value !== "" &&
      document.querySelector("#sec__time").value !== "" &&
      NextBtn.innerHTML === "Submit"
    )
      NextBtn.classList.remove("disabled");
  }
}, 1000);

//check that all fields have been entered for extra form
let validateExtra = setInterval(() => {
  if (
    number.value !== "" &&
    university.value !== "" &&
    fact.value !== "" &&
    NextBtn.innerHTML === "Next"
  )
    NextBtn.classList.remove("disabled");
  if (
    NextBtn.classList.contains("tech") ||
    NextBtn.classList.contains("sec_tech") ||
    NextBtn.classList.contains("submit")
  )
    clearInterval(validateExtra);
}, 1000);

//check that all fields have been entered for questions form
let validateQuestions = setInterval(() => {
  if (
    ((!document.querySelector("#q1").classList.contains("none") &&
      document.querySelector("#q1").value !== "") ||
      (!document.querySelector("#q2").classList.contains("none") &&
        document.querySelector("#q2").value !== "") ||
      (!document.querySelector("#q3").classList.contains("none") &&
        document.querySelector("#q3").value !== "")) &&
    NextBtn.classList.contains("tech")
  ) {
    NextBtn.classList.remove("disabled");
  }
  if (
    NextBtn.classList.contains("submit") ||
    NextBtn.classList.contains("sec_tech")
  )
    clearInterval(validateQuestions);
}, 1000);

//check that all fields have been entered for second questions form
let validateSecQuestions = setInterval(() => {
  if (
    ((!document.querySelector("#q4").classList.contains("none") &&
      document.querySelector("#q4").value !== "") ||
      (!document.querySelector("#q5").classList.contains("none") &&
        document.querySelector("#q5").value !== "") ||
      (!document.querySelector("#q6").classList.contains("none") &&
        document.querySelector("#q6").value !== "")) &&
    NextBtn.classList.contains("sec_tech")
  ) {
    NextBtn.classList.remove("disabled");
  }
  if (NextBtn.classList.contains("submit")) clearInterval(validateQuestions);
}, 1000);

/* Date and Time Picker */

/* switch between forms */

NextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.innerHTML === "Next") {
    if (!NextBtn.classList.contains("disabled")) {
      if (NextBtn.classList.contains("info")) {
        infoForm.style.setProperty("transform", "translateX(-1000%)");
        NextBtn.classList.remove("info");
        NextBtn.classList.add("extra");
      } else if (NextBtn.classList.contains("extra")) {
        moreInfoForm.style.setProperty("transform", "translateX(-1000%)");
        NextBtn.classList.remove("extra");

        if (addQuestion(committee.innerText)) NextBtn.classList.add("tech");
        else NextBtn.classList.add("submit");
      } else if (NextBtn.classList.contains("tech")) {
        techForm.style.setProperty("transform", "translateX(-1000%)");
        NextBtn.classList.remove("tech");

        if (SecComm && addQuestion(sec_committee.innerText))
          NextBtn.classList.add("sec_tech");
        else NextBtn.classList.add("submit");
      } else if (NextBtn.classList.contains("sec_tech")) {
        sec_committee.style.setProperty("transform", "translateX(-1000%)");

        NextBtn.classList.remove("sec_tech");
        NextBtn.classList.add("submit");
      }
      setTimeout(() => {
        if (NextBtn.classList.contains("extra"))
          infoForm.style.display = "none";
        else if (NextBtn.classList.contains("tech"))
          moreInfoForm.style.display = "none";
        else if (NextBtn.classList.contains("sec_tech"))
          techForm.style.display = "none";
        else if (NextBtn.classList.contains("submit")) {
          if (addQuestion(committee.innerText) && !SecComm)
            techForm.style.display = "none";
          else if (addQuestion(committee.innerText) && SecComm)
            sec_techForm.style.display = "none";
          else moreInfoForm.style.display = "none";
        }

        NextBtn.style.opacity = "0";
        setTimeout(() => {
          if (NextBtn.classList.contains("submit"))
            NextBtn.innerHTML = "Submit";
          NextBtn.classList.add("disabled");
          NextBtn.style.opacity = "100%";
        }, 500);
      }, 1000);
      setTimeout(() => {
        if (NextBtn.classList.contains("submit")) {
          dateForm.style.display = "flex";
          if (SecComm) {
            console.log("sec com from display ", SecComm);
            const noneDates = Array.from(
              document.querySelectorAll("select.none")
            );
            noneDates.forEach((date) => {
              date.classList.remove("none");
            });
          }
        } else if (NextBtn.classList.contains("extra"))
          moreInfoForm.style.display = "flex";
        else if (NextBtn.classList.contains("tech")) {
          techForm.classList.remove("none");
        } else if (NextBtn.classList.contains("sec_tech")) {
          sec_techForm.classList.remove("none");
        }
      }, 1000);
      setTimeout(() => {
        if (NextBtn.classList.contains("submit")) {
          dateForm.classList.remove("hidden");
          dateForm.classList.add("visible");
          if (SecComm) {
            const hidddenDates = Array.from(
              document.querySelectorAll("select.hidden")
            );
            hidddenDates.forEach((hidden) => {
              hidden.classList.remove("hidden");
              hidden.classList.remove("visible");
            });
          }
        } else if (NextBtn.classList.contains("extra")) {
          moreInfoForm.classList.remove("hidden");
          moreInfoForm.classList.add("visible");
        } else if (NextBtn.classList.contains("tech")) {
          techForm.classList.remove("hidden");
          techForm.classList.add("visible");
        } else if (NextBtn.classList.contains("sec_tech")) {
          sec_techForm.classList.remove("hidden");
          sec_techForm.classList.add("visible");
        }
      }, 1300);
    }
  } else if (e.target.innerHTML === "Submit") {
    document.body.style.overflowX = "hidden";
    if (!e.target.classList.contains("disabled")) {
      dateForm.style.setProperty("transform", "translateX(-300%)");
      setTimeout(() => {
        window.location = "public/success.html";
      }, 1500);
    }
    document.querySelector("#info").submit();
  }
  whichForm++;
});
/* switch between forms */

/* different media queries actions */
const notMobile = window.matchMedia("(min-width: 991px)");

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
