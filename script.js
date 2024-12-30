
const header = document.getElementById("header");
const learnMorePage = document.getElementById("learnMorePage");
const learnMoreBtn = document.querySelector(".learn-more-btn"); 

learnMoreBtn.addEventListener("click", (event) => {
    event.preventDefault();
    

    header.style.animation = "fadeOut 1s ease forwards"; 
    setTimeout(() => {
        header.style.display = "none"; 
        learnMorePage.style.display = "flex"; 
        learnMorePage.style.animation = "fadeInNewPage 1s ease forwards"; 
    }, 1000); 
});


const images = document.querySelectorAll('.learn-more-page img');


images.forEach(image => {
    image.addEventListener('click', () => {
       
        image.classList.toggle('clicked');
    });
});


const animationText = document.querySelector(".learn-more-page p"); 

const rabbitImage = document.getElementById("rabbitImage");


animationText.addEventListener('click', () => {
    
    rabbitImage.classList.toggle('clicked');
});
