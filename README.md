# Lum Ko Sand — Portfolio Website

This repository contains the live portfolio site for Lum Ko Sand, a game developer and software engineer. It is a React single-page application designed to present education, work experience, featured game projects, achievements, and contact information in a polished portfolio format.

Live site: https://dnasok.github.io/

## Overview

The app is built with React 16 and Create React App, styled with SCSS, and deployed through GitHub Pages via a GitHub Actions workflow. The portfolio content is largely data-driven: most text, media, and project metadata live in `src/portfolio.js`, which keeps the content updateable without editing the component structure.

The current project includes:

- Responsive portfolio sections for greeting, skills, education, work experience, featured projects, and achievements
- Per-project detail pages for featured games using route-based detail views
- Dark/light theme support with local persistence
- Splash screen and motion-enhanced UI sections
- Optional GitHub profile / pinned repositories and Medium blog fetches during build time
- GitHub Pages deployment using a `gh-pages` branch

## Tech stack

- UI: React 16, SCSS
- Routing: `react-router-dom` 5 with `HashRouter`
- Animation: Lottie, `react-reveal`
- Build tooling: Create React App / `react-scripts`
- Deployment: GitHub Actions + GitHub Pages
- External data: GitHub GraphQL API and Medium RSS via `scripts/fetch.js`

## Current content model

The portfolio content is centralized in `src/portfolio.js` and includes:

- `greeting` and `socialMediaLinks`
- `skillsSection` and `techStack`
- `educationInfo`, `workExperiences`, and `achievementSection`
- `bigProjects` containing featured game entries and project detail data
- `contactInfo`, `resumeSection`, and `isHireable`

This file is the primary customization point for personal info, project copy, technology tags, screenshots, and external links.

## Repository structure

```text
dnasok.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   ├── browserconfig.xml
│   └── ...
├── scripts/
│   └── fetch.js
├── src/
│   ├── App.js
│   ├── App.scss
│   ├── App.test.js
│   ├── index.js
│   ├── index.css
│   ├── portfolio.js
│   ├── utils.js
│   ├── _globalColor.scss
│   ├── assets/
│   ├── components/
│   ├── containers/
│   ├── contexts/
│   └── hooks/
├── .gitignore
├── .prettierignore
├── .prettierrc
├── .pre-commit-config.yaml
├── env.example
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── build/
```

## Setup

### Prerequisites

- Node.js 18 or later
- npm

### Install

```bash
git clone https://github.com/dnasok/dnasok.github.io.git
cd dnasok.github.io
npm install
```

### Environment variables

Copy the example file and update it as needed:

```bash
# Windows
copy env.example .env

# macOS / Linux
cp env.example .env
```

`.env` supports the following values:

- `REACT_APP_GITHUB_TOKEN`: GitHub token used by the GraphQL profile fetch
- `GITHUB_USERNAME`: GitHub username for profile / pinned repository data
- `USE_GITHUB_DATA`: set to `true` to enable GitHub data fetching during dev/build
- `MEDIUM_USERNAME`: optional Medium username for blog RSS data

## Local development

```bash
npm start
```

This runs the fetch script before starting the CRA dev server.

## Testing and build

```bash
npm test -- --watchAll=false
npm run build
```

The production build is written to the `build/` directory.

## Deployment

The repository includes a deployment workflow in `.github/workflows/deploy.yml`.

On push to `main`, the workflow:

1. Installs dependencies
2. Runs `npm run build`
3. Publishes the generated `build/` output to the `gh-pages` branch

Manual deployment is also supported:

```bash
npm run deploy
```

## Formatting

```bash
npm run format
npm run check-format
```

## Notes

- The site is configured for GitHub Pages and uses hash routing for reliable static hosting.
- Most changes to portfolio content should happen in `src/portfolio.js`, not in individual components.
- Generated files such as `public/profile.json` and `public/blogs.json` are created during the fetch step and should not be manually edited.

## License

This project is based on the DeveloperFolio template and is distributed under the GPL-3.0 license. See `LICENSE` for details.
