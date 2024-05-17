// Question 116: Create a switch case that matches several cases to the same code block, representing seasons.

// Explain & TIP: You can group multiple case statements together when they should execute the same block of code, which is handy for categorizing items into broader groups.

function cases(month: number) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      console.log("Winter Season");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Spring Season");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Summer Season");
      break;

    case 9:
    case 10:
    case 11:
      console.log("Autum Season");
      break;

    default:
      console.log("Invalid Month");
  }
}

cases(4);
