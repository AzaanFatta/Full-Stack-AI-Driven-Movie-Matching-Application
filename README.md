# 🎬 Full-Stack AI-Driven Movie Matching Application

<p align="center">
  <img src="https://github.com/user-attachments/assets/5dff3999-8c5e-487b-bd6b-bd21fba34b0d" alt="Movie Matching App Preview" width="600"/>
</p>

> An AI-powered movie discovery platform built with **Java 17**, **Spring Boot 3.x**, **Angular 18**, and **MySQL 8**, offering personalized movie recommendations, JWT-based authentication, RESTful APIs, and a seamless, modern user experience.

<p align="center">
  <a href="https://img.shields.io/badge/Java-17-orange?logo=java"><img alt="Java" src="https://img.shields.io/badge/Java-17-orange?logo=java"></a>
  <a href="https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?logo=springboot"><img alt="Spring Boot" src="https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?logo=springboot"></a>
  <a href="https://img.shields.io/badge/Angular-18-DD0031?logo=angular"><img alt="Angular" src="https://img.shields.io/badge/Angular-18-DD0031?logo=angular"></a>
  <a href="https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript"></a>
  <a href="https://img.shields.io/badge/MySQL-8.0-4479A1?logo=mysql"><img alt="MySQL" src="https://img.shields.io/badge/MySQL-8.0-4479A1?logo=mysql"></a>
  <a href="https://img.shields.io/badge/RESTful_APIs-Enabled-4CAF50"><img alt="RESTful APIs" src="https://img.shields.io/badge/RESTful_APIs-Enabled-4CAF50"></a>
</p>

---

## 🎥 Overview

This full-stack web application combines **Angular** and **Spring Boot** to create a complete movie platform experience.  
It integrates **AI/NLP APIs** for generating movie insights, a **secure JWT authentication** system for login and access control, and an optimized UI that supports **lazy loading**, **infinite scrolling**, and **server-side pagination**.

The platform leverages a database of **100,000+ movies** and can serve **10,000+ simultaneous users**, demonstrating scalable data retrieval, modular backend design, and a dynamic, responsive front-end architecture.


---


## 🎞️ Demo Preview

<p align="center">
  <img src="https://github.com/user-attachments/assets/d921acd9-552d-48ea-b521-3f194ada0fb7" alt="Movie App Demo" width="600"/>
</p>



---

## ✨ Highlights

- 🎞️ **AI-Driven Recommendations** — NLP-enhanced movie matching powered by external APIs.  
- 🔐 **JWT Authentication** — secure token-based login, registration, and session management.  
- 👥 **Role-Based Access Control** — different privileges for users and administrators.  
- ⚙️ **RESTful APIs** — modular endpoints for authentication, movie retrieval, and suggestions.  
- 🚀 **Lazy Loading & Infinite Scrolling** — enhances UX with on-demand data rendering.  
- 🧩 **Server-Side Pagination** — efficient loading for large movie datasets.  
- 💡 **Smart Error Handling** — global interceptors and toast notifications for user feedback.  
- 🎨 **Responsive UI** — Angular 18 frontend designed with modern CSS and adaptive layouts.

---

## 🧠 Behind the App

The **Spring Boot backend** exposes RESTful endpoints that power authentication, data fetching, and recommendation logic.  
It uses **Spring Security + JWT** for stateless authentication, **Spring Data JPA** for data persistence, and **Hibernate ORM** for managing relational entities.

The **Angular frontend** consumes these APIs via HTTP interceptors and employs advanced features like **route guards**, **observable streams**, and **component state management** to ensure smooth user experience and scalability.

The integration between frontend and backend follows a **clean layered architecture** with well-defined domain models and service layers.

---

## 🖥️ System Architecture

```
┌────────────────────────────────────────────┐
│                Angular 18 UI               │
│  (Movie Search, Authentication, Routing)   │
└────────────────────────────────────────────┘
                     │
                     ▼
┌────────────────────────────────────────────┐
│            Spring Boot REST API            │
│ (JWT Security, Controllers, Services, JPA) │
└────────────────────────────────────────────┘
                     │
                     ▼
┌────────────────────────────────────────────┐
│                MySQL Database              │
│ (User Accounts, Movie Data, Preferences)   │
└────────────────────────────────────────────┘
```

---

## 🧩 Tech Stack

| Layer | Technologies |
|:------|:--------------|
| **Frontend** | Angular 18, TypeScript, HTML5, CSS3 |
| **Backend** | Java 17, Spring Boot 3.x, Spring Security, Spring Data JPA, Hibernate |
| **Database** | MySQL 8.0 |
| **AI/NLP APIs** | RapidAPI (movie-database-alternative, open-ai21) |
| **Authentication** | JWT, BCrypt password encoding |
| **UX Features** | Lazy Loading, Infinite Scrolling, Responsive Layout |
| **Tools** | IntelliJ IDEA, VS Code, Postman |

---

## 🔑 API Configuration

To use your own keys, replace placeholder tokens in:

**home.component.ts**  
**movie-details.component.ts**  
**movie.service.ts**  

Example:
```typescript
const headers = {
  'X-RapidAPI-Key': 'YOUR_API_KEY_HERE',
  'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
};
```


---

## 🖼️ UI & Experience

- 🎬 Dynamic movie cards with posters and hover animations  
- 🔎 Search-as-you-type interaction  
- 📜 Scroll-to-load movie results  
- 💬 Real-time error handling with Angular interceptors  
- 🧭 Clean routing between Login, Search, and Details pages  
- 🌙 Dark and minimalist theme for professional aesthetics  

---

## 🚀 How to Run Locally

### 1️⃣ Backend Setup
```bash
cd SpringAPI
mvn spring-boot:run
```
> Make sure a MySQL database named `login` exists and update credentials in `application.properties`.

### 2️⃣ Frontend Setup
```bash
cd movieproj
npm install
ng serve
```
Then visit [http://localhost:4200/login](http://localhost:4200/login)

---

## 🧩 Lessons Learned

This project was one of my biggest full-stack learning experiences. I had to teach myself TypeScript and Angular from scratch, learning how reactive components, dependency injection, and observables worked while building production-level front-end architecture.

On the backend, I learned to connect Spring Boot to MySQL, design proper table relationships, and persist user authentication with JWT and Spring Security. Integrating these technologies together, alongside multiple third-party APIs, taught me what true full-stack development really looks like.

Bringing everything together, I learned how the frontend, backend, and database can operate as a single, unified system. It pushed me to think like a software engineer: planning architecture, managing data flow, and ensuring scalability while maintaining a seamless user experience.

---

## 🙌 Credits

Built by **Azaan Fatta**  
Developed in **Java 17**, **Spring Boot 3.x**, **Angular 18**, and **MySQL 8.0**  

<p align="center">

</p>
