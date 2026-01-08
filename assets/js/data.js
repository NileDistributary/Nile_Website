// /assets/js/data.js
// Centralized content and personal data for easy editing

const personalData = {
  // Basic Information
  name: "Nile Anderson",
  tagline: "Student • Robotics Enthusiast • Follower of Christ",
  email: "hello@nileanderson.com",
  location: "Oxford, England",
  
  // Hero Section
  hero: {
    greeting: "Hello, I'm",
    description: "Exploring the intersection of artificial intelligence, biomedical engineering, and faith-driven innovation.",
    ctaButtons: [
      { text: "About", link: "#about" },
      { text: "Contact", link: "#contact" }
    ]
  },
  
  // About Section
  about: {
    title: "About Me",
    paragraphs: [
      "Named after one of the world's great rivers, I've always been drawn to the idea of flow—of carrying life and energy to unexpected places. My journey has taken me from medicine to electronics engineering, and now into the fascinating world of artificial intelligence and biomedical engineering.",
      "I hold a Master's in Artificial Intelligence with Distinction from Oxford Brookes University and a First Class Honours degree in Electronics Engineering from the University of the West Indies. My work focuses on safety-critical AI applications, particularly in healthcare and autonomous systems.",
      "Currently, I'm working as a Software Engineer at Oxford's Computational Health Informatics Lab, where I contribute to AI systems that directly impact patient care. My interests span machine learning, embedded systems, robotics, and the development of intelligent medical devices.",
      "Beyond my technical work, my Christian faith shapes how I approach everything—from the integrity I bring to research, to the service-oriented mindset I carry in leadership roles. I believe technology should serve humanity with humility and excellence."
    ]
  },
  
  // Faith Section
  faith: {
    title: "Faith in Christ",
    statement: "My faith in Jesus Christ is central to who I am. It's not just a part of my life—it's the foundation. Following Christ means approaching my work with integrity, serving others with humility, and pursuing excellence as an act of worship. Whether I'm debugging code, conducting research, or mentoring students, I strive to reflect the values of compassion, diligence, and truth that Christ exemplified.",
    verse: {
      text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.",
      reference: "Colossians 3:23 (NIV)"
    },
    closingNote: "This perspective shapes not just what I do, but why and how I do it. I'm grateful for the opportunity to use my gifts in service of others and the advancement of knowledge."
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
        "Dissertation: Uncertainty-Aware Trajectory Prediction using Conformal Prediction techniques",
        "Modules: Machine Learning (82%), Statistical Modelling (88%), Autonomous Systems (65%)"
      ]
    },
    {
      degree: "Bachelor of Science, Electronics Engineering",
      institution: "University of the West Indies",
      location: "Mona, Jamaica",
      period: "2019 – 2023",
      grade: "First Class Honours (4.03/4.3 GPA)",
      highlights: [
        "Top matriculant and top graduate of Electronics Engineering programme",
        "Rhodes Scholar (2024)",
        "First Vice President, UWI Mona Guild (representing ~20,000 students)"
      ]
    },
    {
      degree: "MBBS, Medicine and Surgery (Pre-clinical)",
      institution: "University of the West Indies",
      location: "Mona, Jamaica",
      period: "2016 – 2018",
      grade: "Completed pre-clinical years",
      highlights: [
        "Clinical exposure in patient care and medical diagnostics",
        "Courses: Neuroscience, Anatomy, Physiology, Clinical Practice"
      ]
    }
  ],
  
  // Key Skills
  skills: {
    programming: ["Python", "C/C++", "MATLAB", "Java", "JavaScript", "VHDL"],
    frameworks: ["PyTorch", "scikit-learn", "Pandas", "NumPy", "Flask", "FastAPI"],
    engineering: ["Embedded Systems", "Signal Processing", "Control Systems", "PCB Design"],
    specializations: ["Machine Learning", "Computer Vision", "Robotics", "Conformal Prediction"],
    soft: ["Leadership", "Research", "Technical Communication", "Project Management"]
  },
  
  // Projects
  projects: [
    {
      title: "Uncertainty-Aware Trajectory Prediction",
      description: "Developed post-hoc uncertainty quantification for the ASTRA pedestrian trajectory prediction model using MultiDimSPCI Conformal Prediction techniques, providing distribution-free statistical guarantees for safety-critical autonomous driving applications.",
      tags: ["Machine Learning", "Autonomous Systems", "Python", "Conformal Prediction"],
      year: "2025",
      category: "ai-ml",
      link: null
    },
    {
      title: "Monte Carlo Localisation for Cozmo Robot",
      description: "Implemented probabilistic Gaussian sensor and motion models from experimental data, developed Monte Carlo Localisation with low variance and independent sampling, and integrated the system into robot navigation tasks.",
      tags: ["Robotics", "Python", "Probabilistic Methods", "Computer Vision"],
      year: "2024",
      category: "robotics",
      link: null
    },
    {
      title: "Chronic Kidney Disease Classification",
      description: "Built a comprehensive machine learning pipeline achieving 95%+ accuracy in patient diagnosis using random forest classifiers. Implemented advanced preprocessing including imputation, encoding, and feature scaling with comparative algorithm analysis.",
      tags: ["Machine Learning", "Healthcare", "Python", "scikit-learn"],
      year: "2024",
      category: "ai-ml",
      link: null
    },
    {
      title: "Remote Controlled Utility Robot",
      description: "Developed a Wi-Fi controlled robot with robotic arm for navigating unsafe environments. Implemented WebSocket and TCP socket servers for real-time communication, built frontend with HTML/CSS/JS and backend with Python.",
      tags: ["Robotics", "IoT", "Python", "Web Development"],
      year: "2023",
      category: "robotics",
      link: null
    },
    {
      title: "Smart Home IoT Platform",
      description: "Created a user-friendly IoT platform for centralized home appliance control using ESP32. Implemented automated control based on sensor inputs and external API data for geographical information.",
      tags: ["IoT", "Embedded Systems", "Arduino", "REST API"],
      year: "2023",
      category: "embedded",
      link: null
    },
    {
      title: "Autonomous Obstacle Avoidance Robot",
      description: "Designed and built an omnidirectional robot with 3D-printed mecanum wheels. Programmed ATmega32 microcontroller in AVR C with heuristic navigation algorithm using ultrasonic sensors on servo mount.",
      tags: ["Robotics", "Embedded Systems", "C", "3D Printing"],
      year: "2021",
      category: "robotics",
      link: null
    }
  ],
  
  // Awards (for display)
  featuredAwards: [
    "Rhodes Scholar (2024)",
    "Prime Minister's National Youth Award for Excellence (2024)",
    "Caribbean 35 Under 35 Award (2023)",
    "Top Electronics Engineering Graduate (2023)"
  ],
  
  // Social Links
  social: {
    github: "https://github.com/NileRiva",
    linkedin: "https://linkedin.com/in/nile-anderson",
    email: "mailto:hello@nileanderson.com"
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
