
const modal = document.getElementById('alertModal');
const modalMessage = document.getElementById('modalMessage');
const closeModal = document.getElementById('closeModal');
const modalContent = document.getElementById('modalContent');

let isModalOpen = false;

function showModal() {
    if (!isModalOpen) {
        modal.style.display = 'block';
        requestAnimationFrame(() => {
            modalContent.classList.add('show');
        });
        isModalOpen = true;
    }
}

closeModal.onclick = function () {
    if (isModalOpen) {
        modalContent.style.animation = 'slideOut 0.3s';
        modalContent.addEventListener('animationend', function () {
            modal.style.display = 'none';
            this.style.animation = '';
            this.classList.remove('show');
            isModalOpen = false;
        });
        modalContent.classList.remove('show');
    }
}

window.onclick = function (event) {
    if (event.target == modal && isModalOpen) {
        closeModal.click();
    }
}

document.getElementById('mentalHealthForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let score = 0;
    for (let i = 1; i <= 20; i++) {
        const answer = document.querySelector(`input[name="question${i}"]:checked`);
        if (answer) {
            score += parseInt(answer.value);
        }
    }

    modalMessage.innerText = `Thank you for sharing : ${score}`;
    if(score>=10){
        modalMessage.innerText += `\nYou are in GoodMood!`;
    }
    showModal();
    modal.style.display = 'block';
});
