"use strict";

function hourConverter(s: string): string {
  const amOrPm: string = s[8];
  let militaryHour: string = "";
  if (amOrPm === "A") {
    if (s[0] + s[1] === "12") militaryHour = "00";
    else militaryHour = s[0] + s[1];
  } else {
    if (s[0] + s[1] === "12") militaryHour = s[0] + s[1];
    else militaryHour = String(parseInt(s[0] + s[1], 10) + 12);
  }

  return militaryHour + s.substring(2, 8);
}
console.log(hourConverter("07:12:12PM"));
