
function navigate(page) {
    if (page === 'home') {
        window.location.href = 'travel.html'; 
    } else if (page === 'About') {
        window.location.href = 'about.html'; 
    } else if (page === 'Sign In') {
        window.location.href = 'signin.html';
    }
    else {
        console.log('Page not found');
    }
}
 

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function togglePassword() {
    var passwordField = document.getElementById('password');
    var checkbox = document.getElementById('show-password');
    
    if (checkbox.checked) {
        passwordField.type = 'text'; 
    } else {
        passwordField.type = 'password'; 
    }
}
 // cookie notification
document.addEventListener('DOMContentLoaded', function() {
    const cookieNotification = document.getElementById('cookie-notification');
    const acceptCookiesBtn = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieNotification.style.display = 'block';
    }

    acceptCookiesBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieNotification.style.display = 'none';
    });
});
localStorage.removeItem('cookiesAccepted');

// scroll to top
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
