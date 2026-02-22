<<<<<<< HEAD
# Hackers Arena – OWASP Top 10 2025 Labs

**A vulnerable web application for beginners in web application VAPT (Vulnerability Assessment and Penetration Testing).**

🚀 **Live Demo**: [Hackers Arena](https://hackers-arena.netlify.app/)

This is a **CTF-style vulnerable web app** for security enthusiasts to practice **ethical hacking** and learn **OWASP Top 10 2025** in a safe, educational environment. It is intended for **bug hunters**, **pentesters**, and **security researchers** learning secure coding and defensive practices.

---

## Features

- **OWASP Top 10 2025** – All 10 categories represented; existing labs plus placeholders for upcoming modules.
- **Interactive challenges** – Realistic, exploitable scenarios (IDOR, XSS, SQLi, auth bypass, info disclosure).
- **Theory + practice** – Each lab includes significance, impact, and remediation.
- **Serverless-friendly** – Can be hosted on Netlify or any static host; optional serverless APIs for SQLi/auth.
- **Educational only** – For authorized testing and learning. Do not use against systems you do not own or have permission to test.

---

## OWASP Top 10 2025 – Lab Status

| ID | Category | Status | Module / Notes |
|----|----------|--------|-----------------|
| **A01:2025** | Broken Access Control | ✅ Lab | [IDOR](Modules/IDOR/) – Insecure Direct Object References |
| **A02:2025** | Security Misconfiguration | 🚧 Coming soon | Placeholder + [Info Disclosure](Modules/Info_Disclosure/) (sensitive data exposure) |
| **A03:2025** | Software Supply Chain Failures | 🚧 Coming soon | Placeholder |
| **A04:2025** | Cryptographic Failures | 🚧 Coming soon | Placeholder |
| **A05:2025** | Injection | ✅ Labs | [SQL Injection](Modules/SQli/), [XSS](Modules/XSS/) |
| **A06:2025** | Insecure Design | 🚧 Coming soon | Placeholder |
| **A07:2025** | Authentication Failures | ✅ Lab | [Insecure Authentication](Modules/Insecure_Authentication/) |
| **A08:2025** | Software or Data Integrity Failures | 🚧 Coming soon | Placeholder |
| **A09:2025** | Security Logging & Alerting Failures | 🚧 Coming soon | Placeholder |
| **A10:2025** | Mishandling of Exceptional Conditions | 🚧 Coming soon | Placeholder |

**Extra lab (related to A02 / general):** [Sensitive Information Disclosure](Modules/Info_Disclosure/) – hardcoded credentials, client-side secrets.

---

## Project structure

```
├── index.html              # Homepage – OWASP Top 10 2025 lab grid
├── style.css               # Global styles for homepage
├── README.md
├── package.json
└── Modules/
    ├── _shared/
    │   └── coming_soon.css # Shared styles for placeholder pages
    ├── IDOR/               # A01 – Broken Access Control
    ├── XSS/                 # A05 – Injection (XSS)
    ├── SQli/                # A05 – Injection (SQLi)
    ├── Insecure_Authentication/  # A07 – Authentication Failures
    ├── Info_Disclosure/     # A02 / Sensitive data exposure
    ├── A02_Security_Misconfiguration/
    ├── A03_Supply_Chain/
    ├── A04_Cryptographic_Failures/
    ├── A06_Insecure_Design/
    ├── A08_Data_Integrity/
    ├── A09_Logging/
    └── A10_Exceptional_Conditions/
```

Each **active lab** typically has:

- `*.html` – Module intro (theory + link to challenge) and challenge/dashboard pages.
- `*.css` – Module-specific styles.
- `*.js` – Client-side logic (intentionally vulnerable for the lab).
- Optional: `user-data.json` (IDOR), API endpoints (e.g. Netlify functions for login/SQLi).

---

## Running locally

1. Clone the repo and open the project folder.
2. Serve the files with any static server (e.g. `npx serve .` or VS Code Live Server).
3. Open `index.html` (or the root URL) to see the OWASP Top 10 2025 lab grid.

**Note:** Labs that rely on `/api/login`, `/api/sqli`, or `/api/auth-manipulation` need corresponding backend or Netlify functions for full functionality. The static pages and client-side logic still demonstrate the vulnerabilities.

---

## Adding new labs

- **New OWASP category:** Add a folder under `Modules/` (e.g. `Modules/A04_Cryptographic_Failures/`). Start with theory + challenge pages and link from `index.html` in the lab grid.
- **Replace placeholder:** Turn the matching `coming_soon.html` into a full module (e.g. add `index.html` or `lab.html` and point the homepage card to it).
- Reuse patterns from existing modules: back link to `../../index.html`, OWASP ref in the header, shared button/card styles as needed.

---

## Disclaimer

This project is for **education and authorized security testing only**. Use only in environments you own or have explicit permission to test. The authors are not responsible for misuse.
=======
# 🛡️ Vulnerable Web App - Hackers Arena

🚀 **Live Demo**: [Hackers Arena](https://hackers-arena.netlify.app/)  

This is a **CTF-style vulnerable web application** designed for security enthusiasts to practice **ethical hacking** techniques and learn about **OWASP Top 10 vulnerabilities**. The project simulates real-world security flaws, making it a great playground for **bug hunters, pentesters, and security researchers**.

---

## 📌 Features
✅ **Multiple Security Labs** covering common web vulnerabilities  
✅ **Interactive Challenges** with realistic exploitation scenarios  
✅ **Serverless Architecture** hosted on **Netlify**  
✅ **No Database Required** – Focused on security testing  
✅ **Educational Purpose Only** – Learn secure coding & best practices  

---

## 🔥 Vulnerabilities Covered
This project includes labs for the following web security issues:

- **[IDOR (Insecure Direct Object References)](Modules/IDOR/)**  
- **[XSS (Cross-Site Scripting)](Modules/XSS/)**  
- **[SQL Injection](Modules/SQLi/)**  
- **[Insecure Authentication](Modules/Insecure_Authentication/)**  
- **[Information Disclosure](Modules/Info_Disclosure/)**  

🚧 *More vulnerabilities will be added in future updates!*  


