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
            question: "You awaken to find yourself lying on the damp forest floor, the sound of rustling leaves and chirping birds filling your ears. Confusion clouds your mind as you try to recall how you ended up here. As you stand up, you notice a river to your left and a clearing in the forest to your right. Do you 1) Follow the river or 2) Head towards the clearing ?",
            answers: {
                "1": 1,
                "2": 6,
            },
        },
        {
            question: "You decide to follow the river, hoping it might lead you to civilization or at least provide some answers. After a while of walking along the riverbank, you come across a rickety old bridge spanning the water. It looks unstable, but it's your only option if you want to continue following the river. Do you 1) Search for another way across or 2) Cross the bridge ?",
            answers: {
                "1": 3,
                "2": 2,
            },
        },
        {
            question: "Cautiously, you step onto the old bridge, its wooden planks creaking beneath your weight. With each step, you feel the bridge sway, but you press on, determined to find out where this river leads. Suddenly, halfway across, you hear a loud snap, and before you can react, the bridge collapses, sending you plummeting into the icy waters below. You struggle to stay afloat, but the current is too strong, pulling you under. As you desperately gasp for air, darkness envelops you. You have met a watery demise.",
            answers: {},
        },
        {
            question: "After walking for tireless hours along the river exhaustion sets in, you stop from a break along the rivers bank. Do you 1) Attempt to light a fire or 2) Take a sip from the river to quench your thirst ?",
            answers: {
                "1": 4,
                "2": 5,
            },
        },
        {
            question: "You fumble around gathering nearby wood and forming a pile, in your busy state you fail to notice the large animal sneaking up on you, it lunges, taking you down. You meet a toothy demise.",
            answers: {},
        },
        {
            question: "You bend over to take a sip of water from the nearby river, as you scoop a handful of water to your mouth a large crocodile rockets from the river grabbing you and dragging you in, you meet a toothy demise.",
            answers: {},
        },
        {
            question: "Opting for the clearing, you push your way through the dense foliage, the sunlight filtering through the trees above. As you emerge into the clearing, you spot an ancient-looking stone altar at its center, adorned with strange symbols and carvings. At the base of the altar, you notice a small, ornate key lying on the ground. Do you 1) Investigate the altar or 2) Take the key and continue exploring the clearing ?",
            answers: {
                "1": 7,
                "2": 9,
            },
        },
        {
            question: "Curiosity piqued, you approach the stone altar, running your fingers over its weathered surface. Suddenly, the ground beneath you begins to tremble, and with a deafening rumble, the altar splits apart, revealing a hidden staircase leading underground. Do you 1) Descend into the darkness or 2) Take the key, retreat and search for another path ?",
            answers: {
                "1": 8,
                "2": 9,
            },
        },
        {
            question: "With a deep breath, you descend into the darkness, the cold air sending shivers down your spine. As you navigate the winding passages, you come across a series of traps and obstacles, each more treacherous than the last. Despite your best efforts, you trigger a pressure plate, setting off a cascade of falling rocks that block your path. With no way out, you're trapped beneath the earth, you meet a trapped demise.",
            answers: {},
        },
        {
            question: "You decide to take the key and continue exploring the clearing. As you wander deeper into the foliage you realize the alter was just trick as the true treasure reveals itself, you stumble upon a hidden alcove concealed by a thick iron gate. Inside you find a large ornate looking chest, with a large key hole in the center. Do you 1) Put the key in and twist the lock open or 2) Search the rest of the room ?",
            answers: {
                "1": 9,
                "2": 11,
            },
        },
        {
            question: "As you step up to put the key inside the keyhole, a distinct click triggers, a pressure pad under your foot has given way and before you can react, large spikes drop from the ceiling. You meet a spikey demise.",
            answers: {},
        },
        {
            question: "Checking the room you notice a small pressure pad Infront of the chest. Taking your time to avoid it, you insert the key into the keyhole unlocking the chest! Congratulations you have found the hidden treasure! But more importantly, you invested this much time in something that took me 30 mins, imagine would I could do if you hired me full time ;)",
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