
var addevent1 = document.getElementById("stored1");
var addevent2 = document.getElementById("stored2");
var addevent3 = document.getElementById("stored3");
var addevent4 = document.getElementById("stored4");
var addevent5 = document.getElementById("stored5");
var addevent6 = document.getElementById("stored6");
var addevent7 = document.getElementById("stored7");
var addevent8 = document.getElementById("stored8");
var addevent9 = document.getElementById("stored9");
var saveButton = $('.saveBtn');
var today = dayjs();
var chour = dayjs().hour();  //obtain the current hour
$('#currentDay').text(today.format('ddd, MMM, D, h:mm:ss a'));

 render();
 
saveButton.on ( 'click',function (event) {  // this function should store events from each time block 
  event.preventDefault();
   var devent = addevent1.value;
   var devent2 = addevent2.value;
   var devent3 = addevent3.value;
   var devent4 = addevent4.value;
   var devent5 = addevent5.value;
   var devent6 = addevent6.value;
   var devent7 = addevent7.value;
   var devent8 = addevent8.value;
   var devent9 = addevent9.value;
  
  localStorage.setItem("#stored1", devent);
  localStorage.setItem("#stored2", devent2);
  localStorage.setItem("#stored3", devent3);
  localStorage.setItem("#stored4", devent4);
  localStorage.setItem("#stored5", devent5);
  localStorage.setItem("#stored6", devent6);
  localStorage.setItem("#stored7", devent7);
  localStorage.setItem("#stored8", devent8);
  localStorage.setItem("#stored9", devent9);
  //and compare curren time or (chour) with the time on time slot so that each of the time slot is coded correctly. 
  
if (chour == 9){
  $('#hour-9').removeClass('future').removeClass('past').addClass('present');

}  if (chour > 9 ){

  $('#hour-9').removeClass('present').removeClass('future').addClass('past');


} if( chour < 9) {

  $('#hour-9').removeClass('present').removeClass('past').addClass('future');
}


if (chour == 10){
  $('#hour-10').removeClass('future').removeClass('past').addClass('present');

}  if (chour > 10 ){

  $('#hour-10').removeClass('present').removeClass('future').addClass('past');


} if (chour < 10) {

  $('#hour-10').removeClass('present').removeClass('past').addClass('future');
}

if (chour == 11){
  $('#hour-11').removeClass('future').removeClass('past').addClass('present');

}  if (chour > 11 ){

  $('#hour-11').removeClass('present').removeClass('future').addClass('past');


}if (chour < 11) {

  $('#hour-11').removeClass('present').removeClass('past').addClass('future');
}

if (chour == 12){
  $('#hour-12').removeClass('future').removeClass('past').addClass('present');

}  if (chour > 12 ){

  $('#hour-12').removeClass('present').removeClass('future').addClass('past');


}if (chour < 12) {

  $('#hour-12').removeClass('present').removeClass('past').addClass('future');
}

if (chour == 13){
  $('#hour-1').removeClass('future').removeClass('past').addClass('present');

}  if (chour > 13 ){

  $('#hour-1').removeClass('present').removeClass('future').addClass('past');


}if (chour < 13) {

  $('#hour-1').removeClass('present').removeClass('past').addClass('future');
}

if (chour == 14){
  $('#hour-2').removeClass('future').removeClass('past').addClass('present');

}  if (chour > 14 ){

  $('#hour-2').removeClass('present').removeClass('future').addClass('past');


}if (chour < 14) {

  $('#hour-2').removeClass('present').removeClass('past').addClass('future');

}


if (chour == 15){
  $('#hour-3').removeClass('future').removeClass('past').addClass('present');

}  if (chour > 15 ){

  $('#hour-3').removeClass('present').removeClass('future').addClass('past');


} if ( chour < 15) {

  $('#hour-3').removeClass('present').removeClass('past').addClass('future');
}

if (chour == 16){
  $('#hour-4').removeClass('future').removeClass('past').addClass('present');

}  if (chour > 16 ){

  $('#hour-4').removeClass('present').removeClass('future').addClass('past');


}if ( chour < 16) {

  $('#hour-4').removeClass('present').removeClass('past').addClass('future');
}

if (chour == 17){
  $('#hour-5').removeClass('future').removeClass('past').addClass('present');

}  if (chour > 17 ){

  $('#hour-5').removeClass('present').removeClass('future').addClass('past');


}if ( chour < 17) {

  $('#hour-5').removeClass('present').removeClass('past').addClass('future');
}


  


});

 function render(){                  // created function to get events from local storage and place them back into time slot.

  var event1 = localStorage.getItem("#stored1");
  var event2 = localStorage.getItem("#stored2");
  var event3 = localStorage.getItem("#stored3");
  var event4 = localStorage.getItem("#stored4");
  var event5 = localStorage.getItem("#stored5");
  var event6 = localStorage.getItem("#stored6");
  var event7 = localStorage.getItem("#stored7");
  var event8 = localStorage.getItem("#stored8");
  var event9 = localStorage.getItem("#stored9");
  addevent1.textContent = event1;
  addevent2.textContent = event2;
  addevent3.textContent = event3;
  addevent4.textContent = event4;
  addevent5.textContent = event5;
  addevent6.textContent = event6;
  addevent7.textContent = event7;
  addevent8.textContent = event8;
  addevent9.textContent = event9;
 }

