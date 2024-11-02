import { useState, useEffect } from "react";
import {
  BookOpen,
  Award,
  Briefcase,
  Linkedin,
  Mail,
  Target,
  Menu,
  ArrowUp,
} from "lucide-react";

import { experiences } from "./components/Experience";
import { projects } from "./components/Project";
import { skills } from "./components/Skills";
import {
  about,
  contact,
  hero,
  inspiringQuote,
  sectionTitle,
} from "./components/About";

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFile, setActiveFile] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [showTopButton, setShowTopButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <h1 className="hero-title text-gray-900">{hero.intro}</h1>
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
            {hero.tagline}
          </p>
          <p className="text-xl text-gray-600 mt-8 max-w-lg mx-auto">
            {hero.content}
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

      {/* Portfolio Section */}
      <section
        id="work"
        className="min-h-screen flex flex-col justify-center py-20 bg-white-50 px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-gray-900 mb-12">
            {sectionTitle.portfolio}
          </h2>
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

      <section
        id="about"
        className="min-h-screen flex flex-col justify-center py-20 bg-gray-50 px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-gray-900 mb-12">
            {sectionTitle.about}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-6">{about.intro1}</p>
              <p className="text-gray-600 mb-6">{about.intro2}</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <Briefcase className="h-6 w-6 text-gray-900 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Experience</h3>
                  <p className="text-gray-600 text-sm">{about.experience}</p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <Award className="h-6 w-6 text-gray-900 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Recognition</h3>
                  <p className="text-gray-600 text-sm">{about.recognition}</p>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-xl">
                <p className="text-gray-900 leading-relaxed">
                  {inspiringQuote.intro}
                </p>
                <blockquote className="italic text-gray-700 text-lg text-left">
                  "{inspiringQuote.text}"
                </blockquote>
                <p className="text-right text-gray-600 mt-2">
                  - {inspiringQuote.author}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-4">
                  Recent Achievements
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Target className="h-6 w-6 text-gray-900 mt-0.5 mr-4 flex-shrink-0" />
                    <p className="text-gray-600 leading-relaxed">
                      {about.achievement1}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="h-6 w-6 text-gray-900 mt-0.5 mr-4 flex-shrink-0" />
                    <p className="text-gray-600 leading-relaxed">
                      {about.achievement2}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-6 w-6 text-gray-900 mt-0.5 mr-4 flex-shrink-0" />
                    <p className="text-gray-600 leading-relaxed">
                      {about.achievement3}
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
          <h2 className="section-title text-gray-900 mb-12">
            {sectionTitle.experience}
          </h2>
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
                    Files, Awards & Certificates
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
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()} 
          >
            {" "}
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
              <h4 className="text-xl font-bold text-gray-1900 mb-4">
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
              <h4 className="text-xl font-bold text-gray-1900 mb-4">
                Problem Statement
              </h4>
              <p className="text-gray-600 mb-8">
                {activeProject.details.problemStatement}
              </p>

              {/* Solution Overview */}
              <h4 className="text-xl font-bold text-gray-1900 mb-4">
                Solution Overview
              </h4>
              <p className="text-gray-600 mb-8">
                {activeProject.details.solutionOverview}
              </p>

              {/* Research & Insights */}
              <h4 className="text-xl font-bold text-gray-1900 mb-4">
                Research & Insights
              </h4>
              <ul className="text-gray-600 list-disc mb-8 pl-5 space-y-3">
                {activeProject.details.researchInsights.map(
                  (insight, index) => (
                    <li key={index} className="space-y-2">
                      <div className="font-bold">{insight.title}</div>{" "}
                      {/* Title in bold */}
                      <div>{insight.content}</div> {/* Content */}
                      {/* Render subPoints as bullet points if they exist */}
                      {insight.subPoints && insight.subPoints.length > 0 && (
                        <ul className="text-gray-600 list-disc mb-8 pl-5 space-y-3">
                          {insight.subPoints.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      )}
                      {/* Conditionally render image if available */}
                      {insight.image && (
                        <div className="mt-2">
                          <img
                            src={insight.image}
                            alt={`${insight.title} image`}
                            className="w-full h-auto"
                          />
                        </div>
                      )}
                    </li>
                  )
                )}
              </ul>

              {/* Objectives */}
              <h4 className="text-xl font-bold text-gray-1900 mb-4">
                Defining the Objectives
              </h4>
              <ul className="text-gray-600 list-disc mb-8 pl-5 space-y-3">
                {activeProject.details.objectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>

              {/* Design & Development Process */}
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Design & Development Process
              </h4>
              <ul className="text-gray-600 list-disc mb-8 pl-5 space-y-6">
                {" "}
                {/* Increased space-y for better separation */}
                {activeProject.details.designProcess.map((step, index) => (
                  <li key={index} className="space-y-3">
                    {" "}
                    {/* Added space-y for consistent spacing within each item */}
                    <div className="font-bold">{step.title}</div>{" "}
                    {/* Title in bold */}
                    <div>{step.content}</div> {/* Content */}
                    {/* Render subPoints as bullet points if they exist */}
                    {step.subPoints && step.subPoints.length > 0 ? (
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        {" "}
                        {/* Spacing between subpoints */}
                        {step.subPoints.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      /* Add margin-top if no subPoints */
                      step.image && (
                        <div className="mt-4">
                          {" "}
                          <img
                            src={step.image}
                            alt={`${step.title} image`}
                            className="w-full h-auto mt-8"
                          />{" "}
                          {/* Added mt-2 for extra padding below content */}
                        </div>
                      )
                    )}
                  </li>
                ))}
              </ul>

              {/* Key Screens and Features */}
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Key Screens and Features
              </h4>
              <ul className="text-gray-600 list-disc mb-8 pl-5 space-y-6">
                {" "}
                {/* Increased space-y for better separation between features */}
                {activeProject.details.keyFeatures.map((feature, index) => (
                  <li key={index} className="space-y-3">
                    {" "}
                    {/* Added space-y for consistent spacing within each feature */}
                    <div className="font-bold">{feature.title}</div>{" "}
                    {/* Title in bold */}
                    <div>{feature.content}</div> {/* Content */}
                    {/* Render subPoints as bullet points if they exist */}
                    {feature.subPoints && feature.subPoints.length > 0 ? (
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        {" "}
                        {/* Spacing between subpoints */}
                        {feature.subPoints.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      /* Add margin-top if no subPoints */
                      feature.image && (
                        <div className="mt-4">
                          {" "}
                          {/* Ensuring spacing above the image */}
                          <img
                            src={feature.image}
                            alt={`${feature.title} image`}
                            className="w-full h-auto mt-2"
                          />{" "}
                          {/* Added mt-2 for extra padding below content */}
                        </div>
                      )
                    )}
                  </li>
                ))}
              </ul>

              {/* Retrospective */}
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Retrospective
              </h4>
              <p className="text-gray-600 mb-4">
                {activeProject.details.retrospective
                  .split(" ")
                  .map((word, index) =>
                    word.startsWith("http") || word.startsWith("www.") ? (
                      <a
                        key={index}
                        href={
                          word.startsWith("http") ? word : `https://${word}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        {word}
                      </a>
                    ) : (
                      `${word} `
                    )
                  )}
              </p>

              {/* Files and Attachments in Retrospective */}
              {activeProject.details.files && (
                <div>
                  <p className="text-gray-600 mb-4 font-bold">
                    Files & Attachments
                  </p>
                  <div className="flex space-x-2 mt-2">
                    {activeProject.details.files.map((file, index) => (
                      <img
                        key={index}
                        src={
                          file.type === "image" ? file.src : "/images/pdf.png"
                        } // Show PDF icon if it's a PDF file
                        alt="File Preview"
                        className="w-12 h-16 shadow-md cursor-pointer"
                        onClick={() => window.open(file.src, "_blank")} // Opens file in a new window
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex flex-col justify-center py-20 bg-gray-50 px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-gray-900 mb-12">
            {sectionTitle.skills}
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
            <h2 className="section-title text-white mb-4">{contact.intro1}</h2>
            <h2 className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {contact.intro2}
            </h2>
            <div className="flex flex-col items-center space-y-4">
              <a
                href="https://www.linkedin.com/in/shivam-vora/"
                className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 w-[186px]"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
              <a
                href="/files/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 w-[186px]"
              >
                <Briefcase className="h-5 w-5 mr-2" />
                View Resume
              </a>
              <a
                href="mailto:vorashivam24@gmail.com"
                className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 w-[186px]"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gray-900 text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Portfolio;
