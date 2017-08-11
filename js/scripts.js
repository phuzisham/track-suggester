var ruby = 0;
var php = 0;
var css = 0;

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    // vars used for all values
    var side = $("#devSide").val();
    var one = $("input:radio[name=optradio1]:checked").val();
    var two = $("input:radio[name=optradio2]:checked").val();
    var three = $("input:radio[name=optradio3]:checked").val();
    var four = $("input:radio[name=optradio4]:checked").val();
    var five = $("input:radio[name=optradio5]:checked").val();
    var six = $("input:radio[name=optradio6]:checked").val();
    // if statements to asign value to track
    if (one==undefined || two==undefined || three==undefined) {
      alert("Please select a response for each question");
      return;
    } if (side == 'rb') {
      ruby += 2;
    } else if (side == 'ph') {
      php += 2;
    } else if (side == 'cs') {
      css += 2;
    } if (one == 'rb') {
      ruby += 1;
    } else if (one == 'ph') {
      php += 1;
    } else if (one == 'cs') {
      css += 1;
    } if (two == 'rb') {
      ruby += 1;
    } else if (two == 'ph') {
      php += 1;
    } else if (two == 'cs') {
      css += 1;
    } if (three == 'rb') {
      ruby += 1;
    } else if (three == 'ph') {
      php += 1;
    } else if (three == 'cs') {
      css += 1;
    } if (four == 'rb') {
      ruby += 1;
    } else if (four == 'ph') {
      php += 1;
    } else if (four == 'cs') {
      css += 1;
    } if (five == 'rb') {
      ruby += 1;
    } else if (five == 'ph') {
      php += 1;
    } else if (five == 'cs') {
      css += 1;
    } if (six == 'rb') {
      ruby += 1;
    } else if (six == 'ph') {
      php += 1;
    } else if (six == 'cs') {
      css += 1;
    }
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
