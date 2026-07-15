# Lum Ko Sand — Portfolio Website

Personal portfolio site for **Lum Ko Sand**, a game developer and software engineer. The site showcases education, work experience, featured game projects, skills, and contact information.

**Live site:** [https://dnasok.github.io/](https://dnasok.github.io/)

---

## Purpose

This project is a single-page React application deployed to GitHub Pages. It serves as a professional online presence for recruiters, collaborators, and visitors who want to learn about Ko Sand's background in game development and software engineering.

All personal content (bio, experience, projects, links) is managed in one configuration file so the site can be updated without touching component code.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| UI | React 16, SCSS |
| Animations | Lottie, React Reveal |
| Build | Create React App (`react-scripts`) |
| Deployment | GitHub Actions → GitHub Pages |
| Optional data | GitHub GraphQL API, Medium RSS |

---

## Features

- Responsive single-page layout with dark/light theme toggle
- Splash screen on first load
- Sections for greeting, skills, education, work experience, featured projects, achievements, and contact
- Optional GitHub profile and pinned repositories (via API)
- Optional Medium blog feed
- Automated deployment on push to `master`

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm

### Installation

```bash
git clone https://github.com/dnasok/dnasok.github.io.git
cd dnasok.github.io
npm install
```

### Environment variables

Copy the example env file and edit it:

```bash
# Windows
copy env.example .env

# macOS / Linux
cp env.example .env
```

| Variable | Description |
| --- | --- |
| `REACT_APP_GITHUB_TOKEN` | GitHub personal access token (for GraphQL API) |
| `GITHUB_USERNAME` | GitHub username to fetch profile/repos |
| `USE_GITHUB_DATA` | Set to `true` to fetch GitHub data before start/build |
| `MEDIUM_USERNAME` | Optional Medium username for blog RSS feed |

If `USE_GITHUB_DATA` is not `true`, the site uses the default contact section instead of the GitHub profile card.

### Run locally

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000).

### Test

```bash
npm test -- --watchAll=false
```

### Build

```bash
npm run build
```

Output is written to the `build/` folder.

### Format code

```bash
npm run format
npm run check-format
```

---

## Customization

Most content is edited in [`src/portfolio.js`](src/portfolio.js):

- Greeting, social links, and resume URL
- Skills and tech stack proficiency bars
- Education, work experience, featured projects, achievements
- Section visibility (`display: true/false` flags)

Other common edits:

| File | What to change |
| --- | --- |
| [`src/_globalColor.scss`](src/_globalColor.scss) | Global theme colors |
| [`public/index.html`](public/index.html) | Page title, SEO meta tags |
| [`public/manifest.json`](public/manifest.json) | PWA name and icons |
| [`src/containers/greeting/resume.pdf`](src/containers/greeting/resume.pdf) | Local resume download |

---

## Deployment

Deployment is handled by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. Triggered on push to `master` (or manually via workflow dispatch)
2. Installs dependencies and runs `npm run build`
3. Publishes the `build/` folder to the `gh-pages` branch

You can also deploy manually:

```bash
npm run deploy
```

---

## Project Structure

```
dnasok.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD: build and deploy to GitHub Pages
├── public/                     # Static assets served as-is
│   ├── index.html              # HTML shell, SEO meta tags, Font Awesome CDN
│   ├── manifest.json           # Web app manifest (PWA metadata)
│   ├── robots.txt              # Search engine crawl rules
│   ├── browserconfig.xml       # Windows tile configuration
│   ├── favicon.ico             # Browser tab icon
│   ├── favicon-16x16.png       # Favicon (16×16)
│   ├── favicon-32x32.png       # Favicon (32×32)
│   ├── apple-touch-icon.png    # iOS home screen icon
│   ├── android-chrome-192x192.png
│   ├── android-chrome-384x384.png
│   ├── mstile-150x150.png      # Windows tile image
│   ├── safari-pinned-tab.svg   # Safari pinned tab icon
│   ├── profile.json            # Generated GitHub profile data (gitignored)
│   └── blogs.json              # Generated Medium blog data (gitignored)
├── scripts/
│   └── fetch.js                # Pre-build script: fetches GitHub/Medium data
├── src/
│   ├── index.js                # React entry point
│   ├── index.css               # Base CSS reset and globals
│   ├── App.js                  # Root app component
│   ├── App.scss                # App-level styles
│   ├── App.test.js             # Smoke test for App rendering
│   ├── setupTests.js           # Jest test setup and mocks
│   ├── serviceWorker.js        # CRA service worker (unregistered by default)
│   ├── portfolio.js            # **Main content config** — edit this for your data
│   ├── utils.js                # Shared helpers (e.g. file size formatting)
│   ├── _globalColor.scss       # Global color variables and theme tokens
│   ├── assets/
│   │   ├── fonts/
│   │   │   ├── Agustina.woff           # Display font for headings
│   │   │   └── Montserrat-Regular.ttf  # Body font
│   │   ├── images/                     # Logos, illustrations, section SVGs
│   │   │   ├── *_logo.*                # Company/school/project logos
│   │   │   ├── contactMailDark.svg     # Contact section fallback image
│   │   │   ├── developerActivity.svg   # Skills section fallback image
│   │   │   ├── manOnTable.svg          # Greeting section fallback image
│   │   │   ├── skill.svg               # Proficiency section fallback image
│   │   │   └── talksCardBack.svg       # Talks card background
│   │   └── lottie/                     # Lottie animation JSON files
│   │       ├── splashAnimation.json    # Splash screen
│   │       ├── landingAnimation.json   # Greeting/hero section
│   │       ├── codingAnimation.json    # Skills section
│   │       ├── build.json              # Proficiency section
│   │       └── email.json              # Contact section
│   ├── components/             # Reusable UI building blocks
│   │   ├── achievementCard/    # Achievement card display
│   │   ├── blogCard/           # Blog post card
│   │   ├── button/             # Styled link/button
│   │   ├── displayLottie/      # Lazy-loaded Lottie wrapper
│   │   ├── educationCard/      # Education entry card
│   │   ├── experienceCard/     # Work experience card
│   │   ├── footer/             # Site footer
│   │   ├── githubProfileCard/  # GitHub profile summary card
│   │   ├── githubRepoCard/     # GitHub repository card
│   │   ├── header/             # Navigation header with theme toggle
│   │   ├── socialMedia/        # Social media icon links
│   │   ├── softwareSkills/     # Skill icon badges
│   │   ├── talkCard/           # Talk/presentation card
│   │   └── ToggleSwitch/       # Dark/light mode toggle
│   ├── containers/             # Page sections (one folder per section)
│   │   ├── Main.js             # Layout orchestrator — composes all sections
│   │   ├── Main.scss           # Main layout styles
│   │   ├── achievement/        # Awards & achievements section
│   │   ├── blogs/              # Blog posts section
│   │   ├── contact/            # Contact form/info section
│   │   ├── education/          # Education history section
│   │   ├── greeting/           # Hero/greeting section (+ resume.pdf)
│   │   ├── loading/            # Loading spinner for async content
│   │   ├── podcast/            # Podcast embed section
│   │   ├── profile/            # GitHub profile or fallback contact
│   │   ├── projects/           # Open-source GitHub projects section
│   │   ├── skillProgress/      # Tech stack proficiency bars
│   │   ├── skills/             # Skills and software icons
│   │   ├── splashScreen/       # Initial splash animation
│   │   ├── StartupProjects/    # Featured projects section
│   │   ├── talks/              # Talks/presentations section
│   │   ├── topbutton/          # Scroll-to-top button
│   │   ├── twitter-embed/      # Twitter timeline embed
│   │   └── workExperience/     # Work experience timeline
│   ├── contexts/
│   │   └── StyleContext.js     # React context for dark/light theme
│   └── hooks/
│       └── useLocalStorage.js  # Persist theme preference in localStorage
├── .gitattributes              # Line ending and binary file rules
├── .gitignore                  # Ignored files (node_modules, build, .env)
├── .pre-commit-config.yaml     # Pre-commit hook for Prettier
├── .prettierignore             # Files excluded from Prettier
├── .prettierrc                 # Prettier formatting rules
├── env.example                 # Environment variable template
├── LICENSE                     # GPL-3.0 (from original template)
├── package.json                # Dependencies and npm scripts
├── package-lock.json           # Locked dependency versions
└── README.md                   # This file
```

---

## npm Scripts

| Script | Description |
| --- | --- |
| `npm start` | Fetch external data, then start dev server |
| `npm run build` | Fetch external data, then create production build |
| `npm test` | Run Jest tests |
| `npm run deploy` | Build and publish to GitHub Pages (`gh-pages` branch) |
| `npm run format` | Format source files with Prettier |
| `npm run check-format` | Check formatting without writing |

---

## License

This project is based on the [DeveloperFolio](https://github.com/saadpasta/developerFolio) template and is licensed under [GPL-3.0](LICENSE).
