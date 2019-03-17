// JavaScript Document
"use strict";

var companySlogan = "Part 6";
    document.getElementById("slogan").innerHTML = companySlogan;

var companyName = "Story Time";
    document.getElementById("company").innerHTML = companyName;

var pageTitle = "Story Time";
    document.getElementById("title").innerHTML = pageTitle;

var noun;
var adjective;
var verb; 

function story() {
  
    var noun = document.getElementById("nouns").value.toLowerCase().split(/\s+|\n/);
    var verb = document.getElementById("verbs").value.toLowerCase().split(/\s+|\n/);
    var adjective = document.getElementById("adjectives").value.toLowerCase().split(/\s+|\n/);

    var myStory = "I have 3 "+ adjective[0] +" friends, Walter, Jim, and Stacy. Walter the "+adjective[1]+" "+noun[0]+" likes to "+verb[0]+". Jim the "+adjective[2]+" "+noun[1]+" likes to "+verb[1]+". Stacy the "+ noun[2] +" likes to "+verb[2];
    


    document.getElementById("feedback").innerHTML = myStory;
    

}

