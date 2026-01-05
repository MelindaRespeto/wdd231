// course.js

const courses = [
    { code: "WDD 130", subject: "WDD", credits: 2 },
    { code: "WDD 131", subject: "WDD", credits: 2 },
    { code: "WDD 231", subject: "WDD", credits: 2 },
    { code: "CSE 110", subject: "CSE", credits: 2 }
];

const courseContainer = document.querySelector(".course-list");
const filterButtons = document.querySelectorAll(".course-filters button");
const creditDisplay = document.querySelector(".credits");

function displayCourses(filteredCourses) {
    courseContainer.innerHTML = "";

    filteredCourses.forEach(course => {
        const card = document.createElement("span");
        card.textContent = course.code;
        courseContainer.appendChild(card);
    });

    const totalCredits = filteredCourses.reduce(
        (sum, course) => sum + course.credits, 0
    );

    creditDisplay.textContent =
        `The total credits for courses listed above is ${totalCredits}`;
}

// Initial display
displayCourses(courses);

// Filter handling
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.textContent;

        if (filter === "All") {
            displayCourses(courses);
        } else {
            const filtered = courses.filter(course =>
                course.subject === filter
            );
            displayCourses(filtered);
        }
    });
});
