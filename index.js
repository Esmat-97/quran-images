let fileNames = [];

for (let i = 1; i <= 604; i++) {
    fileNames.push(`./quran-images/${i}.png`);
}

document.getElementById('image').src = fileNames[0];



let currentIndex = 0;

function displayNextImage() {
    if (currentIndex < fileNames.length - 1 ) {
        document.getElementById('image').src = fileNames[currentIndex];
 
        currentIndex++;
    }
}


function displayPreviousImage() {
    if (currentIndex > 0) {
        document.getElementById('image').src = fileNames[currentIndex];
        currentIndex--;
    }
}

document.getElementById('next').onclick=displayNextImage;
document.getElementById('previous').onclick=displayPreviousImage;