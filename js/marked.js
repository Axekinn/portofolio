// markdown-script.js

// Texte au format Markdown
const markdownText = `
# Bienvenue sur mon site
Ceci est un **exemple** d'utilisation de *Marked.js* pour convertir du Markdown en HTML.

## Liste des éléments
- Élément 1
- Élément 2
- Élément 3

Voici un [lien vers un site](https://www.example.com).

\`\`\`javascript
// Exemple de code JavaScript
console.log('Bonjour le monde');
\`\`\`
`;

// Convertir le texte Markdown en HTML
const htmlContent = marked(markdownText);

// Insérer le HTML généré dans l'élément avec l'ID 'markdown-content'
document.getElementById('markdown-content').innerHTML = htmlContent;
