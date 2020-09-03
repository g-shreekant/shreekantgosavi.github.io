/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Shreekant Gosavi",
  logo_name: "ShreekantGosavi",
  nickname: "Data Science Analyst",
  subTitle:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/17U1tAW8wrjQV_mkVZGY8x2bPsakQ70jq/view?usp=sharing",
  portfolio_repository: "https://github.com/shreekantgosavi",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/shreekantgosavi",
  // linkedin: "https://www.linkedin.com/in/shreekantgosavi/",
  // gmail: "shreekantgosavi@gmail.com",
  // gitlab: "https://github.com/shreekantgosavi",
  // facebook: "https://www.facebook.com/shreekant.gosavi.14/",
  // twitter: "https://twitter.com/Shreekantgosav1",
  // instagram: "https://www.youtube.com/channel/UCVHGLUihXFHXSCUE8wAg__Q?view_as=public"

  {
    name: "Github",
    link: "https://github.com/shreekantgosavi",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shreekantgosavi/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCVHGLUihXFHXSCUE8wAg__Q?view_as=public",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:shreekantgosavi@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Shreekantgosav1",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/shreekant.gosavi.14/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.youtube.com/channel/UCVHGLUihXFHXSCUE8wAg__Q?view_as=public",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and ML projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Machine Learning",
      fileName: "FullStackImg",
      skills: [
        "⚡ Understanding business objectives and developing models that help to achieve them, along with metrics to track their progress",
        "⚡ Proficiency with Python and basic libraries for machine learning such as scikit-learn and pandas",
        "⚡ Deployment of machine learning models in an automated, reproducible, and auditable manner",
      ],
      softwareSkills: [  
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Statistical Analysis and Visualization",
      fileName: "DesignImg",
      skills: [
        "⚡ Developing and implementing data analyses, data collection systems and other strategies that optimize statistical efficiency and quality",
        "⚡ Provides cross-functional analysis of customers to investigate trends and develop correlations across customer profiles and segments",
        "⚡ Identify, analyze Data Using Statistical Techniques and interpret trends or patterns in complex data sets",
        "⚡ Strong analytical skills with the ability to collect, organize, analyze, and disseminate significant amounts of information with attention to detail and accuracy",
      ],
      softwareSkills: [
      ],
    },
  ],
};
// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/shreekantgosavi",
    },
    
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://medium.com/@shreekantgosavi",
    },
    
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/shreekantgosavi2",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "RTMNU Nagpur University",
      subtitle: "B.E. (Bachelor of Engineering) in Information Technology (IT)",
      logo_path: "nagpur.png",
      alt_name: "Nagpur University",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing ,Statistics and Machine Learning.",
        "⚡ I was selected for Merit cum Means Scholarship and I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.nagpuruniversity.ac.in/v2",
    },
  ],
};


const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://drive.google.com/drive/folders/13gWFLZDJdUhVz9015Lttl---fBk9yLRK?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://drive.google.com/drive/folders/13gWFLZDJdUhVz9015Lttl---fBk9yLRK?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/drive/folders/13gWFLZDJdUhVz9015Lttl---fBk9yLRK?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://drive.google.com/drive/folders/13gWFLZDJdUhVz9015Lttl---fBk9yLRK?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/drive/folders/13gWFLZDJdUhVz9015Lttl---fBk9yLRK?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://drive.google.com/drive/folders/13gWFLZDJdUhVz9015Lttl---fBk9yLRK?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/drive/folders/13gWFLZDJdUhVz9015Lttl---fBk9yLRK?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://drive.google.com/drive/folders/13gWFLZDJdUhVz9015Lttl---fBk9yLRK?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://drive.google.com/drive/folders/13gWFLZDJdUhVz9015Lttl---fBk9yLRK?usp=sharing",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://drive.google.com/drive/folders/13gWFLZDJdUhVz9015Lttl---fBk9yLRK?usp=sharing",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/drive/folders/13gWFLZDJdUhVz9015Lttl---fBk9yLRK?usp=sharing",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://drive.google.com/drive/folders/13gWFLZDJdUhVz9015Lttl---fBk9yLRK?usp=sharing",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "My Work Internship and Volunteership",
  description:
    "I have worked with several evolving startups as Data Science Analyst.I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      
    
      title: "Internships",
      experiences: [
        {
          title: "Data Science Analyst Intern",
          company: "KPMG India, Bangalore",
          company_url: "https://home.kpmg/in/en/home.html",
          logo_path: "kpmg.png",
          duration: "May 2020 – Jul 2020",
          location: "Bangalore",
          description:
            "• Successfully interpreted data to draw conclusions for managerial action and strategy • Used statistical techniques for hypothesis testing to validate data and interpretations • Presented findings to improve strategies and operations • Used predictive analytics with machine learning to forecast company sales with a 95% accuracy rate.",
          color: "#0071C5",
        },
        {
          title: "Data Analyst Intern",
          company: "Big Data BizViz Technologies, Bangalore",
          company_url:
            "https://www.bdb.ai/",
          logo_path: "bdb.png",
          duration: "July 2019 – December 2019",
          location: "Bangalore",
          description:
            "• Collected, cleansed and provided modeling and analyses of structured and unstructured data used for major business initiatives • Applied various machine learning techniques and build dynamic pricing model and maximize the profits • Proposed solutions reduce total expenses and improve strategies • Working alongside teams within the business & the management team to establish business needs.",
          color: "#0071C5",
        },
        {
          title: "Data Science Intern",
          company: "CSIR-CDRI (A Government Research Organization), Lucknow",
          company_url:
            "",
          logo_path: "csir.png",
          duration: "February 2019 – June 2019",
          location: "Lucknow",
          description:
            "• Extracted, interpreted and analyzed data for 120 countries and its patent institutes to identify key metrics and transform raw data into meaningful, actionable information. • Completed a senior project to predict herbal patent & related requirements. Used decision trees, regression models, and SVM. • Created visually impactful dashboards in Excel and Tableau.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator Event During 2019 Bangalore",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - Aug 2019",
          location: "Bangalore",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Kaggle Days Meetup , Nagpur",
          company: "Kaggle",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Learn and socialize, meet Kaggle masters, Data Scientists , ML practitioner , students , mentors from your city.Kaggle Days Meetups are a series of events all over the world that aim to gather Kagglers and people interested in Data Science, Machine Learning, Artificial Intelligence around one city.Kaggle Days Meetup, Delhi NCR is a volunteer-driven initiative comprising of Kagglers, working professionals, students, and many more with a primary interest in exploring Kaggle as a platform & to learn, collaborate and meet others.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Nagpur, Maharashtra",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Nagpur city. We have build opensource community of our own college. The community is was working toghter to make society better using technology.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member @College",
          company: "College",
          company_url:
            "",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Nagpur, Maharashtra",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on data science and machine learning.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "shree.png",
    description:
      "I am available for new challenges and work. You can reach to me, I will reply back to you. We can have discussion on hiring or new projects or I can help you with ML, AI,Cloud and other technical stuff.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I strive to present well-written, informative articles about my understanding of data science and sharing ideas, concepts and codes.",
    link: "https://medium.com/@shreekantgosavi",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "1068, Bommanahalli, Bengaluru, Karnataka 560068",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/HURn9nKYwha5KnVLA",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8766440819",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};

