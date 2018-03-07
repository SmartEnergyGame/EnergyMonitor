'use strict'
var sheet = document.createElement('style'),  
  $rangeInput = $('.range input'),
  prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);

var getTrackStyle = function (el) {  
  $('.range-labels li').removeClass('active selected');
  var curLabel = $('.range-labels').find('li:nth-child(' + el.value + ')');
  curLabel.addClass('active selected');
  curLabel.prevAll().addClass('selected');
  return style;
}

$rangeInput.on('input', function () {
  sheet.textContent = getTrackStyle(this);
});

// Change input value on label click
$('.range-labels li').on('click', function () {
  var index = $(this).index();
  $rangeInput.val(index + 1).trigger('input');

  
  var element = document.getElementById("chart");
   element.parentNode.removeChild(element);

  /*Way two*/
  let data  = [
    {name:"House1",y:200},
    {name:"House2",y:150},
    {name:"House3",y:300},
    {name:"House4",y:900},
    {name:"House5",y:1000},
    {name:"House6",y:900},
    {name:"House7",y:700},
    {name:"House8",y:900},
    {name:"House9",y:800},
    {name:"House10",y:1000},
    {name:"House11",y:700},
    {name:"House12",y:600},
    {name:"House1",y:600},
  ]

  let bh = new Radial(data)
  let myHouse = 10
  bh.plot("chart", myHouse, false);

});