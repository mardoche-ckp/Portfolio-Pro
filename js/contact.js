document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulaire");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        
        const nom = form.querySelector('input[name="nom"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const sujet = form.querySelector('input[name="sujet"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();

        
        if (!nom || !email || !sujet || !message) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        
        const button = form.querySelector("button");
        button.disabled = true;
        button.textContent = "Envoi en cours...";

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                alert("Message envoyé avec succès !");
                form.reset();
            } else {
                alert("Erreur lors de l'envoi. Réessayez.");
            }
        } catch (error) {
            alert("Problème de connexion. Vérifiez votre internet.");
        }

        button.disabled = false;
        button.innerHTML = 'ENVOYER LE MESSAGE <i class="fa-solid fa-dice"></i>';
    });
});
