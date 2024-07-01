document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.bx-menu').addEventListener('click', () => {
        console.log('clicked');
        const Nav = document.querySelector('header .bottom nav');
        if (Nav.style.display === "flex") {
            Nav.style.display = "none";
        } else {
            Nav.style.display = "flex";
            Nav.style.flexDirection = "column";
            Nav.style.marginLeft = "150px";
            const anchorElements = document.querySelectorAll('header .bottom nav a');
            anchorElements.forEach((anchor) => {
                anchor.style.margin = '10px 0';
            });
        }

    })


    const courses = [{
            title: "Data Science & Analytics",
            subtitle: "Become expert at drawing intelligence from data and get noticed by top companies",
            img: "Images/1.svg"
        },
        {
            title: "Software Development Courses",
            subtitle: "Upskill in-demand software & technology skills to attain desired jobs",
            img: "Images/2.svg"
        },
        {
            title: "Banking & Finance",
            subtitle: "Up-skill yourself with relevant courses to become job ready in Banking & Finance world",
            img: "Images/3.svg"
        },
        {
            title: "Programming Courses",
            subtitle: "Build strong coding foundations for a high-paying technology career",
            img: "Images/4.svg"
        },
        {
            title: "Business Technology",
            subtitle: "Explore the vast area of new categories under Business Technology",
            img: "Images/5.svg"
        },
        {
            title: "PW School of Healthcare",
            subtitle: "Explore the vast sector of Healthcare by Joining our Degree & Diploma Programs.",
            img: "Images/6.svg"
        }
    ];
    let html = '';
    courses.forEach(course => {
        html += `
         <div class="explore-container">
                <div class="explore-box">
                    <div>
                        <h3>
                            ${course.title}
                        </h3>
                        <p>${course.subtitle}</p>
                    </div>
                    <img src='${course.img}'alt="">
                </div>
                <div class="explore-bottom">
                    <h3>Know More</h3>
                    <i class='bx bxs-right-arrow-circle'></i>
                </div>
            </div>
       `;
    });
    document.querySelector('.explore-grid').innerHTML = html;
    const coursesLink = document.getElementById('courses-link');
    const coursesContent = document.getElementById('courses-content');

    coursesLink.addEventListener('mouseover', function() {
        coursesContent.style.display = 'flex';
    });

    coursesContent.addEventListener('mouseover', function() {
        coursesContent.style.display = 'flex';
    });

    coursesLink.addEventListener('mouseout', function() {
        coursesContent.style.display = 'none';
    });

    coursesContent.addEventListener('mouseout', function() {
        coursesContent.style.display = 'none';
    });

});