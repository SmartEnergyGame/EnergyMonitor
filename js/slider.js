'use strict'


let allData = []
for (let i = 1; i <= 11; i++) {
  let data2 = []
  /*Way two*/
  for (let i = 1; i <= 10; i++) {
    let rnum = parseInt(Math.floor(Math.random() * 1400) + 100)
    data2.push({
      name: "House" + i,
      y: rnum
    })
  }
  allData.push(data2)
}
allData.push(data)


var sheet = document.createElement('style'),
  $rangeInput = $('.range input'),
  prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);

var getTrackStyle = function(el) {
  $('.range-labels li').removeClass('active selected');
  var curLabel = $('.range-labels').find('li:nth-child(' + el.value + ')');
  curLabel.addClass('active selected');
  curLabel.prevAll().addClass('selected');
}

$rangeInput.on('input', function() {
  getTrackStyle(this);
});



// Change input value on label click
$('.range-labels li').on('click', function() {
  var index = $(this).index();
  $rangeInput.val(index + 1).trigger('input');

  //alert(index)
  elements = []
  let bh = new Radial(allData[index])
  if (index == 11) {
    animate = true
  } else {
    animate = false
  }
  let myHouse = 10
  bh.plot("chart", myHouse, false);

});