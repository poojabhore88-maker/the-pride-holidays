// Diamond Dot for "i" in Pride
function addDiamondToPride() {
    const elements = document.querySelectorAll('.hero-title, .page-header h1');
    elements.forEach(element => {
        const text = element.innerHTML;
        const newText = text.replace(/Pride/g, 'Pr<span class="pride-diamond css-diamond">i</span>de');
        element.innerHTML = newText;
    });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', addDiamondToPride);

// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Form Submission
const enquiryForm = document.getElementById('enquiryForm');
const successModal = document.getElementById('successModal');

// Google Apps Script Web App URL (Replace with your actual URL)
const WEB_APP_URL = "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE";

enquiryForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(enquiryForm);
    const data = Object.fromEntries(formData.entries());
    
    // Show loading state
    const submitBtn = enquiryForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    try {
        // Check if WEB_APP_URL is configured
        if (WEB_APP_URL === "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE") {
            // Fallback: Show success without Google Sheets
            console.log('Form submitted (demo mode):', data);
            showSuccessModal();
            enquiryForm.reset();
            updateWhatsAppLink(data);
        } else {
            // Send data to Google Sheets
            const response = await fetch(WEB_APP_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    source: window.location.pathname,
                    notifyTo: 'youremail@example.com', // Replace with your email
                    autoReply: true
                })
            });
            
            const result = await response.json();
            
            if (result.ok) {
                // Show success modal
                showSuccessModal();
                
                // Reset form
                enquiryForm.reset();
                
                // Update WhatsApp link with user data
                updateWhatsAppLink(data);
            } else {
                throw new Error(result.error || 'Failed to submit enquiry');
            }
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Sorry, there was an error submitting your enquiry. Please try again or contact us directly on WhatsApp.');
    } finally {
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// Show Success Modal
function showSuccessModal() {
    successModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    successModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Update WhatsApp Link with User Data
function updateWhatsAppLink(userData) {
    const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');
    const message = `Hi The Pride Holidays, I want to plan a trip. My name is ${userData.name || '____'}. Destination ${userData.destination || '____'}. Dates ${userData.dates || '____'}.`;
    const encodedMessage = encodeURIComponent(message);
    
    whatsappLinks.forEach(link => {
        const baseUrl = link.href.split('?')[0];
        // Use the primary number for dynamic links
        link.href = `https://wa.me/919028458981?text=${encodedMessage}`;
    });
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === successModal) {
        closeModal();
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation
function validateForm() {
    const requiredFields = enquiryForm.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });
    
    return isValid;
}

// Add real-time validation
document.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('blur', () => {
        if (field.hasAttribute('required') && !field.value.trim()) {
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });
    
    field.addEventListener('input', () => {
        field.classList.remove('error');
    });
});

// Phone number validation
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', (e) => {
    const value = e.target.value.replace(/\D/g, '');
    e.target.value = value;
});

// Email validation
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', () => {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && !emailRegex.test(email)) {
        emailInput.classList.add('error');
    } else {
        emailInput.classList.remove('error');
    }
});

// Add CSS for error states
const style = document.createElement('style');
style.textContent = `
    .error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
    }
    
    .error:focus {
        border-color: #ef4444 !important;
    }
`;
document.head.appendChild(style);
