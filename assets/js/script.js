$(document).ready(function () {
    // Month name, day of month, day of week, year, time
    var currentTime = moment().format('LLLL')  
    $("#currentDay").html(currentTime);

     // Check the time and add background indicators
    function date() {
        var currentTimeNow = moment().hour();
        $(".time-block").each(function () {
            var indicatorTime = parseInt($(this).attr("id").split("hour"));
            if (indicatorTime < currentTimeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (indicatorTime === currentTimeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    // Save to local storage
    $('.saveBtn').click(function(){
        var discription = $(this).siblings(".discription").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time,discription)
    })

    // Get data from local storage
    $("#8 .discription").val(localStorage.getItem("8"));
    $("#9 .discription").val(localStorage.getItem("9"));
    $("#10 .discription").val(localStorage.getItem("10"));
    $("#11 .discription").val(localStorage.getItem("11"));
    $("#12 .discription").val(localStorage.getItem("12"));
    $("#13 .discription").val(localStorage.getItem("13"));
    $("#14 .discription").val(localStorage.getItem("14"));
    $("#15 .discription").val(localStorage.getItem("15"));
    $("#16 .discription").val(localStorage.getItem("16"));
    $("#17 .discription").val(localStorage.getItem("17"));
    $("#18 .discription").val(localStorage.getItem("18"));
    

    date();
});
