document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('theme-switch');

    btn.addEventListener('click', () => {
        document.body.classList.toggle('darkmode');
    });
});

// Theme toggle
const toggleButton = document.getElementById("themeToggle");
if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("darkmode");
        const isDark = document.body.classList.contains("darkmode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

// Apply saved theme on load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("darkmode");
} else {
    document.body.classList.remove("darkmode");
}

// Buy Now button alert
document.querySelectorAll(".product-info button").forEach(button => {
    button.addEventListener("click", () => {
        alert("This feature is coming soon!");
    });
});

// --- Cookies Functions ---
function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
}

function getCookie(name) {
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(';');
    name = name + "=";
    for (let c of cookies) {
        c = c.trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// --- Welcome Logic ---
$(document).ready(function () {
    let username = getCookie("username");

    if (username) {
        alert("Welcome back, " + username + "!");
    } else {
        username = prompt("Enter your name:");
        if (username && username.trim() !== "") {
            setCookie("username", username, 7); // Cookie lasts 7 days
            alert("Hello, " + username + "! Your name has been saved.");
        }
    }
});
