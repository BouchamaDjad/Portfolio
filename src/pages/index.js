import {useState, useEffect} from "react";

export default function Home() {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
    };

    const skills = {
        languages: ['Java', 'Python', 'JavaScript', 'SQL', 'HTML/CSS', 'PHP', 'Go', 'Rust', 'C', 'Assembly'],
        frameworks: ['Node.js', 'Django', 'React', 'JUnit', 'JADE', 'PyQT'],
        tools: ['Linux', 'Git', 'VS Code', 'IntelliJ', 'Eclipse'],
        libraries: ['TensorFlow', 'PyTorch', 'pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
        databases: ['Oracle', 'MongoDB']
    };

    const projects = [
        {
            title: "Deep RL for Code Optimization in MLIR Compiler",
            period: "July 2024 – July 2025",
            company: "NYUAD (Remote)",
            tech: ["Python", "PyTorch", "C++", "Deep RL"],
            description: "Developed deep reinforcement learning system for automatic code optimization in MLIR compiler, integrated as Matlab backend. Used LSTM encoding for variable-size program processing.",
            type: "internship"
        },
        {
            title: "Text Generation from Scene Graphs",
            period: "Sep 2022 – June 2023",
            company: "USTHB - Bachelor's Final Project",
            tech: ["Python", "TensorFlow", "NetworkX", "Django"],
            description: "Built grammar-based and neural network models for generating textual descriptions from scene graph representations. Implemented GCN coupled with pre-trained transformer.",
            type: "academic"
        },
        {
            title: "Climate & Soil Analysis for Tizi-Ouzou",
            period: "Oct 2024 – Jan 2025",
            tech: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
            description: "Complete data mining application for climate analysis. Features interactive GUI, statistical analysis, data preprocessing, regression models, and clustering algorithms (CLARANS, DBSCAN).",
            type: "personal"
        },
        {
            title: "Multiple Knapsack Problem Optimization",
            period: "Mar 2024 – Apr 2024",
            tech: ["Java", "JavaFX"],
            description: "Solved NP-hard multiple knapsack problem using exact algorithms (BFS, DFS, A*) and meta-heuristics (Genetic Algorithm, Bee Swarm Optimization). Built simulation interface.",
            type: "academic"
        },
        {
            title: "Maktabati - E-Commerce Bookstore",
            period: "Mar 2024 – May 2024",
            tech: ["Python", "Django", "Bootstrap", "HTMX"],
            description: "Interactive online bookstore with modern UI/UX. Features user management, shopping cart, REST API, dynamic components, and responsive design.",
            type: "personal"
        },
        {
            title: "Stock Management Web Application",
            period: "Dec 2022 – Jan 2023",
            tech: ["Python", "Django", "Bootstrap"],
            description: "Complete inventory management system with dashboard analytics, reporting features, product tracking, invoice generation, and PDF export capabilities.",
            type: "personal"
        }
    ];

    const education = [
        {
            degree: "Master SII (Systèmes Informatiques Intelligents)",
            school: "USTHB - University of Science and Technology",
            period: "Sep 2023 – July 2025",
            achievement: "1st in class",
            location: "Algiers, Algeria"
        },
        {
            degree: "License ISIL (Software Engineering)",
            school: "USTHB - University of Science and Technology",
            period: "Sep 2021 – June 2023",
            location: "Algiers, Algeria"
        },
        {
            degree: "MI (Mathematics & Computer Science)",
            school: "USTHB - University of Science and Technology",
            period: "Sep 2020 – June 2021",
            location: "Algiers, Algeria"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-2xl font-bold text-gray-800">
                            BD
                        </div>
                        <div className="hidden md:flex space-x-8">
                            {['Home', 'About', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`text-gray-700 hover:text-indigo-600 transition-colors duration-300 ${activeSection === item.toLowerCase() ? 'text-indigo-600 font-semibold' : ''}`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="gradient-bg min-h-screen flex items-center justify-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-32 w-12 h-12 bg-white rounded-full animate-pulse delay-2000"></div>
                </div>
                <div className="text-center z-10 max-w-4xl mx-auto px-4">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 typing-animation">
                        Bouchama Djad
                    </h1>
                    <p className="text-2xl md:text-3xl mb-8 text-gray-200">
                        AI & Software Engineer
                    </p>
                    <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                        Specialized in Intelligent Information Systems, Machine Learning, Deep Learning, and Full-Stack Development
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <button 
                            onClick={() => scrollToSection('projects')}
                            className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        >
                            View My Work
                        </button>
                        <div className="flex space-x-4">
                            <a href="mailto:bouchamadjad@gmail.com" className="text-white hover:text-gray-200 transition-colors">
                                <i className="fab fa-solid fa-envelope text-2xl"></i>
                            </a>
                            <a href="https://linkedin.com/in/bouchama-djad-924148263/" className="text-white hover:text-gray-200 transition-colors">
                                <i className="fab fa-linkedin text-2xl"></i>
                            </a>
                            <a href="https://github.com/BouchamaDjad/" className="text-white hover:text-gray-200 transition-colors">
                                <i className="fab fa-github text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
                        <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Recent computer science graduate specialized in Intelligent Information Systems, including Artificial Intelligence (ML/DL), Data Science, and NLP. Strong foundation in backend and server-side application development.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Experienced in creating full-stack web applications, developing RESTful APIs, and implementing machine learning models. Motivated, rigorous, and equipped with strong problem-solving skills.
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                                <div>
                                    <i className="fas fa-envelope text-indigo-600 mr-2"></i>
                                    bouchamadjad@gmail.com
                                </div>
                                <div>
                                    <i className="fas fa-phone text-indigo-600 mr-2"></i>
                                    0557739835
                                </div>
                                <div className="col-span-2">
                                    <i className="fas fa-map-marker-alt text-indigo-600 mr-2"></i>
                                    38 rue de Birkhaddem, Bachdjerrah, Alger
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h3>
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category} className="mb-6">
                                    <h4 className="text-lg font-semibold text-gray-700 mb-3 capitalize">
                                        {category}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="skill-tag text-white px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
                        <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
                    </div>
                    <div className="space-y-8">
                        <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">Research Intern</h3>
                                    <p className="text-lg text-indigo-600 font-semibold">New York University Abu Dhabi (NYUAD)</p>
                                    <p className="text-gray-600">Remote</p>
                                </div>
                                <span className="text-gray-500 font-medium">July 2024 – July 2025</span>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-700 mb-3">
                                Deep RL for Automatic Code Optimization in MLIR Compiler
                            </h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['Python', 'PyTorch', 'C++', 'Deep RL', 'MLIR'].map((tech) => (
                                    <span key={tech} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Developed deep reinforcement learning system for automatic code optimization in MLIR compiler</li>
                                <li>• Collaboration with MathWorks to integrate as Matlab backend compiler</li>
                                <li>• Implemented LSTM encoding for processing variable-size programs</li>
                                <li>• Contributing to performance improvements for millions of Matlab users worldwide</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">Bachelor's Final Project</h3>
                                    <p className="text-lg text-indigo-600 font-semibold">USTHB University</p>
                                    <p className="text-gray-600">Algiers, Algeria</p>
                                </div>
                                <span className="text-gray-500 font-medium">Sep 2022 – June 2023</span>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-700 mb-3">
                                Text Generation from Scene Graphs
                            </h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['Python', 'TensorFlow', 'Scikit-learn', 'NetworkX', 'Django'].map((tech) => (
                                    <span key={tech} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Developed grammar-based and neural network models for generating textual descriptions</li>
                                <li>• Implemented Graph Convolution Network (GCN) coupled with pre-trained transformer</li>
                                <li>• Created fine-tuned models for descriptive text generation from scene representations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
                        <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                    <div className="text-white text-center">
                                        <i className="fas fa-code text-4xl mb-2"></i>
                                        <p className="text-sm opacity-80">Project Screenshot</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            project.type === 'academic' ? 'bg-blue-100 text-blue-800' :
                                            project.type === 'internship' ? 'bg-green-100 text-green-800' :
                                            'bg-purple-100 text-purple-800'
                                        }`}>
                                            {project.type}
                                        </span>
                                        <span className="text-xs text-gray-500">{project.period}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                    {project.company && (
                                        <p className="text-sm text-indigo-600 font-medium mb-3">{project.company}</p>
                                    )}
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-1">
                                        {project.tech.slice(0, 3).map((tech) => (
                                            <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                                +{project.tech.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
                        <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
                    </div>
                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                                        <p className="text-lg text-indigo-600 font-semibold mb-1">{edu.school}</p>
                                        <p className="text-gray-600 mb-2">{edu.location}</p>
                                        {edu.achievement && (
                                            <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                                🏆 {edu.achievement}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-gray-500 font-medium mt-4 md:mt-0">{edu.period}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 gradient-bg text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
                    <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
                    <p className="text-xl mb-12 max-w-2xl mx-auto">
                        I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
                        <a 
                            href="mailto:bouchamadjad@gmail.com"
                            className="flex items-center space-x-3 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-lg transition-all duration-300"
                        >
                            <i className="fas fa-envelope text-xl"></i>
                            <span>bouchamadjad@gmail.com</span>
                        </a>
                        <a 
                            href="https://linkedin.com/in/bouchama-djad-924148263/"
                            className="flex items-center space-x-3 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-lg transition-all duration-300"
                        >
                            <i className="fab fa-linkedin text-xl"></i>
                            <span>LinkedIn</span>
                        </a>
                        <a 
                            href="https://github.com/BouchamaDjad/"
                            className="flex items-center space-x-3 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-lg transition-all duration-300"
                        >
                            <i className="fab fa-github text-xl"></i>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8 text-center">
                <p>&copy; 2025 Bouchama Djad. All rights reserved.</p>
            </footer>
        </div>
    );
};
