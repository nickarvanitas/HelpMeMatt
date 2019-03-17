var companySlogan = "Part 4";
    document.getElementById("slogan").innerHTML = companySlogan;

var companyName = "Fortune";
    document.getElementById("company").innerHTML = companyName;

var pageTitle = "Fortune";
    document.getElementById("title").innerHTML = pageTitle;






var secretMonth = Math.floor(Math.random() * 12) + 1;
       

var secretDate = Math.floor(Math.random() * 30) + 1;
   

var secretString = Math.floor(Math.random() * 5)+ 1;
  


var day;
var message;




switch (secretMonth) {
        case 1:
          day = "January";
          break;
        case 2:
          day = "February";
          break;
        case 3:
          day = "March";
          break;
        case 4:
          day = "April";
          break;
        case 5:
          day = "May";
          break;
        case 6:
          day = "June";
          break;
        case 7:
          day = "July";
          break;
        case 8:
           day = "August";
          break;
        case 9:
          day = "September";
          break;
        case 10:
          day = "October";
          break;
        case 11:
          day = "November";
          break;
        case 12:
          day = "December";
          break;

}

switch (secretString) {
        case 1:
          message = "you will win 5 dollars";
          break;
        case 2:
           message = "you will lose money";
          break;
        case 3:
          message = "you will gain a friend";
          break;
        case 4:
          message = "you will lose a friend";
          break;
        case 5:
          message = "you will eat icecream";
          break;

}

console.log(day);
console.log(message);

var finalMessage = "On " + day + " " + secretDate + ", " + message + ".";
        document.getElementById("finalMessage").innerHTML = finalMessage;