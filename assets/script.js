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
    $("#hour-9").children("textarea").val(localStorage.getItem('hour-9'));
$("#hour-10").children("textarea").val(localStorage.getItem('hour-10'));
$("#hour-11").children("textarea").val(localStorage.getItem('hour-11'));
$("#hour-12").children("textarea").val(localStorage.getItem('hour-12'));
$("#hour-13").children("textarea").val(localStorage.getItem('hour-13'));
$("#hour-14").children("textarea").val(localStorage.getItem('hour-14'));
$("#hour-15").children("textarea").val(localStorage.getItem('hour-15'));
$("#hour-16").children("textarea").val(localStorage.getItem('hour-16'));
$("#hour-17").children("textarea").val(localStorage.getItem('hour-17'));
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
});

});
