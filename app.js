document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('showing');
            } else {
                entry.target.classList.remove('showing');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    const questions = [
        {
            question: "You wake up in a forest. Do you go left or right?",
            answers: {
                left: 1,
                right: 2,
            },
        },
        {
            question: "You encounter a river. Do you swim or build a raft?",
            answers: {
                swim: 3,
                build: 4,
            },
        },
        {
            question: "You find a cave. Do you enter or keep walking?",
            answers: {
                enter: 4,
                walk: 5,
            },
        },
        {
            question: "You reach a village. Do you ask for help or explore?",
            answers: {
                ask: 5,
                explore: 6,
            },
        },
        {
            question: "You find a treasure chest. Do you open it or leave it?",
            answers: {
                open: 6,
                leave: 7,
            },
        },
        {
            question: "You are crowned the hero of the village. The end.",
            answers: {},
        },
        {
            question: "You wander endlessly and find nothing. The end.",
            answers: {},
        },
    ];

    const questionElement = document.getElementById("question");
    const inputElement = document.getElementById("input");
    const buttonElement = document.getElementById("button");
    const replayButton = document.getElementById("replay-button");
    let currentQuestion = 0;

    function startGame() {
        currentQuestion = 0;
        buttonElement.textContent = "Next";
        replayButton.classList.add("hidden");
        buttonElement.classList.remove("hidden");
        inputElement.classList.remove("hidden");
        showQuestion();
    }

    function showQuestion() {
        questionElement.textContent = questions[currentQuestion].question;
        inputElement.value = "";
    }

    function handleAnswer() {
        const answer = inputElement.value.toLowerCase();
        const nextQuestionIndex = questions[currentQuestion].answers[answer];
        if (nextQuestionIndex !== undefined) {
            currentQuestion = nextQuestionIndex;
            showQuestion();
        } else {
            questionElement.textContent = "Invalid answer. Please try again.";
        }
        if (questions[currentQuestion].answers === undefined || Object.keys(questions[currentQuestion].answers).length === 0) {
            inputElement.classList.add("hidden");
            buttonElement.classList.add("hidden");
            replayButton.classList.remove("hidden");
        }
    }

    buttonElement.addEventListener("click", handleAnswer);
    inputElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            handleAnswer();
        }
    });
    replayButton.addEventListener("click", startGame);

    startGame();
});
