
// ================================
// 1. MENU HAMBURGER
// ================================

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        hamburger.textContent = "✕";
        hamburger.setAttribute("aria-expanded", "true");
    } else {
        hamburger.textContent = "☰";
        hamburger.setAttribute("aria-expanded", "false");
    }
});

// Menutup menu setelah link diklik
document.querySelectorAll(".nav-menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        hamburger.textContent = "☰";
        hamburger.setAttribute("aria-expanded", "false");
    });
});


// ================================
// 2. SLIDER TESTIMONI
// ================================

const testimonials = [
    {
        text: "Nasi gorengnya enak banget! Bumbunya terasa dan porsinya memuaskan.",
        name: "Andi Pratama"
    },
    {
        text: "Rasanya mantap, harganya terjangkau. Pasti akan pesan lagi!",
        name: "Siti Rahma"
    },
    {
        text: "Nasi goreng spesialnya sangat lezat. Pelayanannya juga ramah.",
        name: "Budi Santoso"
    }
];

let currentIndex = 0;

const testimonialText =
    document.getElementById("testimonial-text");

const testimonialName =
    document.getElementById("testimonial-name");

function showTestimonial(index) {
    currentIndex = (index + testimonials.length) % testimonials.length;

    testimonialText.textContent =
        '"' + testimonials[currentIndex].text + '"';

    testimonialName.textContent =
        testimonials[currentIndex].name;
}

document.getElementById("next").addEventListener("click", function () {
    showTestimonial(currentIndex + 1);
});

document.getElementById("prev").addEventListener("click", function () {
    showTestimonial(currentIndex - 1);
});


// ================================
// 3. VALIDASI FORM KONTAK
// ================================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const hp = document.getElementById("hp").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    const message = document.getElementById("form-message");

    // Validasi kolom kosong
    if (nama === "" || hp === "" || pesan === "") {
        message.textContent = "Mohon isi semua kolom terlebih dahulu!";
        message.style.color = "red";
        return;
    }

    // Validasi nomor HP
    const phonePattern = /^[0-9+\-\s()]{8,20}$/;

    if (!phonePattern.test(hp)) {
        message.textContent = "Nomor HP tidak valid!";
        message.style.color = "red";
        return;
    }

    // Pesan berhasil
    message.textContent =
        "Terima kasih " + nama + "! Form berhasil divalidasi.";

    message.style.color = "green";

    contactForm.reset();
});
