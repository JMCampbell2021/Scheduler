$(document).ready(function () {

    var currentTime = moment().format('LLLL')  // Month name, day of month, day of week, year, time
    var currentDate = $('#currentDay');
    currentDate.text(currentTime);

    var date = new Date(); // init date and time
    var currentHour = date.getHours(); // returns 0-23 on a 24 hour clock

    for (var i = 8; i < 19; i++) {
        if (i < currentHour) {
            document.getElementById(i.toString()).classList.add('past'); 
        } else if (i === currentHour) {
            document.getElementById(i.toString()).classList.add('present');
        } else if (i > currentHour) {
            document.getElementById(i.toString()).classList.add('future');
        }
    }

    $('.saveBtn').click(function(){
        var Task8 = document.getElementById('8').value;
        localStorage.setItem('Task', Task8);
    })

    var loadTask8 = localStorage.getItem('Task');
    document.getElementById('8').value = loadTask8
});
