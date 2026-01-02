# Fullstack Web Application – Frontend & Backend

Dette prosjektet består av en **frontend** og en **backend** som kjøres som
**to separate applikasjoner**. Formålet er å vise **strukturert, vedlikeholdbar
kode** og en **realistisk utviklingsflyt** slik man jobber i profesjonelle team.

---

## Oversikt

- Frontend: React + TypeScript  
- Backend: Node.js + Express + TypeScript  
- Frontend og backend startes separat  
- Kommunikasjon via REST API  
- Storybook for dokumentasjon og utvikling av UI-komponenter

---

## Teknologi

### Frontend
- React
- TypeScript
- Nx (brukes til frontend build, dev-server og Storybook)
- Komponentbasert arkitektur
- Hooks-basert state-håndtering

### Backend
- Node.js
- Express
- TypeScript
- REST API

---

## Live Storybook (Chromatic)
UI-komponentene er publisert via **Chromatic**:
https://689cdb84b3079772a029e4d2-uzjoabaufa.chromatic.com/

Dette gir en interaktiv oversikt over komponenter, props og dokumentasjon.

---

## Forutsetninger
- Node.js (18+ anbefalt)
- npm

---

## Installering

### Frontend
Fra prosjektroten:
- npm install
- npm run start (npx nx serve frontend-workspace)

Frontend kjører på:
http://localhost:4200

### Backend
Fra prosjektroten:
- cd backend
- npm run dev

Backend kjører på:
http://localhost:4000

---

### UI / Dokumentasjon
- Storybook
- Chromatic (publisering av Storybook)

---

## Fokus i prosjektet
- Skalerbar frontend-struktur
- Ryddig og tydelig API-design
- Klar separasjon mellom frontend og backend
- Sterk typing med TypeScript
- Kode skrevet for å være lesbar og vedlikeholdbar over tid
