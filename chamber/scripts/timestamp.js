// ==========================
// RUN AFTER DOM IS LOADED
// ==========================
document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // 1. SET CURRENT TIMESTAMP
    // ==========================
    function setFormTimestamp() {
        const timestampField = document.getElementById("timestamp");
        if (timestampField) {
            const now = new Date();
            timestampField.value = now.toISOString(); // Standard ISO timestamp
        }
    }

    // ==========================
    // 2. MODAL OPEN / CLOSE HANDLERS
    // ==========================
    function initModals() {
        const modalLinks = document.querySelectorAll('.open-modal');
        const modalCloseButtons = document.querySelectorAll('.modal .close');

        // Open modal when a card link is clicked
        modalLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const card = this.closest('.card');
                if (card && card.dataset.modal) {
                    const modalId = card.dataset.modal;
                    const modal = document.getElementById(modalId);
                    if (modal) {
                        modal.style.display = 'flex';
                    }
                }
            });
        });

        // Close modal when close icon is clicked
        modalCloseButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                const modal = this.closest('.modal');
                if (modal) {
                    modal.style.display = 'none';
                }
            });
        });

        // Close modal when clicking outside modal content
        window.addEventListener('click', function (e) {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
            }
        });
    }

    // ==========================
    // 3. TOGGLE "MORE INFO" SECTIONS
    // ==========================
    function initMoreInfoToggles() {
        const buttons = document.querySelectorAll('.more-info-btn');

        buttons.forEach(button => {
            button.addEventListener('click', function () {
                const targetId = this.dataset.target;
                const content = document.getElementById(targetId);

                if (content) {
                    const isVisible = content.style.display === "block";
                    content.style.display = isVisible ? "none" : "block";
                    this.textContent = isVisible ? "More Info" : "Less Info";
                }
            });
        });
    }

    // ==========================
    // INITIALIZE FUNCTIONS
    // ==========================
    setFormTimestamp();
    initModals();
    initMoreInfoToggles();

});
