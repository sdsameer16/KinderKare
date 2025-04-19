document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slides img");
    let currentIndex = 0;
    const totalSlides = slides.length;
    const intervalTime = 5000; // 5 seconds

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);

    // Auto slide every 5 seconds
    setInterval(nextSlide, intervalTime);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Testimonial Slider
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-box");
    let index = 0;

    function showNextTestimonial() {
        testimonials[index].classList.remove("active");
        index = (index + 1) % testimonials.length;
        testimonials[index].classList.add("active");
    }

    // Auto-slide every 4 seconds
    setInterval(showNextTestimonial, 2500);
});

// Caretaker Section
let caretakers = [
    {
        img: "caretaker1.jpg",
        name: "Emily Johnson",
        experience: "Certified Childcare Expert, 7+ Years of Experience.",
        details: "CPR & First Aid Certified, Specializes in infant cognitive growth."
    },
    {
        img: "caretaker2.jpg",
        name: "Sarah Thompson",
        experience: "Early Childhood Educator, 5+ Years of Experience.",
        details: "Focus on baby nutrition, play therapy, and emotional bonding."
    },
    {
        img: "caretaker3.jpg",
        name: "Michael Smith",
        experience: "Infant Specialist, 6+ Years of Experience.",
        details: "Experience with special needs children and sensory play activities."
    },
    {
        img: "caretaker4.jpg",
        name: "Linda Roberts",
        experience: "Baby Sleep Consultant, 8+ Years of Experience.",
        details: "Certified in sleep training techniques for newborns and toddlers."
    }
];

let currentCaretakerIndex = 0;

function nextCaretaker() {
    currentCaretakerIndex = (currentCaretakerIndex + 1) % caretakers.length;
    updateCaretaker();
}

function updateCaretaker() {
    let caretaker = caretakers[currentCaretakerIndex];
    document.querySelector(".caretaker-card").innerHTML = `
        <img src="${caretaker.img}" alt="${caretaker.name}">
        <h3>${caretaker.name}</h3>
        <p>${caretaker.experience}</p>
        <button class="details-btn" onclick="toggleDetails()">More Details →</button>
        <p class="caretaker-details">${caretaker.details}</p>
    `;
}

function toggleDetails() {
    let details = document.querySelector(".caretaker-details");
    details.style.display = details.style.display === "block" ? "none" : "block";
}

// Review Section
document.addEventListener("DOMContentLoaded", function () {
    const reviews = document.querySelectorAll(".review-card");
    let currentReviewIndex = 0;

    function showReview(index) {
        reviews.forEach((review, i) => {
            review.classList.remove("active");
            if (i === index) {
                review.classList.add("active");
            }
        });
    }

    document.getElementById("prevBtn").addEventListener("click", function () {
        currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
        showReview(currentReviewIndex);
    });

    document.getElementById("nextBtn").addEventListener("click", function () {
        currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
        showReview(currentReviewIndex);
    });

    showReview(currentReviewIndex);
});

// Contact Form Submission
document.querySelector(".submit-btn").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Your request has been submitted!");
});