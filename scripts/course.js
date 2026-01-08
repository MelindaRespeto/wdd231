// course.js

const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        completed: true
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
const creditDisplay = document.querySelector(".credits");
const filterButtons = document.querySelectorAll(".course-filters button");

function displayCourses(courseArray) {
    courseContainer.innerHTML = "";

    courseArray.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-card");

        if (course.completed) {
            card.classList.add("completed");
            card.textContent = `✓ ${course.subject} ${course.number}`;
        } else {
            card.textContent = `${course.subject} ${course.number}`;
        }

        courseContainer.appendChild(card);
    });

    const totalCredits = courseArray.reduce(
        (total, course) => total + course.credits, 0
    );

    creditDisplay.textContent =
        `The total number of course credits listed below is ${totalCredits}`;
}

// Initial display
displayCourses(courses);

// Filter buttons
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