import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title:
      "Urja: The Pocket Energy-saving App (Young Designer's League Finalists 2022)",
    description: "Transforming people's energy conservation habits.",
    image: "/images/Urja.png",
    tags: ["Research", "UI Design", "Prototyping"],
    details: {
      overview:
        "Urja empowers users with real-time insights into appliance usage, notifications for high-energy devices, and personalized energy-saving tips to reduce their carbon footprint and lower electricity bills.",
      timeline: "October 2022 - November 2022",
      tools: "Figma",
      contributions: ["User Research", "Interaction Design", "Storytelling"],
      problemStatement:
        "In India, households often struggle with high utility bills due to a lack of detailed consumption insights. Standard bills only provide cumulative energy usage and cost figures, leaving users without specific energy-saving guidance or clarity on which appliances consume the most power. Additionally, while some smart devices offer automation and remote control, they don’t provide cost estimates, monthly spending projections, or energy reduction recommendations. Users are left guessing how to lower their bills and end up taking broad, ineffective measures.",
      solutionOverview:
        "Urja addresses these challenges by offering users comprehensive insights into their energy consumption, with features like detailed usage data and real-time cost tracking. The app empowers users to control and automate their home appliances remotely, enabling scheduling routines that align with energy-saving goals. Additionally, Urja provides personalized tips and timely notifications, helping users make adjustments that can lead to substantial energy and cost savings. By allowing users to set and manage specific energy and spending targets, Urja fosters proactive energy management, making it easier for households to reduce both their environmental footprint and monthly bills.",
      researchInsights: [
        {
          title: "User Survey",
          content:
            "A Google Forms survey was conducted among 28 people to understand energy consumption habits, satisfaction levels, and openness to an energy-monitoring solution.",
          subPoints: [
            "47% of respondents were dissatisfied with their current power usage and monthly bills.",
            "80% had no way to check individual device energy consumption.",
            "Many users admitted to forgetting to turn off high-energy appliances, leading to avoidable power usage.",
            "100% expressed interest in a monitoring app that would save money and power, with 89% open to purchasing compatible smart devices.",
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
        "Visual report of energy usage to get readings of how their house operates and gain intuition about power consumption.",
        "Users can control appliances and gadgets from anywhere with just one click.",
        "Tracking energy consumption costs in real time will allow users to watch as their electricity consumption and costs increase or decrease.",
        "Users can define energy usage and spending targets to generate and manage the monthly household budgets and avoid unexpected expenses.",
        "Users can create automation with routines, to streamline their lives and also be sure that they’re conserving energy and saving money.",
        "Notifications for energy efficiency to remind the user about their energy usage activities and enable them to take instant actions in this respect.",
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
            "My Rooms page lists down all the rooms. User can turn OFF all devices of the room, check the energy consumption of the room, and edit rooms.",
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
            "My Energy Stats displays the energy consumption data where users can see energy usage in detail, with statistics showing when the home has been consuming lots of energy, how much energy, and how much it costs. The users can compare their consumption to the ideal consumption.",
        },
        {
          title: "G) Payments page",
          content:
            "Payments page lists the bill details. It applies the reward discounts on the bill amount and makes energy bill payments easy. Users can compare previous bills to keep track of their consumptions.",
        },
        {
          title: "H) Save Energy Tips",
          content:
            "Save Energy tips page allows users to calculate their device’s load and energy consumption, also suggesting some tips to save energy.",
          image: "/images/urja_hi_3.png",
        },
        {
          title: "I) Goals",
          content:
            "Goals lists down the goals and their status. Goals help to define milestones to control and compare energy usage. The overarching objective is to motivate users to adopt energy-efficient practices through a reward system, thereby contributing to a substantial reduction in both environmental impact and monthly expenses.",
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
        "Urja aims to make home energy monitoring accessible and actionable, enabling users to manage their energy consumption with a single tap. By offering comprehensive insights down to individual devices, Urja empowers users to adopt more efficient habits, saving an estimated 10% on annual power bills, with potential for higher savings among engaged users. Urja provides a timely solution for household energy conservation, addressing rising electricity costs and environmental concerns by promoting efficient, mindful energy usage.",
      files: [
        { src: "/images/ydl_certificate.png", type: "image" },
        { src: "/files/ydl_mail.pdf", type: "pdf" },
      ],
    },
  },
  {
    id: 2,
    title: "UTS App Redesign",
    description:
      "Enhancing Unreserved Ticketing Experience for Indian Railways.",
    image: "/images/UTS.png",
    tags: ["UI Design", "Web Development", "Transport"],
    details: {
      overview:
        "The Unreserved Ticketing System (UTS) app by Indian Railways facilitates unreserved ticket booking, providing users with a contactless, paperless alternative to physical ticket counters. The UTS app redesign focuses on creating a user-centered experience to streamline ticket booking, improve usability, and address frustrations with navigation, payment issues, and outdated design.",
      timeline: "April 2022 - May 2022",
      tools: "Figma",
      contributions: ["User Research", "Interaction Design", "Storytelling"],
      problemStatement:
        "Despite its convenience, the UTS app faced significant usability challenges that impacted the user experience, as revealed through commuter research. The ticket booking process had a complex navigation flow that created confusion, making it difficult for users to complete bookings seamlessly. Additionally, the app’s lengthy and cumbersome login and registration steps discouraged new users, posing a barrier to adoption. Payment issues were also prevalent, with frequent transaction errors and limited feedback on payment status, leading to frustration and dissatisfaction. Furthermore, the outdated interface, lacking in modern aesthetics, made it harder for users to intuitively understand and navigate the app’s functions, emphasizing the need for a design overhaul to enhance clarity and usability.",
      solutionOverview:
        "The UTS app redesign focuses on enhancing usability and creating a seamless experience that guides users effortlessly from login to ticket booking. To achieve this, the booking process has been streamlined, allowing for easier navigation and reducing the number of steps required to complete a booking. The registration and login procedures have been simplified to encourage new users and make the onboarding process quicker. Additionally, improvements to the payment process provide instant feedback, reducing transaction errors and enhancing user confidence. The overall user interface has been updated with a modern and intuitive design, making the app more visually appealing and easier to navigate.",
      researchInsights: [
        {
          title: "Domain Research",
          content:
            "We studied the UTS app’s role in simplifying ticket purchases for Indian Railways' daily commuters, focusing on digital and contactless ticketing benefits. The goal was to eliminate physical queues by providing a convenient online booking solution. Key Objectives:",
          subPoints: [
            "Simplified ticket booking experience.",
            "Easy, cashless transactions.",
            "Environmentally friendly, paperless options for all railway zones and sections.",
          ],
        },
        {
          title: "User Research",
          content:
            "A survey and interviews were conducted among users aged 19 to 46 to understand their needs, frustrations, and expectations. Key Findings:",
          subPoints: [
            "Users often found the navigation unclear, resulting in errors or slow bookings.",
            "Many users found registration and login overly complex, impacting adoption rates.",
            "Frequent transaction errors and lack of refund clarity caused dissatisfaction.",
            "Avoiding long queues and utilizing cashless payments were primary motivators for app use.",
          ],
        },
        {
          title: "User Persona",
          content:
            "Based on our survey responses, we created a user persona representing a commuter who requires an easy-to-use, efficient ticket booking solution.",
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
            "In the case of the UTS app, there are no direct competitors as it is the only official app available to book the suburban and long-distance unreserved tickets.",
        },
      ],
      objectives: [
        "Streamlined Ticket Booking: A quicker, more intuitive booking process with fewer steps.",
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
            "A restructured booking interface with clear steps, from choosing routes and travel times to final confirmation, ensuring a seamless experience.",
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
    description: "Complete redesign of DJSCE college website.",
    image: "/images/DJSCE.png",
    tags: ["UI/UX", "Web Design", "Education"],
    details: {
      overview:
        "Redesigning the DJSCE college website to improve user experience and accessibility for students and staff.",
      timeline: "March 2022 - March 2023",
      tools: "Figma",
      contributions: ["UI/UX Design", "User Research", "Prototyping"],
      problemStatement:
        "The previous DJSCE website had an outdated design, making navigation difficult for users. It lacked accessibility, mobile responsiveness, and modern aesthetics.",
      solutionOverview:
        "The redesign addressed usability, navigation, and visual appeal, aligning with the needs of students and faculty. Features like streamlined navigation, mobile responsiveness, and visually engaging designs improved accessibility and engagement.",
      researchInsights: [
        {
          title: "Stakeholders discussion",
          content:
            "Conducted interviews with stakeholders, including college management, faculty, and students, to identify pain points and key requirements.",
        },
        {
          title: "Competitive analysis",
          content:
            "Evaluated similar academic websites to identify successful design elements, such as intuitive navigation and responsive layouts, and applied them to DJSCE’s redesign.",
        },
      ],
      objectives: [
        "Enhance accessibility across devices.",
        "Simplify navigation for students and faculty to find information quickly.",
        "Modernize visual design to align with current web standards.",
        "Boost engagement by introducing dynamic content and visuals.",
      ],
      designProcess: [
        {
          title: "Information Architecture",
          content:
            "Reorganized the website’s structure to prioritize user needs and simplify navigation, categorizing key sections like Admissions, Academics, and Resources.",
        },
        {
          title: "Wireframing",
          content:
            "Created low-fidelity wireframes to map the layout and navigation flow. Stakeholder feedback validated the structure before moving to high-fidelity prototypes.",
        },
        {
          title: "UI Prototyping",
          content:
            "Developed high-fidelity prototypes showcasing the new design style, color scheme, and layout, emphasizing clarity, accessibility, and usability.",
        },
      ],
      keyFeatures: [
        {
          title: "Home Page",
          content:
            "Features key information, news, and updates for students and visitors, with quick access to sections like Admissions and Departments.",
          image: "/images/djsce_homescreen.png",
        },
        {
          title: "Departments Page",
          content:
            "Organized information on academic departments, including faculty details, research highlights, and department-specific resources.",
          image: "/images/djsce_department.png",
        },
      ],
      problemStatementImages: [
        "/images/djsce_old.png",
        "/images/djsce_old_de.jpeg",
      ],
      retrospective:
        "The redesign resulted in a more accessible, visually appealing, and functional website, improving satisfaction among students and staff. Mobile engagement increased by 30%, and navigation issues decreased by 45%. The new website is available at www.djsce.ac.in.",
      files: [{ src: "/files/djsce.pdf", type: "pdf" }],
    },
  },

  {
    id: 4,
    title: " OLABS- Chemistry Virtual Lab Simulator",
    description: "Building interactive virtual labs for remote education.",
    image: "/images/olabs_simulator.png",
    tags: ["UI/UX Design", "Web Development", "Education"],
    details: {
      overview:
        "The Chemistry Virtual Lab Simulator enables students to perform the experiment 'Single Displacement Reaction' in a virtual environment, providing an easy-to-use, interactive alternative to traditional lab setups. This project bridges the gap in practical education during the pandemic, ensuring accessibility for all students.",
      timeline: "July 2020 - April 2021",
      tools: "React.js, Framer Motion, Canva/Photoshop",
      contributions: ["UI/UX Design", "Frontend Development", "Prototyping"],
      problemStatement:
        "During my sophomore year, the outbreak of the pandemic made the entire learning process virtual for everyone. Being a computer engineer, I was able to cope with this new form of learning, although many of my peers from other faculties had difficulties, especially in subjects such as chemistry, where lab work is usually required. I have had the opportunity. to work with the Indian government on the OLABS project, which was building virtual labs for students so they could continue remote education. This project provided an easy, interactive, and replicated experience similar to that of a physical lab. It was quite fascinating to see how technology could bridge these educational gaps, especially in these challenging situations.",
      solutionOverview:
        "The Chemistry Virtual Lab Simulator provides a fully interactive virtual lab experience. It replicates the 'Single Displacement Reaction' experiment with real-time feedback, animations, and step-by-step guidance. Hosted on the Vidyakash portal, the simulator is freely accessible to schools and students across India.",
      researchInsights: [
        {
          title: "User Feedback",
          content:
            "Collected feedback from students and educators to understand the pain points in virtual learning. Key findings included the lack of accessible, intuitive virtual lab tools.",
          subPoints: [
            "Educators wanted tools to replicate real lab experiences with minimal setup.",
            "Students preferred interactive visuals and step-by-step guides.",
            "Both groups emphasized the importance of accessibility and ease of use.",
          ],
        },
        {
          title: "Stakeholder Discussions",
          content:
            "Engaged with stakeholders, including educators and students, to identify key features and functionalities for an effective virtual lab.",
        },
        {
          title: "Technical Feasibility Study",
          content:
            "Evaluated technologies like React.js and Framer Motion to ensure dynamic, responsive, and engaging user experiences.",
        },
      ],
      objectives: [
        "Provide an immersive virtual lab experience replicating real-world chemistry experiments.",
        "Ensure accessibility for students across devices via the Vidyakash portal.",
        "Use animations and real-time feedback to enhance learning and engagement.",
        "Offer a user-friendly interface for both educators and students.",
      ],
      designProcess: [
        {
          title: "Prototyping",
          content:
            "Developed high-fidelity prototypes showcasing the experiment's step-by-step flow, animations, and interactions.",
        },
        {
          title: "Animation Development",
          content:
            "Used Framer Motion to create dynamic animations for chemical reactions, simulating real-time feedback and visual interactions.",
        },
        {
          title: "User Testing",
          content:
            "Conducted usability testing with students and educators to refine the simulator’s design and features based on feedback.",
        },
      ],
      keyFeatures: [
        {
          title: "A) Interactive Experimentation",
          content:
            "The simulator allows students to virtually perform the 'Single Displacement Reaction' experiment with real-time guidance and animations.",
        },
        {
          title: "B) User-Friendly Interface",
          content:
            "The interface is intuitive and designed to minimize the learning curve for students.",
          image: "/images/olabs_simulator_ui_1.png",
        },
        {
          title: "C) Accessibility",
          content:
            "Available on the Vidyakash portal, ensuring free access for students and schools across India.",
          image: "/images/olabs_simulator_ui.png",
        },
      ],
      retrospective:
        "The Chemistry Virtual Lab Simulator successfully bridged the gap in practical education during the pandemic. Over 10,000 students accessed the simulator, enabling continued learning in chemistry. The project demonstrated how technology can address educational challenges and improve accessibility. The simulator is available at https://cdac.olabs.edu.in/?sub=80&brch=29&sim=276&cnt=4",
      files: [
        { src: "CDAC.pdf", type: "pdf" },
      ],
    },
  },
];
