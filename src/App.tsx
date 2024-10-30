import { useState, useEffect } from "react";
import {
  BookOpen,
  Award,
  Briefcase,
  Linkedin,
  Mail,
  Target,
  Menu,
} from "lucide-react";

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFile, setActiveFile] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const experiences = [
    {
      id: 1,
      title: "Belden Inc. - R&D Software Developer",
      period: "June 2023 - Present",
      description: [
        "Spearheaded the research on integration of two project management tools into a single unified system, delivering enhanced project tracking efficiency and reducing costs by 80%.",
        "Developed and deployed a SharePoint portal and automated KPI tracking for the PMO, reducing manual reporting by 30% and improving financial visibility and resource management.",
        "Built a Gen AI Copilot tool to solve basic L1 tickets that increased sales process efficiency by 18% and won second place in Belden's global hackathon for it.",
        "Served as Scrum Master for a 12-member team, increasing sprint velocity by 15% while ensuring strong stakeholder alignment and Agile best practices.",
        "Engineered core frontend components in yFiles, React, and MUI for the Unified Tool UX, accelerating UI scalability and reducing development cycles by 25%.",
      ],
      files: [
        { src: "/files/Hackathon.jpg", type: "image" },
        { src: "/files/Belden.pdf", type: "pdf" },
      ],
    },
    {
      id: 2,
      title: "AICAN - User Experience and Research Intern",
      period: "Sep 2021 - Nov 2021",
      description: [
        "Collaborated on UX research and design for smart controllers.",
        "Designed real-time dashboards for monitoring and control.",
      ],
      files: [{ src: "/files/Aican.pdf", type: "pdf" }],
    },
    {
      id: 3,
      title: "The Breakout Hunt - User Experience Intern",
      period: "June 2021 - Aug 2021",
      description: [
        "Conducted competitor analysis, user surveys, and research to enhance the app’s user experience.",
        "Collaborated with developers for a successful app launch, now available on Google Playstore.",
      ],
      files: [{ src: "/files/BreakoutHunt.pdf", type: "pdf" }],
    },
    {
      id: 4,
      title: "CDAC - Web Design Developer",
      period: "Jul 2020 - Apr 2021",
      description: [
        "Collaborated with the Ministry of Electronics & IT to develop OLABS, a virtual platform that enabled remote STEM education for 10,000+ students during COVID-19.",
        "Designed and launched a virtual chemistry laboratory environment within OLABS that facilitated practical learning for students in remote setups, reaching over 150 schools across India.",
      ],
      files: [
        { src: "/files/CDAC.pdf", type: "pdf" },
      ],
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Urja: The Pocket Energy-saving App",
      description: "Transforming people's energy conservation habits",
      image: "/images/Urja.png",
      tags: ["Research", "UI Design", "Prototyping"],
      details: {
        overview:
          "Urja empowers users with real-time insights into appliance usage, notifications for high-energy devices, and personalized energy-saving tips to reduce their carbon footprint and lower electricity bills.",
        timeline: "October 2022 - November 2022",
        tools: "Figma",
        contributions: ["User Research", "Interaction Design", "Storytelling"],
        problemStatement:
          "Households in India face high utility bills due to limited consumption insights...",
        solutionOverview:
          "Urja solves these challenges by offering detailed energy usage data...",
        researchInsights: [
          {
            title: "User Survey",
            content:
              "47% of respondents expressed dissatisfaction with their current bills...",
          },
          {
            title: "User Persona",
            content:
              "A cost-conscious homeowner aiming to reduce energy use...",
          },
        ],
        objectives: [
          "Provide household and device-level energy usage insights.",
          "Enable remote control and scheduling of appliances.",
        ],
        designProcess: [
          {
            title: "User Flow & Wireframes",
            content: "Created low-fidelity sketches for key features...",
          },
          {
            title: "Style Guide",
            content:
              "Established a cohesive interface with consistent color schemes...",
          },
        ],
        keyFeatures: [
          {
            title: "Homepage",
            content:
              "Summarizes energy usage with quick control options for appliances.",
          },
          {
            title: "My Rooms",
            content: "Allows users to manage energy for specific rooms.",
          },
        ],
        retrospective:
          "Urja empowers users to adopt efficient energy habits, achieving up to 10% in annual savings...",
      },
    },
    {
      id: 2,
      title: "UTS App Redesign",
      description:
        "Enhancing Unreserved Ticketing Experience for Indian Railways",
      image: "/images/UTS.png",
      tags: ["UI Design", "Web Development", "Transport"],
      details: {
        overview:
          "The UTS app redesign focuses on improving user experience in ticket booking...",
        timeline: "April 2022 - May 2022",
        tools: "Figma",
        contributions: ["User Research", "Interaction Design", "Storytelling"],
        problemStatement: "The existing UTS app faced usability challenges...",
        solutionOverview:
          "The redesign aimed to streamline the booking process...",
        researchInsights: [
          {
            title: "Domain Research",
            content:
              "Identified UTS’s role in simplifying digital ticketing...",
          },
          {
            title: "User Research",
            content:
              "Surveys and interviews with users aged 19 to 46 revealed frustrations...",
          },
        ],
        objectives: [
          "Streamlined ticket booking process with fewer steps.",
          "Simplified login and registration for smoother onboarding.",
        ],
        designProcess: [
          {
            title: "User Flow & Wireframes",
            content:
              "Developed low-fidelity sketches for logical booking flows.",
          },
          {
            title: "Style Guide",
            content:
              "Created a cohesive guide for color schemes, typography...",
          },
        ],
        keyFeatures: [
          {
            title: "Homepage",
            content: "Quick access to ticket booking and past journeys...",
          },
          {
            title: "Login & Registration",
            content:
              "Simplified onboarding for quicker access to core functions.",
          },
        ],
        retrospective:
          "The redesigned UTS app offers a more user-friendly, efficient ticket booking experience...",
      },
    },
    {
      id: 3,
      title: "College Website Redesign",
      description: "Complete redesign of DJSCE college website",
      image: "/images/DJSCE.png",
      tags: ["UI/UX", "Web Design", "Education"],
      details: {
        overview:
          "Redesigning the DJSCE college website to improve user experience and accessibility for students and staff.",
        timeline: "March 2022 - May 2022",
        tools: "Figma, Adobe XD",
        contributions: ["UI/UX Design", "User Research", "Prototyping"],
        problemStatement:
          "The previous DJSCE website had an outdated design, making navigation difficult for users...",
        solutionOverview:
          "The redesign addressed usability, navigation, and visual appeal, aligning with the needs of students and faculty...",
        researchInsights: [
          {
            title: "User Interviews",
            content:
              "Conducted interviews with students and staff to identify pain points...",
          },
          {
            title: "Persona Development",
            content:
              "Created personas to represent different types of users like students, faculty...",
          },
          {
            title: "Usability Testing",
            content:
              "Tested prototypes with target users to ensure intuitive navigation...",
          },
        ],
        objectives: [
          "Enhance accessibility across devices.",
          "Simplify navigation for students and faculty to find information quickly.",
          "Modernize visual design to align with current web standards.",
        ],
        designProcess: [
          {
            title: "Wireframes",
            content:
              "Developed wireframes to outline core navigation and layout changes.",
          },
          {
            title: "UI Prototyping",
            content:
              "Created high-fidelity prototypes showcasing a new visual style and layout.",
          },
        ],
        keyFeatures: [
          {
            title: "Home Page",
            content:
              "Highlights key information, news, and updates for students and visitors.",
          },
          {
            title: "Departments",
            content:
              "Organized information on academic departments for easier access to relevant resources.",
          },
          {
            title: "Student Portal",
            content:
              "Integrated a user-friendly portal for students to access academic resources and schedules.",
          },
        ],
        retrospective:
          "The redesign resulted in a more accessible, visually appealing, and functional website, improving satisfaction among students and staff.",
      },
    },
    {
      id: 4,
      title: "Student Portal",
      description: "A user-friendly portal for student resources",
      image: "/images/Student.png",
      tags: ["UI/UX", "Web Design", "Education"],
      details: {
        overview:
          "Developed a dedicated portal to streamline access to academic resources, schedules, and updates for students.",
        timeline: "August 2022 - October 2022",
        tools: "Figma, React",
        contributions: [
          "UI/UX Design",
          "Front-end Development",
          "User Testing",
        ],
        problemStatement:
          "Students faced challenges accessing academic resources due to fragmented systems...",
        solutionOverview:
          "The student portal consolidates resources, schedules, and academic information in a single, easy-to-navigate platform.",
        researchInsights: [
          {
            title: "Survey",
            content:
              "Gathered feedback from students regarding their experience with existing systems...",
          },
          {
            title: "Competitive Analysis",
            content:
              "Analyzed similar portals at other institutions to identify best practices...",
          },
        ],
        objectives: [
          "Provide a central hub for academic resources and updates.",
          "Enhance the user experience through intuitive navigation.",
          "Offer a responsive design accessible across devices.",
        ],
        designProcess: [
          {
            title: "User Journey Mapping",
            content:
              "Mapped out key user journeys to simplify common tasks like accessing schedules.",
          },
          {
            title: "Prototyping",
            content:
              "Developed interactive prototypes to test with student users.",
          },
        ],
        keyFeatures: [
          {
            title: "Dashboard",
            content:
              "Displays personalized information and quick links to resources.",
          },
          {
            title: "Class Schedules",
            content:
              "Organized schedules with filtering options for easier viewing.",
          },
          {
            title: "Resource Library",
            content: "Centralized access to academic materials and resources.",
          },
        ],
        retrospective:
          "The Student Portal provides a centralized, intuitive platform that has significantly reduced the time students spend looking for information, improving their academic experience.",
      },
    },
  ];

  const skills = [
    {
      category: "Design",
      items: [
        "UI Design",
        "UX Design",
        "Wireframing",
        "Prototyping",
        "User Research",
      ],
    },
    {
      category: "Development",
      items: ["React JS", "HTML/CSS", "JavaScript", "Python", "SQL"],
    },
    {
      category: "Tools",
      items: ["Figma", "Adobe XD", "Git", "SPSS", "Tableau"],
    },
    {
      category: "Research",
      items: [
        "User Testing",
        "Heuristic Analysis",
        "Journey Mapping",
        "Personas",
      ],
    },
  ];

  useEffect(() => {
    const sections = [
      document.querySelector(".hero-section"),
      document.querySelector("nav"),
      document.querySelector("#contact"),
    ];
    let colorIndex = 0;
    const colors = ["#FFFAE3", "#E3F9FF", "#F0EFFF", "#E8FDF5", "#FFF5F3"];

    const changeColor = () => {
      sections.forEach((section) => {
        if (section) {
          section.style.transition = "background 2s ease-out";
          section.style.background = colors[colorIndex];
        }
      });
      colorIndex = (colorIndex + 1) % colors.length;
    };

    const intervalId = setInterval(changeColor, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const openFileModal = (file) => {
    setActiveFile(file);
  };

  const closeModal = () => {
    setActiveProject(null);
    setActiveFile(null);
  };

  return (
    <div className="bg-white overflow-x-hidden overflow-y-auto min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css?family=Waiting+for+the+Sunrise');
        .hero-title {
          font-family: 'Waiting for the Sunrise', cursive;
          font-size: 3rem;
          text-align: center;
          line-height: 1.2;
          padding: 0.5rem;
        }
        @media (min-width: 768px) {
          .hero-title {
            font-size: 4rem;
          }
        }
        .section-title {
          font-family: 'Waiting for the Sunrise', cursive;
          font-size: 2.5rem;
          text-align: center;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="nav-brand text-gray-1000 hidden md:block">SV</div>
            <button className="ml-auto md:hidden" onClick={toggleMenu}>
              <Menu className="h-6 w-6 text-gray-800" />
            </button>
          </div>
          <div className={`space-x-8 hidden md:flex`}>
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#work" className="text-gray-600 hover:text-gray-900">
              Work
            </a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">
              Skills
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <a
              href="#about"
              className="block text-gray-600 px-6 py-2"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#work"
              className="block text-gray-600 px-6 py-2"
              onClick={toggleMenu}
            >
              Work
            </a>
            <a
              href="#skills"
              className="block text-gray-600 px-6 py-2"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block text-gray-600 px-6 py-2"
              onClick={toggleMenu}
            >
              Get in Touch
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-section min-h-screen flex flex-col items-center justify-center bg-blue-50 px-6 pt-20">
        <div className="text-center">
          <h1 className="hero-title text-gray-900">Hello, I'm Shivam Vora</h1>
          <div className="flex items-center justify-center mt-6">
            <div className="relative">
              <img
                src="/images/Shivam Vora.png"
                alt="Shivam Vora"
                className="rounded-xl w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg"
              />
            </div>
          </div>
          <p className="text-xl font-bold text-gray-600 mt-8 max-w-lg mx-auto">
            Designer by Heart, Coder by Profession
          </p>
          <p className="text-xl text-gray-600 mt-8 max-w-lg mx-auto">
            Creating intuitive digital experiences through thoughtful design and
            development. Currently working at Belden Inc as an R&D Software
            Developer.
          </p>
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://www.linkedin.com/in/shivam-vora/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:vorashivam24@gmail.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center py-20 bg-gray-50 px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-gray-900 mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-6">
                I'm a UI/UX developer with a B.Tech in Information Technology
                from Dwarkadas J. Sanghvi College of Engineering (CGPA:
                9.43/10). Currently working at Belden Inc, I specialize in
                creating user-centered digital experiences that combine
                aesthetic appeal with functional design.
              </p>
              <p className="text-gray-600 mb-6">
                With experience in both design and development, I bridge the gap
                between user needs and technical implementation, ensuring
                seamless and intuitive digital solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <Briefcase className="h-6 w-6 text-gray-900 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Experience</h3>
                  <p className="text-gray-600 text-sm">
                    3+ years in UI/UX and development
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <Award className="h-6 w-6 text-gray-900 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Recognition</h3>
                  <p className="text-gray-600 text-sm">
                    Published researcher and hackathon winner
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-4">
                  Recent Achievements
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Target className="h-5 w-5 text-gray-900 mt-1 mr-3" />
                    <p className="text-gray-600">
                      Second place in Belden's global hackathon for Gen AI
                      Copilot tool
                    </p>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 text-gray-900 mt-1 mr-3" />
                    <p className="text-gray-600">
                      Published research in International Conference on Advanced
                      Computing Technologies
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-gray-900 mt-1 mr-3" />
                    <p className="text-gray-600">
                      Letter of Appreciation from DJSCE Principal for college
                      contributions
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex flex-col justify-center py-20 bg-white px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-gray-900 mb-12">Experience</h2>
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div key={experience.id} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {experience.title}
                </h3>
                <p className="text-gray-600 mb-4">{experience.period}</p>

                {/* Render each statement in description */}
                <ul className="text-gray-600 list-disc mb-8 pl-5 space-y-3">
                  {experience.description.map((statement, index) => (
                    <li key={index} className="ml-4">
                      {statement}
                    </li>
                  ))}
                </ul>

                {/* Attached Files */}
                <div>
                  {" "}
                  <p className="text-gray-600 mb-4 font-bold">
                    Files & Certificates
                  </p>
                </div>
                <div className="flex space-x-2 mt-2">
                  {experience.files.map((file, index) => (
                    <img
                      key={index}
                      src={file.type === "image" ? file.src : "/images/pdf.png"}
                      alt="File Preview"
                      className="w-12 h-16 shadow-md cursor-pointer"
                      onClick={() => openFileModal(file)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable Modal Component */}
      {(activeProject || activeFile) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  {activeProject ? (
                    <>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {activeProject.title}
                      </h3>
                      <p className="text-gray-600">
                        {activeProject.description}
                      </p>
                    </>
                  ) : activeFile ? (
                    <>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        File Preview
                      </h3>
                      <p className="text-gray-600">
                        {activeFile.src.split("/").pop()}
                      </p>
                    </>
                  ) : null}
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Content Display for Project or File */}
              {activeProject ? (
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Project Overview
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {activeProject.description}
                  </p>
                </div>
              ) : activeFile ? (
                <div className="flex justify-center">
                  {activeFile.type === "image" ? (
                    <img
                      src={activeFile.src}
                      alt="File Preview"
                      className="w-full h-auto rounded-md"
                    />
                  ) : (
                    <iframe
                      src={activeFile.src}
                      title="PDF Preview"
                      className="w-full h-96"
                    />
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}

      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {activeProject.title}
                  </h3>
                  <p className="text-gray-600">{activeProject.description}</p>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Detailed Sections */}
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Project Overview
              </h4>
              <p className="text-gray-600 mb-4">
                {activeProject.details.overview}
              </p>
              <div className="text-gray-600 mb-8">
                <p>
                  <strong>Timeline:</strong> {activeProject.details.timeline}
                </p>
                <p>
                  <strong>Tools:</strong> {activeProject.details.tools}
                </p>
                <p>
                  <strong>Contributions:</strong>{" "}
                  {activeProject.details.contributions.join(", ")}
                </p>
              </div>

              {/* Problem Statement */}
              <h4 className="font-bold text-gray-900 mb-4">
                Problem Statement
              </h4>
              <p className="text-gray-600 mb-8">
                {activeProject.details.problemStatement}
              </p>

              {/* Solution Overview */}
              <h4 className="font-bold text-gray-900 mb-4">
                Solution Overview
              </h4>
              <p className="text-gray-600 mb-8">
                {activeProject.details.solutionOverview}
              </p>

              {/* Research & Insights */}
              <h4 className="font-bold text-gray-900 mb-4">
                Research & Insights
              </h4>
              <ul className="text-gray-600 list-disc list-inside mb-8 space-y-4">
                {activeProject.details.researchInsights.map(
                  (insight, index) => (
                    <li key={index}>
                      <strong>{insight.title}:</strong> {insight.content}
                    </li>
                  )
                )}
              </ul>

              {/* Objectives */}
              <h4 className="font-bold text-gray-900 mb-4">
                Defining the Objectives
              </h4>
              <ul className="text-gray-600 list-disc list-inside mb-8 space-y-4">
                {activeProject.details.objectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>

              {/* Design & Development Process */}
              <h4 className="font-bold text-gray-900 mb-4">
                Design & Development Process
              </h4>
              <ul className="text-gray-600 list-disc list-inside mb-8 space-y-4">
                {activeProject.details.designProcess.map((step, index) => (
                  <li key={index}>
                    <strong>{step.title}:</strong> {step.content}
                  </li>
                ))}
              </ul>

              {/* Key Screens and Features */}
              <h4 className="font-bold text-gray-900 mb-4">
                Key Screens and Features
              </h4>
              <ul className="text-gray-600 list-disc list-inside mb-8 space-y-4">
                {activeProject.details.keyFeatures.map((feature, index) => (
                  <li key={index}>
                    <strong>{feature.title}:</strong> {feature.content}
                  </li>
                ))}
              </ul>

              {/* Retrospective */}
              <h4 className="font-bold text-gray-900 mb-4">Retrospective</h4>
              <p className="text-gray-600 mb-8">
                {activeProject.details.retrospective}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Portfolio Section */}
      <section
        id="work"
        className="min-h-screen flex flex-col justify-center py-20 bg-gray-50 px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-gray-900 mb-12">Selected Work</h2>
          <div className="grid md:grid-cols-2 gap-8 ">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white-50 shadow-md rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex flex-col justify-center py-20 bg-white-50 px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-gray-900 mb-12">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-gray-900 mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-600">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center py-20 px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gray-900 rounded-2xl p-12 text-center">
            <h2 className="section-title text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Looking for a UI/UX developer who can bridge design and
              development? Let's create something amazing together.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:vorashivam24@gmail.com"
                className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
