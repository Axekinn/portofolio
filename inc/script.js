// script.js

function telechargerFichier() {
    // URL du fichier à télécharger
    var url = "cv.pdf";

    // Création d'un élément <a> pour déclencher le téléchargement
    var lien = document.createElement('a');
    lien.href = url;

    // Spécifier le nom du fichier à télécharger
    lien.download = "test.ext";

    // Cacher l'élément <a> et déclencher le téléchargement
    lien.style.display = 'none';
    document.body.appendChild(lien);
    lien.click();

    // Supprimer l'élément <a> après le téléchargement
    document.body.removeChild(lien);
}
