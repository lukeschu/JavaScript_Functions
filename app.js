console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  for (i = 0; i <= count; i++) {
    if (i % 2) {
      console.log(i);
    }
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
  aboveSixteen = `Congrats ${userName}, you can drive!`;
  belowSixteen = `Sorry ${userName}, but you're too lame to drive.`;
  if (age >= 16) {
    console.log(aboveSixteen);
  } else {
    console.log(belowSixteen);
  }
}
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x, y) {
  if (x == 0 && y == 0) {
    return "zero";
  } else if (x == 0 && !(y == 0)) {
    return "x-axis";
  } else if (!(x == 0) && y == 0) {
    return "y-axis";
  } else if (x > 0 && y > 0) {
    return "Q1";
  } else if (x < 0 && y > 0) {
    return "Q2";
  } else if (x < 0 && y < 0) {
    return "Q3";
  } else if (x > 0 && y < 0) {
    return "Q4";
  } else {
    return "invalid input";
  }
}
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function triangleType(a, b, c) {
  if (a + b <= c || a + c <= b || c + b <= a || arguments.length < 3) {
    return "invalid input";
  } else if (a == b && b == c) {
    return "equilateral";
  } else if (
    (a == b && !(b == c)) ||
    (!(a == b) && b == c) ||
    (a == c && !(b == c))
  ) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function planStatus(planLimit, day, usage) {
  console.log(`${day} days used, ${30 - day} days remaining.`);
  console.log(
    `Average daily use: ${parseFloat(usage / day).toFixed(2)} GB/day.`
  );
  if (usage / day > planLimit / 30) {
    console.log(
      `You are EXCEEDING your acceptable daily use (${parseFloat(
        planLimit / 30
      ).toFixed(2)} GB/day).`
    );
    console.log(
      `At this rate, you will exceed your data cap by ${parseFloat(
        30 * (usage / day) - planLimit
      ).toFixed(2)} GB.`
    );
    console.log(
      `To avoid fees, use no more than ${parseFloat(
        (planLimit - usage) / (30 - day)
      ).toFixed(2)} GB/day.`
    );
  }
}
