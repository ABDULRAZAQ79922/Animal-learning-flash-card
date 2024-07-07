const myFlashcard = document.getElementById('myFlashcard');
const myFront = document.getElementById('myFront');
const myBack = document.getElementById('myBack');
const myAnimalName = document.getElementById('myAnimalName');
const myAnimalImage = document.getElementById('myAnimalImage');
const myAnimalFact = document.getElementById('myAnimalFact');
const myNextButton = document.getElementById('myNextButton');

const myAnimals = [
    {
        name: 'Lion',
        image: 'lion.jpeg',
        fact: 'Lions are known as the kings of the jungle.'
    },
    {
        name: 'Elephant',
        image: 'elephant.jpeg',
        fact: 'Elephants are the largest land animals on Earth.'
    },
    {
        name: 'Penguin',
        image: 'penguins.jpeg',
        fact: 'Penguins are flightless birds that live in the Southern Hemisphere.'
    }
];

let myCurrentIndex = 0;

function myShowAnimal(index) {
    myAnimalName.textContent = myAnimals[index].name;
    myAnimalImage.src = myAnimals[index].image;
    myAnimalFact.textContent = myAnimals[index].fact;
}

myFlashcard.addEventListener('click', () => {
    myFlashcard.classList.toggle('flipped');
});

myNextButton.addEventListener('click', () => {
    myCurrentIndex = (myCurrentIndex + 1) % myAnimals.length;
    myShowAnimal(myCurrentIndex);
    myFlashcard.classList.remove('flipped');
});


myShowAnimal(myCurrentIndex);
