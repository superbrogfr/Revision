let currentIndex = 0;
let flashcardType = 'frontback';
let answered = false;
const flashcard = document.getElementById('flashcard');

function showFlashcard() {
    flashcard.style.opacity = 0;
    flashcard.style.transform = 'translateY(20px)';
    flashcard.style.boxShadow = '0 0 5px #000';
    answered = false;

    setTimeout(() => {
        flashcard.innerHTML = '';

        if (flashcardType === 'frontback') {
            flashcard.textContent = flashcardsFrontBack[currentIndex];
        } else {
            const qa = flashcardsQA[currentIndex];
            flashcard.innerHTML = `<strong>${qa.question}</strong>`;
            const mcqContainer = document.createElement('div');
            mcqContainer.className = 'mcq-container';

            qa.choices.forEach(choice => {
                const btn = document.createElement('button');
                btn.textContent = choice;
                btn.onclick = () => {
                    if (answered) return;
                    answered = true;

                    if (choice === qa.answer) {
                        flashcard.style.boxShadow = '0 0 20px #16a34a';
                    } else {
                        flashcard.style.boxShadow = '0 0 20px #dc2626';
                    }

                    setTimeout(nextFlashcard, 1000);
                };
                mcqContainer.appendChild(btn);
            });

            flashcard.appendChild(mcqContainer);
        }

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

function setFlashcardType(type) {
    flashcardType = type;
    currentIndex = 0;
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

