import Route from "./route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "la galerie", "/pages/galerie.html"),
    new Route("/signin", "connexion", "/pages/auth/signin.html"),
    new Route("/signup", "inscription", "/pages/auth/signup.html"),
    new Route("/account", "Mon compte", "/pages/auth/account.html"),
    new Route("/editPassword","changement de mot de passe", "/pages/auth/editPassword.html"),
    new Route("/allResa","Vos réservations", "/pages/reservations/allResa.html"),
    
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
