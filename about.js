// Bio Toggle Functionality
const bioButtons = document.querySelectorAll('.bio-btn');
const professionalBio = document.getElementById('professionalBio');
const personalBio = document.getElementById('personalBio');

bioButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        bioButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Show corresponding bio section
        if (button.dataset.bio === 'professional') {
            professionalBio.classList.remove('hidden');
            personalBio.classList.add('hidden');
        } else {
            professionalBio.classList.add('hidden');
            personalBio.classList.remove('hidden');
        }
    });
});

// Animate Skill Bars on Scroll
const skillBars = document.querySelectorAll('.skill');

const animateSkills = () => {
    skillBars.forEach(skill => {
        const level = skill.dataset.level;
        skill.style.setProperty('--skill-level', `${level}%`);
    });
};

// Initialize animation when skills are visible
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

skillBars.forEach(skill => {
    skillsObserver.observe(skill);
    skill.style.setProperty('--skill-level', '0%');
});