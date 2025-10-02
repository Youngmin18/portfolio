# Mon Portfolio

Bienvenu sur le dépôt de mon **Portfolio personnel** !
Ce projet présente mes compétences, mon parcours et une sélection de mes projets récents.
Développé avec **React**, **Vite**, **TailwindCSS** et plusieurs librairies modernes pour enrichir l'expérience utilisateur.

---

## Démo en ligne
[Voir le site en direct](https://Youngmin18.github.io/portfolio)

---

## Technologies utilisées

- [React.js](https://react.dev/) – Framework front-end
- [Vite](https://vitejs.dev/) – Outil de build rapide  
- [Tailwind CSS](https://tailwindcss.com/) – Stylisation rapide et responsive
- [Swiper.js](https://swiperjs.com/) — Carrousel d’images
- [Cloudinary](https://cloudinary.com/) - Hébergement d'images

---

## Dépendances principales

- **[lucide-react](https://lucide.dev/)** – Pack d’icônes moderne et léger 
- **[react-icons](https://react-icons.github.io/react-icons/)** — Icônes supplémentaires (logos frameworks & technos)  
- **[react-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter)** — Effet machine à écrire pour le texte  
- **[react-scroll](https://www.npmjs.com/package/react-scroll)** — Smooth scroll entre sections (`Link`)  
- **[Swiper](https://swiperjs.com/react)** — Carrousel d’images (modules Autoplay, Pagination)  
- **[gh-pages](https://www.npmjs.com/package/gh-pages)** — Déploiement facile sur GitHub Pages  

---

## Fonctionnalités principales

- **Page d'acceuil animée** avec *typewriter*
- **Section "À propos"** avec cube 3D et présentation des compétences
- **Section projets** avec carrousels d'images interactifs
- **Design responsive** (mobile -> desktop)
- **UI moderne** avec dégradés, ombres et animations Tailwind
- Intégration d’icônes avec [Lucide React](https://lucide.dev/) et [React icon](https://www.react-icons.com/)  
- Styling avec **Tailwind CSS**  
- Déploiement automatisé sur **GitHub Pages**  

---

## Installation et lancement

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/Youngmin18/portfolio.git
   cd portfolio 
   ```
2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur local**
   ```bash
   npm run dev
   ```

4. **Construire le projet**
   ```bash
   npm run build
   ```

5. **Déployer sur GitHub Pages**  

   Le portfolio est déployé avec GitHub Pages.

   - **Pour déployer :** 

      ```bash
      npm install gh-pages
      ```
   - **Ajouter ces scripts dans "*package.json*" :**

      ```bash
      "scripts": {
         "predeploy": "npm run build",
         "deploy": "gh-pages -d dist"}
      ```
   - **Puis lance :**

      ```bash
      npm run deploy
      ```
   - **N’oublie pas d’ajouter la configuration base dans ton vite.config.js si nécessaire :**
      ```bash
      // vite.config.js
      export default defineConfig({
         base: "/portfolio/", // remplacer par le nom de ton repo GitHub
      })

      ```

---

## Structure du projet

```
mon-portfolio/
│── public/          # Images, favicon, assets statiques
│── src/             # Code source React
│   ├── components/  # Composants réutilisables
│   ├── assets/      # Images/ressources locales
│   ├── App.jsx      # Point d'entrée principal
│   ├── main.jsx     # Montage React
│── index.html       # Page principale
│── package.json     # Dépendances et scripts
│── vite.config.js   # Configuration de Vite
``` 

---

## Aperçu

![Aperçu Portfolio](https://res.cloudinary.com/daesjxlug/image/upload/v1759430742/portfolio_frqbhc.jpg)

---

## Auteur 

Développé par Laetitia RAMANANTSOA