const courses1 = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]
let all_credit = 0;

function displayCourses(courseData) {
    const certificateSection = document.getElementById('certificate_section');
    certificateSection.innerHTML = '';

    courseData.forEach(course => {
        const listItem = document.createElement('li');
        listItem.classList.add('course-item');
        listItem.textContent = course.subject+ " " + course.number;

        if (course.subject === 'WDD' && course.number === 130) {
            listItem.addEventListener('click', () => {
                openModal(course);
            });
        }

        
        if (course.completed) {
            listItem.classList.add('completed');
            all_credit += course.credits;
        } else {
            listItem.classList.add('not-completed');
        }

        certificateSection.appendChild(listItem);
    });
}




function openModal(course) {
    document.getElementById('modal-title').textContent = course.title;
    document.getElementById('modal-description').textContent = course.description;
    document.getElementById('modal-credits').textContent = course.credits;
    document.getElementById('modal-technology').textContent = course.technology.join(', ');
    document.getElementById('course-modal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('course-modal').style.display = 'none';
}

// Ensure the modal closes when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('course-modal');
    if (event.target == modal) {
        closeModal();
    }
};






displayCourses(courses1)

console.log("Total Credits Earned: " + all_credit)

