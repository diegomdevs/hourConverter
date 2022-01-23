"use strict";
function hourConverter(s) {
    var sConverted = "";
    var hour = Number(s[0] + s[1]);
    var hourConverted = "";
    if (s[8] + s[9] === "AM") {
        if (s[0] + s[1] === "12") {
            hourConverted = String(hour - 12);
            sConverted = s.replace(s[0] + s[1], hourConverted);
        }
        else {
            sConverted = s;
        }
    }
    if (s[8] + s[9] === "PM") {
        if (s[0] + s[1] !== "12") {
            hourConverted = String(hour + 12);
            sConverted = s.replace(s[0] + s[1], hourConverted);
        }
        else {
            sConverted = s;
        }
    }
    return sConverted.replace(s[8] + s[9], "");
}
console.log(hourConverter("12:12:12PM"));
