// DOM Elements
const mainContent = document.getElementById('mainContent');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const newsletterForm = document.getElementById('newsletterForm');
const startMomentBtn = document.getElementById('startMomentBtn');
const createMomentBtn = document.getElementById('createMomentBtn');
const supportMomentBtn = document.getElementById('supportMomentBtn');

// Page Elements
const homePage = document.getElementById('homePage');
const aboutPage = document.getElementById('aboutPage');
const featuredMoments = document.getElementById('featuredMoments');
const testimonials = document.getElementById('testimonials');
const statsContainer = document.getElementById('statsContainer');
const teamContainer = document.getElementById('teamContainer');
const valuesContainer = document.getElementById('valuesContainer');

// Sample Data
const moments = [
    {
        id: 1,
        title: "Learning to Rock Climb",
        description: "Join Sarah on her journey to conquer her fear of heights and become a certified rock climbing instructor.",
        raised: 2450,
        goal: 3000,
        image: "/api/placeholder/400/300",
        progress: 82
    },
    {
        id: 2,
        title: "Starting a Food Podcast",
        description: "Help Miguel launch his dream podcast exploring diverse cultural cuisines and their stories.",
        raised: 1800,
        goal: 2500,
        image: "/api/placeholder/400/300",
        progress: 72
    },
    {
        id: 3,
        title: "Farm Life Experience",
        description: "Follow Alex's journey learning sustainable farming practices at an organic farm for a month.",
        raised: 3200,
        goal: 4000,
        image: "/api/placeholder/400/300",
        progress: 80
    }
];

const testimonialData = [
    {
        name: "Jessica Chen",
        role: "Grantee",
        image: "/api/placeholder/64/64",
        text: "Thanks to this amazing community, I was able to fulfill my dream of learning traditional pottery in Japan. The experience changed my life!"
    },
    {
        name: "Marcus Thompson",
        role: "Grantor",
        image: "/api/placeholder/64/64",
        text: "Being able to support others in pursuing their dreams while following their journey is incredibly rewarding."
    },
    {
        name: "Laura Martinez",
        role: "Grantee",
        image: "/api/placeholder/64/64",
        text: "The support I received helped me start my photography journey. Now I'm paying it forward by helping others achieve their dreams."
    }
];

const stats = [
    {
        number: 10000,
        label: 'Moments Funded',
        description: 'Experiences that changed lives'
    },
    {
        number: 2000000,
        label: 'Community Support',
        prefix: '$',
        description: 'Invested in dreams'
    },
    {
        number: 50,
        label: 'Countries Reached',
        suffix: '+',
        description: 'Global impact'
    }
];

const team = [
    {
        name: 'Sarah Johnson',
        role: 'Founder & CEO',
        image: '/api/placeholder/200/200',
        description: 'Passionate about connecting people and creating meaningful experiences.',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        name: 'Michael Chen',
        role: 'Head of Community',
        image: '/api/placeholder/200/200',
        description: 'Building bridges between dreamers and supporters worldwide.',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        name: 'Lisa Patel',
        role: 'Experience Director',
        image: '/api/placeholder/200/200',
        description: 'Ensuring every moment creates lasting impact.',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    }
];

const values = [
    {
        icon: '👥',
        title: 'Community First',
        description: 'We believe in the power of community support to transform lives.'
    },
    {
        icon: '🔍',
        title: 'Transparency',
        description: 'Open and honest communication in all our interactions.'
    },
    {
        icon: '💡',
        title: 'Innovation',
        description: 'Constantly improving how we connect and support each other.'
    },
    {
        icon: '🎯',
        title: 'Impact',
        description: 'Creating lasting positive change through meaningful experiences.'
    }
];

// Page Navigation
function navigateToPage(pageName) {
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.add('hidden');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    const targetPage = document.getElementById(`${pageName}Page`);
    const activeLink = document.querySelector(`[data-page="${pageName}"]`);

    if (targetPage) {
        targetPage.classList.remove('hidden');
        window.scrollTo(0, 0);
        initializePage(pageName);
    }

    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Initialize Pages
function initializePage(pageName) {
    switch(pageName) {
        case 'home':
            renderFeaturedMoments();
            renderTestimonials();
            break;
        case 'about':
            renderStats();
            renderTeam();
            renderValues();
            initializeCounters();
            break;
    }
}

// Component Renderers
function renderFeaturedMoments() {
    if (!featuredMoments) return;
    
    featuredMoments.innerHTML = moments.map(moment => `
        <div class="experience-card rounded-xl overflow-hidden shadow-lg fade-up">
            <div class="card-image-container">
                <img src="${moment.image}" alt="${moment.title}" class="card-image w-full h-48 object-cover">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${moment.title}</h3>
                <p class="text-gray-600 mb-4">${moment.description}</p>
                <div class="mb-4">
                    <div class="flex justify-between text-sm text-gray-500 mb-2">
                        <span>Progress</span>
                        <span>${moment.progress}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-bar-fill" style="width: ${moment.progress}%"></div>
                    </div>
                </div>
                <div class="flex justify-between items-center">
                    <div>
                        <span class="text-primary font-bold">$${moment.raised.toLocaleString()}</span>
                        <span class="text-gray-500"> of $${moment.goal.toLocaleString()}</span>
                    </div>
                    <button class="btn-primary px-4 py-2 rounded-lg support-btn" data-id="${moment.id}">
                        Support
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Add event listeners to support buttons
    document.querySelectorAll('.support-btn').forEach(btn => {
        btn.addEventListener('click', handleSupportClick);
    });

    // Animate cards
    animateElements('.experience-card');
}

function renderTestimonials() {
    if (!testimonials) return;

    testimonials.innerHTML = testimonialData.map(testimonial => `
        <div class="bg-white p-6 rounded-xl shadow-lg fade-up">
            <div class="flex items-center mb-4">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full">
                <div class="ml-4">
                    <h4 class="font-bold">${testimonial.name}</h4>
                    <p class="text-gray-500">${testimonial.role}</p>
                </div>
            </div>
            <p class="text-gray-600">${testimonial.text}</p>
        </div>
    `).join('');

    // Animate testimonials
    animateElements('.fade-up');
}

function renderStats() {
    if (!statsContainer) return;

    statsContainer.innerHTML = stats.map(stat => `
        <div class="stats-card bg-white p-8 rounded-xl shadow-lg text-center fade-up">
            <h3 class="text-4xl font-bold text-primary mb-2">
                <span class="counter" data-target="${stat.number}">0</span>${stat.suffix || ''}
            </h3>
            <p class="text-xl font-semibold mb-2">${stat.label}</p>
            <p class="text-gray-600">${stat.description}</p>
        </div>
    `).join('');

    // Animate stats
    animateElements('.stats-card');
}

function renderTeam() {
    if (!teamContainer) return;

    teamContainer.innerHTML = team.map(member => `
        <div class="team-card text-center fade-up">
            <div class="relative mb-4 inline-block">
                <img src="${member.image}" alt="${member.name}" class="team-image w-48 h-48 mx-auto">
                <div class="social-links absolute bottom-0 right-0 space-x-2">
                    <a href="${member.social.linkedin}" class="text-primary hover:text-primary-dark">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="${member.social.twitter}" class="text-primary hover:text-primary-dark">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
            <h3 class="text-xl font-bold mb-2">${member.name}</h3>
            <p class="text-gray-600 mb-2">${member.role}</p>
            <p class="text-gray-500">${member.description}</p>
        </div>
    `).join('');

    // Animate team cards
    animateElements('.team-card');
}

function renderValues() {
    if (!valuesContainer) return;

    valuesContainer.innerHTML = values.map(value => `
        <div class="value-card bg-white p-6 rounded-xl shadow-lg fade-up">
            <div class="text-3xl mb-4">${value.icon}</div>
            <h3 class="text-xl font-bold mb-4 text-primary">${value.title}</h3>
            <p class="text-gray-600">${value.description}</p>
        </div>
    `).join('');

    // Animate value cards
    animateElements('.value-card');
}

// Animation Utilities
function animateElements(selector) {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => observer.observe(element));
}

function initializeCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const steps = 50;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            counter.textContent = Math.floor(current).toLocaleString();
            
            if (current >= target) {
                counter.textContent = target.toLocaleString();
                clearInterval(timer);
            }
        }, duration / steps);
    });
}

// Event Handlers
function handleSupportClick(e) {
    const momentId = e.target.dataset.id;
    const moment = moments.find(m => m.id === parseInt(momentId));
    showToast(`Thanks for your interest in supporting "${moment.title}"!`);
}

function handleCreateMoment() {
    showToast('Create Moment feature coming soon!');
}

// Toast Notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize default page (home)
    navigateToPage('home');

    // Navigation links
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.dataset.page;
            navigateToPage(page);
        });
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Newsletter form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail').value;
            
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                showToast('Thank you for subscribing to our newsletter!', 'success');
                newsletterForm.reset();
            } catch (error) {
                showToast('Failed to subscribe. Please try again.', 'error');
            }
        });
    }

    // CTA Buttons
    if (startMomentBtn) startMomentBtn.addEventListener('click', handleCreateMoment);
    if (createMomentBtn) createMomentBtn.addEventListener('click', handleCreateMoment);
    if (supportMomentBtn) {
        supportMomentBtn.addEventListener('click', () => {
            document.querySelector('#featuredMoments').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        mobileMenu.classList.add('hidden');
    }
});