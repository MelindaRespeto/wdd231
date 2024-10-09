// Set current time 
document.getElementById("id_time").value = new Date().toISOString();


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
    const modals = ['modal1', 'modal2', 'modal3', 'modal4'];
    if (event.key === "Escape") {
        modals.forEach(modalId => closeModal(modalId));
    }
}
window.onload = function() {
    const levels = document.querySelectorAll('.membership_box'); // Select all membership boxes
    levels.forEach((level, index) => {
        setTimeout(() => {
            level.classList.add('show'); // Add 'show' class to trigger animation
        }, index * 300); // Stagger the animations
    });
};

// animation

