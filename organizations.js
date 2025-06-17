// View Toggle Functionality
const viewButtons = document.querySelectorAll('.view-btn');
const cardsView = document.getElementById('cardsView');
const timelineView = document.getElementById('timelineView');

viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        viewButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Switch between views
        if (button.dataset.view === 'cards') {
            cardsView.classList.remove('hidden');
            timelineView.classList.add('hidden');
        } else {
            cardsView.classList.add('hidden');
            timelineView.classList.remove('hidden');
        }
    });
});

// Organization Card Animation
const orgCards = document.querySelectorAll('.org-card');
const orgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

orgCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    orgObserver.observe(card);
});

// Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 150);
        }
    });
}, { threshold: 0.1 });

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'opacity 0.5s, transform 0.5s';
    timelineObserver.observe(item);
});

// Certification Badge Hover Effects
const badgeCards = document.querySelectorAll('.badge-card');
badgeCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const img = card.querySelector('img');
        img.style.transform = 'rotate(5deg) scale(1.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        const img = card.querySelector('img');
        img.style.transform = 'rotate(0) scale(1)';
    });
});