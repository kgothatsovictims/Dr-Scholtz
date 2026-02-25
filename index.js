document.querySelector('.mobile-toggle').addEventListener('click', function() {
      document.querySelector('.nav-links').classList.toggle('active');
    });

    let currentSlide = 0;
    const carousel = document.getElementById('carousel');
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    function showSlide(index) {
      if (index >= totalSlides) currentSlide = 0;
      else if (index < 0) currentSlide = totalSlides - 1;
      else currentSlide = index;
      carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    function prevSlide() {
      showSlide(currentSlide - 1);
    }