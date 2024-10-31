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

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFile, setActiveFile] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [showTopButton, setShowTopButton] = useState(false); // State for back-to-top button visibility

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Event listener for scroll to show/hide the back-to-top button
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
      files: [{ src: "/files/CDAC.pdf", type: "pdf" }],
    },
  ];

  const projects = [
    {
      id: 1,
      title:
        "Urja: The Pocket Energy-saving App (Young Designer's League Finalists 2022)",
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
          "In India, households often struggle with high utility bills due to a lack of detailed consumption insights. Standard bills only provide cumulative energy usage and cost figures, leaving users without specific energy-saving guidance or clarity on which appliances consume the most power.Additionally, while some smart devices offer automation and remote control, they don’t provide cost estimates, monthly spending projections, or energy reduction recommendations. Users are left guessing how to lower their bills and end up taking broad, ineffective measures.",
        solutionOverview:
          "Urja addresses these challenges by offering users comprehensive insights into their energy consumption, with features like detailed usage data and real-time cost tracking. The app empowers users to control and automate their home appliances remotely, enabling scheduling routines that align with energy-saving goals. Additionally, Urja provides personalized tips and timely notifications, helping users make adjustments that can lead to substantial energy and cost savings. By allowing users to set and manage specific energy and spending targets, Urja fosters proactive energy management, making it easier for households to reduce both their environmental footprint and monthly bills.",
        researchInsights: [
          {
            title: "User Survey",
            content:
              "A Google Forms survey was conducted among 28 people to understand energy consumption habits, satisfaction levels, and openness to an energy-monitoring solution.",
            subPoints: [
              "47% of respondents were dissatisfied with their current power usage and monthly bills",
              "80% had no way to check individual device energy consumption",
              "Many users admitted to forgetting to turn off high-energy appliances, leading to avoidable power usage",
              "100% expressed interest in a monitoring app that would save money and power, with 89% open to purchasing compatible smart devices",
            ],
            image: "/images/urja_survey.png",
          },
          {
            title: "User Persona",
            content:
              "Based on our survey responses, we created a user persona representing a consumer who seeks a solution for detailed insights into home utility usage to improve financial planning and enhance energy savings.",
            image: "/images/urja_persona.png",
          },
          {
            title: "Empathy Mapping",
            content:
              "Exploring the emotions, needs, and experiences, further resonating with our energy consumers, we conducted empathy mapping.",
            image: "/images/urja_empathy.png",
          },
          {
            title: "Competitive Analysis",
            content:
              "We evaluated existing smart home and energy-monitoring solutions to identify strengths and weaknesses, finding that many lacked real-time cost tracking and specific insights into high-energy appliances.",
            image: "/images/urja_competition.png",
          },
        ],
        objectives: [
          "Visual report of energy usage to get readings of how their house operates and gain intuition about power consumption",
          "Users can control appliances and gadgets from anywhere with just one click.",
          "Tracking energy consumption costs in real time will allow users to watch as their electricity consumption and costs increase or decrease.",
          "Users can define energy usage and spending targets to generate and manage the monthly household budgets and avoid unexpected expenses.",
          "Users can create automation with routines, to streamline their lives and also be sure that they’re conserving energy and saving money.",
          "Notifications for energy efficiency to remind the user about his energy usage activities and enable him to take instant actions in this respect.",
        ],
        designProcess: [
          {
            title: "Information Architecture",
            image: "/images/urja_ia.png",
          },
          {
            title: "User Flow & Wireframes",
            image: "/images/urja_lo_1.png",
          },
          {
            title: "Style Guide",
            image: "/images/urja_style_guide.png",
          },
        ],
        keyFeatures: [
          {
            title: "A) Homepage",
            content:
              "Homepage consisting of personalised energy consumptions. User can turn OFF all devices in just one click. This page also gives access to most used devices and rooms for quick access.",
          },
          {
            title: "B) My Rooms",
            content:
              "My Rooms page lists down all the rooms. User can turn OFF all devices of the room, check the energy consumption of the room and edit rooms.",
          },
          {
            title: "C & D) Room page",
            content:
              "Room page lists the devices of the room and allows the user to control devices in the room. The page lists the device events. It displays the energy consumption and approximate energy cost of the room.",
            image: "/images/urja_hi_1.png",
          },
          {
            title: "E) Device OFF",
            content:
              "Device OFF page allows the user to view the device statistics and edit the device. Device ON page displays the device settings like temperature settings, schedule settings, modes, etc.",
            image: "/images/urja_hi_2.png",
          },
          {
            title: "F) My Energy Stats",
            content:
              "My Energy Stats is displays the energy consumption data where users can see energy usage in details, with statistics showing when the home has been consuming lot’s of energy, how much energy and how much it costs. The users can compare their consumption to the ideal consumption.",
          },
          {
            title: "G) Payments page",
            content:
              "Payments page lists the bill details. It applies the reward discounts on the bill amount and makes energy bill payments easy. User can compare previous bills to keep track of their consumptions.",
          },
          {
            title: "H) Payments page",
            content:
              "Save Energy tips page allows users to calculate their device’s load and energy consumption. Also, suggest some tips to save energy.",
            image: "/images/urja_hi_3.png",
          },
          {
            title: "I) Goals",
            content:
              "Goals lists down the goals and its status. Goals help to define milestones to control and compare energy usage. The overarching objective is to motivate users to adopt energy-efficient practices through a reward system, thereby contributing to a substantial reduction in both environmental impact and monthly expenses.",
          },
          {
            title: "J) Set A Goal",
            content:
              "Set A Goal allows users to set goals contributing to save energy.",
          },
          {
            title: "K) Notifications",
            content:
              "Users get notifications for devices left turned on or tips for more energy usage reduction.",
          },
        ],
        retrospective:
          "Urja aims to make home energy monitoring accessible and actionable, enabling users to manage their energy consumption with a single tap. By offering comprehensive insights down to individual devices, Urja empowers users to adopt more efficient habits, saving an estimated 10% on annual power bills, with potential for higher savings among engaged users.Urja provides a timely solution for household energy conservation, addressing rising electricity costs and environmental concerns by promoting efficient, mindful energy usage.",
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
          "The Unreserved Ticketing System (UTS) app by Indian Railways facilitates unreserved ticket booking, providing users with a contactless, paperless alternative to physical ticket counters. The UTS app redesign focuses on creating a user-centered experience to streamline ticket booking, improve usability, and address frustrations with navigation, payment issues, and outdated design.",
        timeline: "April 2022 - May 2022",
        tools: "Figma",
        contributions: ["User Research", "Interaction Design", "Storytelling"],
        problemStatement:
          "Despite its convenience, the UTS app faced significant usability challenges that impacted the user experience, as revealed through commuter research. The ticket booking process had a complex navigation flow that created confusion, making it difficult for users to complete bookings seamlessly. Additionally, the app’s lengthy and cumbersome login and registration steps discouraged new users, posing a barrier to adoption. Payment issues were also prevalent, with frequent transaction errors and limited feedback on payment status, leading to frustration and dissatisfaction. Furthermore, the outdated interface, lacking in modern aesthetics, made it harder for users to intuitively understand and navigate the app’s functions, emphasizing the need for a design overhaul to enhance clarity and usability",
        solutionOverview:
          "The UTS app redesign focuses on enhancing usability and creating a seamless experience that guides users effortlessly from login to ticket booking. To achieve this, the booking process has been streamlined, allowing for easier navigation and reducing the number of steps required to complete a booking. The registration and login procedures have been simplified to encourage new users and make the onboarding process quicker. Additionally, improvements to the payment process provide instant feedback, reducing transaction errors and enhancing user confidence. The overall user interface has been updated with a modern and intuitive design, making the app more visually appealing and easier to navigate.",
        researchInsights: [
          {
            title: "Domain Research",
            content:
              "We studied the UTS app’s role in simplifying ticket purchases for Indian Railways' daily commuters, focusing on digital and contactless ticketing benefits. The goal was to eliminate physical queues by providing a convenient online booking solution.Key Objectives:",
            subPoints: [
              "Simplified ticket booking experience.",
              "Easy, cashless transactions.",
              "Environmentally friendly, paperless options for all railway zones and sections​",
            ],
          },
          {
            title: "User Research",
            content:
              "A survey and interviews were conducted among users aged 19 to 46 to understand their needs, frustrations, and expectations. Key Findings:",
            subPoints: [
              "Users often found the navigation unclear, resulting in errors or slow bookings.",
              "Many users found registration and login overly complex, impacting adoption rates.",
              "Frequent transaction errors and lack of refund clarity caused dissatisfaction.​",
              "Avoiding long queues and utilizing cashless payments were primary motivators for app use.​",
            ],
          },
          {
            title: "User Persona",
            content:
              "Based on our survey responses, we created a user persona representing a consumer who seeks a solution for detailed insights into home utility usage to improve financial planning and enhance energy savings.",
            image: "/images/uts_persona.png",
          },
          {
            title: "Empathy Mapping",
            content:
              "Exploring the emotions, needs, and experiences, further resonating with our energy consumers, we conducted empathy mapping.",
            image: "/images/uts_empathy.png",
          },
          {
            title: "Competitive Analysis",
            content:
              "In the case of the UTS app, there are no direct competitors as it is the only official app available to book the suburban and long-distance unreserved tickets. ",
          },
        ],
        objectives: [
          "Streamlined Ticket Booking: A quicker, more intuitive booking process with fewer steps",
          "Effortless Login: Simplified login and registration for a smooth onboarding experience.",
          "Reliable Payments: Robust payment processing with clear status updates and refund tracking.",
          "Updated User Interface: A fresh, modern UI with easy navigation and improved accessibility.",
        ],
        designProcess: [
          {
            title: "User Flow & Wireframes",
            image: "/images/uts_lo_1.jpeg",
          },
          {
            title: "Style Guide",
            image: "/images/uts_style_guide.png",
          },
        ],
        keyFeatures: [
          {
            title: "Homepage",
            content:
              "Displays options for quick access to ticket booking, past journeys, and personalized recommendations for commonly traveled routes.",
          },
          {
            title: "Login & Registration",
            content:
              " A restructured booking interface with clear steps, from choosing routes and travel times to final confirmation, ensuring a seamless experience",
            image: "/images/uts_hi_1.png",
          },
          {
            title: "Ticket Booking",
            content:
              "Simplified onboarding for quicker access to core functions.",
          },
          {
            title: "Ticket Summary & Payment",
            content:
              "Provides a clear summary of the journey details, and secure payment processing with immediate confirmation, status updates, and refund options if needed.",
          },
          {
            title: "My Tickets",
            content:
              "Displays all active, past, and upcoming journeys, enabling users to view ticket details quickly and manage or cancel bookings as required.",
            image: "/images/uts_hi_2.png",
          },
        ],
        retrospective:
          "The redesigned UTS app simplifies ticket booking and offers a more responsive, user-friendly experience. By providing smoother navigation, modern design, and reliable payments, the app makes unreserved ticket booking easier and faster for Indian Railways' commuters. This redesign anticipates a substantial improvement in user satisfaction and app adoption rates, reducing reliance on physical ticket counters and contributing to a more efficient ticketing process for millions of daily users.",
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
          "The previous DJSCE website had an outdated design, making navigation difficult for users.",
        solutionOverview:
          "The redesign addressed usability, navigation, and visual appeal, aligning with the needs of students and faculty.",
        researchInsights: [
          {
            title: "Stakeholders discussion",
            content:
              "Conducted interviews with stakeholders from college management to get their perspective and feedback",
          },
        ],
        objectives: [
          "Enhance accessibility across devices.",
          "Simplify navigation for students and faculty to find information quickly.",
          "Modernize visual design to align with current web standards.",
        ],
        designProcess: [
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
            image: "/images/djsce_homescreen.png",
          },
          {
            title: "Departments",
            content:
              "Organized information on academic departments for easier access to relevant resources.",
            image: "/images/djsce_department.png",
          },
        ],
        retrospective:
          "The redesign resulted in a more accessible, visually appealing, and functional website, improving satisfaction among students and staff.The new website is available at www.djsce.ac.in",
        files: [{ src: "/files/djsce.pdf", type: "pdf" }],
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
          "Developed the portal to bridge the gap between faculty mentors and students. It acts as a credible source of student information. It allows the students to showcase their academia along with their professional and interpersonal skills & ongoing six-monthly progress on this portal.",
        timeline: "June 2021 - February 2022",
        tools: "Figma, React",
        contributions: [
          "UI/UX Design",
          "Front-end Development",
          "User Testing",
        ],
        problemStatement:
          "The faculty mentors faced challenges to identify the key skills and expertise of students to write effective LORs for them",
        solutionOverview:
          "This profile portal assists the faculty mentors to identify the key skills and expertise of students to write effective LORs for them. It also gives students a chance to display their academic and professional competence in a well articulated manner.",
        researchInsights: [
          {
            title: "Survey",
            content:
              "Gathered feedback from faculties regarding their experience with existing systems.",
          },
        ],
        objectives: [
          "Provide a central hub for academic resources and updates.",
          "Enhance the user experience through intuitive navigation.",
          "Offer a responsive design accessible across devices.",
        ],
        designProcess: [
          {
            title: "Prototyping",
            content:
              "Developed interactive prototypes to test with student users.",
          },
        ],
        keyFeatures: [
          {
            title: "Homepage",
            content: "Displays information and quick links to resources.",
            image: "/images/profile_landing_screen.png",
          },
          {
            title: "Basic Profile",
            content: "Allows users to set their basic profile details",
            image: "/images/profile_profilescreen.png",
          },
        ],
        retrospective:
          "The Student Portal provides a centralized, intuitive platform that has significantly reduced the time faculties spend looking for information, improving their LoR writing experience.The website is available at https://djsce-it-student-portal.netlify.app  and used by 400+ students",
        files: [{ src: "/files/djsce1.pdf", type: "pdf" }],
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
