// window.addEventListener('DOMContentLoaded', () => {
//     const sections = document.querySelectorAll('section'); 
//     const navLinks = document.querySelectorAll('.navbar a'); 

//     const isInViewport = (elem) => {
//         const bounding = elem.getBoundingClientRect();
//         return (
//             bounding.top >= 0 &&
//             bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//         );
//     };

//     const updateActiveNavLink = () => {
//         sections.forEach((section, index) => {
//             const navLink = navLinks[index];
//             if (isInViewport(section)) {
//                 navLinks.forEach(link => link.classList.remove('active'));
//                 navLink.classList.add('active');
//             }
//         });
//     };

//     window.addEventListener('load', updateActiveNavLink);
//     window.addEventListener('scroll', updateActiveNavLink);

   
//     navLinks.forEach(navLink => {
//         navLink.addEventListener('click', (e) => {
//             e.preventDefault();
//             const targetId = navLink.getAttribute('href'); 
//             const targetSection = document.querySelector(targetId); 
//             targetSection.scrollIntoView({ behavior: 'smooth' });
//         });
//     });
// });

// PROJECTS
document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll('.nav-button');
    const projectsContainer = document.querySelector('.projects');
  
    let currentCategory = 'ios';
  
    const projectsData = {
      'ios': [
        { img: 'images/projects/weather.png', title: '', description: 'Weather application with integrated API and geolocation services(in progress)' },
        { img: 'images/projects/car.png', title: '', description: 'Complete car marketplace application with integrated API (corporate project/cant provide code).' },
        { img: 'images/projects/habits.png', title: '', description: 'Habit tracker application with all function needed and internal storage saving.' }
      ],
      'ai-fin': [
        { img: 'images/projects/finance.png', title: '', description: 'Series of data manipulation and visualization tools for financial analysis. Folder of different practices mostly for training.'},
        { img: 'images/projects/models.png', title: '', description: 'TensorFlow models examples and training practices.' },
        { img: 'images/projects/python.png', title: '', description: 'Be my guest to check my other applications using python.' }
      ],
      'web': [
        { img: 'images/projects/travel.png', title: '', description: 'Travel advisor application.' },
        { img: 'images/projects/portfolio.png', title: '', description: 'My Portfolio Website.' },
        { img: 'images/projects/html.png', title: '', description: 'Bunch of school projects from small to bigger with various technologies involved' }
      ],
      'csharp-java': [
        { img: 'images/projects/cash.png', title: '', description: 'Cash Application Complete on C# Windows forms, available in real life usage.' },
        { img: 'images/projects/android.png', title: '', description: 'Simple android application practices created on Java.' },
        { img: 'images/projects/java.png', title: '', description: 'Java windows forms practice application with multithreading, delegate and other technologies.' }
      ],
      'other': [
        { img: 'images/projects/sql.png', title: '', description: 'SQL School Projects with real scenario databases.' },
        { img: 'images/projects/upcoming.png', title: '', description: '' },
        { img: 'images/projects/upcoming.png', title: '', description: '' }
      ]
    };
  
    function renderProjects(category) {
      const projects = projectsData[category];
      projectsContainer.innerHTML = '';
  
      projects.forEach((project, index) => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.style.opacity = '0';
        projectElement.innerHTML = `
          <img src="${project.img}" alt="${project.title}">
          <div class="description">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <div class="links">
              <a href="#">Demo</a>
              <a href="#">Code</a>
            </div>
          </div>
        `;
        projectsContainer.appendChild(projectElement);
  
        setTimeout(() => {
          projectElement.style.opacity = '1';
        }, index * 100);
      });
    }
  
    renderProjects(currentCategory);
  
    navButtons.forEach(button => {
      button.addEventListener('click', function() {
        navButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        const category = this.getAttribute('data-category');
        renderProjects(category);
        currentCategory = category;
      });
    });
  });