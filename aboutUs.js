const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carouselSlide');

let scrollInterval;

function scrollCarousel() {
    const scrollPosition = carousel.scrollLeft;
    const slideWidth = slides[0].offsetWidth;
    const currentIndex = Math.round(scrollPosition / slideWidth);
    const nextIndex = (currentIndex + 1) % slides.length;
    const nextScrollPosition = nextIndex * slideWidth;

    carousel.scrollTo({
        left: nextScrollPosition,
        behavior: 'smooth'
    });
}

scrollInterval = setInterval(scrollCarousel, 3000);