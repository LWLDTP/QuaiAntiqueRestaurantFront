const galerieImage = document.getElementById("allImages");

// Appel de la fonction getImage avec des paramètres
let titre = '<img src=x onerror="window.location(\'https://google.com\')"/>';
let imgSource =  "../image/food.jpeg";

let monImage = getImage(titre, imgSource);

// Mise à jour du contenu HTML de la galerie avec l'image générée
galerieImage.innerHTML = monImage;



// Fonction pour générer le HTML de l'image
function getImage(titre, urlImage){
    titre = sanitizeHtml(titre);
    urlImage = sanitizeHtml(urlImage);
    return ` <div class="col p-3">
                <div class="image-card text-white">
                    <img src="${urlImage}" class="rounded w-100"/>
                    <p class="titre-image">${titre}</p>
                    <div class="action-image-buttons" data-show="admin">
                        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"></button>
                        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"></button>
                    </div>
                </div>
            </div>`;
}
