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

## 6. Lancement du Projet

Ensuite en CLI :

```bash
npm run dev
```

---

### 🚀 À vous de jouer !
