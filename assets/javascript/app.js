$(document).ready(function () {
    var timeLeft = 35;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var intervalId;
    var questions = [{
        question: '“The Office” is mainly set at what company?',
        answers: ["Mitch and Murray", "Dunder Mifflin", "The Parks Department"],
        correctAnswer: "Dunder Mifflin",
    }, {
        question: 'Which character does NOT appear in the very first episode of “The Office”?',
        answers: ["Kevin Malone", "Andy Bernard", "Jan Levinson-Gould"],
        correctAnswer: "Andy Bernard",
    }, {
        question: 'What does Jim famously do to Dwight’s stapler?',
        answers: ["Glue googly eyes on it", "Melt it in the microwave", "Put it in jello"],
        correctAnswer: "Put it in jello",
    }, {
        question: 'What is the name of Michael Scott’s screenplay?',
        answers: ["Threat Level: Midnight", "What's Updog", "Scott's Tots"],
        correctAnswer: "Threat Level: Midnight",
    }, {
        question: 'Jim famously says it was “not a bad day” after what happens?',
        answers: ["Pam falls asleep on him", "He first pranks Michael", "He starts at Stamford"],
        correctAnswer: "Pam falls asleep on him",
    }, {
        question: 'Which of these items is NOT inside Pam’s teapot gift from her Secret Santa?',
        answers: ["Cassette tape", "Hot sauce", "Watercolors"],
        correctAnswer: "Watercolors",
    }, {
        question: 'During the only Christmas party Dwight got to plan, which character passes out?',
        answers: ["Angela Kinsey", "Dwight Schrute", "Darryl Philbin"],
        correctAnswer: "Darryl Philbin",
    }, {
        question: 'What does Michael Scott say right before running over Meredith?',
        answers: ["I feel very blessed", "I just like driving", "I love everyone"],
        correctAnswer: "I feel very blessed",
    }, {
        question: 'Which of these three characters did NOT dress up as a cat for Halloween?',
        answers: ["Creed Bratton", "Andy Bernard", "Pam Beesly"],
        correctAnswer: "Creed Bratton",
    }, {
        question: 'Who operates the camera during “The Office” lip dub music video?',
        answers: ["Toby Flenderson", "Gabe Lewis", "Holly Flax"],
        correctAnswer: "Toby Flenderson",
    }, {
        question: 'Which of these is NOT an ingredient mentioned in Kevin’s famous chili?',
        answers: ["Ancho chiles", "Onion", "Smoked beef"],
        correctAnswer: "Smoked beef",
    }, {
        question: 'Where do Jim and Pam share their very first kiss?',
        answers: ["Booze cruise", "The warehouse", "Chain restaurant"],
        correctAnswer: "Chain restaurant",
    },
    ]
    $("#submit").hide();
    $("#start").on("click", run);
    $("#submit").on("click", stop);
    function run() {
        for (i = 0; i < questions.length; i++) {
            $("#questions").append('<h3>' + questions[i].question + '</h3><div class="form-check form-check-inline"><label class="form-check-label" for="inlineRadio1' + [i] + '"><input class="form-check-input" type="radio" name="inlineRadioOptions' + [i] + '" id="inlineRadio1' + [i] + '">' + questions[i].answers[0] + '</label></div><div class="form-check form-check-inline"><label class="form-check-label" for="inlineRadio2' + [i] + '"><input class="form-check-input" type="radio" name="inlineRadioOptions' + [i] + '" id="inlineRadio2' + [i] + '">' + questions[i].answers[1] + '</label></div><div class="form-check form-check-inline"><label class="form-check-label" for="inlineRadio3' + [i] + '"><input class="form-check-input" type="radio" name="inlineRadioOptions' + [i] + '" id="inlineRadio3' + [i] + '">' + questions[i].answers[2] + '</label></div>');
        }

        $("#content").html("<h2>Time Remaining: " + timeLeft + " Seconds</h2>");
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        play();
        $("#submit").show();
    }
    function decrement() {
        timeLeft--;
        $("#content").html("<h2>Time Remaining: " + timeLeft + " Seconds</h2>");
        if (timeLeft === 0) {
            stop();
            alert("Time Up!");
        }
    }
    function play() {
        var audio = document.getElementById("audio");
        audio.play();
    };
    function stop() {
        clearInterval(intervalId);
        $("#questions").hide();
        $("#submit").hide();

        for (i = 0; i < questions.length; i++) {
            if ($("input[name='inlineRadioOptions" + i + "']:checked").parent().text() === questions[i].correctAnswer) {
                correct++;
            } else if ($("input[name='inlineRadioOptions" + i + "']:checked").parent().text().length === 0) {
                unanswered++;
            } else {
                incorrect++;
            };
        };
        $("#content").html("<h2>All done</h2><h3>Correct: " + correct + "</h3><h3>Incorrect: " + incorrect + "</h3><h3>Unanswered: " + unanswered);
    };
});