var DateTime = luxon.DateTime;
var dt = DateTime.now();

$(document).ready(function() {

    // current date
        $("#currentDay").text(dt.toLocaleString(DateTime.DATE_HUGE));

    // save button function
        $(".saveBtn").on("click", function() {
            var text = $(this).siblings(".description").val();
            var time = $(this).parent().attr("id");

            // stores input of the time block that was typed in a saved
            localStorage.setItem(time, text);
        })
    
    // displays saved text
        $("#hour9 .description").val(localStorage.getItem("hour9"));
        $("#hour10 .description").val(localStorage.getItem("hour10"));
        $("#hour11 .description").val(localStorage.getItem("hour11"));
        $("#hour12 .description").val(localStorage.getItem("hour12"));
        $("#hour13 .description").val(localStorage.getItem("hour13"));
        $("#hour14 .description").val(localStorage.getItem("hour14"));
        $("#hour15 .description").val(localStorage.getItem("hour15"));
        $("#hour16 .description").val(localStorage.getItem("hour16"));
        $("#hour17 .description").val(localStorage.getItem("hour17"));
    
    // current time color coding
        function hourTracking() {
            // current time
            var currentHour = dt.hour;
            console.log(currentHour);

            // checking time function
            $(".time-block").each(function () {
                // time block hour - based off id
                var blockHour = parseInt($(this).attr("id").split("hour")[1]);
                console.log(blockHour, currentHour);

                // compares time block time to current time and chooses css class
                // past time - gray
                if (blockHour < currentHour) {
                    $(this).addClass("past");
                    $(this).removeClass("future");
                    $(this).removeClass("present");
                }
                // current time - red
                else if (blockHour === currentHour) {
                    $(this).removeClass("past");
                    $(this).addClass("present");
                    $(this).removeClass("future");
                }
                // future time - green
                else {
                    $(this).removeClass("present");
                    $(this).removeClass("past");
                    $(this).addClass("future");
                }
            })
        }
    hourTracking();
});