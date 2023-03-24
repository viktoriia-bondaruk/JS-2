// #1
var userObj = {
  firstName: "First name",
  lastName: "Last name",
  age: 20,
  fullName() {
    return `${userObj.firstName} ${userObj.lastName}`;
  },
};

//  #2
console.log(userObj.fullName());

// #3

function defUpperStr(text) {
  return (text || "Default text").toUpperCase();
}
console.log(defUpperStr());
console.log(defUpperStr("My text"));

// #4

function evenFn(n) {
  var arr = [];
  for (i = 1; i <= n; i++) if (i % 2 === 0) arr.push(i);
  return arr;
}

// #5
function weekFn(day) {
  var weekday = "";

  switch (day) {
    case 1:
      weekday = "Понедельник";
      break;
    case 2:
      weekday = "Вторник";
      break;
    case 3:
      weekday = "Среда";
      break;
    case 4:
      weekday = "Четверг";
      break;
    case 5:
      weekday = "Пятница";
      break;
    case 6:
      weekday = "Суббота";
      break;
    case 7:
      weekday = "Воскресенье";
      break;
    default:
      weekday = null;
  }

  return weekday;
}

// #6

function ageClassification(age) {
  return age > 0
    ? age > 24
      ? age > 44
        ? age > 65
          ? age > 75
            ? age > 90
              ? age > 122
                ? null
                : "долгожители"
              : "старческий возраст"
            : "пожилой возраст"
          : "средний возраст"
        : "молодой возраст"
      : "детский возраст"
    : null;
}

// #7

function oddFn(n) {
  var arr = [];
  var i = 0;
  while (i++ < n) if (i % 2 !== 0) arr.push(i);
  return arr;
}

// #8

function mainFunc(a, b, func) {
  if (func && typeof func === "function") return func(a, b);
  return false;
}

function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbPow(a, b) {
  return Math.pow(a, b);
}

function cbAdd(a, b) {
  return a + b;
}

console.log(mainFunc(2, 5, cbRandom)); // целые числа в диапазоне 2..5

console.log(mainFunc(2, 5, cbPow)); // 32

console.log(mainFunc(2, 5, cbAdd)); // 7

console.log(mainFunc(2, 5, "not a func")); // false
