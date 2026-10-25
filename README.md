# Module 4 - Practical 1: Website Development and Version Control Using Git and GitHub

## Aim & Overview
Design and develop a responsive personal portfolio website and manage its source code using Git and GitHub, demonstrating repository creation, branching, commits, merging, and push/pull operations.

## Developer Identity
- **Name**: Arjun E Naik
- **Role**: AI Agent Architect | Quantum ML Researcher | Full-Stack Engineer
- **GitHub**: [https://github.com/Arjun-E-Naik](https://github.com/Arjun-E-Naik)
- **LinkedIn**: [https://in.linkedin.com/in/arjun-e-naik](https://in.linkedin.com/in/arjun-e-naik)

---

## Git & GitHub Version Control Workflow Demonstration

### Step 1: Initialize Git Repository
```bash
git init
```

### Step 2: Add Files & Initial Commit
```bash
git add .
git commit -m "feat: initial commit of responsive portfolio website with Bootstrap 5"
```

### Step 3: Create Feature Branch
```bash
git checkout -b feature/dark-mode-and-project-filters
```

### Step 4: Implement Feature & Commit
```bash
# Added theme toggler and dynamic project filter in main.js
git add js/main.js css/style.css
git commit -m "feat: add dynamic light/dark theme toggle and project category filter"
```

### Step 5: Merge Feature Branch into Main
```bash
git checkout main
git merge feature/dark-mode-and-project-filters -m "merge: integrate feature/dark-mode-and-project-filters into main"
```

### Step 6: View Commit History
```bash
git log --graph --oneline --decorate -n 10
```

### Step 7: Push to GitHub Remote Repository
```bash
# Create a new repository named 'portfolio' on your GitHub account (https://github.com/new)
git remote add origin https://github.com/Arjun-E-Naik/portfolio.git
git branch -M main
git push -u origin main
```

### Step 8: Deploy via GitHub Pages
1. Go to your repository on GitHub: `https://github.com/Arjun-E-Naik/portfolio`
2. Click **Settings** &rarr; **Pages** (under the "Code and automation" section).
3. Under **Branch**, select `main` and folder `/ (root)`, then click **Save**.
4. In ~1 minute, your portfolio will be live at:
   `https://arjun-e-naik.github.io/portfolio/`

---

## File Structure
```
Module4-P1/
├── index.html           # Main semantic HTML5 structure with Bootstrap 5
├── css/
│   └── style.css        # Custom CSS, glassmorphism, gradients, animations
├── js/
│   └── main.js          # Interactive JavaScript (theme toggle, filter, validation)
├── .nojekyll            # Enables clean static asset serving on GitHub Pages
└── README.md            # Git & GitHub documentation and lab verification
```
