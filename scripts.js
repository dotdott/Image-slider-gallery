const mainImage = document.querySelector('#main-image');
const subImage = document.querySelectorAll('.sub-images img');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

let i = 0;
const images = [];

// Image list
images[0] = './images/img1.jpg';
images[1] = './images/img2.jpg';
images[2] = './images/img3.jpg';
images[3] = './images/img4.jpg';

// Change Image
function changeImg(){
    mainImage.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    setTimeout(changeImg, 3000)
    checkSubImages();
}
window.onload = changeImg();

// Change main display image
function changeMainImg(){
    subImage.forEach(img => img.addEventListener('click', () => {
        i = Number(img.alt);
        mainImage.src = img.src;

        checkSubImages();
    })
)};
changeMainImg();

// function to check if the sub-images matchs the mainImage;
// so we can give it a gray background styling;
function checkSubImages(){
    subImage.forEach(img => {
        if(img.src == mainImage.src){
            img.style.filter = 'grayscale(0)';
        } else {
            img.style.filter = 'grayscale(100%)';
        }
    })
}
checkSubImages();