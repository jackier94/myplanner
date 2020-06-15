// YOUR JS CODE GOES HERE
$(document).ready(function () {
  var currentDay = moment();

  $("#currentDay").text(currentDay.format("llll"));

  console.log(currentDay);
});

var locallyStoredData = localStorage.getItem("#textarea");
// ARRAY FOR HOURS IN CALENDAR

var dailyTask = $("#textarea").val;

var indexOfHoursArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];

var columHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

// var index = console.log(columHours);

for (var i = 0; i < columHours.length; i++);
{
  // for (let hour = 9; hour <= 17; hour++) {
  //   let index = hour - 9;

  //   console.log(columHours);

  var hourElement = $("<div>");
  hourElement.text(columHours[i]);
  hourElement.attr("data-value", indexOfHoursArr[i]);

  //   console.log(hourElement);

  hourElement.addClass("time-block hour col-md-1 text-center pt-2 row");
  var dailyTaskInput = $("<textarea>");
  dailyTaskInput.addClass("description col-md-9 row");
  dailyTaskInput.attr("id", "textarea");
  dailyTaskInput.attr("row", "1");
  var $saveBtn = $("<button>");
  $saveBtn.addClass("col-md-2 fa fa-save  text-wrap row");

  if (indexOfHoursArr[i] == moment().format("kk")) {
    dailyTaskInput.addClass("present");
  } else if (indexOfHoursArr[i] < moment().format("kk")) {
    dailyTaskInput.addClass("past");
  } else {
    dailyTaskInput.addClass("future");
  }

  $("#schedulerDiv").append(hourElement, dailyTaskInput, $saveBtn);
}

//adding rows to scheduler

// $(".table").append("<tr><td>hour</><td>");

// var currentDay = moment();
// console.log(currentDay);

// $(currentDay).innerHTML = currentDay;
