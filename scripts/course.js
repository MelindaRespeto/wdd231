// course.js

const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        completed: false
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        completed: false
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        completed: false
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        completed: false
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        completed: false
    },
    {
        subject: "WDD",
        number: 231,
        title: "Frontend Web Development I",
        credits: 2,
        completed: false
    }
];

const courseContainer = document.querySelector(".course-list");
const filterButtons = document.querySelectorAll(".course-filters button");
const creditDisplay = document.querySelector(".credits");

function displayCourses(filteredCourses) {
    courseContainer.innerHTML = "";

    filteredCourses.forEach(course => {
        const card = document.createElement("span");
        card.textContent = `${course.subject} ${course.number}`;
        courseContainer.appendChild(card);
    });

    const totalCredits = filteredCourses.reduce(
        (sum, course) => sum + course.credits,
        0
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
            const filtered = courses.filter(
                course => course.subject === filter
            );
            displayCourses(filtered);
        }
    });
});
