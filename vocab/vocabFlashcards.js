let currentIndex = 0;
let flashcardType = 'frontback';
const flashcard = document.getElementById('flashcard');

function showFlashcard() {
    flashcard.style.opacity = 0;
    flashcard.style.transform = 'translateY(20px)';
    flashcard.style.boxShadow = '0 0 5px #000';

    setTimeout(() => {
        flashcard.innerHTML = '';
        flashcard.textContent = flashcardsFrontBack[currentIndex];
        flashcard.style.transition = 'opacity 0.4s ease, transform 0.4s ease, box-shadow 0.3s';
        flashcard.style.opacity = 1;
        flashcard.style.transform = 'translateY(0)';
    }, 200);
}

function nextFlashcard() {
    const arr = flashcardType === 'frontback' ? flashcardsFrontBack : flashcardsQA;
    currentIndex = (currentIndex + 1) % arr.length;
    showFlashcard();
}

function previousFlashcard() {
    const arr = flashcardType === 'frontback' ? flashcardsFrontBack : flashcardsQA;
    currentIndex = (currentIndex - 1 + arr.length) % arr.length;
    showFlashcard();
}

function goHome() {
    document.body.style.transform = 'translateX(100vw)';
    setTimeout(() => {
        window.location.href = '../';
    }, 500);
}

window.addEventListener('DOMContentLoaded', () => {
    showFlashcard();
    requestAnimationFrame(() => {
        document.body.style.transform = 'translateX(0)';
    });
});

