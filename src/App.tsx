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

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const projects = [
    {
      id: 1,
      title: "Urja: The Pocket Energy-saving App",
      description: "Transforming people's energy conservation habits",
      image: "images/Urja.png",
      tags: ["Research", "UI Design", "Prototyping"],
    },
    {
      id: 2,
      title: "UTS App Redesign",
      description:
        "Enhancing Unreserved Ticketing Experience for Indian Railways",
      image: "images/UTS.png",
      tags: ["UI Design", "Web Development", "Transport"],
    },
    {
      id: 3,
      title: "College Website Redesign",
      description: "Complete redesign of DJSCE college website",
      image: "images/DJSCE.png",
      tags: ["UI/UX", "Web Design", "Education"],
    },
    {
      id: 4,
      title: "Student Portal",
      description: "Student Portal",
      image: "images/Student.png",
      tags: ["UI/UX", "Web Design", "Education"],
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
                src="images/Shivam Vora.png"
                alt="Shivam Vora"
                className="rounded-xl w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg"
              />
            </div>
          </div>
          <p className="text-xl font-bold text-gray-600 mt-8 max-w-lg mx-auto">
            Designer by Heart, Coder by Trade
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
            {/* Belden Inc. */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Belden Inc. - R&D Software Developer
              </h3>
              <p className="text-gray-600 mb-4">June 2023 - Present</p>
              <ul className="space-y-2">
                <li className="text-gray-600">
                  Spearheaded the integration of project management tools,
                  enhancing tracking efficiency by 80%.
                </li>
                <li className="text-gray-600">
                  Developed a SharePoint portal for KPI tracking, reducing
                  manual reporting by 30%.
                </li>
                <li className="text-gray-600">
                  Created a Gen AI Copilot tool that improved sales process
                  efficiency by 18%, winning second place in a global hackathon.
                </li>
                <li className="text-gray-600">
                  Served as Scrum Master, improving sprint velocity by 15%.
                </li>
              </ul>
            </div>

            {/* AICAN */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                AICAN - User Experience and Research Intern
              </h3>
              <p className="text-gray-600 mb-4">Sep 2021 - Nov 2021</p>
              <ul className="space-y-2">
                <li className="text-gray-600">
                  Collaborated with the development team to design and develop a
                  smart AC controller.
                </li>
                <li className="text-gray-600">
                  Designed real-time dashboards for monitoring and device
                  control.
                </li>
                <li className="text-gray-600">
                  Enhanced the user experience through rigorous user research.
                </li>
              </ul>
            </div>

            {/* The Breakout Hunt */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                The Breakout Hunt - User Experience Intern
              </h3>
              <p className="text-gray-600 mb-4">June 2021 - Aug 2021</p>
              <ul className="space-y-2">
                <li className="text-gray-600">
                  Conducted competitor analysis, user surveys, and research to
                  enhance the app’s user experience.
                </li>
                <li className="text-gray-600">
                  Collaborated with developers for a successful app launch, now
                  available on Google Playstore.
                </li>
              </ul>
            </div>

            {/* CDAC */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                CDAC - Web Design Developer
              </h3>
              <p className="text-gray-600 mb-4">Jul 2020 - Apr 2021</p>
              <ul className="space-y-2">
                <li className="text-gray-600">
                  Designed and developed a virtual chemistry lab for CBSE
                  students during COVID-19.
                </li>
                <li className="text-gray-600">
                  Collaborated with the Ministry of Electronics & IT, reaching
                  over 150 schools across India.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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

      {/* Project Modal */}
      {/* Project Modal */}
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

              {/* Detailed Project Overview for Urja */}
              {activeProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                  <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {activeProject.title}
                          </h3>
                          <p className="text-gray-600">
                            {activeProject.description}
                          </p>
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

                      {/* Detailed Project Overview for Urja */}
                      {activeProject.id === 1 && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-8">
                              <div className="flex justify-between items-start mb-6">
                                <div>
                                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Urja: The Pocket Energy-saving App
                                  </h3>
                                  <p className="text-gray-600">
                                    Designed to help households in India monitor
                                    and control energy usage efficiently,
                                    promoting energy conservation.
                                  </p>
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

                              {/* Overview Section */}
                              <h4 className="text-xl font-bold text-gray-900 mb-4">
                                Project Overview
                              </h4>
                              <p className="text-gray-600 mb-4">
                                Urja empowers users with real-time insights into
                                appliance usage, notifications for high-energy
                                devices, and personalized energy-saving tips to
                                reduce their carbon footprint and lower
                                electricity bills.
                              </p>
                              <div className="text-gray-600 mb-8">
                                <p>
                                  <strong>Timeline:</strong> October 2022 -
                                  November 2022
                                </p>
                                <p>
                                  <strong>Tools:</strong> Figma
                                </p>
                                <p>
                                  <strong>Contributions:</strong> User Research,
                                  Interaction Design, Storytelling
                                </p>
                              </div>

                              {/* Problem Statement */}
                              <h4 className="font-bold text-gray-900 mb-4">
                                Problem Statement
                              </h4>
                              <p className="text-gray-600 mb-8">
                                Households in India face high utility bills due
                                to limited consumption insights. Traditional
                                billing only shows cumulative energy usage,
                                leaving users without specific guidance for
                                energy-saving. Urja addresses these gaps by
                                providing actionable data and automation for
                                energy management.
                              </p>

                              {/* Solution Overview */}
                              <h4 className="font-bold text-gray-900 mb-4">
                                Solution Overview
                              </h4>
                              <p className="text-gray-600 mb-8">
                                Urja solves these challenges by offering
                                detailed energy usage data, real-time cost
                                tracking, remote appliance control, and
                                personalized energy-saving tips.
                              </p>

                              {/* Research & Insights */}
                              <h4 className="font-bold text-gray-900 mb-4">
                                Research & Insights
                              </h4>
                              <ul className="text-gray-600 list-disc list-inside mb-8 space-y-4">
                                <li>
                                  <strong>User Survey:</strong> 47% of
                                  respondents expressed dissatisfaction with
                                  their current bills. Over 80% couldn't track
                                  individual device energy use, highlighting the
                                  need for an energy-monitoring solution.
                                </li>
                                <li>
                                  <strong>User Persona:</strong> A
                                  cost-conscious homeowner aiming to reduce
                                  energy use without sacrificing comfort.
                                </li>
                                <li>
                                  <strong>Competitive Analysis:</strong> Many
                                  existing solutions lacked real-time cost
                                  tracking and device-specific insights.
                                </li>
                              </ul>

                              {/* Objectives */}
                              <h4 className="font-bold text-gray-900 mb-4">
                                Defining the Objectives for Urja
                              </h4>
                              <ul className="text-gray-600 list-disc list-inside mb-8 space-y-4">
                                <li>
                                  Provide household and device-level energy
                                  usage insights.
                                </li>
                                <li>
                                  Enable remote control and scheduling of
                                  appliances.
                                </li>
                                <li>
                                  Track energy costs in real time and set goals
                                  for monthly savings.
                                </li>
                              </ul>

                              {/* Energy-Saving Model */}
                              <h4 className="font-bold text-gray-900 mb-4">
                                Urja’s Energy-Saving Model
                              </h4>
                              <p className="text-gray-600 mb-8">
                                The app incorporates a model to help users
                                conserve energy with personalized insights,
                                goals, and actionable controls.
                              </p>

                              {/* Design & Development Process */}
                              <h4 className="font-bold text-gray-900 mb-4">
                                Design & Development Process
                              </h4>
                              <ul className="text-gray-600 list-disc list-inside mb-8 space-y-4">
                                <li>
                                  <strong>User Flow & Wireframes:</strong>{" "}
                                  Created low-fidelity sketches for key features
                                  to ensure intuitive navigation.
                                </li>
                                <li>
                                  <strong>Style Guide:</strong> Established a
                                  cohesive interface with consistent color
                                  schemes and typography.
                                </li>
                                <li>
                                  <strong>High-Fidelity Prototypes:</strong>{" "}
                                  Detailed prototypes in Figma for a seamless
                                  user experience.
                                </li>
                              </ul>

                              {/* Key Screens and Features */}
                              <h4 className="font-bold text-gray-900 mb-4">
                                Key Screens and Features
                              </h4>
                              <ul className="text-gray-600 list-disc list-inside mb-8 space-y-4">
                                <li>
                                  <strong>Homepage:</strong> Summarizes energy
                                  usage with quick control options for
                                  appliances. [Image Placeholder]
                                </li>
                                <li>
                                  <strong>My Rooms:</strong> Allows users to
                                  manage energy for specific rooms. [Image
                                  Placeholder]
                                </li>
                                <li>
                                  <strong>Room Page:</strong> Displays controls
                                  and energy stats for individual devices.
                                  [Image Placeholder]
                                </li>
                                <li>
                                  <strong>My Energy Stats:</strong> Detailed
                                  energy stats with high-consumption alerts.
                                  [Image Placeholder]
                                </li>
                                <li>
                                  <strong>Payments:</strong> Bill management
                                  with comparisons and rewards. [Image
                                  Placeholder]
                                </li>
                                <li>
                                  <strong>Save Energy Tips:</strong> Customized
                                  energy-saving tips for better habits. [Image
                                  Placeholder]
                                </li>
                              </ul>

                              {/* Retrospective */}
                              <h4 className="font-bold text-gray-900 mb-4">
                                Retrospective
                              </h4>
                              <p className="text-gray-600 mb-8">
                                Urja empowers users to adopt efficient energy
                                habits, achieving up to 10% in annual savings.
                                It offers a timely solution for household energy
                                conservation in the face of rising electricity
                                costs and environmental concerns.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Detailed Project Overview for UTS */}
                      {activeProject && activeProject.id === 2 && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-8">
                              <div className="flex justify-between items-start mb-6">
                                <div>
                                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    UTS App Redesign
                                  </h3>
                                  <p className="text-gray-600">
                                    Enhancing Unreserved Ticketing Experience
                                    for Indian Railways by streamlining ticket
                                    booking and improving usability.
                                  </p>
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

                              {/* Overview Section */}
                              <h4 className="text-xl font-bold text-gray-900 mb-4">
                                Project Overview
                              </h4>
                              <p className="text-gray-600 mb-4">
                                The UTS app redesign focuses on improving user
                                experience in ticket booking, enhancing
                                usability, and addressing user frustrations with
                                navigation and payment issues.
                              </p>
                              <div className="text-gray-600 mb-8">
                                <p>
                                  <strong>Timeline:</strong> April 2022 - May
                                  2022
                                </p>
                                <p>
                                  <strong>Tools:</strong> Figma
                                </p>
                                <p>
                                  <strong>Contributions:</strong> User Research,
                                  Interaction Design, Storytelling
                                </p>
                              </div>

                              {/* Problem Statement */}
                              <h4 className="font-bold text-gray-900 mb-4">
                                Problem Statement
                              </h4>
                              <p className="text-gray-600 mb-8">
                                The existing UTS app faced usability challenges,
                                including complex navigation, lengthy
                                onboarding, frequent payment issues, and an
                                outdated interface, which led to user
                                dissatisfaction and limited app adoption.
                              </p>

                              {/* Solution Overview */}
                              <h4 className="font-bold text-gray-900 mb-4">
                                Solution Overview
                              </h4>
                              <p className="text-gray-600 mb-8">
                                The redesign aimed to streamline the booking
                                process, simplify login, enhance payment
                                processing with instant feedback, and modernize
                                the UI to make the app more intuitive and
                                user-friendly.
                              </p>

                              {/* Research & Insights */}
                              <h4 className="font-bold text-gray-900 mb-4">
                                Research & Insights
                              </h4>
                              <ul className="text-gray-600 list-disc list-inside mb-8 space-y-4">
                                <li>
                                  <strong>Domain Research:</strong> Identified
                                  UTS’s role in simplifying digital ticketing
                                  and eliminating physical queues, promoting a
                                  cashless, contactless option for commuters.
                                </li>
                                <li>
                                  <strong>User Research:</strong> Surveys and
                                  interviews with users aged 19 to 46 revealed
                                  frustrations with multi-step booking,
                                  complicated login, and frequent payment
                                  errors.
                                </li>
                                <li>
                                  <strong>User Persona:</strong> Created a
                                  persona representing a daily commuter needing
                                  a quick, reliable, paperless ticketing
                                  solution.
                                </li>
                                <li>
                                  <strong>Competitive Analysis:</strong>{" "}
                                  Examined alternatives to highlight usability
                                  improvements for streamlined navigation and
                                  real-time payment feedback.
                                </li>
                              </ul>

                              {/* Objectives */}
                              <h4 className="font-bold text-gray-900 mb-4">
                                Defining the Objectives of UTS Redesign
                              </h4>
                              <ul className="text-gray-600 list-disc list-inside mb-8 space-y-4">
                                <li>
                                  Streamlined ticket booking process with fewer
                                  steps.
                                </li>
                                <li>
                                  Simplified login and registration for smoother
                                  onboarding.
                                </li>
                                <li>
                                  Reliable payment processing with clear status
                                  updates.
                                </li>
                                <li>
                                  Modernized, accessible user interface for
                                  better usability.
                                </li>
                              </ul>

                              {/* Redesigning the UTS Ticketing Model */}
                              <h4 className="font-bold text-gray-900 mb-4">
                                Redesigning the UTS Ticketing Model
                              </h4>
                              <p className="text-gray-600 mb-8">
                                The UTS app was restructured to prioritize
                                usability and efficiency, addressing each pain
                                point with improved functionality and a refined
                                design approach.
                              </p>

                              {/* Design & Development Process */}
                              <h4 className="font-bold text-gray-900 mb-4">
                                Design & Development Process
                              </h4>
                              <ul className="text-gray-600 list-disc list-inside mb-8 space-y-4">
                                <li>
                                  <strong>User Flow & Wireframes:</strong>{" "}
                                  Developed low-fidelity sketches for logical,
                                  minimal-step ticket booking flows.
                                </li>
                                <li>
                                  <strong>Style Guide:</strong> Created a
                                  cohesive guide for color schemes, typography,
                                  icons, and layout consistency.
                                </li>
                                <li>
                                  <strong>High-Fidelity Prototypes:</strong>{" "}
                                  Figma prototypes with streamlined navigation
                                  and modernized visuals.
                                </li>
                              </ul>

                              {/* Key Screens and Features */}
                              <h4 className="font-bold text-gray-900 mb-4">
                                Key Screens and Features
                              </h4>
                              <ul className="text-gray-600 list-disc list-inside mb-8 space-y-4">
                                <li>
                                  <strong>Homepage:</strong> Quick access to
                                  ticket booking and past journeys, with
                                  recommendations for frequent routes. [Image
                                  Placeholder]
                                </li>
                                <li>
                                  <strong>Login & Registration:</strong>{" "}
                                  Simplified onboarding for quicker access to
                                  core functions. [Image Placeholder]
                                </li>
                                <li>
                                  <strong>Ticket Booking:</strong> Restructured
                                  interface for selecting routes, travel times,
                                  and confirming bookings with ease. [Image
                                  Placeholder]
                                </li>
                                <li>
                                  <strong>Ticket Summary & Payment:</strong>{" "}
                                  Summary view with secure payment options and
                                  immediate feedback. [Image Placeholder]
                                </li>
                                <li>
                                  <strong>My Tickets:</strong> Manage active and
                                  upcoming journeys with easy cancellation
                                  options. [Image Placeholder]
                                </li>
                                <li>
                                  <strong>Notifications:</strong> Alerts for
                                  confirmations, payment status, and expiring
                                  tickets. [Image Placeholder]
                                </li>
                                <li>
                                  <strong>Help & Support:</strong> Accessible
                                  FAQs, refund information, and contact options
                                  for user support. [Image Placeholder]
                                </li>
                              </ul>

                              {/* Retrospective */}
                              <h4 className="font-bold text-gray-900 mb-4">
                                Retrospective
                              </h4>
                              <p className="text-gray-600 mb-8">
                                The redesigned UTS app offers a more
                                user-friendly, efficient ticket booking
                                experience, simplifying the process for millions
                                of commuters and contributing to digital
                                adoption by reducing reliance on physical
                                counters.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
