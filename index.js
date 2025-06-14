document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.md\\:hidden');
    const closeButton = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuContent = mobileMenu.querySelector('.h-full');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    function openMenu() {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.classList.remove('opacity-0');
            mobileMenuContent.classList.remove('translate-x-full');
        }, 10);
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        mobileMenu.classList.add('opacity-0');
        mobileMenuContent.classList.add('translate-x-full');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 300);
    }
    menuButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
    let isScrolling = false;
    function smoothScroll(targetElement, duration) {
        if (isScrolling) return;
        isScrolling = true;
        const startPosition = window.pageYOffset;
        const targetPosition = targetElement.offsetTop - 80;
        const distance = targetPosition - startPosition;
        let startTime = null;
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easeInOutCubic = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            window.scrollTo(0, startPosition + distance * easeInOutCubic);
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            } else {
                isScrolling = false;
            }
        }
        requestAnimationFrame(animation);
    }
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                smoothScroll(targetElement, 800);
            }
        });
    });
    window.addEventListener('wheel', () => {
        isScrolling = false;
    }, { passive: true });
    window.addEventListener('touchstart', () => {
        isScrolling = false;
    }, { passive: true });
});


document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('#projects .card-hover');
    const projectModal = document.getElementById('project-modal');
    const closeProjectModal = document.getElementById('close-project-modal');
    const projectDetailContent = document.getElementById('project-detail-content');

    const projectDetails = {
        'Smart Farming Platform': {
            title: 'Smart Farming Platform',
            description: 'An AI-powered smart farming platform offering crop prediction, disease detection, soil analysis, and personalized farming assistance for improved agricultural productivity.',
            fullDescription: `The Smart Farming Platform is an innovative web application designed to transform traditional agriculture through artificial intelligence. Key features include:
• AI-powered crop monitoring and productivity insights
• Smart crop advisory for ideal planting strategies and fertilizers
• Early crop disease detection using image-based AI analysis
• Soil analysis and recommendations for sustainable farming
• Informative content sections with engaging visuals and animations
• User-friendly contact form with email integration
• Fully responsive design for mobile and desktop access`,
            technologies: ['tensorflow', 'scikit-learn', 'flask', 'HTML', 'CSS', 'JavaScript', 'AI APIs'],
            duration: '1 months',
            role: 'Full-Stack Developer & Machine learning developer',
            client: 'Personal Project',
            liveDemoLink: 'https://www.linkedin.com/posts/muhammad-umair-649a43297_machinelearning-ai4agriculture-cropdiseasedetection-activity-7335206315155177472-oI-Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfhA9kBYnS-oJdfQpwYQfaStXIPzvGPpDA',
            githubLink: '#'
        },

        'E-commerce Sales and Product Analysis Dashboard': {
            title: 'E-commerce Sales and Product Analysis Dashboard',
            description: 'A comprehensive e-commerce analytics dashboard providing real-time sales insights, product performance analysis, order tracking, and business intelligence for data-driven decision making.',
            fullDescription: `The E-commerce Sales and Product Analysis Dashboard is a sophisticated web application designed to help online businesses monitor and optimize their performance through comprehensive data visualization. Key features include: 
                    • Real-time sales tracking with year-over-year comparison (2016-2017 data analysis) 
                    • Top-selling product identification and ranking system
                    • Order completion rate monitoring and trend analysis 
                    • Geographic sales distribution with interactive world map visualization
                    • Monthly web orders and sales performance tracking 
                    • Payment method analysis with detailed breakdowns 
                    • Daily order volume monitoring and forecasting 
                    • Order status tracking (Delivered, Decrease, Total categories) 
                    • Interactive charts and graphs for trend analysis 
                    • Customizable dashboard widgets for personalized insights 
                    • Advanced filtering and data export capabilities`,
            technologies: ['Excel', 'Pandas', 'Pivot Table', 'Python', 'Preprocessing',],
            duration: '15 Days',
            role: 'Data Analysis & Data Preprocessing',
            client: 'Personal Project',
            liveDemoLink: 'https://www.linkedin.com/posts/muhammad-umair-649a43297_dataanalysis-python-excel-activity-7258390139465334784-h45W?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfhA9kBYnS-oJdfQpwYQfaStXIPzvGPpDA',
            githubLink: '#'
        }
        // Add details for other projects...

        , 'Country Happiness Prediction System': {
            title: 'Country Happiness Prediction System',
            description: 'An advanced machine learning platform that predicts country happiness scores using multiple socio-economic indicators including GDP, health, freedom, and social factors with comprehensive data visualization and trend analysis.',
            fullDescription: `The Country Happiness Prediction System is a sophisticated data science application that leverages machine learning to predict and analyze country happiness levels based on various socio-economic factors. Key features include: • Interactive happiness prediction interface with real-time input fields • Multi-factor analysis including GDP per capita, health life expectancy, freedom, and social support • Comprehensive descriptive analysis with statistical summaries and correlation matrices • Advanced data visualization with bar charts, heatmaps, and trend line graphs • Regional analysis capabilities (Sub-Saharan Africa and other regions) • Time-series trend analysis showing happiness patterns over multiple years (2015-2019) • Comparative analysis across different countries and regions • Machine learning model integration for accurate happiness score predictions • Color-coded correlation heatmaps for factor relationship analysis • Interactive dashboard with user-friendly input forms • Responsive design for cross-platform accessibility • Export capabilities for analysis results and visualizations`,
            technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit', 'Plotly', 'Machine Learning', 'Data Visualization'],
            duration: '2 months',
            role: 'Data Scientist & Machine Learning Engineer',
            client: 'Social Research Institute',
            liveDemoLink: 'https://countrieshappinesspredict-bundoezvexvyh4wbaz2ekm.streamlit.app/',
            githubLink: 'https://github.com/umiii-786/CountriesHappinessPredict'
        }
    };
    //console.log(projectCards)
    projectCards.forEach(card => {
        card.addEventListener('click', function (event) {
            console.log('ma button hn ')
            console.log(event.target)
            const projectTitle = this.querySelector('h3').textContent;
            console.log(projectTitle)
            const details = projectDetails[projectTitle];
            if (details) {
                projectDetailContent.innerHTML = `
                          <div class="mb-8">
                          <img src="${this.querySelector('img').src}" alt="${details.title}" class="w-full h-64 object-cover rounded-lg mb-6">
                          <h2 class="text-3xl font-bold mb-4">${details.title}</h2>
                          <p class="text-gray-400 mb-6">${details.description}</p>
                          </div>
                          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                          <h3 class="text-xl font-semibold mb-4">Project Details</h3>
                          <div class="space-y-3">
                          <p class="text-gray-400"><span class="text-white font-medium">Duration:</span> ${details.duration}</p>
                          <p class="text-gray-400"><span class="text-white font-medium">Role:</span> ${details.role}</p>
                          <p class="text-gray-400"><span class="text-white font-medium">Client:</span> ${details.client}</p>
                          </div>
                          </div>
                          <div>
                          <h3 class="text-xl font-semibold mb-4">Technologies Used</h3>
                          <div class="flex flex-wrap gap-2">
                          ${details.technologies.map(tech => `
                          <span class="bg-[#222] text-sm px-3 py-1 rounded-full">${tech}</span>
                          `).join('')}
                          </div>
                          </div>
                          </div>
                          <div class="mb-8">
                          <h3 class="text-xl font-semibold mb-4">Project Overview</h3>
                          <p class="text-gray-400 whitespace-pre-line">${details.fullDescription}</p>
                          </div>
                          <div class="flex gap-4">
                          <a href="${details.liveDemoLink}" class="bg-primary text-black font-semibold px-6 py-3 !rounded-button whitespace-nowrap">Live Demo</a>
                          <a href="${details.githubLink}" class="bg-[#222] text-white font-semibold px-6 py-3 !rounded-button whitespace-nowrap">View Code</a>
                          </div>
    `;
                projectModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    closeProjectModal.addEventListener('click', function () {
        projectModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });
    projectModal.addEventListener('click', function (e) {
        if (e.target === projectModal) {
            projectModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    function updateItemWidth() {
        const viewportWidth = window.innerWidth;
        if (viewportWidth < 768) {
            return track.parentElement.offsetWidth;
        } else if (viewportWidth < 1024) {
            return track.parentElement.offsetWidth / 2;
        } else {
            return track.parentElement.offsetWidth / 3;
        }
    }
    const track = document.getElementById('certificates-track');
    const prevButton = document.getElementById('prev-cert');
    const nextButton = document.getElementById('next-cert');
    const dots = document.querySelectorAll('.cert-dot');
    let currentIndex = 0;
    let itemWidth = updateItemWidth();
    window.addEventListener('resize', () => {
        itemWidth = updateItemWidth();
        currentIndex = Math.min(currentIndex, maxIndex);
        updateCarousel();
    });
    const totalItems = track.children.length;
    const maxIndex = totalItems - Math.floor(track.parentElement.offsetWidth / itemWidth);
    function updateCarousel() {
        const translateX = -currentIndex * itemWidth;
        track.style.transform = `translateX(${translateX}px)`;
        dots.forEach((dot, index) => {
            dot.style.backgroundColor = index === currentIndex ? '#3AFF12' : '#222';
        });
        prevButton.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextButton.style.opacity = currentIndex === maxIndex ? '0.5' : '1';
    }
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    nextButton.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = Math.min(index, maxIndex);
            updateCarousel();
        });
    });
    updateCarousel();
    window.addEventListener('resize', () => {
        currentIndex = Math.min(currentIndex, maxIndex);
        updateCarousel();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('#contact form');
    console.log(contactForm)
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            let isValid = true;
            if (!nameInput.value.trim()) {
                nameInput.classList.add('ring-2', 'ring-red-500');
                isValid = false;
            } else {
                nameInput.classList.remove('ring-2', 'ring-red-500');
            }
            if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
                emailInput.classList.add('ring-2', 'ring-red-500');
                isValid = false;
            } else {
                emailInput.classList.remove('ring-2', 'ring-red-500');
            }
            if (!subjectInput.value.trim()) {
                subjectInput.classList.add('ring-2', 'ring-red-500');
                isValid = false;
            } else {
                subjectInput.classList.remove('ring-2', 'ring-red-500');
            }
            if (!messageInput.value.trim()) {
                messageInput.classList.add('ring-2', 'ring-red-500');
                isValid = false;
            } else {
                messageInput.classList.remove('ring-2', 'ring-red-500');
            }
            if (isValid) {
                // Here you would normally send the form data to a server
                //  alert('Message sent successfully!');
                contactForm.submit()
                contactForm.reset();
            }
        });
    }
});
