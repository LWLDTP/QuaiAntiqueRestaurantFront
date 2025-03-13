// Sélection des éléments du DOM
const inputName = document.getElementById("NameInput");
const inputFirstName = document.getElementById("FirstNameInput");
const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidatePassword = document.getElementById("ValidatePasswordInput");
const btnValidate = document.getElementById("btn-validate-signup");
const subscribeForm = document.getElementById("subscribeForm");


// L'URL de l'API pour l'inscription
const apiUrl = "http://127.0.0.1:8000/api/";

// Ajout des écouteurs d'événements
inputName.addEventListener("keyup", validateForm);
inputFirstName.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);

btnValidate.addEventListener("click", subscribeUser);

// Fonction permettant de valider tout le formulaire
function validateForm() {
    const nameOk = validateRequired(inputName);
    const firstNameOk = validateRequired(inputFirstName);
    const emailOk = validateMail(inputEmail);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidatePassword);

    if (nameOk && firstNameOk && emailOk && passwordOk && passwordConfirmOk) {
        btnValidate.disabled = false;
    } else {
        btnValidate.disabled = true;
    }
}

// Validation de l'email avec regex
function validateMail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if (mailUser.match(emailRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}

// Validation du mot de passe avec regex
function validatePassword(input) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if (passwordUser.match(passwordRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}

// Validation de la confirmation du mot de passe
function validateConfirmationPassword(inputPwd, inputConfirmPwd) {
    if (inputPwd.value == inputConfirmPwd.value) {
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    } else {
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }
}

// Fonction qui vérifie si l'input est vide ou pas
function validateRequired(input) {
    if (input.value !== '') {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}

// Fonction d'inscription de l'utilisateur
function subscribeUser(event) {
    let dataFrom = new FormData(subscribeForm);

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    let raw = JSON.stringify({
        "firstName":dataFrom.get("name"),
        "lastName": dataFrom.get("firstName"),
        "email": dataFrom.get("email"),
        "password": dataFrom.get("password")
    });
    
    let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    
    fetch(apiUrl+"registration", requestOptions)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        else{
            alert("Erreur lors de l'inscription");
        }
    })
    .then(result => {
        alert("Bravo "+dataFrom.get("firstName")+", vous êtes maintenant inscrit, vous pouvez vous connecter.");
        document.location.href="/signin";
    })
    .catch(error => console.log('error', error));
    }
