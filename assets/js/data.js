// /assets/js/data.js
// Centralized content and personal data for easy editing

const personalData = {
  // Basic Information
  name: "Nile Anderson",
  tagline: "Software Engineer • AI and Robotics Enthusiast • Follower of Christ",
  email: "niletributary@gmail.com",
  location: "Oxford, England",

  // Hero Section
  hero: {
    greeting: "Hello, I'm",
    description: "Software Engineer at Oxford's Computational Health Informatics Lab, working on remote monitoring technologies for digital health. My work sits at the intersection of engineering, healthcare, and applied machine learning. I desire to do all things for the Glory of Jesus my Saviour!",
    ctaButtons: [
      { text: "About", link: "#about" },
      { text: "Contact", link: "#contact" }
    ]
  },

  // About Section
  about: {
    title: "About Me",
    paragraphs: [
      "I am a Software Engineer in the Computational Health Informatics (CHI) Lab at the University of Oxford, working under Professor David Clifton on remote monitoring technologies for digital health. I contribute to the design and development of sensor systems that enrich physiological data streams, supporting improved clinical assessment, monitoring, and prediction. My current work extends existing platforms with new sensing modalities and underpins future applications of sensor-driven technologies across the lab's broader research in healthcare innovation.",
      "I hold an MSc in Artificial Intelligence with Distinction from Oxford Brookes University, where my research focused on enhancing trajectory prediction models with formal uncertainty guarantees for safety-critical applications. I also hold a First Class Honours degree in Electronics Engineering from the University of the West Indies, Mona, where my studies focused on the design and implementation of embedded systems.",
      "During my undergraduate years, I served as a Teaching Assistant for Circuit Analysis & Devices, Signals & Systems, and Analogue & Digital Communication Systems. I also led the Mona Engineering Society as President, fostering industry partnerships and student development, and served as First Vice-President of the UWI Mona Student Guild, coordinating university-wide initiatives and representing student interests for approximately 20,000 students.",
      "I am a recipient of both the Governor General's Achievement Award and the Prime Minister's National Youth Award for Academics—Jamaica's premier honours for youth achievement—and in the Commonwealth Year of the Youth, was named among the 35 Under 35 in the Caribbean by the Caribbean Regional Youth Council. I am also a Rhodes Scholar (2024)."
    ]
  },

  // Faith Section
  faith: {
    title: "Faith in Christ",
    statement: "A committed Christian, I seek to demonstrate that faith and science need not be in contention, viewing scientific inquiry as a way to explore and steward God's creation. Guided by the ethos of Dominus Illuminatio Mea—'The Lord is my Light'—I see my engineering practice as a way to reflect the light of Christ through service, diligence, and care for others, inviting others to come and see. My faith informs a desire to use technology in ways that uphold human dignity, strengthen communities, and contribute to meaningful good in the world. I believe that my competence is not of myself but from God, and I am committed to glorifying Jesus Christ in all that I do.",
    verse: {
      text: "If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved. For it is with your heart that you believe and are justified, and it is with your mouth that you profess your faith and are saved. As Scripture says, 'Anyone who believes in him will never be put to shame.'",
      reference: "Romans 10:9-11 (NIV)"
    },
    closingNote: "I am part of the Rhodes Christian Fellowship, where I meet with other Christian scholars for Bible study and time together in community. Beyond my academic and research commitments, when not in the lab or at fellowship, I can be found working my 'two left feet' on the field with Rhodes F.C."
  },

  // Education Timeline
  education: [
    {
      degree: "Master of Science, Artificial Intelligence",
      institution: "Oxford Brookes University",
      location: "Oxford, England",
      period: "2024 – 2025",
      grade: "Distinction",
      highlights: [
        "Dissertation: Developing uncertainty-aware trajectory prediction using Conformal Prediction techniques for safety-critical applications (supervised by Fabio Cuzzolin)",
        "Modules: Research Methods, Autonomous Intelligent Systems, Statistical Modelling, Machine Learning & Data Mining, Principles of Data Science"
      ]
    },
    {
      degree: "Bachelor of Science, Electronics Engineering",
      institution: "University of the West Indies",
      location: "Mona, Jamaica",
      period: "2019 – 2023",
      grade: "First Class Honours (4.03/4.3 GPA)",
      highlights: [
        "Entered University as Top Matriculant, Topped Electronics Program",
        "Rhodes Scholar (2024), Taylor Hall Valedictorian",
        "First Vice President, UWI Mona Guild; President, Mona Engineering Society",
        "Huawei Seeds for the Future Enrichment Program, Cultural Exchange to Panama"
      ]
    },
    {
      degree: "MBBS, Medicine and Surgery (Pre-clinical years completed)",
      institution: "University of the West Indies",
      location: "Mona, Jamaica",
      period: "2016 – 2018",
      grade: "Pre-clinical training completed",
      highlights: [
        "Courses: Neuroscience I & II, Cell Biology, Anatomy and Physiology, Introduction to Medical Practice, Health Care Concepts",
        "Clinical experience including patient history taking and observing clinical workflows",
        "Cardiovascular System coursework including ECG theory and interpretation",
        "Played main role in charity play helping raise 4.2M JMD for hospital"
      ]
    },
    {
      degree: "Associate of Science, Natural Sciences",
      institution: "Manning's School",
      location: "Westmoreland, Jamaica",
      period: "2014 – 2016",
      grade: "Most Outstanding Candidate in Sciences (Regional)",
      highlights: [
        "1st Nationally and 2nd Regionally in Integrated Mathematics",
        "2nd Regionally in Electrical and Electronic Technology Unit 1 & 2",
        "2nd Nationally in Physics Unit 2, 3rd Nationally in Physics Unit 1",
        "Head Prefect, House Captain, Chess Club President"
      ]
    }
  ],

  // Key Skills
  skills: {
    programming: ["Python", "C", "C++", "C#", "Java", "MATLAB", "JavaScript/HTML/CSS", "VHDL", "Ladder Logic", "Assembly"],
    frameworks: ["Pandas", "Flask", "FastAPI", "NumPy", "ASP.NET MVC", "scikit-learn", "statsmodels", "PyTorch"],
    engineering: ["Embedded Systems", "PCB Design", "Proteus", "AutoCAD", "Eagle CAD", "RS Logix 5000", "FactoryTalk", "LabView", "Multisim"],
    specializations: ["Machine Learning", "Conformal Prediction", "Data Analysis", "Digital Health", "Autonomous Systems", "IoT", "Robotics"],
    soft: ["Project Management", "Problem Solving", "Leadership", "Communication", "Teaching"]
  },

  // Projects
  projects: [
    {
      title: "Uncertainty-Aware Trajectory Prediction: Enhanced ASTRA Model",
      description: "Developed post-hoc uncertainty quantification for the ASTRA pedestrian trajectory prediction model using Conformal Prediction techniques. Achieved distribution-free statistical guarantees for safety-critical applications in autonomous driving with formal coverage guarantees. Conducted evaluation on ETH datasets while maintaining the computational efficiency of the PyTorch Deep Learning Model.",
      tags: ["Machine Learning", "Conformal Prediction", "PyTorch", "Autonomous Driving"],
      year: "2025",
      category: "ai-ml",
      link: null
    },
    {
      title: "Monte Carlo Localisation for Cozmo Robot",
      description: "Developed a Probabilistic Gaussian Sensor Model and Motion Model from experimentally collected data. Implemented Monte Carlo Localisation with models comparing low variance and independent sampling. Integrated Monte Carlo Localisation into Robot Navigation Task.",
      tags: ["Robotics", "Python", "Probabilistic Methods", "Localisation"],
      year: "2024",
      category: "robotics",
      link: null
    },
    {
      title: "Chronic Kidney Disease Classification",
      description: "Developed a comprehensive machine learning pipeline for chronic kidney disease prediction, achieving over 95% accuracy in patient diagnosis using random forest classifiers. Implemented advanced data preprocessing techniques including imputation, categorical encoding, and feature scaling to optimise model performance. Conducted comparative analysis between multiple classification algorithms, evaluating performance via precision, recall, and ROC-AUC metrics.",
      tags: ["Machine Learning", "Healthcare", "Python", "scikit-learn"],
      year: "2024",
      category: "ai-ml",
      link: null
    },
    {
      title: "Synergy: AI Audio to Workflow Tool",
      description: "Collaborated with an international team at the OxAI Summer Hackathon to design and build an AI-driven MVP within 48 hours, focused on converting unstructured audio input into actionable project reports. Extended the experimental AI JSON Framework by developing custom actions for transcription (via Whisper API) and logical report generation using Claude-3 LLM. Designed a structured workflow that transforms audio content into JSON schemas detailing tasks, durations, and execution sequences.",
      tags: ["AI", "Whisper API", "Claude-3", "Hackathon"],
      year: "2024",
      category: "ai-ml",
      link: null
    },
    {
      title: "Remote Controlled Utility Robot",
      description: "Implemented a Wi-Fi-controlled robot capable of navigation and environment manipulation via a robotic arm for navigating unsafe spaces. Established real-time communication between the robot and user through WebSocket and TCP socket servers. Built the front end from scratch using HTML/CSS/JS and backend using Python and Shell Script.",
      tags: ["Robotics", "IoT", "Python", "WebSocket"],
      year: "2023",
      category: "robotics",
      link: null
    },
    {
      title: "Simple Smart Hub",
      description: "Developed a user-friendly IoT platform for centralised home appliance control. Embedded System implemented using ESP32 coded with Arduino C. Automated appliance control based on input from sensors and geographical data called from external API.",
      tags: ["IoT", "Embedded Systems", "ESP32", "Arduino"],
      year: "2023",
      category: "embedded",
      link: null
    },
    {
      title: "Remote-Control Audio Amplifier",
      description: "Designed PCB Circuits for the remote and Amplifier using EagleCAD. Calculated component values to optimise for desired frequency range according to James Baxandall model. Troubleshot and solved a problem with the available SPI Library that was causing the system to freeze.",
      tags: ["PCB Design", "Embedded Systems", "EagleCAD", "Audio"],
      year: "2022",
      category: "embedded",
      link: null
    },
    {
      title: "Omnidirectional Autonomous Obstacle Avoidance Robot",
      description: "3D-printed and assembled chassis and mecanum wheels for omnidirectional movement. Implemented using ATmega32 Chip as microcontroller and programmed in AVR C. Coded a simple algorithm for heuristic navigation based on distance from ultrasonic mounted on a servo.",
      tags: ["Robotics", "AVR C", "3D Printing", "Embedded Systems"],
      year: "2021",
      category: "robotics",
      link: null
    }
  ],

  // Featured Awards
  featuredAwards: [
    "Rhodes Scholar (2024)",
    "Prime Minister's National Youth Award for Excellence in Academics (2024)",
    "Caribbean 35 Under 35 Award (2023)",
    "Top Electronics Engineering Graduate (2023)",
    "Scientific Research Council STEM Ambassador (2023)",
    "Governor General's Achievement Award (2018)",
    "Taylor Hall Valedictorian (2023)",
    "Most Outstanding Candidate in Sciences in the Region (2014)"
  ],

  // Social Links
  social: {
    github: "https://github.com/NileRiva",
    linkedin: "https://www.linkedin.com/in/nile-anderson-engineer/",
    instagram: "https://www.instagram.com/__nilerivers/",
    email: "mailto:niletributary@gmail.com"
  },

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Nile Anderson. All rights reserved.`,
    credits: "Designed and built with care in Oxford."
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = personalData;
}
