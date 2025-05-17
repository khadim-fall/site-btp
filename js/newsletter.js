function submitForm(event) {
        event.preventDefault(); // Empêche le rechargement de la page

        var email = document.getElementById("email").value;

        if (email) {
          alert(
            "Merci pour votre inscription, nous avons reçu votre email : " +
              email
          );
          // Ici, tu pourrais envoyer l'email à un service ou API
        } else {
          alert("Veuillez entrer un email valide.");
        }
      }