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
  username: "Prasanth Guvvala",
  title: "Hi all, I'm Prasanth",
  subTitle: emoji(
    `Passionate about Computers  , Cricket , Sport Cars , Technology & Food` ),
  resumeLink:"https://drive.google.com/file/d/1rdzbqvPj2ux6pWCsq6-jhimtSi_WDKrW/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Guvvala-Prasanth-Reddy",
  linkedin: "https://www.linkedin.com/in/prasanth-reddy-guvvala-328413181/",
  gmail: "guvalaprashanth342@gmail.com",
  instagram:"https://www.instagram.com/prasanthreddyguvvala/",
  medium: "https://medium.com/@guvalaprashanth342",
  stackoverflow: "https://stackoverflow.com/users/24041869/guvvala-prasanth-reddy",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "I CAN",
  subTitle: "",
  skills: [
    emoji(
      "⚡ Develop highly impactful Full stack web applications using Django and React"
    ),
    emoji("⚡Devleop Machine Learning Pipelines , Data Loading Pipe lines , automation pipelines "),
    emoji("⚡ Develop and Deploy Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integrate third party services such as AWS/AZURE"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of New Mexico",
      logo: require("./assets/images/unm-seal.jpeg"),
      subHeader: "Master of Science in Computer Science",
      duration: "Jan 2023 - May 2025",
      desc: "Participated in the Computer science course work ,research of creating a sentiment based index for the topics AI , Cyber security and Bio diversity over a time period using Large Language Models.",
      coursework: "Artificial Intelligence (CS 527), Algorithms(CS 561), Data-Mining(CS 521), Cloud Computing(ECE 530), Computer Networks (CS 585), Database Management Systems(CS 564), Software Foundations(CS 558), Software Specification (CS 580), Machine Learning(CS 529), Advanced Machine Learning(CS 591) ",
      descBullets: [
        

      ]
    },
    {
      schoolName: "Amrita Vishwa Vidyapeetham",
      logo: require("./assets/images/Amrita-logo.svg.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "July 2017 - May 2021",
      desc: "Did my undergrad in Top ranked private university in India , Did a lot of extracurricular activity at FOSS club at Amrita.",
      coursework:"https://www.amrita.edu/program/btech-computer-science-and-engineering/",
      descBullets: [],
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Web Application Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning Applications",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Pipe Lines and Automation",
      progressPercentage: "90%"
    }

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Intel",
      companylogo: require("./assets/images/Intel.png"),
      date: "Sept 2023 – Aug 2024",
      desc: "Full stack web applicaiton that saves atleast an hour a day for process engineer, process readiness indicator , maintained production applications",
      descBullets: [
        "used Django and Next Js for building web applicaitons",
        "implemented CI/CD pipelines, data loading strategies",
        "Wrote stored procedures for running advanced SQL jobs"
      ]
    },
    {
      role: "SDE-I",
      company: "Deloitte",
      companylogo: require("./assets/images/Deloitte.png"),
      date: "Jul 2021 – Aug 2022",
      desc: "Worked on designing and building full stack data integration projects. Participated in Code reviews, hackathons, bootcamps.",
      descBullets:[
        "Used Django , React for building web applications",
        "Built api end points , Single page applicaitons , worked with features like React-Redux,React hooks and router",
        "designed a project that scans throught legal documents using BERT and gives visual suggestions on decision making"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "DRDO",
      companylogo: require("./assets/images/DRDO.png"),
      date: "Feb 2021 – Jun 2021",
      desc: "Had an unique experience working for a famous and prominent national defense laboratory.",
      descBullets:["Had an opporutnity to contribute to a Desktop application based on C++ and Qt",
        "Built Interfaces using QT and implemented user stories using C++",
        "Participated in team discussions and pair programming sessions."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Publications  And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "",
      subtitle:`Research paper on Predicting Covid-19 Positive Cases and Analysis on
the Relevance of Features using SHAP (SHapley
Additive exPlanation)`,
      image: require("./assets/images/IEEE.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Publication link",
          url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9532829"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "guvalaprashanth342@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "prasanthtveets", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
