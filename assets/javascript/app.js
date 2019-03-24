// Psuedocode here ~
$(document).ready(function () {

    var timeLeft = 32;
    var correct = "";
    var incorrect = "";
    var unanswered = "";
    var intervalId;

    $("#questions").hide();

    $("#start").on("click", run);
    $("#submit").on("click", stop);

    function run() {
        $("#questions").show();
        $("#content").html("<h2>Time Remaining: " + timeLeft + " Seconds</h2>");
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        play ();
    }

    function decrement() {
        timeLeft--;
        $("#content").html("<h2>Time Remaining: " + timeLeft + " Seconds</h2>");
        if (timeLeft === 0) {
            stop();
            alert("Time Up!");
        }
    }
    function play(){
        var audio = document.getElementById("audio");
        audio.play();
                  }

    function stop() {
        clearInterval(intervalId);
        $("#questions").hide();
        if ($('input[name="inlineRadioOptions"]:checked').val() === "y") {
            correct++;
        } else if ($('input[name="inlineRadioOptions"]:checked').val() === "n") {
            incorrect++;
        } else {
            unanswered++;
        };
        if ($('input[name="inlineRadioOptions2"]:checked').val() === "y") {
            correct++;
        } else if ($('input[name="inlineRadioOptions2"]:checked').val() === "n") {
            incorrect++;
        } else {
            unanswered++;
        };
        if ($('input[name="inlineRadioOptions3"]:checked').val() === "y") {
            correct++;
        } else if ($('input[name="inlineRadioOptions3"]:checked').val() === "n") {
            incorrect++;
        } else {
            unanswered++;
        };
        if ($('input[name="inlineRadioOptions4"]:checked').val() === "y") {
            correct++;
        } else if ($('input[name="inlineRadioOptions4"]:checked').val() === "n") {
            incorrect++;
        } else {
            unanswered++;
        };
        if ($('input[name="inlineRadioOptions5"]:checked').val() === "y") {
            correct++;
        } else if ($('input[name="inlineRadioOptions5"]:checked').val() === "n") {
            incorrect++;
        } else {
            unanswered++;
        };
        if ($('input[name="inlineRadioOptions6"]:checked').val() === "y") {
            correct++;
        } else if ($('input[name="inlineRadioOptions6"]:checked').val() === "n") {
            incorrect++;
        } else {
            unanswered++;
        };
        if ($('input[name="inlineRadioOptions7"]:checked').val() === "y") {
            correct++;
        } else if ($('input[name="inlineRadioOptions7"]:checked').val() === "n") {
            incorrect++;
        } else {
            unanswered++;
        };
        if ($('input[name="inlineRadioOptions8"]:checked').val() === "y") {
            correct++;
        } else if ($('input[name="inlineRadioOptions8"]:checked').val() === "n") {
            incorrect++;
        } else {
            unanswered++;
        };
        if ($('input[name="inlineRadioOptions9"]:checked').val() === "y") {
            correct++;
        } else if ($('input[name="inlineRadioOptions9"]:checked').val() === "n") {
            incorrect++;
        } else {
            unanswered++;
        };
        if ($('input[name="inlineRadioOptions10"]:checked').val() === "y") {
            correct++;
        } else if ($('input[name="inlineRadioOptions10"]:checked').val() === "n") {
            incorrect++;
        } else {
            unanswered++;
        };
        if ($('input[name="inlineRadioOptions11"]:checked').val() === "y") {
            correct++;
        } else if ($('input[name="inlineRadioOptions11"]:checked').val() === "n") {
            incorrect++;
        } else {
            unanswered++;
        };
        if ($('input[name="inlineRadioOptions12"]:checked').val() === "y") {
            correct++;
        } else if ($('input[name="inlineRadioOptions12"]:checked').val() === "n") {
            incorrect++;
        } else {
            unanswered++;
        };
        
        $("#content").html("<h2>All done</h2><h3>Correct: " + correct + "</h3><h3>Incorrect: " + incorrect + "</h3><h3>Unanswered: " + unanswered);

    };

});