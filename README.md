# 🔍 **Debounce Search Demo with React & TypeScript**

Une démonstration interactive pour illustrer l'impact du *debounce* sur les requêtes API dans un champ de recherche avec autocomplétion. Ce projet utilise **Vite, React et TypeScript** pour une implémentation légère et performante.

**[🔗 Lien vers la démo](https://react-use-debounce-exemple.vercel.app/)** 
---

## 📌 **Fonctionnalités**
- **Champ de recherche dynamique** avec autocomplétion.
- **Comparaison en temps réel** du nombre de requêtes API :
    - **Sans *debounce*** : Une requête par caractère tapé.
    - **Avec *debounce*** : Une requête après un délai d'inactivité (300ms par défaut).
- **Hook `useDebounce` réutilisable** pour tout projet React/TypeScript.

---

## 🛠 **Technologies utilisées**
   Outil/Technologie | Version/Rôle |
 |-------------------|-------------|
| **Vite**          | Outil de build ultra-rapide pour le développement frontend. |
| **React**         | Bibliothèque JavaScript pour les interfaces utilisateur. |
| **TypeScript**    | Typage statique pour un code plus robuste. |
| **useDebounce**   | Hook personnalisé pour optimiser les requêtes API. |

---

## 🚀 **Installation et exécution**

### Prérequis
- Node.js (v22 ou supérieur)
- npm ou yarn

### Projet externe 
- Utilisation de l'API https://fakestoreapi.com/
