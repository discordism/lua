// Get audio, background, and video elements
const yesSound = document.getElementById("yesSound");
const noSound = document.getElementById("noSound");
const background = document.getElementById("background");
const video = document.getElementById("video");
const loveText = document.querySelector(".love-text");

// Yes Button Functionality
document.getElementById("yesBtn").addEventListener("click", function() {
    // Play the "Yes" sound
    yesSound.play();

    // Hide buttons and display animations
    document.querySelector(".center-container").style.display = "none";

    // Hide background image when "Yes" is clicked
    background.style.opacity = "0"; // Hide the background image

    const canvas = document.getElementById("loveCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hearts = [];
    const flowers = [];

    function createHeart(x, y) {
        hearts.push({ x, y, size: 20, opacity: 1 });
    }

    function createFlower(x, y) {
        flowers.push({ x, y, size: 30, opacity: 1 });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        hearts.forEach((heart, i) => {
            ctx.globalAlpha = heart.opacity;
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.moveTo(heart.x, heart.y);
            ctx.arc(heart.x - 10, heart.y, heart.size / 2, 0, Math.PI * 2);
            ctx.arc(heart.x + 10, heart.y, heart.size / 2, 0, Math.PI * 2);
            ctx.lineTo(heart.x, heart.y + heart.size);
            ctx.fill();
            heart.opacity -= 0.01;
            if (heart.opacity <= 0) hearts.splice(i, 1);
        });

        flowers.forEach((flower, i) => {
            ctx.globalAlpha = flower.opacity;
            ctx.fillStyle = "pink";
            ctx.beginPath();
            ctx.arc(flower.x, flower.y, flower.size, 0, Math.PI * 2);
            ctx.fill();
            flower.opacity -= 0.01;
            if (flower.opacity <= 0) flowers.splice(i, 1);
        });

        ctx.globalAlpha = 1;
        ctx.font = `clamp(20px, 5vw, 50px) Arial`;
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText("I love you, Emma", canvas.width / 2, canvas.height / 2);

        requestAnimationFrame(draw);
    }

    draw();

    setInterval(() => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        createHeart(x, y);
        createFlower(x, y);
    }, 200);
});

// No Button Functionality
document.getElementById("noBtn").addEventListener("click", function() {
    // Play the "No" sound
    noSound.play();

    // Display the background image with 60% opacity
    background.style.backgroundImage = "url('background.jpg')"; // Replace with your image file
    background.style.opacity = "0.6"; // Make background visible with 60% opacity

    // Move the "No" button
    let noBtn = document.getElementById("noBtn");
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * (window.innerHeight - noBtn.offsetHeight) + "px";
    noBtn.style.left = Math.random() * (window.innerWidth - noBtn.offsetWidth) + "px";
});
