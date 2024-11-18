// Objet regex dont le pattern est de permettre seulement des chiffres
const REGEX_SEULEMENT_CHIFFRE = /^\d{7}$/;
const REGEX_SEULEMENT_CHIFFRE2 = /^[1-2]\d*$/;

// Les éléments html du formulaire utilisés dans le script
const inputNoDA = document.getElementById('numero_da');             // Le input du numéro de da
const declaration = document.getElementById('declaration');         // Le checkbox de la déclaration
const sliderNote = document.getElementById('note_estime');          // Le slider de sélection de la note estimée
const titreNote = document.getElementById('titre_note_estime');     // Le titre de la note estimé
const daIconeErreur = document.getElementById('da_icone_erreur');   // L'icone d'erreur associée au input du numéro de da
const daIconeSucces = document.getElementById('da_icone_succes');   // L'icone de succès associée au input du numéro de da

// Initialisation de l'affichage de la bonne icone associé au numéro de da
daIconeErreur.classList.remove('hidden');
daIconeSucces.classList.add('hidden');

/**
 * Modifie les classes d'un élément icone selon la valeur d'une note
 * @param {integer} note La note utilisée pour savoir qu'elle classe prendre
 */
function ModifierIconeNoteDA(note) {
    // l'élément icone qui sera modifié
    const iconeNote = document.getElementById('icone_note');
    // On initialise les classes de l'élément à "vide"
    iconeNote.setAttribute("class", "");

    // Ajout des bonnes classes selon la valeur de la note
    // À COMPLÉTER
}

/**
 * Affiche un message dans la première balise small du même niveau qu'un élément html
 * @param {HTMLElement} element L'élément html de départ
 * @param {string} message Le message à afficher
 */
function AfficherMessage(element, message = '') {
    const zoneMessage = document.getElementById('message_numero_da');  // Utilisation de l'id explicitement
    if (zoneMessage) {
        zoneMessage.innerHTML = message;
    } else {
        console.error('L\'élément <small> avec id="message_numero_da" est introuvable.');
    }
}

/**
 * Génère un nombre entier aléatoirement
 * @param {int} min La valeur minimum du nombre généré
 * @param {int} max La valeur maximum du nombre généré
 * @returns Un nombre entier
 */
function ObtenirNombreAleatoire(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function GererAffichageValidation(estValide) {


    if (estValide) {
        daIconeErreur.classList.add('hidden');  // Masque l'icône d'erreur
        daIconeSucces.classList.remove('hidden'); // Affiche l'icône de succès
    } else {
        daIconeErreur.classList.remove('hidden'); // Affiche l'icône d'erreur
        daIconeSucces.classList.add('hidden');    // Masque l'icône
    }
}
function ValidationDa(inputNoDA){
    return REGEX_SEULEMENT_CHIFFRE.test(inputNoDA);
}

let NumeroDa = "1234567"; // Exemple de numéro de DA
if (ValidationDa(NumeroDa)) {
    console.log("Le numéro de DA est valide.");
} else {
    console.log("Numéro de DA invalide.");
}

    const numda = inputNoDA.value;

    if (ValidationDa(numda)) {
        daIconeErreur.classList.add('hidden');
        daIconeSucces.classList.remove('hidden');
        AfficherMessage(inputNoDA, "Numéro valide.");
    } else {
        daIconeErreur.classList.remove('hidden');
        daIconeSucces.classList.add('hidden');
        AfficherMessage(inputNoDA, "Le numéro de DA doit contenir uniquement des chiffres.");
    }

function PremierNombre(numda){
    return REGEX_SEULEMENT_CHIFFRE2.test(numda);
}

if (PremierNombre(numda)) {
    daIconeErreur.classList.add('hidden');
    daIconeSucces.classList.remove('hidden');
    AfficherMessage(inputNoDA, "Première lettre valide");
} else {
    daIconeErreur.classList.remove('hidden');
    daIconeSucces.classList.add('hidden');
    AfficherMessage(inputNoDA, "Le premier chiffre doit être 1 ou 2");
}
function ValiderNumeroDA() {
    const numda = inputNoDA.value.trim();

    // Vérifie si le numéro a exactement 7 chiffres
    if (!REGEX_SEULEMENT_CHIFFRE.test(numda)) {
        AfficherMessage("Le numéro de DA doit contenir exactement 7 chiffres.");
        GererAffichageValidation(false);
        return;
    }

    // Vérifie si le numéro commence par 1 ou 2
    if (!REGEX_SEULEMENT_CHIFFRE2.test(numda)) {
        AfficherMessage("Le numéro de DA doit commencer par 1 ou 2.");
        GererAffichageValidation(false);
        return;
    }

    // Si toutes les validations passent
    AfficherMessage("Numéro de DA valide.");
    GererAffichageValidation(true);
}

if (inputNoDA) {
    inputNoDA.addEventListener('input', ValiderNumeroDA);
} else {
    console.error("L'élément inputNoDA n'a pas été trouvé dans le DOM.");
}

function ModifierIconeNote() {
    const note = parseInt(sliderNote.value);
    const iconeNote = document.getElementById('icone_note');
    titreNote.textContent = `Ma note estimée = ${note}%`;

    iconeNote.className = "";

    if (note <= 19) {
        iconeNote.classList.add('far', 'fa-sad-cry');
    } else if (note <= 39) {
        iconeNote.classList.add('far', 'fa-sad-tear');
    } else if (note <= 59) {
        iconeNote.classList.add('far', 'fa-frown');
    } else if (note <= 79) {
        iconeNote.classList.add('far', 'fa-smile');
    } else {
        iconeNote.classList.add('far', 'fa-grin-squint-tears');
    }
}


if (inputNoDA) {
    inputNoDA.addEventListener('input', ValiderNumeroDA);
} else {
    console.error("L'élément inputNoDA (#numero_da) est introuvable dans le DOM.");
}

if (sliderNote) {
    sliderNote.addEventListener('input', ModifierIconeNote);
} else {
    console.error("L'élément sliderNote (#note_estime) est introuvable dans le DOM.");
}

ModifierIconeNote();

function ValidationSubmit(){
    const small = document.getElementById("message_numero_da");
}