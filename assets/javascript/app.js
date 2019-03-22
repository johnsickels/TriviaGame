// Psuedocode here ~
$(document).ready(function () {

    var timeLeft = 120;
    var correct = "";
    var incorrect = "";
    var unanswered = "";
    var intervalId;

    $(".questions").hide();
    
    $("#start").on("click", run);
    $("#submit").on("click", stop);

    function run() {
        $(".questions").show();
        $("#content").html("<h2>Time Remaining: " + timeLeft + " Seconds</h2>");
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        timeLeft--;
        $("#content").html("<h2>Time Remaining: " + timeLeft + " Seconds</h2>");
        if (timeLeft === 0) {
            stop();
            alert("Time Up!");
        }
    }

    function stop() {
        clearInterval(intervalId);
        $(".questions").hide();
        $("#content").html("<h2>All done</h2><h3>Correct: " + correct + "</h3><h3>Inccorect: " + incorrect + "</h3><h3>Unanswered: " + unanswered)
    };


});