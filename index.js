let fileNames = [];

for (let i = 1; i <= 604; i++) {
    fileNames.push(`./quran-images/${i}.png`);
  
}



function getpage(){

 let a=document.getElementById('page').value;
 document.querySelector('p').innerHTML=`${a}`;
 document.getElementById('image').src = fileNames[a];

let currentIndex = a;

function displayNextImage() {
    if (currentIndex < fileNames.length - 1 ) {
        currentIndex++;
        document.getElementById('image').src = fileNames[currentIndex];
        document.querySelector('p').innerHTML=`${currentIndex}`;
    }
}


function displayPreviousImage() {
    if (currentIndex > 0) {
        currentIndex--;
        document.getElementById('image').src = fileNames[currentIndex];
        document.querySelector('p').innerHTML=`${currentIndex}`;
    }
}
document.getElementById('next').onclick=displayNextImage;
document.getElementById('previous').onclick=displayPreviousImage;

}


document.getElementById('getpage').onclick=getpage;

