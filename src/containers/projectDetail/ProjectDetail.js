import React, {useContext, useEffect} from "react";
import "./ProjectDetail.scss";
import {bigProjects} from "../../portfolio";
import {useParams, useHistory} from "react-router-dom";
import StyleContext from "../../contexts/StyleContext";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import YouTubeEmbed from "../../components/youtubeEmbed/YouTubeEmbed";

export default function ProjectDetail() {
  const {slug} = useParams();
  const history = useHistory();
  const {isDark} = useContext(StyleContext);

  const project = bigProjects.projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project || !project.detail) {
    return (
      <div className={isDark ? "dark-mode" : null}>
        <Header />
        <div className="main project-detail-container">
          <div className="project-not-found">
            <h1>Project not found</h1>
            <button
              className="back-button"
              onClick={() => history.push("/")}
            >
              ← Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const detail = project.detail;

  return (
    <div className={isDark ? "dark-mode" : null}>
      <Header />
      <div className="main project-detail-container">
        {/* Hero Section */}
        <div className="project-detail-hero">
          <button
            className={isDark ? "dark-mode back-button" : "back-button"}
            onClick={() => history.push("/")}
          >
            ← Back to Projects
          </button>
          <div className="project-hero-content">
            {project.image && (
              <img
                src={project.image}
                alt={project.projectName}
                className="project-hero-image"
              />
            )}
            <h1
              className={
                isDark ? "dark-mode project-detail-title" : "project-detail-title"
              }
            >
              {project.projectName}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode project-detail-tagline"
                  : "project-detail-tagline"
              }
            >
              {detail.tagline}
            </p>
          </div>
        </div>

        {/* Quick Info Grid */}
        <div className="project-info-grid">
          <div className="info-item">
            <span className="info-label">Genre</span>
            <span className={isDark ? "dark-mode info-value" : "info-value"}>
              {detail.genre}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">Engine</span>
            <span className={isDark ? "dark-mode info-value" : "info-value"}>
              {detail.engine}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">Platform</span>
            <span className={isDark ? "dark-mode info-value" : "info-value"}>
              {detail.platform}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">Team</span>
            <span className={isDark ? "dark-mode info-value" : "info-value"}>
              {detail.team}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">Duration</span>
            <span className={isDark ? "dark-mode info-value" : "info-value"}>
              {detail.duration}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">Role</span>
            <span className={isDark ? "dark-mode info-value" : "info-value"}>
              {detail.role}
            </span>
          </div>
        </div>

        {/* Overview Section */}
        <div className="project-section">
          <h2
            className={
              isDark ? "dark-mode section-heading" : "section-heading"
            }
          >
            Overview
          </h2>
          <p
            className={
              isDark ? "dark-mode section-text" : "section-text"
            }
          >
            {detail.overview}
          </p>
        </div>

        {/* Role & Contributions */}
        <div className="project-section">
          <h2
            className={
              isDark ? "dark-mode section-heading" : "section-heading"
            }
          >
            My Contributions
          </h2>
          <ul
            className={
              isDark
                ? "dark-mode contributions-list"
                : "contributions-list"
            }
          >
            {detail.contributions.map((contribution, i) => (
              <li key={i}>{contribution}</li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="project-section">
          <h2
            className={
              isDark ? "dark-mode section-heading" : "section-heading"
            }
          >
            Tech Stack
          </h2>
          <div className="tech-stack-list">
            {detail.techStack.map((tech, i) => (
              <span
                key={i}
                className={isDark ? "dark-mode tech-tag" : "tech-tag"}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        {detail.videos && detail.videos.length > 0 && (
          <div className="project-section">
            <h2
              className={
                isDark ? "dark-mode section-heading" : "section-heading"
              }
            >
              Videos
            </h2>
            <div className="videos-grid">
              {detail.videos.map((video, i) => (
                <YouTubeEmbed
                  key={i}
                  youtubeId={video.youtubeId}
                  label={video.label}
                />
              ))}
            </div>
          </div>
        )}

        {/* Screenshots Section */}
        {detail.screenshots && detail.screenshots.length > 0 && (
          <div className="project-section">
            <h2
              className={
                isDark ? "dark-mode section-heading" : "section-heading"
              }
            >
              Screenshots
            </h2>
            <div className="screenshots-grid">
              {detail.screenshots.map((screenshot, i) => (
                <img
                  key={i}
                  src={screenshot}
                  alt={`${project.projectName} screenshot ${i + 1}`}
                  className="screenshot-image"
                />
              ))}
            </div>
            {detail.screenshots.length === 0 && (
              <p className="placeholder-text">Screenshots coming soon!</p>
            )}
          </div>
        )}

        {/* Links Section */}
        {detail.links && detail.links.length > 0 && (
          <div className="project-section">
            <h2
              className={
                isDark ? "dark-mode section-heading" : "section-heading"
              }
            >
              Links
            </h2>
            <div className="links-list">
              {detail.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isDark ? "dark-mode link-button" : "link-button"}
                >
                  {link.name} →
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
