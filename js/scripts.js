var ruby = 0;
var php = 0;
var css = 0;

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

    var side = $("#devSide").val();
    var one = $("input:radio[name=optradio1]:checked").val();
    var two = $("input:radio[name=optradio2]:checked").val();
    var three = $("input:radio[name=optradio3]:checked").val();
    var four = $("input:radio[name=optradio4]:checked").val();
    var five = $("input:radio[name=optradio5]:checked").val();
    var six = $("input:radio[name=optradio6]:checked").val();


    if (one==undefined || two==undefined || three==undefined) {
      alert("Please select a response for each question");
    } if (side == 'rb') {
      ruby += 1;
    } else if (side == 'ph') {
      php += 1;
    } else if (side == 'cs') {
      css += 1;
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

    $('#result').text('You scored ' + ruby + ' for ruby and ' + php + ' for php and ' + css + ' as css.');
    alert(ruby +''+ php +''+ css);

  });
});
