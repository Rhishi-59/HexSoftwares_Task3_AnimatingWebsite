const header = document.getElementById("header");
const learnMorePage = document.getElementById("learnMorePage");

document.getElementById("learnMoreButton").addEventListener("click", (event) => {
    event.preventDefault();
    header.style.display = "none";
    learnMorePage.style.display = "flex";
});

// header.addEventListener("click", ()=>{
//     header.style.background=linearGradient(red , blue);
// })

// Select all images in the "learn-more-page"
const images = document.querySelectorAll('.learn-more-page img');

// Add click event listener to each image
images.forEach(image => {
    image.addEventListener('click', () => {
        // Toggle the 'clicked' class on the image
        image.classList.toggle('clicked');
    });
});
