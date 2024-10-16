// Set current time 
window.onload = function() {
    // Set the current time in the hidden input
    const timeInput = document.getElementById("id_time");
    if (timeInput) {
        timeInput.value = new Date().toISOString();
    }

    // Select all membership boxes for animation
    const levels = document.querySelectorAll('.membership_box');
    levels.forEach((level, index) => {
        setTimeout(() => {
            level.classList.add('show'); // Add 'show' class to trigger animation
        }, index * 300); // Stagger the animations
    });
};

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    const modals = ['modal1', 'modal2', 'modal3', 'modal4'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target === modal) {
            closeModal(modalId);
        }
    });
}

window.onkeydown = function(event) {
    if (event.key === "Escape") {
        const modals = ['modal1', 'modal2', 'modal3', 'modal4'];
        modals.forEach(modalId => closeModal(modalId));
    }
}
