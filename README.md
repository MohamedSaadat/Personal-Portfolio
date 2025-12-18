# 🚀 Personal Portfolio & UI Customizer

A sophisticated, responsive landing page featuring a dynamic testimonial carousel and a comprehensive UI customization system (Dark Mode & Font Switching) with persistent storage.

---

## 📛 Project Badges

![Frontend](https://img.shields.io/badge/Frontend-Development-blue?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Yes-green?style=for-the-badge)
![License-MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Project Status-Active](https://img.shields.io/badge/Status-Active-blue?style=for-the-badge)

---

## 📌 Project Overview

This project is an interactive web experience designed to showcase advanced front-end development skills. It goes beyond static layouts by allowing users to personalize their viewing experience, which is then remembered by the browser.

**The purpose of this project:**
- Implement **Dynamic Carousel logic** with responsive breakpoints.
- Master **Data Persistence** using Browser LocalStorage.
- Create a **Theme Switcher** (Dark/Light mode) using Tailwind CSS.
- Build a **Font Customizer** to switch between multiple Arabic/English fonts (Alexandria, Tajawal, Cairo).
- Practice **Clean Code** and DOM manipulation.

---

## 🔧 How It Works (JavaScript Logic)

- **Responsive Carousel:** The slider calculates the number of visible cards based on the window width (`window.innerWidth`) and adjusts its behavior for Mobile, Tablet, and Desktop.
- **Persistence Layer:** Every user preference (Theme choice, Selected Font) is saved in `localStorage`. When the page reloads, a script instantly retrieves and applies these settings.
- **Dynamic Styling:** Used `classList` and `setAttribute` to manipulate the DOM and apply Tailwind utility classes on the fly.

---

## 🎨 Features

- 🎠 **Smart Carousel:** Smooth sliding testimonials with auto-adjusting steps.
- 🌓 **Dark/Light Mode:** Full theme toggle that saves user preference.
- 🔡 **Font Switcher:** Ability to switch between 3 professional fonts with a "Active" state indicator.
- 💾 **State Persistence:** Your settings (Theme & Font) stay the same even after closing the browser.
- 📱 **Mobile First:** Fully optimized for all screen sizes using Tailwind's responsive modifiers.
- 🔄 **Reset System:** A dedicated button to clear all preferences and restore default settings.

---

## 🧰 Tech Stack

| Technology            | Purpose                                                                 |
| --------------------- | ----------------------------------------------------------------------- |
| **HTML5** | Semantic structure for accessibility and SEO.                          |
| **Tailwind CSS** | Modern styling using utility-first classes and Dark Mode integration.   |
| **JavaScript (ES6+)** | Handling Carousel logic, Event Listeners, and LocalStorage API.        |
| **LocalStorage** | Storing user preferences for a personalized experience.                |
| **Google Fonts** | Providing high-quality typography (Alexandria, Tajawal, Cairo).         |
| **GitHub Pages** | Hosting the live production version of the project.                    |

---

## 📁 Project Structure

Personal-Portfolio/
│
├── index.html                # Main portfolio page
│
├── assets/
│   ├── css/
│   │   ├── style.css         # Main styles (global / Tailwind output)
│   │   └── myStyle.css       # Custom overrides & components styles
│   │
│   ├── js/
│   │   └── index.js          # JavaScript logic (scroll, carousel, interactions)
│   │
│   └── imgs/                 # Images & assets (avatars, icons, etc.)
│
└── README.md                 # Project documentation


## 📜 License

This project is licensed under the **MIT License**.
You are free to modify, reuse, and build upon it for personal or commercial use.

---

## 🖥️ Live Demo

👉 **View the Dashboard Online:**

```
https://mohamedsaadat.github.io/Personal-Portfolio/
```

## 📧 Contact

If you’d like to collaborate or discuss UI/UX or front-end design:

**Author:** Mohamed Saadat

**Email:** mohamed93saadat@gmail.com

**GitHub:** [https://github.com/MohamedSaadat](https://github.com/MohamedSaadat)
