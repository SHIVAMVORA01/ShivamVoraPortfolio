import { useState, useEffect } from "react";
import {
  BookOpen,
  Award,
  Briefcase,
  Linkedin,
  Mail,
  Target,
  ArrowRight, 
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
import { Dock } from "./components/Dock";

interface Project {
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
  const [darkMode, setDarkMode] = useState(false);

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Sync dark mode with localStorage and document
  useEffect(() => {
    const sections = [
      document.querySelector(".hero-section"),
      document.querySelector("nav"),
      document.querySelector("#contact"),
    ];

    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
      // Reset background colors for dark mode
      sections.forEach((section) => {
        if (section) {
          (section as HTMLElement).style.background = '';
        }
      });
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
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

  useEffect(() => {
    const sections = [
      document.querySelector(".hero-section"),
      document.querySelector("nav"),
      document.querySelector("#contact"),
    ];
    let colorIndex = 0;
    const colors = ["#FFFAE3", "#E3F9FF", "#F0EFFF", "#E8FDF5", "#FFF5F3"];

    const changeColor = () => {
      // Only change colors if not in dark mode
      if (!document.documentElement.classList.contains('dark')) {
        sections.forEach((section) => {
          if (section) {
            (section as HTMLElement).style.transition = "background 2s ease-out";
            (section as HTMLElement).style.background = colors[colorIndex];
          }
        });
        colorIndex = (colorIndex + 1) % colors.length;
      }
    };

    const intervalId = setInterval(changeColor, 6000);

    return () => clearInterval(intervalId);
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

  return (
    <div className="bg-white dark:bg-gray-900 overflow-x-hidden overflow-y-auto min-h-screen">
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

      <Dock darkMode={darkMode} toggleDarkMode={toggleDarkMode} showTopButton={showTopButton} scrollToTop={scrollToTop} />

      {/* Hero Section */}
      <section className="hero-section min-h-screen flex flex-col bg-blue-50 dark:bg-gray-800 px-6 pt-20">
        <div className="text-center">
          <h1 className="hero-title text-gray-900 dark:text-white">{hero.intro}</h1>
          <div className="flex items-center justify-center mt-6">
            <div className="relative">
              <img
                src="/images/Shivam.png"
                alt="Shivam Vora"
                className="w-full h-auto max-w-[256px] max-h-[256px] md:max-w-[320px] md:max-h-[320px] object-contain rounded-lg"
              />
            </div>
          </div>
          <p className="text-xl font-bold text-gray-600 dark:text-gray-300 mt-8 max-w-lg mx-auto">
            {hero.tagline}
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-8 max-w-lg mx-auto">
            {hero.content}
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="work"
        className="min-h-screen flex flex-col justify-center py-20 bg-white-50 dark:bg-gray-900 px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-gray-900 dark:text-white mb-12">
            {sectionTitle.portfolio}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 ">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white-50 dark:bg-gray-800 shadow-md rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full transform group-hover:scale-105 transition-transform duration-300 dark:bg-white"
                  />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="h-6 w-6 text-gray-900 dark:text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen flex flex-col justify-center py-20 bg-gray-50 dark:bg-gray-800 px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-gray-900 dark:text-white mb-12">
            {sectionTitle.about}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{about.intro1}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{about.intro2}</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl">
                  <Briefcase className="h-6 w-6 text-gray-900 dark:text-white mb-4" />
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Experience</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{about.experience}</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl">
                  <Award className="h-6 w-6 text-gray-900 dark:text-white mb-4" />
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Recognition</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{about.recognition}</p>
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
        className="min-h-screen flex flex-col justify-center py-20 bg-white dark:bg-gray-900 px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-gray-900 dark:text-white mb-12">
            {sectionTitle.experience}
          </h2>
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div key={experience.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {experience.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{experience.period}</p>

                {/* Render each statement in description */}
                <ul className="text-gray-600 dark:text-gray-300 list-disc mb-8 pl-5 space-y-3">
                  {experience.description.map((statement, index) => (
                    <li key={index} className="ml-4">
                      {statement}
                    </li>
                  ))}
                </ul>

                {/* Attached Files */}
                <div>
                  {" "}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 font-bold">
                    Files, Awards & Certificates
                  </p>
                </div>
                <div className="flex space-x-2 mt-2">
                  {experience.files.map((file, index) => (
                    <img
                      key={index}
                      src={file.type === "image" ? file.src : "/images/pdf.png"}
                      alt="File Preview"
                      className="w-12 h-16 shadow-md cursor-pointer dark:bg-white"
                      onClick={() => handleFileOpen(file)}
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
                      className="w-full h-auto rounded-md dark:bg-white"
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
                  <p className="text-gray-600 dark:text-gray-300">{activeProject.description}</p>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
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
                  {activeProject.details.problemStatementImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Problem statement illustration ${index + 1}`}
                      className="w-full h-auto rounded-lg shadow-md dark:bg-white"
                    />
                  ))}
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
                            className="w-full h-auto dark:bg-white"
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
                            className="w-full h-auto mt-8 dark:bg-white"
                          />{" "}
                          {/* Added mt-2 for extra padding below content */}
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
                            className="w-full h-auto mt-2 dark:bg-white"
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
                        className="w-12 h-16 shadow-md cursor-pointer dark:bg-white"
                        onClick={() => window.open(file.src, "_blank")} // Opens file in a new window
                      />
                    ))}
                  </div>
                </div>
              )}
              {/* Scroll to top button before the next project section */}
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
                  aria-label="Scroll to top"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
                  >
                    <span>{getNextProject(activeProject.id).title}</span>
                    <svg
                      className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >recognition
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <section
        id="skills"
        className="min-h-screen flex flex-col justify-center py-20 bg-gray-50 dark:bg-gray-800 px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-gray-900 dark:text-white mb-12">
            {sectionTitle.skills}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-600 dark:text-gray-300">
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
          <div className="bg-gray-900 dark:bg-[#1F2937] rounded-2xl p-12 text-center">
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
    </div>
  );
};