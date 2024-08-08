let index = 0;

function showNextTestimonial() {
    const slider = document.querySelector('.testimonial-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    index++;
    if (index >= testimonials.length) {
        index = 0;
    }
    const translateX = -index * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

setInterval(showNextTestimonial, 3000);  // Slide every 3 seconds
