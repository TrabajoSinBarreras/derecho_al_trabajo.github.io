// main.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form validation
    const form = document.querySelector('.formulario form');
    form.addEventListener('submit', (e) => {
        const name = form.nombre.value.trim();
        const email = form.email.value.trim();
        const message = form.mensaje.value.trim();

        if (name === '' || email === '' || message === '') {
            e.preventDefault();
            alert('Por favor, completa todos los campos.');
        } else {
            alert('Gracias por tu mensaje, ' + name + '! Nos pondremos en contacto contigo pronto.');
        }
    });

    // Dynamic content loading for testimonials
    const testimonialsSection = document.getElementById('testimonios');
    const testimonials = [
        {
            name: 'Juan Pérez',
            message: 'Gracias a la inclusión laboral, he encontrado un trabajo que me apasiona.'
        },
        {
            name: 'María López',
            message: 'La capacitación me ayudó a desarrollar mis habilidades y conseguir empleo.'
        },
        {
            name: 'Carlos García',
            message: 'El apoyo de la comunidad ha sido fundamental en mi proceso de inserción laboral.'
        }
    ];

    testimonials.forEach(testimonial => {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${testimonial.name}:</strong> ${testimonial.message}`;
        testimonialsSection.appendChild(p);
    });
});