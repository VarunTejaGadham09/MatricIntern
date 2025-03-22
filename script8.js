const images = document.querySelectorAll('.slider img'); 
let intervalId; // Variable to hold the interval ID

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

function startImageRotation() {
    intervalId = setInterval(nextImage, 3000); // Change image every 3 seconds
}

function stopImageRotation() {
    clearInterval(intervalId); // Stop the rotation
}

nextButton.addEventListener('click', () => {
    stopImageRotation(); // Stop rotation on manual navigation
    nextImage();
    startImageRotation(); // Restart rotation
});
prevButton.addEventListener('click', () => {
    stopImageRotation(); // Stop rotation on manual navigation
    prevImage();
    startImageRotation(); // Restart rotation
});

startImageRotation(); // Start the image rotation initially
