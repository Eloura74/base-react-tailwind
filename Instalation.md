# Guide d'Installation React + Vite + Tailwind

## 1. Préparation du Projet

Aller dans votre repertoire:

## 2. Création du Projet Vite

Tapper dans le terminal :

```bash
npm create vite@latest .
```

Sélectionner les options suivantes :

- **enter pour le premier pour être dans votre dossier actuel, sinon choissez** : 'votre chemin/nom_du_dossier'
- ✨ **Premier choix** : `React`
- 🔧 **Second choix** : `JavaScript`

## 3. Installation de Tailwind CSS

Tapper :

```bash
npm install tailwindcss @tailwindcss/vite
```

## 4. Configuration de Vite

Ensuite aller dans le fichier `vite.config.ts`

Ajouter :

```typescript
import tailwindcss from "@tailwindcss/vite";
```

Et corriger :

```typescript
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

## 5. Configuration de Tailwind

Dans le dossier `src` :
Aller dans `index.css` et :

> Soit effacer le tout soit ajouter au début :

```css
@import "tailwindcss";
```

# Installation des dépendances

Pour installer toutes les dépendances nécessaires au projet, exécutez les commandes suivantes :

```bash
# Installation des dépendances de routage
npm install react-router-dom@7.1.4

# Installation des dépendances SEO
npm install react-helmet-async@2.0.5

```

## 6. Lancement du Projet

Ensuite en CLI :

```bash
npm run dev
```

---

## Versions des packages

Les packages principaux utilisés dans ce projet sont :

- `react-router-dom` (v7.1.4) - Pour la gestion des routes
- `react-helmet-async` (v2.0.5) - Pour la gestion des métadonnées SEO
- `tailwindcss` (v4.0.1) - Pour le styling
- `@tailwindcss/vite` (v4.0.1) - Plugin Tailwind pour Vite

### Autres dépendances importantes

- `react` (v18.3.1)
- `react-dom` (v18.3.1)
- `vite` (v6.0.5)

Note : Toutes les versions exactes sont définies dans le fichier `package.json`

### 🚀 À vous de jouer !
