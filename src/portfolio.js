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
  // subTitle: emoji(
  //   "Hi, I’m Ko Sand, a passionate and driven student currently pursuing a Bachelor of Science with Honours in Computer Science in Interactive Media and Game Development at SIT-DigiPen Singapore. With a strong foundation in game development and software engineering, I specialize in building engaging gameplay experiences using Unity (C#) and custom engines (C++). My past internships and national service experience have shaped me into a fast learner who works well under pressure, communicates effectively in team settings, and delivers results. I’m currently seeking opportunities in game development or software engineering, where I can apply my skills, continue learning, and contribute meaningfully to exciting projects. Let’s connect, I’m always open to opportunities and collaboration!"
  // ),
  resumeLink:
    "https://docs.google.com/document/d/1ezuVR4UCiUI4oDO93Bm3sBrIs_WNIDXzsd7WPcfeM3U/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dnasok",
  linkedin: "https://www.linkedin.com/in/lum-ko-sand/",
  gmail: "lum_ko_sand@outlook.com",
  // gitlab: "https://gitlab.com/-",
  // stackoverflow: "https://stackoverflow.com/users/-",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "GAME DEVELOPER WITH STRONG SYSTEMS & ENGINEERING FOUNDATIONS",
  skills: [
    emoji("🎮 Build gameplay systems and tools using C++ and C#"),
    emoji("⚙️ Design modular, reusable engine and gameplay architectures"),
    emoji("🧩 Work across the full development lifecycle — from prototype to release"),
    emoji("🚀 Optimize performance and debug complex systems"),
    emoji("🤝 Collaborate with engineers, designers, and artists in team environments")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "C#", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Game Engines", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "Unity", fontAwesomeClassname: "fab fa-unity" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Visual Studio", fontAwesomeClassname: "fas fa-laptop-code" },
    { skillName: "Windows", fontAwesomeClassname: "fab fa-windows" },
    { skillName: "AR / VR", fontAwesomeClassname: "fas fa-vr-cardboard" },
    { skillName: "Figma", fontAwesomeClassname: "fab fa-figma" }
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
      // desc: "Focused on game engine development, gameplay programming, and software engineering principles.",
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
      // duration: "16 April 2018 - 18 March 2021",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Institute of Technical Education",
      logo: require("./assets/images/ite_logo.jpg"),
      subHeader: "Higher Nitec in Games Programming & Development",
      duration: "April 2016 - March 2018",
      // duration: "7 April 2016 - 20 March 2018",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
    ,
    {
      schoolName: "Institute of Technical Education",
      logo: require("./assets/images/ite_logo.jpg"),
      subHeader: "Nitec in Social Media & Web Development",
      duration: "January 2014 - December 2015",
      // duration: "12 January 2014 - 11 December 2015",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    { Stack: "Gameplay Programming", progressPercentage: "85%" },
    { Stack: "Engine & Systems Development", progressPercentage: "80%" },
    { Stack: "Unity Development", progressPercentage: "90%" },
    { Stack: "C++ / C#", progressPercentage: "85%" }
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
      desc: "Making small games during free time!",
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
      image: require("./assets/images/machina_logo.jpg"),
      projectName: "Machina",
      projectDesc: "Machina is a first-person steampunk puzzle-platformer set in an experimental facility, where players sacrifice their own life essence to power a weapon that enables teleportation, blinding light, and enemy manipulation in order to escape.",
      footerLink: [
        { name: "Game Trailer", url: "https://youtu.be/nZZCTPWUmuY" },
        { name: "Gameplay Showcase", url: "https://youtu.be/o_VmUnK94wQ" }
      ]
    },
    {
      image: require("./assets/images/ukemochi_logo.jpg"),
      projectName: "Ukemochi",
      projectDesc: "2D action-adventure game built on a custom C++ engine. Designed and implemented physics, collision detection, UI systems, and engine architecture. Led technical development for an 8-person team.",
      footerLink: [
        { name: "DigiPen Game Gallery", url: "https://games.digipen.edu/games/ukemochi" },
        { name: "SG60 Games Feature", url: "https://sgga.org.sg/sg60-games" },
        { name: "Game Trailer", url: "https://youtu.be/0_TAAYTXHKI" },
        { name: "Gameplay Showcase", url: "https://youtu.be/nMMa7cYqeYU" },
        { name: "Engine Showcase", url: "https://youtu.be/RvnJPcnqqn0" }
      ]
    },
    {
      image: require("./assets/images/tar_logo.png"),
      projectName: "Tiny Arcade Racers (Unity / C#)",
      projectDesc: "Top-down 2.5D arcade racing game featuring AI opponents, time trials, and vehicle customization. Shipped on PC and mobile.",
      footerLink: [
        { name: "Game Trailer", url: "https://youtu.be/FiQC6qBMrrQ" },
        { name: "Steam", url: "https://store.steampowered.com/app/1989780" },
        { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.DnasokGames.TinyArcadeRacers" }
      ]
    },
    {
      image: require("./assets/images/oc_logo.png"),
      projectName: "Orion Chasers (Unity / C#)",
      projectDesc: "Space-themed endless runner focused on score-chasing mechanics and mobile-friendly controls. Released on Google Play.",
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
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // }
      ]
    },
    {
      title: "Distinction in Principles of Game Design",
      subtitle:
        "Nanyang Polytechnic - September 2018",
      image: require("./assets/images/nyp_logo.jpg"),
      imageAlt: "Distinction in Principles of Game Design",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // }
      ]
    },
    {
      title: "Certificate of Excellence for Industrial Attachment Programme",
      subtitle:
        "Institute of Technical Education - December 2017",
      image: require("./assets/images/ite_logo.jpg"),
      imageAlt: "Certificate of Excellence",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // }
      ]
    },
    {
      title: "Director’s List",
      subtitle:
        "Institute of Technical Education - June 2014",
      image: require("./assets/images/ite_logo.jpg"),
      imageAlt: "Director’s List",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // }
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
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
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
