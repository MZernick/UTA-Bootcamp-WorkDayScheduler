// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentHour = dayjs().hour();
//console.log(currentHour);

var todayIs = dayjs();
$('#currentDay').text(todayIs.format('MMM D, YYYY, h:mm'));

$(function () {
  $(".saveBtn").on("click", function(event) {
    // console.log($(this).parent().attr("id"));
    var value = $(this).siblings("textarea").val();
    var key = $(this).parent().attr("id");
    localStorage.setItem(key,value);
    // event.currentTarget.className = localStorage.getItem(value);
    // console.log(event.currentTarget);
  });

$(".time-block").each(function() {
      // console.log(this.id);
      var displayHours = this.id.substring(5);
      //console.log(displayHours);
      if (displayHours>currentHour){
        this.classList.add("future");
      }
      else if (displayHours = currentHour){
        this.classList.add("present");
      }
      else if (displayHours = currentHour){
        this.classList.add("past");
      }
      // console.log(this);
})

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //if (hours = )
      //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    //specificID = localStorage.getItem();

  });
