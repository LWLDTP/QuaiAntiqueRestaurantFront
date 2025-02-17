const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnvalidation = document.getElementById("btn-validation-inscription");
const form = document.getElementById("signupForm");

inputNom.addEventListener("keyup", validateForm);
inputPreNom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

// Fonction de validation pour tout le formulaire
function validateForm(event) {
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPreNom);
    const mailOk = validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword);

    // Si tous les champs sont valides, on active le bouton d'inscription
    if (nomOk && prenomOk && mailOk && passwordOk && passwordConfirmOk) {
        btnvalidation.disabled = false; // Active le bouton
    } else {
        btnvalidation.disabled = true; // Désactive le bouton
    }
}

function validateConfirmationPassword(inputPwd, inputConfirmPwd) {
    // Vérifier si les mots de passe sont identiques
    if (inputPwd.value === inputConfirmPwd.value) {
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    } else {
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }
}
 
function validateMail(input){
        //Définir mon regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mailUser = input.value;
        if(mailUser.match(emailRegex)){
            input.classList.add("is-valid");
            input.classList.remove("is-invalid"); 
            return true;
        }
        else{
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
            return false;
        }
    }

function validateRequired(input) {
    // Vérifier que le champ n'est pas vide
    if (input.value.trim() !== '') {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validatePassword(input) {
    // Vérifier la robustesse du mot de passe (min. 8 caractères, au moins une majuscule, un chiffre et un caractère spécial)
    const password = input.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password.match(passwordRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

// Prévenir le comportement par défaut du formulaire au cas où tu veux gérer ça avec AJAX
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire si ce n'est pas validé
    // Tu peux ajouter ici une action pour envoyer le formulaire via AJAX si tout est valide
});
