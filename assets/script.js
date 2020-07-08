// YOUR JS CODE GOES HERE
$(document).ready(function () {
  var currentDay = moment();

  $("#currentDay").text(currentDay.format("llll"));

  console.log(currentDay);

  // ARRAY FOR HOURS IN CALENDAR

  var dailyTask = $("#textarea").val();

  var indexOfHoursArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  var columHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

  // var index = console.log(columHours);

  for (var index = 0; index < columHours.length; index++) {
    //  for (let hour = 9; hour <= 17; hour++) {
    //    let hourIndex = hour - 9;

    console.log(columHours.length + "- index:" + index);
    var newDiv = $("<div>");
    newDiv.addClass("row time-block");
    var hourElement = $("<div>");
    hourElement.text(columHours[index]);
    hourElement.attr("data-value", indexOfHoursArr[index]);

    //   console.log(hourElement);

    hourElement.addClass("hour column-md-3 text-primary text-center pt-2");
    var dailyTaskInput = $("<textarea>");
    console.log(columHours[index]);
    dailyTaskInput.addClass("description col-md-8");
    dailyTaskInput.attr("id", "textarea");
    //dailyTaskInput.attr("row", "1");
    var $saveBtn = $("<button>");
    $saveBtn.addClass("col-md-1 fa fa-save  text-wrap");

    if (indexOfHoursArr[index] == moment().format("kk")) {
      dailyTaskInput.addClass("present");
    } else if (indexOfHoursArr[index] < moment().format("kk")) {
      dailyTaskInput.addClass("past");
    } else {
      dailyTaskInput.addClass("future");
    }
    newDiv.append(hourElement, dailyTaskInput, $saveBtn);

    $("#schedulerDiv").append(newDiv);
  }
  //when user presses save
  $(".fa-save").click(function () {
    console.log("trying to save data");
    var id = $(this).siblings(".hour").attr("data-value"); //select the parent id for the save button
    var text = $(this).siblings(".description").val(); // take the text area of event class
    console.log(id, text);
    localStorage.setItem(id, text); //set the key and value into local storage
  });
  $(".description").each(function () {
    var id = $(this).siblings(".hour").attr("data-value");
    var locallyStoredData = localStorage.getItem(id);
    console.log(id);
    $(this).val(locallyStoredData);

    //localstorage getitem
  });
});
//adding rows to scheduler

// $(".table").append("<tr><td>hour</><td>");

// var currentDay = moment();
// console.log(currentDay);

// $(currentDay).innerHTML = currentDay;
