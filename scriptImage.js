
const moodImages = document.querySelectorAll('.emotion-image');
const chatBox = document.getElementById('chatBox');
const modal = document.getElementById('alertModal');
const modalMessage = document.getElementById('modalMessage');
const closeModal = document.getElementById('closeModal');
const modalContent = document.getElementById('modalContent');

let isModalOpen = false;


moodImages.forEach(image => {
    image.addEventListener('click', function () {
        const selectedMood = this.alt;
        modalMessage.innerText = `You selected: ${selectedMood} mood.`;
        showModal();
        chatBox.style.display = 'block';
    });
});

document.getElementById('chatBtn').addEventListener('click', function () {
    const chatMessage = document.getElementById('chatInput').value;

    
    if (chatMessage.trim() !== "") {
        modalMessage.innerText = `Thank you for sharing: ${chatMessage}`;

    } else {
        modalMessage.innerText = "Please type something before sending.";
    }
    
    
    showModal();
});

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
