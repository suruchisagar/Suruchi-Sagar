import React, { useState, useEffect } from 'react';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id) => {
    setActiveNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  
  const profile = {
    name: "Suruchi Sagar",
    title: "Full Stack Developer",
    tagline: "Building scalable web applications with modern technologies",
    email: "suruchisagar24@gmail.com",
    github: "github.com/suruchisagar",
    linkedin: "linkedin.com/in/suruchisagar24",
  };

  const skills = [
    { category: "Languages", items: ["Java", "C", "JavaScript"] },
    { category: "Backend", items: ["Express", "Node.js", "Next.js"] },
    { category: "Frontend", items: ["React", "Vite", "Tailwind"] },
    { category: "Database", items: ["PostgreSQL", "MongoDB", "Neon", "Prisma"] },
    { category: "Cloud & Devops", items: ["AWS s3", "Vercel"] },
    { category: "System Design", items: ["Turborepo", "REST APIs", "Web Sockets"] },
    { category: "Core Concepts", items: ["DSA", "OOP", "Operating System", "DBMS", "Problem Solving"] },
    { category: "Tools", items: ["IntelliJ", "VS Code", "Git", "GitHub", "Postman"] },
  ];

  const projects = [
    {
        title: "Velvet",
        description: "A full-stack movie streaming platform inspired by Netflix, featuring secure authentication, dynamic content browsing, and a modern responsive user experience.",
        highlights: [
        "Implemented JWT-based authentication with secure sign-up and sign-in functionality",
        "Integrated AWS S3 for efficient storage and retrieval of movie posters and media assets",
        "Built an interactive movie browsing interface with hero banners, trending sections, and responsive UI components",
        "Developed RESTful APIs using Express and PostgreSQL for user management and content handling"
        ],
        tech: ["Next.js", "React.js", "Node.js", "Express", "PostgreSQL", "JWT", "Tailwind CSS"],
        status: "Completed",
        github: "https://github.com/suruchisagar/velvet",
        live: "https://velvet-web-theta.vercel.app"
              },

        {
          title: "Fellow",
          description: "A developer networking platform that helps users connect with like-minded developers, build professional relationships, and discover potential collaborators.",
          highlights: [
          "Implemented user authentication and profile management with secure login and registration",
          "Built a swipe-based matching system enabling developers to connect based on interests and skills",
          "Developed connection requests and networking features for seamless user interaction"
          ],
          tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
          status: "Completed",
          github: "https://github.com/suruchisagar/fellow",
          live: "https://fellow-umber.vercel.app/"
          },

    {
      title: "Digital Wallet",
      description: "A full-stack digital wallet application enabling user authentication, balance tracking, and secure fund transfers with reliable transaction handling.",
      highlights: [
        "RESTful APIs using Express and PostgreSQL for deposits and withdrawals",
        "Interactive, responsive React frontend for seamless dashboard experience",
        "Secure user authentication and balance tracking system"
      ],
      tech: ["Express", "React.js", "Node.js", "PostgreSQL", "REST APIs", "Tailwind"],
      status: "Completed",
      github: "https://github.com/suruchisagar/digital-wallet",
      live: "https://digital-wallet-pi.vercel.app/"
    },
    {
      title: "LibraryHub",
      description: "A full-stack web application that allows users to book and manage study seats in libraries for specific durations with real-time availability.",
      highlights: [
        "Secure JWT-based authentication system",
        "RESTful API endpoints for seat booking and schedule management",
        "Optimized PostgreSQL database for seat tracking and availability",
        "Responsive UI using React and Tailwind CSS"
      ],
      tech: ["Express", "React.js", "Node.js", "PostgreSQL", "JWT", "REST APIs"],
      status: "In Progress",
      github: "https://github.com/suruchisagar/LibraryHub",
      live: "https://github.com/suruchisagar/LibraryHub"
    },
      {
      title: "Personal Portfolio",
      description: "A modern single-page portfolio application built with React and Tailwind CSS, featuring smooth animations, responsive design, and an interactive timeline.",
      highlights: [
        "Responsive design with mobile-first approach",
        "Dynamic typing animation for role showcase",
        "Interactive education timeline with hover effects",
        "Clean dark theme with sky blue accent colors"
      ],
      tech: ["React", "Tailwind CSS", "JavaScript"],
      status: "Live",
      github: "https://github.com/suruchisagar/Suruchi-Sagar",
      live: "https://suruchi-sagar-148i.vercel.app/"
    },
    {
      title: "SketchHub",
      description: "A modern digital whiteboard application offering a clean drawing experience with real-time sync, cloud persistence, and a scalable monorepo architecture.",
      highlights: [
        "Canvas-based drawing with pen, shapes, and eraser tools",
        "Persistent storage using Prisma ORM and NeonDB serverless database",
        "Responsive UI built with React and Tailwind CSS",
        "Scalable monorepo structure managed with Turborepo"
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Turborepo", "NeonDB", "Prisma", "Canvas API"],
      status: "In Progress",
      github: "https://github.com/suruchisagar/SketchHub",
      live: "https://github.com/suruchisagar/SketchHub"
    }
    
  ];

  const education = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "National Institute of Technology, Jamshedpur",
      location: "Jharkhand, India",
      period: "2024 - 2027",
      cgpa: "8.81"
    },
    {
      degree: "Bachelor of Vocation in Computer Application",
      institution: "Banaras Hindu University, Varanasi",
      location: "UP, India",
      period: "2021 - 2024",
      cgpa: "8.83"
    }
  ];

  const achievements = [
    { platform: "HackerRank", details: "Java (Gold), Problem Solving (Silver), SQL (Silver)" },
    { platform: "GeeksforGeeks", details: "Solved 200+ Problems" },
    { platform: "LeetCode", details: "Solved 200+ Problems" },
    { platform: "Codeforces", details: "Solved 100+ Problems" },
  ];

  const activities = [
    { role: "Public Relations Member", org: "Society of Computer Science and Engineering (SCSE)", place: "NIT Jamshedpur", period: "2025 - 2026" },
    { role: "Member", org: "FACES (Official Fine Arts Society)", place: "NIT Jamshedpur", period: "2024 - 2025" },
    { role: "Website Handling Team Member", org: "BHU Connect (Student Led Society)", place: "Banaras Hindu University", period: "2022 - 2023" },
  ];



  const [typedName, setTypedName] = useState('');

useEffect(() => {
  const fullName = profile.name.replace(' ', '_');
  let index = 0;
  let typingInterval;
  let pauseTimeout;

  const startTyping = () => {
    index = 0;
    setTypedName('');
    typingInterval = setInterval(() => {
      if (index <= fullName.length) {
        setTypedName(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        pauseTimeout = setTimeout(() => {
          startTyping();
        }, 2000);
      }
    }, 120);
  };

  startTyping();

  return () => {
    clearInterval(typingInterval);
    clearTimeout(pauseTimeout);
  };
}, []);


  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-800 to-blue-800 bg-clip-text text-transparent">
            &lt;{profile.name} /&gt;
          </span>
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium capitalize transition-colors duration-300 ${
                  activeNav === item ? 'text-blue-800' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
<section
  id="home"
  className="relative min-h-screen flex items-end px-6 pb-28 pt-20 overflow-hidden"
>
  {/* Background Image — replace the path below with your own image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/portfolio-bg.png')" }}
  ></div>

  {/* Overlays for text readability */}
  {/* <div className="absolute inset-0 bg-slate-950/75"></div> */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>

  <div
    className={`relative z-10 w-full max-w-6xl mx-auto transition-all duration-1000 ${
      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
  >
    <div className="max-w-2xl text-left">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-200 text-sm font-medium mb-8">
        <span className="w-2 h-2 bg-blue-200 rounded-full animate-pulse"></span>
        Open to Opportunities
      </div>

      <h1 className="text-3xl md:text-5xl mb-4 min-h-[1.2em]">
        <span className="font-bold tracking-wide text-slate-300">Hi, I'm </span>
        <span
          className="font-medium text-blue-900"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {typedName}
          <span className="inline-block w-[2px] h-[0.9em] bg-blue-900 ml-0.5 align-middle animate-pulse"></span>
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-slate-400 font-light mb-6">
        {profile.title}
      </p>

      <p className="text-base text-slate-500 max-w-xl mb-10">
        {profile.tagline}
      </p>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => scrollToSection('contact')}
          className="px-8 py-3.5 bg-gradient-to-l from-blue-800 to-blue-950 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
        >
          Get In Touch
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className="px-8 py-3.5 border border-slate-700 text-slate-300 font-medium rounded-xl hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
        >
          View Projects
        </button>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mt-12">
        <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer"
           className="text-slate-500 hover:text-blue-200 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer"
           className="text-slate-500 hover:text-blue-200 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href={`mailto:${profile.email}`}
           className="text-slate-500 hover:text-blue-200 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

        
        {/* About Section */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-700 font-semibold text-sm tracking-widest uppercase mb-3">About Me</p>
              <h2 className="text-4xl font-bold">Who I Am</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-slate-400 leading-relaxed">
                <p>
                  I'm a passionate Full Stack Developer currently pursuing my Master's in Computer Application at 
                  <span className="text-white"> NIT Jamshedpur</span>. I specialize in building robust web applications 
                  using modern technologies like React, Node.js, and PostgreSQL.
                </p>
                <p>
                  With a strong foundation in Data Structures & Algorithms and a proven track record of solving 
                  <span className="text-white"> 300+ problems</span> across competitive programming platforms, 
                  I bring analytical thinking and clean code practices to every project.
                </p>
                <p>
                  I'm actively involved in campus communities, serving as a PR member at SCSE and contributing 
                  to the tech ecosystem through collaborative projects and open-source contributions.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "300+", label: "Problems Solved" },
                  { value: "2+", label: "Projects Built" },
                  { value: "8.8", label: "CGPA" },
                  { value: "3+", label: "Certifications" },
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-colors duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-slate-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 bg-slate-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-800 font-semibold text-sm tracking-widest uppercase mb-3">Technical Skills</p>
              <h2 className="text-4xl font-bold">My Tech Stack</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, i) => (
                <div 
                  key={i} 
                  className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-blue-400 font-semibold text-xs tracking-widest uppercase mb-4">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, j) => (
                      <span 
                        key={j} 
                        className="px-3 py-1.5 bg-slate-800/80 border border-slate-700 rounded-lg text-sm text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-800 font-semibold text-sm tracking-widest uppercase mb-3">Portfolio</p>
              <h2 className="text-4xl font-bold">Featured Projects</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, i) => (
  <div 
    key={i} 
    className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
  >
    <div className="flex items-start justify-between mb-4">
      <h3 className="text-2xl font-bold text-slate-100 group-hover:text-blue-200 transition-colors">
        {project.title}
      </h3>
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
        project.status === 'Completed' 
          ? 'bg-blue-500/15 text-blue-200 border border-blue-500/30' 
          : project.status === 'Live'
          ? 'bg-cyan-500/15 text-cyan-200 border border-cyan-500/30'
          : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
      }`}>
        {project.status}
      </span>
    </div>
    
    <p className="text-slate-400 mb-6 leading-relaxed">
      {project.description}
    </p>
    
    <ul className="space-y-2 mb-6">
      {project.highlights.map((highlight, j) => (
        <li key={j} className="flex items-start gap-3 text-slate-500 text-sm">
          <span className="w-1.5 h-1.5 bg-blue-200 rounded-full mt-2 flex-shrink-0"></span>
          {highlight}
        </li>
      ))}
    </ul>
    
    <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span 
                      key={j} 
                      className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-xs text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4 mt-6 pt-6 border-t border-slate-800">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-400 hover:text-blue-200 transition-colors text-sm"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-400 hover:text-blue-200 transition-colors text-sm"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 px-6 bg-slate-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-800 font-semibold text-sm tracking-widest uppercase mb-3">Background</p>
              <h2 className="text-4xl font-bold">Education</h2>
            </div>
            
            <div className="space-y-6 mb-16">
              {education.map((edu, i) => (
                <div 
                  key={i} 
                  className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 mb-2">{edu.degree}</h3>
                      <p className="text-slate-400">{edu.institution}</p>
                      <p className="text-slate-500 text-sm">{edu.location}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-blue-200 font-semibold">{edu.period}</div>
                      <div className="text-slate-400 text-sm">CGPA: {edu.cgpa}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold">Achievements</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {achievements.map((ach, i) => (
                <div 
                  key={i} 
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 text-center hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="text-blue-500 font-bold mb-2">{ach.platform}</div>
                  <div className="text-slate-500 text-sm">{ach.details}</div>
                </div>
              ))}
            </div>

            {/* Extracurricular */}
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold">Extracurricular Activities</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {activities.map((act, i) => (
                <div 
                  key={i} 
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="text-blue-500 font-semibold text-sm mb-2">{act.role}</div>
                  <div className="text-slate-300 text-sm mb-1">{act.org}</div>
                  <div className="text-slate-500 text-xs">{act.place} • {act.period}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-200 font-semibold text-sm tracking-widest uppercase mb-3">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question, 
              a project idea, or just want to say hi, I'd love to hear from you!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 px-6 py-3.5 bg-slate-900/50 border border-slate-700 rounded-xl text-slate-300 hover:border-blue-500/50 hover:text-blue-200 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {profile.email}
              </a>
              
              <a 
                href={`https://${profile.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3.5 bg-slate-900/50 border border-slate-700 rounded-xl text-slate-300 hover:border-blue-500/50 hover:text-blue-200 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              
              <a 
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3.5 bg-slate-900/50 border border-slate-700 rounded-xl text-slate-300 hover:border-blue-500/50 hover:text-blue-200 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-slate-800/50">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;