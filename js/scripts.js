var ruby = 0;
var php = 0;
var css = 0;

function assignVal(question, num) {
  if (question == 'rb') {
    ruby += num;
  } else if (question == 'ph') {
    php += num;
  } else if (question == 'cs') {
    css += num;
  }
}

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

    var side = $("#devSide").val();
    var radioQ = ['optradio1', 'optradio2', 'optradio3', 'optradio4', 'optradio5', 'optradio6'];

    assignVal(side, 2);
    radioQ.forEach(function(radio) {
      var userInput= $("input:radio[name=" + radio + "]:checked").val();
      if (userInput==undefined) {
        alert("Please select a response for each question");
        return;
      }  assignVal(userInput, 1);
    });

    // if statements to show track with highest score
    if (ruby > php && ruby > css) {
      $('#survey').fadeOut(600);
      $('#ruby').slideToggle();
    } else if (php > ruby && php > css) {
      $('#survey').fadeOut(600);
      $('#php').slideToggle();
    } else if (css > php && css > ruby) {
      $('#survey').fadeOut(600);
      $('#css').slideToggle();
    }
    // if statements in case of tie
    if (ruby == php && css < ruby) {
      alert('Your scores were equal in Ruby and PHP. Please try again.');
    } else if (ruby == css && php < ruby) {
      alert('Your scores were equal in Ruby and CSS. Please try again.');
    } else if (php == css && ruby < php) {
      alert('Your scores were equal in PHP and CSS. Please try again.');
    }
  }); //.submit form

  $('#tryAgainRuby').click(function(event) {
    event.preventDefault();
    $('#ruby').slideToggle();
    $('#survey').slideToggle();
    ruby = 0;
    php = 0;
    css = 0;
  });

  $('#tryAgainPHP').click(function(event) {
    event.preventDefault();
    $('#php').slideToggle();
    $('#survey').slideToggle();
    ruby = 0;
    php = 0;
    css = 0;
  });

  $('#tryAgainCSS').click(function(event) {
    event.preventDefault();
    $('#css').slideToggle();
    $('#survey').slideToggle();
    ruby = 0;
    php = 0;
    css = 0;
  });
}); // document.ready
