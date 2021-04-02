// set the date using moment
var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));

// set time of day
var userTime = moment();
userTime = userTime.startOf('hour');
// set day time to 9am
var workDay = moment().startOf('day').add(9,'hours');
// add times to boxes
var datainput= $('.form-control')
// 9 am

var firstBox = workDay.add(0,'h');
firstBox = firstBox.format('h A');
$('.9am').text(firstBox);

// 10 am

var secondBox = workDay.add(1,'h');
secondBox = secondBox.format('h A');
$('.10am').text(secondBox);

// 11 am

var thirdBox = workDay.add(1,'h');
thirdBox = thirdBox.format('h A');
$('.11am').text(thirdBox);

// 12 pm

var forthBox = workDay.add(1,'h');
forthBox = forthBox.format('h A');
$('.12pm').text(forthBox);

// 1 pm

var fifthBox = workDay.add(1,'h');
fifthBox = fifthBox.format('h A');
$('.1pm').text(fifthBox);

// 2 pm

var sixthBox = workDay.add(1,'h');
sixthBox = sixthBox.format('h A');
$('.2pm').text(sixthBox);

// 3 pm

var seventhBox = workDay.add(1,'h');
seventhBox = seventhBox.format('h A');
$('.3pm').text(seventhBox);

// 4 pm

var eighthBox = workDay.add(1,'h');
eighthBox = eighthBox.format('h A');
$('.4pm').text(eighthBox);

// 5 pm

var ninthBox = workDay.add(1,'h');
ninthBox = ninthBox.format('h A');
$('.5pm').text(ninthBox); 

console.log(secondBox)

function ppf (){
// create function to set styling 
    console.log(userTime)
time1 = moment().startOf('day').add(9, "h");
if (time1.isAfter(userTime)){
    $('.box9').addClass('past');
}
else if (time1.isSame(userTime)){
    $('.box9').addClass('present');
}
else {
    $('.box9').addClass('future')
};
time2 = moment().startOf('day').add(10, "h");
if (time2.isAfter(userTime)){
    $('.box10').addClass('past');
}
else if (time2.isSame(userTime)){
    $('.box10').addClass('present');
}
else {
    $('.box10').addClass('future')
};
time3= moment().startOf('day').add(11, "h");
if (time3.isAfter(userTime)){
    $('.box11').addClass('past');
}
else if (time3.isSame(userTime)){
    $('.box11').addClass('present');
}
else {
    $('.box11').addClass('future')
};
time4 = moment().startOf('day').add(12, "hours");
if (time4.isAfter(userTime)){
    $('.box12').addClass('past');
}
else if (time4.isSame(userTime)){
    $('.box12').addClass('present');
}
else {
    $('.box12').addClass('future')
};
time5 = moment().startOf('day').add(13, "hours");
if (time5.isAfter(userTime)){
    $('.box1').addClass('past');
}
else if (time5.isSame(userTime)){
    $('.box1').addClass('present');
}
else {
    $('.box1').addClass('future')
};
time6 = moment().startOf('day').add(14, "hours");
if (time6.isAfter(userTime)){
    $('.box2').addClass('past');
}
else if (time6.isSame(userTime)){
    $('.box2').addClass('present');
}
else {
    $('.box2').addClass('future')
};
time7 = moment().startOf('day').add(15, "hours");
if (time7.isAfter(userTime)){
    $('.box3').addClass('past');
}
else if (time7.isSame(userTime)){
    $('.box3').addClass('present');
}
else {
    $('.box3').addClass('future')
};
time8 = moment().startOf('day').add(16, "hours");
if (time8.isAfter(userTime)){
    $('.box4').addClass('past');
}
else if (time8.isSame(userTime)){
    $('.box4').addClass('present');
}
else {
    $('.box4').addClass('future')
};
time9 = moment().startOf('day').add(17, "hours");
if (time9.isAfter(userTime)){
    $('.box5').addClass('past');
}
else if (time9.isSame(userTime)){
    $('.box5').addClass('present');
}
else {
    $('.box5').addClass('future')
};
}
ppf(); 
 // crate loop to set vales to proper boxes
var x = [9,10,11,12,1,2,3,4,5]
 for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    
    $(".box" + x[i]).val(dataHour);}
    console.log ()

    $(".saveBtn").click(function (event) {
       event.preventDefault()
        var inputText = datainput.val();
        var time = $(this).parent().data('hour');
    
        localStorage.setItem(time, inputText);
    });
    
    $('.clear').click( function() {

        localStorage.clear();
       
       });
    