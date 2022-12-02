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
  username: "nikosev",
  title: "Hi, I'm Nick",
  subTitle:
    "Eager to learn and continuously evolving existing and new knowledge and skills. Participation in several Pan-European projects in collaboration with research institutes and experience in different positions during 5+ years of work experience. Looking forward to further develop DevOps and Cyber Security skills.",
  resumeLink:
    "https://drive.google.com/file/d/1gNRCymEeMN58Qsm4ydD6rNlm0KoL2_n4/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nikosev",
  linkedin: "https://www.linkedin.com/in/nikosev95/",
  gmail: "nikolaosevg@gmail.com",
  orcid: "https://orcid.org/0000-0001-7336-9165",
  keybase: "https://keybase.io/nikosev",
  // pgpkey: "30FDA09372B86B64",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DESIGN | DEVELOP | DELIVER",
  skills: [
    emoji("⚡ Develop new features and contribute to open-source projects"),
    emoji(
      "⚡ Deploy and configure applications using Ansible in Linux based systems"
    ),
    emoji("⚡ Secure Code Review and application of Best Current Practises")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "OpenID Connect",
      fontAwesomeClassname: "fab fa-openid"
    },
    {
      skillName: "SAML",
      fontAwesomeClassname: "fa-solid fa-s"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Ansible",
      fontAwesomeClassname: "fa-solid fa-a"
    },
    {
      skillName: "Markdown",
      fontAwesomeClassname: "fab fa-markdown"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Piraeus",
      logo: require("./assets/images/universityOfPiraeusLogo.png"),
      subHeader: "Master of Science in Cyber Security",
      duration: "October 2018 - September 2020",
      desc: 'Postgraduate Programme in "Digital Systems Security", Department of Digital Systems',
      descBullets: [
        "Integrate an OpenID Provider with a FIDO UAF Server to support passwordless authentication.",
        "Pentest and exploit vulnerabilities in the signaling protocol SS7 used in mobile networks."
      ]
    },
    {
      schoolName: "University of Piraeus",
      logo: require("./assets/images/universityOfPiraeusLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "October 2013 - September 2017",
      desc: "Department of Digital Systems",
      descBullets: ["Major in Communications and Networks"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Identity and Access Management (IAM) Engineer",
      company: "GRNET - National Infrastructures for Research and Technology",
      companylogo: require("./assets/images/grnetShortLogo.png"),
      date: "July 2017 – Present",
      descBullets: [
        "Primarily occupied with RCIAM, which is an Identity and Access Management solution that supports multiple identity protocols and frameworks, such as SAML 2.0, eIDAS SAML 1.2, OpenID Connect/OAuth 2.0 and X.509v3.",
        "Develop new features and contribute to the open-source projects: MITREid Connect (Java), SimpleSAMLphp (PHP), Keycloak (Java) & COmanage Registry (PHP).",
        "Create Ansible roles and maintain Ansible inventories for all the installations of RCIAM in Linux based systems. Create scripts using Python to automate processes.",
        "Support end-users who experience difficulties to access services and support Service Providers to integrate with the RCIAM Proxy."
      ]
    },
    {
      role: "Penetration Tester",
      company: "Hellenic Army IT Support Centre (H.A.I.S.C.)",
      companylogo: require("./assets/images/haiscLogo.png"),
      date: "Mar 2020 – Oct 2020",
      descBullets: [
        "Perform Penetration Tests to the Web Applications of the Hellenic Army General Staff before deploying to production.",
        "Experience with SIEM technologies, network monitoring and firewall configuration."
      ]
    },
    {
      role: "Information Technology Security Engineer",
      company: "Hellenic Army IT Support Centre (H.A.I.S.C.)",
      companylogo: require("./assets/images/haiscLogo.png"),
      date: "Sep 2019 – Nov 2029",
      desc: "Extend Serpico (a penetration testing report generation tool) to the needs of the H.A.I.S.C."
    },
    {
      role: "Identity and Access Management (IAM) Engineer",
      company: "Systems Security Laboratory (SSL) of University of Piraeus",
      companylogo: require("./assets/images/systemsSecLabLogo.jpg"),
      date: "May 2018 – Feb 2019",
      desc: "Review the implementation of FIDO UAF Server, created by certSIGN, if complies with the specification and create developer documentation using JAVA Docs."
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
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Udemy Course Completion Certificate",
      subtitle:
        "Learn DevOps: Azure DevOps, Docker, Kubernetes, Jenkins, Terraform, Ansible - AWS, Azure & Google Cloud",
      image: require("./assets/images/logo-udemy.svg"),
      imageAlt: "Certificate of Completion - DevOps",
      footerLink: [
        {
          name: "Certification",
          url: "http://ude.my/UC-e5f1a8e6-d9b4-4b14-ac05-22be3edb3e7f"
        },
        {
          name: "Course",
          url: "https://www.udemy.com/course/devops-with-docker-kubernetes-and-azure-devops/"
        }
      ]
    },
    {
      title: "GDPR Training - Certification of Attendance",
      subtitle:
        "General Data Protection Regulation (GDPR) 2016/679: Theoretical and Practical Presentation of the Ordinances - Organized by the University of Aegean",
      image: require("./assets/images/university-of-aegean-logo.png"),
      imageAlt: "Certification of Attendance - GDPR",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1m4rIa6hFWyabIXERfzq5KTZKZsR3Cs4w/view?usp=sharing"
        },
        {
          name: "University of Aegean",
          url: "https://www.aegean.edu"
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
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss for job opportunity or just want to say hi? My Inbox is open for all.",
  number: "+30 6942993950",
  email_address: "nikos.ev@hotmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
