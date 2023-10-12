$(document).ready(function() {

var currentTime = dayjs();
var dateDisplayEl = $('#currentDay');

var saveBtn = $('.saveBtn')
// displays the current dtg under the header
function displayDate() {
  var todaysDate = dayjs().format('[Today is ]dddd MMMM D, YYYY [and it is currently] h:mm:s');
  dateDisplayEl.text(todaysDate);
}

// save user input task to local storage at the hour id it was entered
$(saveBtn).click(function() {
  var timeInput = $(this).closest('.time-block').attr('id');
  var userInput = $(this).siblings('.description').val();

  localStorage.setItem(timeInput, userInput);
})

// render any user tasks from local storage upon reload
$('.time-block').each(function() {
  var taskTime = $(this).attr('id');
  var savedTask = localStorage.getItem(taskTime);

  $(this).find('.description').val(savedTask);
})

function hourTracker() {
    var currentHour = dayjs().hour();
    console.log(currentHour);

    $('.time-block').each(function () {
      var blockHour = $(this).attr('id');

      if (blockHour > currentHour) {
        $(this).removeClass('past');
        $(this).addClass('future');
      } 
        else if (blockHour === currentHour) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } 
        else if (blockHour < currentHour) {
          $(this).addClass('past');
        }
      });
}

hourTracker();

displayDate();

})