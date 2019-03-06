"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Angelina Stilphen
   Date:   3.5.19
   
   Filename: hg_report.js
	
*/

// 
var gameReport = "<h1>" + itemTitle + "</h1> <h2>By: " + itemManufacturer + "</h2> <img src='hg_" + itemID + ".png' alt='" + itemID + "'id='gameImg' /> <table> <tr><th>Product ID</th><td>" + itemID + "</td></tr> <tr><th>List Price</th><td>" + itemPrice + "</td></tr> <tr><th>Platform</th><td>" + itemPlatform + "</td></tr> <tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr> <tr><th>Condition</th><td>" + itemCondition + "</td></tr> <tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + itemSummary;

// This actually display the code onto the website calling the innerHTML from the document by the tag names. 
document.getElementsByTagName('article')[0].innerHTML = gameReport;

// made a varible set to the initial value to 0, and a variable named ratingscount equal to the length of the ratings array.  
var ratingsSum = 0;
var ratingsCount = ratings.length; 

// created a for loop to declare the ratingsAvg variable, setting its value equal to the value of the ratingsSum variable divided by the value of ratingsCount.
for (var i = 0; i <= ratingsCount; i++) {
    ratingsSum += ratings[i];
}

// created a variable named ratingReport, it's initial value are the text strings in the variable. Where average is the value of the ratingsAvg variable and count is the value of ratingsCount.
var ratingsAvg = ratingsSum / ratingsCount;
var ratingReport = "<h1>Customer Reviews</h1><h2>" + ratingsAvg + "out of 5 stars(" + ratingsCount + "reviews)</h2>";

// created a for loop in which the counter goes from 0 to 2 in steps of 1. Within the for loop, i inserted the commands to display the content of the first three customer reviews. Where title is the value of the ratingTitles array item for current review, author is the value of the current ratingAuthors array item, and date is the value of the current ratingDates item. rates the game on a scale of 1 to 5 stars. Nested a inside the last for loop where the counter goes from 1 up to the value of the current customer rating of the game in increments of one. Where summary is the value from the ratingSummaries array for the current customer review.
for (var i = 0; i <= 2; i++) {
    ratingReport += " <div class'”review'> <h1> " + ratingTitles[i] + " </h1><table> <tr><th>By</th><td> " + ratingAuthors[i] + " </td></tr> <tr><th>Review Date</th><td> " + ratingDates[i] + " </td></tr> <tr><th>Rating</th><td>";
    for (var j = 1; j <= ratings[i]; j++) {
        ratingReport += "<img src='hg_star.png'/>";
    }
    ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}

// created a value of the ratingReport variable to the inner HTML of the first and only aside element in the document.
document.getElementsByTagName('aside')[0].innerHTML = ratingReport;

