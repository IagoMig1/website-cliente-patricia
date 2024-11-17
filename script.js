
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("show");
    } else {
        navbar.classList.remove("show");
    }
});


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

document.addEventListener('scroll', () => {
    const presentationSection = document.querySelector('.section-presentation');
    const aboutSection = document.querySelector('.section-about');
    const serviceSection = document.querySelector('.section-services');
    const serviceBoxes = document.querySelectorAll('.service-box');

    if (isInViewport(presentationSection)) {
        presentationSection.style.opacity = 1;
        presentationSection.style.transform = 'translateY(0)';
    }

    
    if (isInViewport(aboutSection)) {
        aboutSection.style.opacity = 1;
        aboutSection.style.transform = 'translateY(0)';
    }

  
    if (isInViewport(serviceSection)) {
        serviceSection.style.opacity = 1;
        serviceSection.style.transform = 'translateY(0)';
    }

    serviceBoxes.forEach((box, index) => {
        if (isInViewport(box)) {
            box.style.opacity = 1;
            box.style.transform = 'translateY(0)';
            box.style.transitionDelay = `${index * 0.2}s`; 
        }
    });
});

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear'); 
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.getElementById('politica-section'));
  observer.observe(document.getElementById('empreendedora-section'));
  document.addEventListener("scroll", function () {
    const contactSection = document.getElementById("contact");
    const sectionPosition = contactSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
      contactSection.classList.remove("d-none");
      contactSection.classList.add("appear");
    }
  });

