        const carousel = document.getElementById('reviewsCarousel');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        let scrollAmount = 0;
        const cardWidth = carousel.querySelector('div').offsetWidth + 32; // 32px gap

        nextBtn.addEventListener('click', () => {
            if (scrollAmount + cardWidth * 3 < carousel.scrollWidth) {
                scrollAmount += cardWidth;
                carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
            }
        });

        prevBtn.addEventListener('click', () => {
            if (scrollAmount - cardWidth >= 0) {
                scrollAmount -= cardWidth;
            } else {
                scrollAmount = 0;
            }
            carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        });
