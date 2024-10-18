const monthYearElement = document.getElementById('monthYear');
const calendarGrid = document.getElementById('calendarGrid');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentDate = new Date();








function renderCalendar() {
    calendarGrid.innerHTML = ''; // Clear previous dates

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYearElement.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

    // Get the first day of the month and total days
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Add day labels
    const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayLabels.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = day;
        calendarGrid.appendChild(dayElement);
    });

    // Add empty cells for days before the first day
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'date'; // Keep the same class for styling
        calendarGrid.appendChild(emptyCell);
    }

    // Add the dates
    for (let day = 1; day <= totalDays; day++) {
        const dateElement = document.createElement('div');
        dateElement.className = 'date';
        dateElement.textContent = day;
        calendarGrid.appendChild(dateElement);
    }
}


prevButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});


document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src'); // Set the actual src from data-src
                img.onload = () => img.classList.add('loaded'); // Optional: add a class when loaded
                observer.unobserve(img); // Stop observing the image
            }
        });
    });

    images.forEach(image => {
        imgObserver.observe(image);
    });
});

// diplat on textbox part 
// Function to display visitor message
function displayVisitorMessage() {
    const lastVisitKey = 'lastVisit';
    const now = new Date();
    const lastVisit = localStorage.getItem(lastVisitKey);
    const messageContainer = document.getElementById('visitorMessage');

    if (!lastVisit) {
        // First visit
        messageContainer.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(lastVisit);
        const timeDifference = now - lastVisitDate; // time difference in milliseconds
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // convert to days

        if (daysDifference < 1) {
            messageContainer.textContent = "Back so soon! Awesome!";
        } else {
            messageContainer.textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago.`;
        }
    }

    // Update the last visit date
    localStorage.setItem(lastVisitKey, now.toISOString());
    
}


window.onload = function() {
    displayVisitorMessage();
    
};






// Function to calculate days until Christmas
function displayDaysUntilChristmas() {
    const currentDate = Date.now();
    const christmasDate = new Date('2024-12-25').getTime(); // Change to the desired year if needed

    const timeDifference = christmasDate - currentDate;
    const daysUntilChristmas = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

    const localStorageDiv = document.querySelector('.localstorage');
    
    if (daysUntilChristmas > 0) {
        localStorageDiv.textContent = `Days until Christmas: ${daysUntilChristmas} day${daysUntilChristmas === 1 ? '' : 's'}`;
    } else {
        localStorageDiv.textContent = "Christmas has passed for this year!";
    }
}




displayDaysUntilChristmas();
// Initial render
renderCalendar();
