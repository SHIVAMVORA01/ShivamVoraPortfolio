import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Award,
  Briefcase,
  Linkedin,
  Mail,
  Target,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { experiences } from "./components/Experience";
import { projects } from "./components/Project";
import { skills } from "./components/Skills";
import {
  about,
  contact,
  inspiringQuote,
  sectionTitle,
} from "./components/About";
import { Dock } from "./components/Dock";
import ShimmerButton from "./components/ShimmerButton";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  details: {
    overview: string;
    timeline: string;
    tools: string;
    contributions: string[];
    problemStatement: string;
    problemStatementImages?: string[];
    solutionOverview: string;
    researchInsights: Array<{
      title: string;
      content: string;
      subPoints?: string[];
      image?: string;
    }>;
    objectives: string[];
    designProcess: Array<{
      title: string;
      content: string;
      subPoints?: string[];
      image?: string;
    }>;
    keyFeatures: Array<{
      title: string;
      content: string;
      subPoints?: string[];
      image?: string;
    }>;
    retrospective: string;
    files?: Array<{
      type: string;
      src: string;
    }>;
  };
}

interface FileType {
  type: string;
  src: string;
}

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeFile, setActiveFile] = useState<FileType | null>(null);
  const [showTopButton, setShowTopButton] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default to true for dark mode
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeExperience, setActiveExperience] = useState<number | null>(null);

  // Update the utility function to handle PDF icons
  const getImageClassName = (baseClasses: string, src?: string) => {
    const isPdfIcon = src?.endsWith('/pdf.png');
    return isPdfIcon ? baseClasses : `${baseClasses} dark:bg-white`;
  };

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Initialize dark mode
  useEffect(() => {
    // Check if dark mode is set in localStorage
    const savedMode = localStorage.getItem("darkMode");

    // If no preference is saved, or if it's set to true, enable dark mode
    if (savedMode === null || savedMode === "true") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // Sync dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

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

  const handleFileOpen = (file: FileType) => {
    setActiveFile(file);
  };

  const closeModal = () => {
    setActiveProject(null);
    setActiveFile(null);
  };

  const getNextProject = (currentProjectId: number) => {
    const currentIndex = projects.findIndex(
      (project) => project.id === currentProjectId
    );
    const nextIndex = (currentIndex + 1) % projects.length;
    return projects[nextIndex];
  };

  const toggleExperience = (id: number) => {
    setActiveExperience(activeExperience === id ? null : id);
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
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
      <Dock
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        showTopButton={showTopButton}
        scrollToTop={scrollToTop}
      />

      <main id="main" role="main">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#F8F8FF] dark:bg-gray-900 px-4 pt-16 md:pt-0">
          {/* Logo */}
          <div className="absolute top-4 md:top-8 left-1/2 transform -translate-x-1/2 z-20">
            <img src="/images/logo.png" alt="Logo" className="h-12 md:h-16" />
          </div>

          {/* Full Grid Background */}
          <div className="absolute inset-0 grid grid-cols-12 gap-4 p-4 pointer-events-none">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className="w-full h-full border border-gray-550 dark:border-gray-800"
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="text-center">
              {/* Hi with mask */}
              <div className="relative">
                <div className="absolute -inset-4 bg-[#F8F8FF] dark:bg-gray-900 blur-sm" />
                <h1 className="relative z-10 text-6xl md:text-8xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
                  Hi
                </h1>
              </div>

              {/* Name with mask */}
              <div className="relative">
                <div className="absolute -inset-4 bg-[#F8F8FF] dark:bg-gray-900 blur-sm" />
                <div className="relative z-10 text-4xl md:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
                  I am{" "}
                  <span className="relative inline-block text-transparent bg-clip-text bg-[linear-gradient(108deg,_#0894FF,_#C959DD_34%,_#FF2E54_68%,_#FF9004)]">
                    Shivam Vora
                  </span>
                </div>
              </div>

              {/* Description with mask */}
              <div className="relative">
                <div className="absolute -inset-4 bg-[#F8F8FF] dark:bg-gray-900 blur-sm" />
                <p className="relative z-10 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Designer by Heart, Coder by Profession
                </p>
                <p className="relative z-10 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Currently working at Belden Inc as an R&D Software Developer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="work"
          className="min-h-screen flex flex-col justify-center py-20 bg-white-50 dark:bg-[#1B2738] px-6"
        >
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-gray-900 dark:text-white mb-12">
              {sectionTitle.portfolio}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.slice(0, 2).map((project) => (
                <div
                  key={project.id}
                  className="group bg-white-50 dark:bg-[#020F22] shadow-md rounded-xl overflow-hidden m-4" // Removed border classes
                >
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-white mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex justify-center p-4">
                    {" "}
                    {/* Center the image and add padding */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className={getImageClassName("object-cover rounded-lg", project.image)} // Updated image class
                    />
                  </div>
                  <div className="p-4">
                    {" "}
                    {/* Add padding around the ShimmerButton */}
                    <ShimmerButton
                      className="w-full bg-white text-white py-3 font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
                      onClick={() => setActiveProject(project)}
                    >
                      Know more
                    </ShimmerButton>
                  </div>
                </div>
              ))}
              {showAllProjects &&
                projects.slice(2).map((project) => (
                  <div
                    key={project.id}
                    className="group bg-white-50 dark:bg-[#020F22] shadow-md rounded-xl overflow-hidden m-4" // Removed border classes
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-white mb-4">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex justify-center p-4">
                      {" "}
                      {/* Center the image and add padding */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className={getImageClassName("object-cover rounded-lg", project.image)} // Updated image class
                      />
                    </div>
                    <div className="p-4">
                      {" "}
                      {/* Add padding around the ShimmerButton */}
                      <ShimmerButton
                        className="w-full bg-black text-white py-3 font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
                        onClick={() => setActiveProject(project)}
                      >
                        Know more
                      </ShimmerButton>
                    </div>
                  </div>
                ))}
            </div>
            {!showAllProjects && (
              <div className="flex justify-center mt-8">
                <ShimmerButton
                  className="bg-black text-white py-3 px-6 font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
                  onClick={() => setShowAllProjects(true)}
                >
                  See More
                </ShimmerButton>
              </div>
            )}
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex flex-col justify-center py-20 bg-gray-50 dark:bg-[#020F22] px-6"
        >
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-gray-900 dark:text-white mb-12">
              {sectionTitle.about}
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {about.intro1}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {about.intro2}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-xl">
                    <Briefcase className="h-6 w-6 text-gray-900 dark:text-white mb-4" />
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      Experience
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {about.experience}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-xl">
                    <Award className="h-6 w-6 text-gray-900 dark:text-white mb-4" />
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      Recognition
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {about.recognition}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Section */}
              <div className="space-y-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-white leading-relaxed">
                    {inspiringQuote.intro}
                  </p>
                  <blockquote className="italic text-gray-700 dark:text-gray-300 text-lg text-left">
                    "{inspiringQuote.text}"
                  </blockquote>
                  <p className="text-right text-gray-600 dark:text-gray-300 mt-2">
                    - {inspiringQuote.author}
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                    Recent Achievements
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Target className="h-6 w-6 text-gray-900 dark:text-white mt-0.5 mr-4 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {about.achievement1}
                      </p>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="h-6 w-6 text-gray-900 dark:text-white mt-0.5 mr-4 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {about.achievement2}
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-6 w-6 text-gray-900 dark:text-white mt-0.5 mr-4 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
          className="min-h-screen flex flex-col justify-center py-20 bg-white dark:bg-[#1B2738] px-6"
        >
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-gray-900 dark:text-white mb-12">
              {sectionTitle.experience}
            </h2>
            <div className="space-y-8">
              {experiences.map((experience: {
                id: number;
                title: string;
                period: string;
                description: string[];
                files: Array<{ type: string; src: string; }>;
              }) => (
                <React.Fragment key={experience.id}>
                  <div
                    className="bg-gray-50 dark:bg-[#020F22] rounded-xl p-6 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleExperience(experience.id)}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {experience.period}
                      </p>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {activeExperience === experience.id ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </div>
                  </div>
                  {activeExperience === experience.id && (
                    <div className="bg-gray-50 dark:bg-[#020F22] rounded-xl p-6 mt-2">
                      <ul className="text-gray-600 dark:text-gray-300 list-disc mb-8 pl-5 space-y-3">
                        {experience.description.map((statement: string, index: number) => (
                          <li key={index} className="ml-4">
                            {statement}
                          </li>
                        ))}
                      </ul>

                      <div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 font-bold">
                          Files, Awards & Certificates
                        </p>
                      </div>
                      <div className="flex space-x-2 mt-2">
                        {experience.files.map((file: { type: string; src: string }, index: number) => (
                          <img
                            key={index}
                            src={file.type === "image" ? file.src : "/images/pdf.png"}
                            alt="File Preview"
                            className={getImageClassName("w-12 h-16 shadow-md cursor-pointer", file.type === "image" ? file.src : "/images/pdf.png")} // Updated image class
                            onClick={() => handleFileOpen(file)}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
        {/* Reusable Modal Component */}
        {(activeProject || activeFile) && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    {activeProject ? (
                      <>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {activeProject.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {activeProject.description}
                        </p>
                      </>
                    ) : activeFile ? (
                      <>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          File Preview
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {activeFile.src.split("/").pop()}
                        </p>
                      </>
                    ) : null}
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    aria-label="Close modal"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
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
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Brief
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {activeProject.description}
                    </p>
                  </div>
                ) : activeFile ? (
                  <div className="flex justify-center">
                    {activeFile.type === "image" ? (
                      <img
                        src={activeFile.src}
                        alt="File Preview"
                        className={getImageClassName("w-full h-auto rounded-md", activeFile.src)} // Updated image class
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
              className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                      id={`project-title-${activeProject.id}`} // Add ID to the title
                    >
                      {activeProject.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {activeProject.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    aria-label="Close modal"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
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
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Brief
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {activeProject.details.overview}
                </p>
                <div className="text-gray-600 dark:text-gray-300 mb-8">
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
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Understanding the Problem
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {activeProject.details.problemStatement}
                </p>
                {activeProject.details.problemStatementImages && (
                  <div className="space-y-4 mb-8">
                    {activeProject.details.problemStatementImages.map(
                      (image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Problem statement illustration ${index + 1}`}
                          className={getImageClassName("w-full h-auto rounded-lg shadow-md", image)} // Updated image class
                        />
                      )
                    )}
                  </div>
                )}

                {/* Solution Overview */}
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  How are we solving it? — Let's go through the process
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  {activeProject.details.solutionOverview}
                </p>

                {/* Research & Insights */}
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Understanding consumer attitudes and needs
                </h4>
                <ul className="text-gray-600 dark:text-gray-300 list-disc mb-8 pl-5 space-y-3">
                  {activeProject.details.researchInsights.map(
                    (insight, index) => (
                      <li key={index} className="space-y-2">
                        <div className="font-bold">{insight.title}</div>{" "}
                        {/* Title in bold */}
                        <div>{insight.content}</div> {/* Content */}
                        {/* Render subPoints as bullet points if they exist */}
                        {insight.subPoints && insight.subPoints.length > 0 && (
                          <ul className="text-gray-600 dark:text-gray-300 list-disc mb-8 pl-5 space-y-3">
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
                              className={getImageClassName("w-full h-auto", insight.image)} // Updated image class
                            />
                          </div>
                        )}
                      </li>
                    )
                  )}
                </ul>

                {/* Objectives */}
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  What We Aimed to Achieve
                </h4>
                <ul className="text-gray-600 dark:text-gray-300 list-disc mb-8 pl-5 space-y-3">
                  {activeProject.details.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>

                {/* Design & Development Process */}
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Crafting the Solution
                </h4>
                <ul className="text-gray-600 dark:text-gray-300 list-disc mb-8 pl-5 space-y-6">
                  {activeProject.details.designProcess.map((step, index) => (
                    <li key={index} className="space-y-3">
                      <div className="font-bold">{step.title}</div>
                      <div>{step.content}</div>
                      {step.subPoints && step.subPoints.length > 0 ? (
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          {step.subPoints.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        step.image && (
                          <div className="mt-4">
                            <img
                              src={step.image}
                              alt={`${step.title} image`}
                              className={getImageClassName("w-full h-auto mt-8", step.image)} // Updated image class
                            />
                          </div>
                        )
                      )}
                    </li>
                  ))}
                </ul>

                {/* Key Screens and Features */}
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  The User Experience
                </h4>
                <ul className="text-gray-600 dark:text-gray-300 list-disc mb-8 pl-5 space-y-6">
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
                              className="w-full h-auto mt-2" // Removed dark:bg-white class
                            />{" "}
                            {/* Added mt-2 for extra padding below content */}
                          </div>
                        )
                      )}
                    </li>
                  ))}
                </ul>

                {/* Retrospective */}
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Impact and Beyond
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
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
                    <p className="text-gray-600 dark:text-gray-300 mb-4 font-bold">
                      Awards & Certificates
                    </p>
                    <div className="flex space-x-2 mt-2">
                      {activeProject.details.files.map((file, index) => (
                        <img
                          key={index}
                          src={
                            file.type === "image" ? file.src : "/images/pdf.png"
                          } // Show PDF icon if it's a PDF file
                          alt="File Preview"
                          className={getImageClassName("w-12 h-16 shadow-md cursor-pointer", file.type === "image" ? file.src : "/images/pdf.png")} // Updated image class
                          onClick={() => window.open(file.src, "_blank")} // Opens file in a new window
                        />
                      ))}
                    </div>
                  </div>
                )}
                {/* Scroll to top ShimmerButton before the next project section */}
                <div className="flex justify-end mt-12 mb-8">
                  <button
                    onClick={() => {
                      const titleElement = document.getElementById(
                        `project-title-${activeProject.id}`
                      );
                      if (titleElement) {
                        titleElement.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300"
                    aria-label="Scroll to top of project"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  </button>
                </div>

                {/* Next project navigation */}
                <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Next Project
                    </h4>
                    <button
                      onClick={() => {
                        const nextProject = getNextProject(activeProject.id);
                        setActiveProject(nextProject);
                        // Wait for next project to render, then scroll to its title
                        setTimeout(() => {
                          const titleElement = document.getElementById(
                            `project-title-${nextProject.id}`
                          );
                          if (titleElement) {
                            titleElement.scrollIntoView({ behavior: "smooth" });
                          }
                        }, 100);
                      }}
                      className="group flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      aria-label={`View next project: ${getNextProject(activeProject.id).title}`}
                    >
                      <span>{getNextProject(activeProject.id).title}</span>
                      <svg
                        className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        recognition
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        <section
          id="skills"
          className="min-h-screen flex flex-col justify-center py-20 bg-gray-50 dark:bg-[#020F22] px-6"
        >
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-gray-900 dark:text-white mb-12">
              {sectionTitle.skills}
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
                >
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="text-gray-600 dark:text-gray-300"
                      >
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
          className="relative min-h-screen flex flex-col justify-center py-20 px-6 bg-[#F8F8FF] dark:bg-gray-900"
        >
          {/* Grid Background */}
          <div className="absolute inset-0 grid grid-cols-12 gap-4 p-4 pointer-events-none">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className="w-full h-full border border-gray-550 dark:border-gray-800"
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 container mx-auto max-w-6xl">
            <div className="bg-gray-900 dark:bg-[#1F2937] rounded-2xl p-12 text-center">
              <h2 className="section-title text-white mb-4">{contact.intro1}</h2>
              <h2 className="text-gray-400 mb-8 max-w-2xl mx-auto">
                {contact.intro2}
              </h2>
              <div className="flex flex-col items-center space-y-4">
                <a
                  href="https://www.linkedin.com/in/shivam-vora/"
                  className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 w-[150px]"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
                <a
                  href="/files/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 w-[150px]"
                >
                  <Briefcase className="h-5 w-5 mr-2" />
                  Resume
                </a>
                <a
                  href="mailto:vorashivam24@gmail.com"
                  className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 w-[150px]"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
