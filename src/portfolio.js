/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Lum Ko Sand",
  title: "Hi everyone, I'm Ko Sand!",
  subTitle: emoji(
    "Game Developer & Software Engineer focused on gameplay systems, custom engines, and shipping complete games using C++ and C#."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1ezuVR4UCiUI4oDO93Bm3sBrIs_WNIDXzsd7WPcfeM3U/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dnasok",
  linkedin: "https://www.linkedin.com/in/lum-ko-sand/",
  gmail: "lum_ko_sand@outlook.com",
  youtube: "https://www.youtube.com/@dnasok8",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "GAME DEVELOPER WITH STRONG SYSTEMS & ENGINEERING FOUNDATIONS",
  skills: [
    emoji("🎮 Design and build gameplay systems, physics, and engine architecture using C++ and C#"),
    emoji("🕹️ Ship complete games independently — from concept to publishing on Steam and Google Play"),
    emoji("⚙️ Lead technical development on team projects: custom engines, ECS, collision, UI systems"),
    emoji("🤖 Build and maintain automated test suites and CI/CD pipelines in software engineering roles"),
    emoji("🥽 Develop immersive AR/VR and interactive media experiences in Unity"),
    emoji("🤝 Collaborate across engineering, design, and art disciplines in agile team environments")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "C++",           fontAwesomeClassname: "fas fa-code" },
    { skillName: "C#",            fontAwesomeClassname: "fas fa-code" },
    { skillName: "Python",        fontAwesomeClassname: "fab fa-python" },
    { skillName: "Unity",         fontAwesomeClassname: "fab fa-unity" },
    { skillName: "Unreal Engine", fontAwesomeClassname: "fas fa-gamepad" },
    { skillName: "Git",           fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "GitHub",        fontAwesomeClassname: "fab fa-github" },
    { skillName: "Jenkins / CI",  fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "AR / VR",       fontAwesomeClassname: "fas fa-vr-cardboard" },
    { skillName: "Jira",          fontAwesomeClassname: "fab fa-jira" },
    { skillName: "Figma",         fontAwesomeClassname: "fab fa-figma" },
    { skillName: "AWS",           fontAwesomeClassname: "fab fa-aws" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Singapore Institute of Technology – DigiPen Institute of Technology",
      logo: require("./assets/images/sit_logo.png"),
      subHeader: "Bachelor of Science with Honours in Computer Science in Interactive Media and Game Development",
      duration: "August 2023 - April 2027",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Nanyang Polytechnic",
      logo: require("./assets/images/nyp_logo.jpg"),
      subHeader: "Diploma in Game Development & Technology",
      duration: "April 2018 - March 2021",
      // duration: "16 April 2018 - 18 March 2021"
    },
    {
      schoolName: "Institute of Technical Education",
      logo: require("./assets/images/ite_logo.jpg"),
      subHeader: "Higher Nitec in Games Programming & Development",
      duration: "April 2016 - March 2018",
      // duration: "7 April 2016 - 20 March 2018"
    }
    ,
    {
      schoolName: "Institute of Technical Education",
      logo: require("./assets/images/ite_logo.jpg"),
      subHeader: "Nitec in Social Media & Web Development",
      duration: "January 2014 - December 2015",
      // duration: "12 January 2014 - 11 December 2015"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    { Stack: "Gameplay & Engine Programming",     progressPercentage: "85%" },
    { Stack: "Unity Development",                 progressPercentage: "90%" },
    { Stack: "C++ / C#",                          progressPercentage: "85%" },
    { Stack: "Python / Test Automation",          progressPercentage: "75%" },
    { Stack: "CI/CD & DevOps Tooling",            progressPercentage: "65%" },
    { Stack: "AR / VR Development",               progressPercentage: "70%" }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "DBS Bank",
      companylogo: require("./assets/images/dbs_logo.jpg"),
      date: "May 2026 – Present",
      desc: "Building and maintaining automated test suites at DBS Bank to improve QA efficiency and coverage across product features.",
      descBullets: [
        "Design, develop, and implement automated test cases for new and existing features using chosen automation tools and frameworks.",
        "Review current manual test cases to identify automation opportunities, increasing efficiency and coverage.",
        "Execute automated tests, analyze results, and report defects with clear, reproducible steps."
      ]
    },
    {
      role: "Game Developer (Self Employed)",
      company: "Dnasok Games",
      companylogo: require("./assets/images/dnasokgames_logo.jpg"),
      date: "October 2021 – March 2026",
      desc: "Making indie games during free time!",
      descBullets: [
        "Independently designed and developed indie games using Unity (C#), including Tiny Arcade Racers, available on Steam and Google Play Store.",
        "Managed all aspects of game development from concept, programming, design, testing, to publishing.",
        "Built strong problem-solving and diagnostic skills through self-driven end-to-end development."
      ]
    },
    {
      role: "Protective Security Command Trooper",
      company: "Singapore Police Force",
      companylogo: require("./assets/images/spf_logo.jpg"),
      date: "19 May 2021 – 18 May 2023",
      desc: "Served as a Protective Security Command Trooper, safeguarding critical infrastructure and supporting national security operations under high-pressure conditions.",
      descBullets: [
        "Conducted high-visibility police patrols at security-sensitive locations and safeguarded key installations and government buildings.",
        "Protected and secured Critical Infrastructure (CIs) during peacetime, heightened threat levels, and national emergencies.",
        "Supported major national and public events by responding to security incidents and ensuring public safety."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "VizioFly - Virtual Reality Singapore",
      companylogo: require("./assets/images/viziofly_logo.jpg"),
      date: "1 June 2020 – 21 August 2020",
      desc: "Developed immersive AR/VR experiences in Unity for corporate, tourism, and education clients, with a focus on UI/UX and cross-platform performance.",
      descBullets: [
        "Contributed to immersive AR/VR development for corporate, tourism, and educational clients, building interactive media content using Unity and C#.",
        "Designed and implemented responsive UI elements that prioritized user experience and device compatibility across desktop and mobile platforms.",
        "Identified and resolved bugs, optimized performance, and contributed to version updates for key product releases."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Viswire",
      companylogo: require("./assets/images/viswire_logo.jpg"),
      date: "2 October 2017 – 29 December 2017",
      desc: "Developed real-time simulation systems in Unity for professional training and research, emphasizing visual accuracy and interactivity.",
      descBullets: [
        "Assisted in developing real-time simulation systems for professional training and research, focusing on visual realism and performance efficiency.",
        "Built and tested core simulation features in Unity, with a strong emphasis on accuracy, latency minimization, and user interactivity.",
        "Engaged in full-cycle development including feature prototyping, testing, debugging, and deployment."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "PERSONAL, ACADEMIC, AND PROFESSIONAL GAME PROJECTS",
  projects: [
    {
      slug: "machina",
      image: require("./assets/images/machina_logo.jpg"),
      projectName: "Machina",
      projectDesc: "A first-person steampunk puzzle-platformer where players sacrifice life essence to power a weapon enabling teleportation, blinding light, and enemy manipulation.",
      detail: {
        tagline: "Sacrifice to survive. Escape the facility.",
        genre: "First-Person Puzzle Platformer",
        engine: "Custom C++ Engine",
        platform: "PC",
        team: "Academic Team Project",
        duration: "1 Academic Year",
        role: "Gameplay Programmer",
        overview:
          "Machina is a first-person steampunk puzzle-platformer set in an experimental facility. Players sacrifice their own life essence to power a weapon that grants three abilities — teleportation, blinding light, and enemy manipulation — in order to solve puzzles and escape. The game was built on a custom C++ engine as an academic project.",
        contributions: [
          "Designed and implemented the core life-essence resource system that governs all three weapon abilities",
          "Programmed teleportation, light flash, and enemy manipulation mechanics with full state management",
          "Built first-person player controller including movement, jumping, and interaction systems",
          "Collaborated on level design to ensure puzzles were balanced around the resource expenditure loop",
          "Integrated audio and visual feedback systems tied to ability usage and player health"
        ],
        techStack: ["C++", "Custom Engine", "GLFW", "OpenGL", "Git"],
        videos: [
          { label: "Game Trailer", youtubeId: "nZZCTPWUmuY" },
          { label: "Gameplay Showcase", youtubeId: "o_VmUnK94wQ" }
        ],
        screenshots: [
          // Add screenshot paths here e.g. require("./assets/images/machina_ss1.jpg")
        ],
        links: [
          { name: "Game Trailer", url: "https://youtu.be/nZZCTPWUmuY" },
          { name: "Gameplay Showcase", url: "https://youtu.be/o_VmUnK94wQ" }
        ]
      },
      footerLink: [
        { name: "Game Trailer", url: "https://youtu.be/nZZCTPWUmuY" },
        { name: "Gameplay Showcase", url: "https://youtu.be/o_VmUnK94wQ" }
      ]
    },
    {
      slug: "ukemochi",
      image: require("./assets/images/ukemochi_logo.jpg"),
      projectName: "Ukemochi",
      projectDesc: "2D action-adventure game built on a custom C++ engine. Led technical development for an 8-person team — physics, collision, UI systems, and engine architecture from scratch.",
      detail: {
        tagline: "Built from scratch. Shipped as a team.",
        genre: "2D Action-Adventure",
        engine: "Custom C++ Engine (built in-house)",
        platform: "PC",
        team: "8-Person Academic Team",
        duration: "1 Academic Year",
        role: "Technical Lead / Engine & Gameplay Programmer",
        overview:
          "Ukemochi is a 2D action-adventure game developed entirely on a custom C++ engine built from the ground up by the team. As Technical Lead, I was responsible for core engine systems and overseeing the technical direction for a team of 8. The game was featured in the DigiPen Game Gallery and selected as part of the SG60 Games showcase.",
        contributions: [
          "Led technical development for an 8-person team, owning the engine architecture and development roadmap",
          "Designed and implemented a custom physics system including rigid body dynamics and broad/narrow phase collision detection",
          "Built the UI framework from scratch, supporting menus, HUD elements, and in-game overlays",
          "Developed the entity-component system powering all game objects and behaviours",
          "Integrated and managed the audio system, scripting pipeline, and asset loading",
          "Coordinated with designers and artists to establish tooling and asset pipeline workflows"
        ],
        techStack: ["C++", "Custom Engine", "OpenGL", "FMOD", "Git"],
        videos: [
          { label: "Game Trailer", youtubeId: "0_TAAYTXHKI" },
          { label: "Gameplay Showcase", youtubeId: "nMMa7cYqeYU" },
          { label: "Engine Showcase", youtubeId: "RvnJPcnqqn0" }
        ],
        screenshots: [
          // Add screenshot paths here
        ],
        links: [
          { name: "DigiPen Game Gallery", url: "https://games.digipen.edu/games/ukemochi" },
          { name: "SG60 Games Feature", url: "https://sgga.org.sg/sg60-games" },
          { name: "Game Trailer", url: "https://youtu.be/0_TAAYTXHKI" },
          { name: "Gameplay Showcase", url: "https://youtu.be/nMMa7cYqeYU" },
          { name: "Engine Showcase", url: "https://youtu.be/RvnJPcnqqn0" }
        ]
      },
      footerLink: [
        { name: "DigiPen Game Gallery", url: "https://games.digipen.edu/games/ukemochi" },
        { name: "SG60 Games Feature", url: "https://sgga.org.sg/sg60-games" },
        { name: "Game Trailer", url: "https://youtu.be/0_TAAYTXHKI" },
        { name: "Gameplay Showcase", url: "https://youtu.be/nMMa7cYqeYU" },
        { name: "Engine Showcase", url: "https://youtu.be/RvnJPcnqqn0" }
      ]
    },
    {
      slug: "tiny-arcade-racers",
      image: require("./assets/images/tar_logo.png"),
      projectName: "Tiny Arcade Racers",
      projectDesc: "Top-down 2.5D arcade racing game with AI opponents, time trials, and vehicle customization. Shipped independently on Steam and Google Play.",
      detail: {
        tagline: "Race. Customise. Compete.",
        genre: "Arcade Racing",
        engine: "Unity",
        platform: "PC (Steam) · Android (Google Play)",
        team: "Solo / Indie",
        duration: "~1 Year",
        role: "Solo Developer",
        overview:
          "Tiny Arcade Racers is a top-down 2.5D arcade racing game featuring AI opponents with dynamic difficulty, time trial modes, and vehicle customization. Developed and published independently under Dnasok Games, the game is available on both Steam and the Google Play Store. Every aspect — design, programming, testing, and publishing — was handled solo.",
        contributions: [
          "Designed and programmed all gameplay systems including racing AI, lap tracking, and vehicle physics",
          "Implemented a vehicle customization system with visual and stat-affecting components",
          "Built time trial mode with ghost car recording and playback",
          "Created adaptive AI opponents that scale difficulty based on player performance",
          "Handled full publishing pipeline for Steam (Steamworks) and Google Play including store pages, builds, and compliance",
          "Designed all UI/UX including menus, HUD, and results screens"
        ],
        techStack: ["Unity", "C#", "Steamworks SDK", "Google Play SDK", "Git"],
        videos: [
          { label: "Game Trailer", youtubeId: "FiQC6qBMrrQ" }
        ],
        screenshots: [
          // Add screenshot paths here
        ],
        links: [
          { name: "Game Trailer", url: "https://youtu.be/FiQC6qBMrrQ" },
          { name: "Steam", url: "https://store.steampowered.com/app/1989780" },
          { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.DnasokGames.TinyArcadeRacers" }
        ]
      },
      footerLink: [
        { name: "Game Trailer", url: "https://youtu.be/FiQC6qBMrrQ" },
        { name: "Steam", url: "https://store.steampowered.com/app/1989780" },
        { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.DnasokGames.TinyArcadeRacers" }
      ]
    },
    {
      slug: "orion-chasers",
      image: require("./assets/images/oc_logo.png"),
      projectName: "Orion Chasers",
      projectDesc: "Space-themed endless runner focused on score-chasing mechanics and mobile-first controls. Published on Google Play.",
      detail: {
        tagline: "Chase the stars. Beat your score.",
        genre: "Endless Runner",
        engine: "Unity",
        platform: "Android (Google Play)",
        team: "Solo / Indie",
        duration: "~6 Months",
        role: "Solo Developer",
        overview:
          "Orion Chasers is a space-themed endless runner designed from the ground up for mobile. The game focuses on tight, satisfying score-chasing gameplay with mobile-friendly one-touch controls. Developed and published independently on the Google Play Store under Dnasok Games.",
        contributions: [
          "Designed and built the core endless runner loop including procedural obstacle generation and difficulty scaling",
          "Implemented mobile-optimised one-touch control scheme with responsive feel",
          "Built a persistent high score and leaderboard system",
          "Designed all in-game UI, menus, and feedback systems",
          "Handled full Google Play publishing pipeline including store listing and APK submission"
        ],
        techStack: ["Unity", "C#", "Google Play SDK", "Git"],
        videos: [
          { label: "Game Trailer", youtubeId: "QQ5hHTTyYzQ" }
        ],
        screenshots: [
          // Add screenshot paths here
        ],
        links: [
          { name: "Game Trailer", url: "https://youtu.be/QQ5hHTTyYzQ" },
          { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.DnasokGames.OrionChasers" }
        ]
      },
      footerLink: [
        { name: "Game Trailer", url: "https://youtu.be/QQ5hHTTyYzQ" },
        { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.DnasokGames.OrionChasers" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Awards & Achievements 🏆"),
  subtitle: "Academic Excellence and Recognition",

  achievementsCards: [
    {
      title: "Unity Certified Associate: Game Developer",
      subtitle:
        "Unity - March 2021",
      image: require("./assets/images/unity_logo.jpg"),
      imageAlt: "Unity Certified Associate: Game Developer",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.youracclaim.com/badges/e4a4c880-6362-457a-ad51-63d348871792?source=linked_in_profile"
        }
      ]
    },
    {
      title: "Distinction in Business for Digital Media Industry",
      subtitle:
        "Nanyang Polytechnic - March 2021",
      image: require("./assets/images/nyp_logo.jpg"),
      imageAlt: "Distinction in Business for Digital Media Industry",
      footerLink: [
      ]
    },
    {
      title: "Distinction in Principles of Game Design",
      subtitle:
        "Nanyang Polytechnic - September 2018",
      image: require("./assets/images/nyp_logo.jpg"),
      imageAlt: "Distinction in Principles of Game Design",
      footerLink: [
      ]
    },
    {
      title: "Certificate of Excellence for Industrial Attachment Programme",
      subtitle:
        "Institute of Technical Education - December 2017",
      image: require("./assets/images/ite_logo.jpg"),
      imageAlt: "Certificate of Excellence",
      footerLink: [
      ]
    },
    {
      title: "Director’s List",
      subtitle:
        "Institute of Technical Education - June 2014",
      image: require("./assets/images/ite_logo.jpg"),
      imageAlt: "Director’s List",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji(""),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Feel free to send me a message if you are interested in learning more about my work or how we can collaborate on an upcoming project :)",
  //number: "+65 9766 5607",
  email_address: "lum_ko_sand@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
