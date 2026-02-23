# A02:2025 Security Misconfiguration – Lab

Labs align **only** with the project’s `modules.txt` (OWASP Top 10 2025). Other ideas belong under **Others** or a separate category.

---

## Implemented lab

### Default Accounts & Sample Apps

- **modules.txt:** Scenario 1 – Sample applications not removed from production; default accounts not changed; attacker logs in with default password and takes over.
- **Flow:** User opens the “Sample Admin Console” challenge page (a simulated sample app). They must find and use the default credentials (`admin` / `admin`) to log in. On success they are redirected to a dashboard that shows a flag and a short debrief (what was wrong, remediation).
- **Tech:** Client-side only (no Netlify Function). Session stored in `sessionStorage` so closing the tab logs them out. Safe for public hosting and GitHub.

---

## Optional / future labs (not implemented)

Other scenarios from the reference could be added later as separate labs:

- **Directory listing** (Scenario 2) – Simulated listing page + “exposed” file with a flag.
- **Verbose error messages** (Scenario 3) – Form or API that returns a fake stack trace; flag or version in the response.
- **Missing security headers** (description) – Page with no security headers; learner uses DevTools to list missing headers.

See the main module theory on `misconfiguration.html` for full description and scenarios.

---

## Tech stack and hosting

- **Current:** Static HTML/CSS/JS; no backend required for the default-accounts lab.
- **Security:** No real secrets in repo; “vulnerable” behaviour is intentional and educational only.
- **Netlify:** Sufficient for this module. Optional: Netlify Functions if you add a lab that needs a server-side check (e.g. verbose error API).
