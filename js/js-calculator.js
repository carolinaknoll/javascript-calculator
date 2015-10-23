/*global $, jQuery, alert*/
/*global alert: false, console: false */

function Check() {
 'use strict';
  var i = 0;
  var lastChar = $('.screen').text().slice(-1);
  for (var i = 0; i < operands.length; i++) {
    if (operands[i] == lastChar) {
      $('.screen').text('Error');
    }
  }
} 

var operands = ['+', '-', '*', '/', '.'];
var keys = document.querySelectorAll('.calculator button');
var decimalAdded = false;
var i = 0;

$('.clear').click(function() {
  $('.screen').text('');
});

$('.plus').click(function() {
  Check();
  $('.screen').text($('.screen').text() + '+');
});

$('.minus').click(function() {
  Check();
  $('.screen').text($('.screen').text() + '-');
});

$('.mult').click(function() {
  Check();
  $('.screen').text($('.screen').text() + '*');
});

$('.div').click(function() {
  Check();
  $('.screen').text($('.screen').text() + '/');
});

$('.dot').click(function() {
  Check();
  $('.screen').text($('.screen').text() + '.');
});

$('.equal').click(function() {
  $('.screen').text(eval($('.screen').text()));
});

$('.nine').click(function() {
  $('.screen').text($('.screen').text() + 9);
});

$('.eight').click(function() {
  $('.screen').text($('.screen').text() + 8);
});

$('.seven').click(function() {
  $('.screen').text($('.screen').text() + 7);
});

$('.six').click(function() {
  $('.screen').text($('.screen').text() + 6);
});

$('.five').click(function() {
  $('.screen').text($('.screen').text() + 5);
});

$('.four').click(function() {
  $('.screen').text($('.screen').text() + 4);
});

$('.three').click(function() {
  $('.screen').text($('.screen').text() + 3);
});

$('.two').click(function() {
  $('.screen').text($('.screen').text() + 2);
});

$('.one').click(function() {
  $('.screen').text($('.screen').text() + 1);
});

$('.zero').click(function() {
  $('.screen').text($('.screen').text() + 0);
});