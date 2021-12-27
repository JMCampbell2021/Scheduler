$(document).ready(function () {

    var currentTime = moment().format('LLLL')  // Month name, day of month, day of week, year, time
    var currentDate = $('#currentDay');
    currentDate.text(currentTime);

    var date = new Date();
    var currentHour = date.getHours();

    for (var i = 8; i < 19; i++) {
        if (i < currentHour) {
            document.getElementById(i.toString()).classList.add('past'); 
        } else if (i === currentHour) {
            document.getElementById(i.toString()).classList.add('present');
        } else if (i > currentHour) {
            document.getElementById(i.toString()).classList.add('future');
        }
    }

    $('.saveBtn').click(function(event){
        event.preventDefault();

        var Task8 = document.getElementById('8').value;
        localStorage.setItem('Task8', Task8);
        var Task9 = document.getElementById('9').value;
        localStorage.setItem('Task9', Task9);
        var Task10 = document.getElementById('10').value;
        localStorage.setItem('Task10', Task10);
        var Task11 = document.getElementById('11').value;
        localStorage.setItem('Task11', Task11);
        var Task12 = document.getElementById('12').value;
        localStorage.setItem('Task12', Task12);
        var Task13 = document.getElementById('13').value;
        localStorage.setItem('Task13', Task13);
        var Task14 = document.getElementById('14').value;
        localStorage.setItem('Task14', Task14);
        var Task15 = document.getElementById('15').value;
        localStorage.setItem('Task15', Task15);
        var Task16 = document.getElementById('16').value;
        localStorage.setItem('Task16', Task16);
        var Task17 = document.getElementById('17').value;
        localStorage.setItem('Task17', Task17);
        var Task18 = document.getElementById('18').value;
        localStorage.setItem('Task18', Task18);
    })

    var loadTask8 = localStorage.getItem('Task8');
    document.getElementById('8').value = loadTask8;
    var loadTask9 = localStorage.getItem('Task9');
    document.getElementById('9').value = loadTask9
    var loadTask10 = localStorage.getItem('Task10');
    document.getElementById('10').value = loadTask10
    var loadTask11 = localStorage.getItem('Task11');
    document.getElementById('11').value = loadTask11
    var loadTask12 = localStorage.getItem('Task12');
    document.getElementById('12').value = loadTask12
    var loadTask13 = localStorage.getItem('Task13');
    document.getElementById('13').value = loadTask13
    var loadTask14 = localStorage.getItem('Task14');
    document.getElementById('14').value = loadTask14
    var loadTask15 = localStorage.getItem('Task15');
    document.getElementById('15').value = loadTask15
    var loadTask16 = localStorage.getItem('Task16');
    document.getElementById('16').value = loadTask16
    var loadTask17 = localStorage.getItem('Task17');
    document.getElementById('17').value = loadTask17
    var loadTask18 = localStorage.getItem('Task18');
    document.getElementById('18').value = loadTask18

});
