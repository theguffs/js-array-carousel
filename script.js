// Array di URL delle immagini
let imageArray = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

// Seleziona il contenitore delle immagini

let imagecontainer = document.getElementById('image-container');

//Usa un ciclo for per iterare sull'array e creare img

for (let i = 0; i < imageArray.length; i++) {
    const img = document.createElement('img');
    img.src = imageArray[i];
    img.alt = 'Img' + (i + 1);
    imagecontainer.append(img);
}