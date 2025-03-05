document.addEventListener('DOMContentLoaded', function() {
    // Function to show the selected tab and hide others in wijkmonitor
    window.showTab = function(tabId) {
        // Hide all tab contents
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(tab => {
            tab.classList.remove('active');
            tab.style.display = 'none';
        });
        
        // Show the selected tab content
        const selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.classList.add('active');
            selectedTab.style.display = 'block';
        }
        
        // Update active state in tab buttons
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('onclick').includes(tabId)) {
                tab.classList.add('active');
            }
        });
    };
    
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Form submission handling for wijkmonitor
    const surveyForm = document.getElementById('survey-form');
    if (surveyForm) {
        surveyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Bedankt voor het invullen van de vragenlijst! Je antwoorden zijn opgeslagen.');
            this.reset();
        });
    }
    
    // Handle search form
    const searchForm = document.querySelector('.search-container button');
    if (searchForm) {
        searchForm.addEventListener('click', function(e) {
            e.preventDefault();
            const searchInput = document.querySelector('.search-container input');
            alert(`Je hebt gezocht naar: "${searchInput.value}". Deze functionaliteit is nog in ontwikkeling.`);
        });
    }
    
    // Handle contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.');
            this.reset();
        });
    }
});