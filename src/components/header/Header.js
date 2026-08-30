import React, {useContext, useEffect, useRef, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {useHistory, useLocation} from "react-router-dom";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection,
  educationInfo,
  bigProjects
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const history = useHistory();
  const location = useLocation();
  const menuRef = useRef(null);
  const [mobileMenuDropdown, setMobileMenuDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;
  const viewEducation = educationInfo.display;
  const viewProjects = bigProjects.display;

  const isProjectPage = location.pathname.startsWith("/projects/");

  useEffect(() => {
    const checkOverflow = () => {
      if (window.innerWidth <= 390) {
        setMobileMenuDropdown(true);
        return;
      }

      if (!menuRef.current || window.innerWidth > 767) {
        setMobileMenuDropdown(false);
        return;
      }

      const overflow = menuRef.current.scrollWidth > menuRef.current.clientWidth + 1;
      setMobileMenuDropdown(overflow);
      if (!overflow) {
        setMobileMenuOpen(false);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (isProjectPage) {
      history.push("/");
    } else {
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  };

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const menuToggle = document.getElementById("menu-btn");
    if (menuToggle) {
      menuToggle.checked = false;
    }

    if (isProjectPage) {
      history.push("/");
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({behavior: "smooth"});
        }
      }, 100);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({behavior: "smooth"});
      }
    }
  };

  const navItems = (
    <>
      {viewSkills && (
        <li>
          <a href="#skills" onClick={(e) => handleNavClick(e, "#skills")}>
            Skills
          </a>
        </li>
      )}
      {viewExperience && (
        <li>
          <a href="#experience" onClick={(e) => handleNavClick(e, "#experience")}>
            Experiences
          </a>
        </li>
      )}
      {viewEducation && (
        <li>
          <a href="#education" onClick={(e) => handleNavClick(e, "#education")}>
            Education
          </a>
        </li>
      )}
      {viewProjects && (
        <li>
          <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")}>
            Projects
          </a>
        </li>
      )}
      {viewOpenSource && (
        <li>
          <a href="#opensource" onClick={(e) => handleNavClick(e, "#opensource")}>
            Open Source
          </a>
        </li>
      )}
      {viewAchievement && (
        <li>
          <a href="#achievements" onClick={(e) => handleNavClick(e, "#achievements")}>
            Achievements
          </a>
        </li>
      )}
      {viewBlog && (
        <li>
          <a href="#blogs" onClick={(e) => handleNavClick(e, "#blogs")}>
            Blogs
          </a>
        </li>
      )}
      {viewTalks && (
        <li>
          <a href="#talks" onClick={(e) => handleNavClick(e, "#talks")}>
            Talks
          </a>
        </li>
      )}
      {viewResume && (
        <li>
          <a href="#resume" onClick={(e) => handleNavClick(e, "#resume")}>
            Resume
          </a>
        </li>
      )}
      <li>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <ToggleSwitch />
        </a>
      </li>
    </>
  );

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        {mobileMenuDropdown ? (
          <>
            <div className="header-top-row">
              <a href="/" className="logo" onClick={handleLogoClick}>
                <span className="grey-color"> &lt;</span>
                <span className="logo-name">{greeting.username}</span>
                <span className="grey-color">/&gt;</span>
              </a>

              <button
                type="button"
                className={isDark ? "dark-mode mobile-menu-toggle" : "mobile-menu-toggle"}
                onClick={() => setMobileMenuOpen((value) => !value)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle section shortcuts"
              >
                <span className="hamburger-icon" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>

            {mobileMenuOpen && (
              <ul className={isDark ? "dark-menu menu dropdown-menu" : "menu dropdown-menu"}>
                {navItems}
              </ul>
            )}
          </>
        ) : (
          <>
            <a href="/" className="logo" onClick={handleLogoClick}>
              <span className="grey-color"> &lt;</span>
              <span className="logo-name">{greeting.username}</span>
              <span className="grey-color">/&gt;</span>
            </a>

            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label
              className="menu-icon"
              htmlFor="menu-btn"
              style={{color: "white"}}
            >
              <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
            </label>
            <ul ref={menuRef} className={isDark ? "dark-menu menu" : "menu"}>
              {navItems}
            </ul>
          </>
        )}
      </header>
    </Headroom>
  );
}
export default Header;
