// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Banner Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const sliderPrev = document.getElementById('sliderPrev');
const sliderNext = document.getElementById('sliderNext');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    const activeSlide = slides[currentSlide];
    // Restart zoom animation
    activeSlide.style.animation = 'none';
    activeSlide.offsetHeight; // reflow
    activeSlide.style.animation = '';
    activeSlide.classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

if (sliderNext) {
    sliderNext.addEventListener('click', nextSlide);
}

if (sliderPrev) {
    sliderPrev.addEventListener('click', prevSlide);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Counter animation
const counters = document.querySelectorAll('.counter');

const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 200;

    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => animateCounter(counter), 10);
    } else {
        counter.innerText = target;
    }
};

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            if (counter.innerText === '0') {
                animateCounter(counter);
            }
        }
    });
}, observerOptions);

counters.forEach(counter => observer.observe(counter));

// Course category filter
const categoryTabs = document.querySelectorAll('.cat-tab');
const courseCards = document.querySelectorAll('.course-card');

categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const category = tab.getAttribute('data-cat');
        
        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        courseCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-cat') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Scroll to top button
const scrollTop = document.getElementById('scrollTop');

if (scrollTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTop.classList.add('show');
        } else {
            scrollTop.classList.remove('show');
        }
    });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
            }
        }
    });
});

// Newsletter form
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing! We will keep you updated.');
        newsletterForm.reset();
    });
}

// Load dynamic content from API
async function loadDynamicContent() {
    try {
        const response = await fetch('api/content.php');
        const data = await response.json();
        
        // Update banners
        if (data.banners && data.banners.length >= 3) {
            document.getElementById('banner1Title').textContent = data.banners[0].title;
            document.getElementById('banner1Subtitle').textContent = data.banners[0].subtitle;
            document.getElementById('banner2Title').textContent = data.banners[1].title;
            document.getElementById('banner2Subtitle').textContent = data.banners[1].subtitle;
            document.getElementById('banner3Title').textContent = data.banners[2].title;
            document.getElementById('banner3Subtitle').textContent = data.banners[2].subtitle;
        }
        
        // Update about section
        if (data.about) {
            const aboutPreview = document.getElementById('aboutPreview');
            if (aboutPreview) aboutPreview.textContent = data.about;
        }
        
        // Update courses
        if (data.courses && data.courses.length > 0) {
            const courseGrid = document.getElementById('featuredCourses');
            if (courseGrid) {
                courseGrid.innerHTML = data.courses.map(course => `
                    <div class="course-card" data-cat="${course.category || 'academic'}">
                        <div class="course-icon"><i class="${course.icon}"></i></div>
                        <h3>${course.title}</h3>
                        <p>${course.description}</p>
                        <span class="course-badge">${course.category || 'Academic'}</span>
                        <a href="pages/courses.html" class="course-link">View Details <i class="fas fa-arrow-right"></i></a>
                    </div>
                `).join('');
            }
        }
        
        // Update contact info in footer
        if (data.contact) {
            const footerPhone = document.getElementById('footerPhone');
            const footerEmail = document.getElementById('footerEmail');
            const footerAddress = document.getElementById('footerAddress');
            
            if (footerPhone) footerPhone.textContent = data.contact.phone;
            if (footerEmail) footerEmail.textContent = data.contact.email;
            if (footerAddress) footerAddress.textContent = data.contact.address;
        }
        
    } catch (error) {
        console.log('Using default content');
    }
}

// Load content on page load
document.addEventListener('DOMContentLoaded', loadDynamicContent);

// Tab functionality for course pages
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        tabContents.forEach(content => {
            if (content.id === tabId) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    });
});
