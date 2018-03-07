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
});