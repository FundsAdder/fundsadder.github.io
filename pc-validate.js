$(document).ready(function() {
      $("#pic").on('blur', function() {
        var password = $("#pic").val();
        var confirmPassword = $("#tyt").val();
        if (password != confirmPassword) {
          $(".info").html("wrong passcode or invalid passcode. please enter a correct passcode or buy a passcode to continue.").css("color", "red");
        } else if ($("#pic").val().length < 1) {
          $(".info").html("please enter a passcode");
        } else {
          $("a.home").attr("disabled", "false");
        }
      });
      $("input").on('focus', function() {
        $(".info").html("please fill the form with the appropriate information").css("color", "green");
      });
    });