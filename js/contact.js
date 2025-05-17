
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_btp', 'template_b64uwba', this)
    .then(() => {
      alert('Message envoyé avec succès !');
      document.getElementById('contactForm').reset();
    }, (error) => {
      console.error('Erreur EmailJS :', error);
      alert('Erreur lors de l’envoi du message. Veuillez réessayer.');
    });
});
