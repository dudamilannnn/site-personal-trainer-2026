/* =====================================================
   MENU MOBILE
===================================================== */

const menuButton = document.querySelector("#menu-button");
const navbar = document.querySelector(".navbar");

if (menuButton && navbar) {

    menuButton.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

}

/* =====================================================
   FECHAR MENU AO CLICAR EM UM LINK
===================================================== */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navbar) {

            navbar.classList.remove("active");

        }

    });

});

/* =====================================================
   HEADER AO ROLAR
===================================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "0 1px 10px rgba(0,0,0,.05)";

    }

});

/* =====================================================
   BOTÃO VOLTAR AO TOPO
===================================================== */

const backButton = document.querySelector("#backToTop");

if (backButton) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backButton.classList.add("show");

        } else {

            backButton.classList.remove("show");

        }

    });

    backButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/* =====================================================
   CONTADORES
===================================================== */

const counters = document.querySelectorAll(".counter");

function animateCounter(counter) {

    const target = Number(counter.dataset.target);

    let current = 0;

    const increment = Math.max(1, target / 100);

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            counter.textContent = target;

            clearInterval(timer);

        } else {

            counter.textContent = Math.floor(current);

        }

    }, 20);

}

if (counters.length > 0) {

    const counterObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                counterObserver.unobserve(entry.target);

            }

        });

    }, {

        threshold: .5

    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

}

/* =====================================================
   FAQ
===================================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (!question || !answer) return;

    question.addEventListener("click", () => {

        const isOpen = item.classList.contains("active");

        faqItems.forEach(faq => {

            faq.classList.remove("active");

            const faqAnswer = faq.querySelector(".faq-answer");

            if (faqAnswer) {

                faqAnswer.style.maxHeight = null;

            }

        });

        if (!isOpen) {

            item.classList.add("active");

            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});

/* =====================================================
   CARROSSEL DE DEPOIMENTOS
===================================================== */

const slides = document.querySelectorAll(".testimonial-slide");

const nextBtn = document.querySelector("#nextTestimonial");
const prevBtn = document.querySelector("#prevTestimonial");

let currentSlide = 0;

function showSlide(index) {

    if (!slides.length) return;

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

if (slides.length > 0) {

    showSlide(currentSlide);

    if (nextBtn) {

        nextBtn.addEventListener("click", () => {

            currentSlide++;

            if (currentSlide >= slides.length) {

                currentSlide = 0;

            }

            showSlide(currentSlide);

        });

    }

    if (prevBtn) {

        prevBtn.addEventListener("click", () => {

            currentSlide--;

            if (currentSlide < 0) {

                currentSlide = slides.length - 1;

            }

            showSlide(currentSlide);

        });

    }

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    }, 5000);

}

/* =====================================================
   ANIMAÇÃO AO ENTRAR NA TELA
===================================================== */

const animatedElements = document.querySelectorAll(

    ".service-card, .plan-card, .result-card, .info-card, .stats-grid article, .timeline-grid article"

);

animatedElements.forEach(element => {

    element.classList.add("fade-up");

});

if (animatedElements.length > 0) {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: .15

    });

    animatedElements.forEach(element => {

        observer.observe(element);

    });

}

/* =====================================================
   FORMULÁRIO → WHATSAPP
===================================================== */

const form = document.querySelector("#contactForm");

if (form) {

    form.addEventListener("submit", event => {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();

        const phone = document.querySelector("#phone").value.trim();

        const goal = document.querySelector("#goal").value;

        const message = document.querySelector("#message").value.trim();

        const text =

`Olá, Mariana!

Meu nome é ${name}.

Telefone: ${phone}

Objetivo: ${goal}

Mensagem:
${message}`;

        const url =

`https://wa.me/5516999999999?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");

    });

}