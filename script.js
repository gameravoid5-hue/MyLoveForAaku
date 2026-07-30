// Function to create floating heart balloons in the background
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 20 + 12) + 'px';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

let heartInterval = setInterval(createHeart, 300);

// Step 1: Play music automatically and show love letter when the first button is clicked
function openLoveLetter() {
    var music = document.getElementById("bg-music");
    music.play().catch(error => console.log("Audio play error:", error));

    document.getElementById("btn1").style.display = "none";
    document.getElementById("love-letter-section").style.display = "block";
}

// Step 2: Show photos and final text when the second button is clicked
function openImages() {
    document.getElementById("image-section").style.display = "block";
}

// Step 3: Show, pause background music, and play the video when the video button is clicked
function openVideo() {
    var videoSection = document.getElementById("video-section");
    videoSection.style.display = "block";
    
    var music = document.getElementById("bg-music");
    music.pause();

    var video = document.getElementById("love-video");
    video.play().catch(error => console.log("Video play error:", error));
}

// Triggered automatically when the video finishes playing
function showProposal() {
    document.getElementById("heart-btn-container").style.display = "block";
}

// Triggered when she clicks the pulsing heart button
function openProposalPage() {
    document.getElementById("video-section").style.display = "none";
    document.body.classList.add("romantic-bg");
    document.getElementById("proposal-section").style.display = "block";
}

// Function to create falling rose petals for engagement
function createRosePetal() {
    const petal = document.createElement('div');
    petal.classList.add('rose-petal');
    petal.innerHTML = '🌹';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (Math.random() * 3 + 2) + 's';
    petal.style.fontSize = (Math.random() * 15 + 18) + 'px';
    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 5000);
}

// Triggered when she clicks "YES!" -> Starts the 10-second countdown screen
function startCountdown() {
    // 1. Hide proposal section and clean background
    document.getElementById("proposal-section").style.display = "none";
    document.body.className = "";
    document.body.classList.add("engagement-active");

    // 2. Pause old music
    var oldMusic = document.getElementById("bg-music");
    oldMusic.pause();

    // 3. Show the countdown page with romantic quote
    document.getElementById("countdown-page").style.display = "flex";

    let timeLeft = 10;
    const countdownElement = document.getElementById("countdown-number");
    countdownElement.innerText = timeLeft;

    let timer = setInterval(function() {
        timeLeft--;
        countdownElement.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            // 4. After 10 seconds, start song, hide countdown, and show final celebration page with kiss & photos
            showCelebrationPage();
        }
    }, 1000);
}

// Triggered when the 10-second countdown hits zero
function showCelebrationPage() {
    clearInterval(heartInterval);
    var oldElements = document.querySelectorAll('.heart');
    oldElements.forEach(el => el.remove());

    document.getElementById("main-container").style.display = "none";
    document.getElementById("countdown-page").style.display = "none";

    var engageMusic = document.getElementById("engagement-music");
    engageMusic.play().catch(error => console.log("Engagement audio play error:", error));

    document.getElementById("celebration-page").style.display = "block";
    setInterval(createRosePetal, 200);
}