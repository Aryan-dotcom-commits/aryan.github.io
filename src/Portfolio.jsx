import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMobileAlt, faPalette, faEnvelope, faPhone, faMapMarkerAlt, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faInstagram, faGithub, faReact, faHtml5, faMicrosoft, faFigma } from '@fortawesome/free-brands-svg-icons';
import './Portfolio.css';

const Portfolio = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hoveredProject, setHoveredProject] = useState(null);
    const [activeService, setActiveService] = useState(null);
    const [skillLevel, setSkillLevel] = useState({});
    const [scrollPosition, setScrollPosition] = useState(0);
    const [visibleSections, setVisibleSections] = useState({});
    const sectionRefs = useRef({});

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);

            // Check each section's visibility
            Object.keys(sectionRefs.current).forEach(sectionId => {
                const element = sectionRefs.current[sectionId];
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight * 0.75;
                    setVisibleSections(prev => ({
                        ...prev,
                        [sectionId]: isVisible
                    }));
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSkillHover = (skill) => {
        setSkillLevel(prev => ({
            ...prev,
            [skill]: true
        }));
    };

    const handleSkillLeave = (skill) => {
        setSkillLevel(prev => ({
            ...prev,
            [skill]: false
        }));
    };

    return (
        <div className={`portfolio-container ${isLoaded ? 'loaded' : ''}`}>
            <div 
                className="hero-section"
                style={{
                    opacity: Math.max(0, 1 - scrollPosition / 500),
                    transform: `translateY(${Math.min(0, -scrollPosition / 2)}px)`
                }}
            >
                <div className="hero-content">
                    <div className="profile-section">
                        <div className="profile-image-container">
                            <img src="/your-image-path.jpg" alt="Profile" className="profile-image" />
                        </div>
                        <div className="profile-info">
                            <h1>Aryan Pradhan</h1>
                            <p className="title">Full Stack Developer</p>
                            <p className="bio">Crafting your ideas with modern technology</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="content-grid">
                    <section 
                        ref={el => sectionRefs.current.services = el}
                        className={`section services ${visibleSections.services ? 'visible' : ''}`}
                    >
                        <div className="section-header">
                            <h2>Services</h2>
                            <span>What I offer</span>
                        </div>
                        <div className="services-grid">
                            <div 
                                className={`service-card ${activeService === 'web' ? 'active' : ''}`}
                                onMouseEnter={() => setActiveService('web')}
                                onMouseLeave={() => setActiveService(null)}
                            >
                                <div className="service-icon">
                                    <FontAwesomeIcon icon={faLaptopCode} />
                                </div>
                                <h3>Web Development</h3>
                                <p>Custom websites and web applications</p>
                                <div className="service-details">
                                    <ul>
                                        <li>Responsive Design</li>
                                        <li>Progressive Web Apps</li>
                                        <li>E-commerce Solutions</li>
                                    </ul>
                                </div>
                            </div>
                            <div 
                                className={`service-card ${activeService === 'mobile' ? 'active' : ''}`}
                                onMouseEnter={() => setActiveService('mobile')}
                                onMouseLeave={() => setActiveService(null)}
                            >
                                <div className="service-icon">
                                    <FontAwesomeIcon icon={faMobileAlt} />
                                </div>
                                <h3>Mobile Development</h3>
                                <p>Native and cross-platform apps</p>
                                <div className="service-details">
                                    <ul>
                                        <li>iOS Development</li>
                                        <li>Android Development</li>
                                        <li>Cross-platform Solutions</li>
                                    </ul>
                                </div>
                            </div>
                            <div 
                                className={`service-card ${activeService === 'design' ? 'active' : ''}`}
                                onMouseEnter={() => setActiveService('design')}
                                onMouseLeave={() => setActiveService(null)}
                            >
                                <div className="service-icon">
                                    <FontAwesomeIcon icon={faPalette} />
                                </div>
                                <h3>UI/UX Design</h3>
                                <p>User-centered design solutions</p>
                                <div className="service-details">
                                    <ul>
                                        <li>User Research</li>
                                        <li>Wireframing</li>
                                        <li>Prototyping</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section 
                        ref={el => sectionRefs.current.projects = el}
                        className={`section projects ${visibleSections.projects ? 'visible' : ''}`}
                    >
                        <div className="section-header">
                            <h2>Projects</h2>
                            <span>Recent work</span>
                        </div>
                        <div className="project-showcase">
                            <div 
                                className="project-card"
                                onMouseEnter={() => setHoveredProject(1)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <div className="project-image">
                                    <div className="project-overlay">
                                        <span className="view-project">View Project</span>
                                    </div>
                                </div>
                                <div className={`project-info ${hoveredProject === 1 ? 'active' : ''}`}>
                                    <h3>Project One</h3>
                                    <p>Web Application</p>
                                    <div className="project-tech">
                                        <span>React</span>
                                        <span>Node.js</span>
                                        <span>MongoDB</span>
                                    </div>
                                    <div className="project-links">
                                        <a href="#" className="project-link">Live Demo</a>
                                        <a href="#" className="project-link">Source Code</a>
                                    </div>
                                </div>
                            </div>
                            <div 
                                className="project-card"
                                onMouseEnter={() => setHoveredProject(2)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <div className="project-image">
                                    <div className="project-overlay">
                                        <span className="view-project">View Project</span>
                                    </div>
                                </div>
                                <div className={`project-info ${hoveredProject === 2 ? 'active' : ''}`}>
                                    <h3>Project Two</h3>
                                    <p>Mobile App</p>
                                    <div className="project-tech">
                                        <span>React Native</span>
                                        <span>Firebase</span>
                                        <span>Redux</span>
                                    </div>
                                    <div className="project-links">
                                        <a href="#" className="project-link">App Store</a>
                                        <a href="#" className="project-link">Source Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section 
                        ref={el => sectionRefs.current.about = el}
                        className={`section about ${visibleSections.about ? 'visible' : ''}`}
                    >
                        <div className="section-header">
                            <h2>About</h2>
                            <span>My journey</span>
                        </div>
                        <div className="about-content">
                            <p>I'm a passionate developer with a keen eye for detail and a love for creating seamless user experiences. With expertise in modern web technologies, I bring ideas to life through clean, efficient code.</p>
                            <div className="skills-container">
                                <div className="skill-category">
                                    <h4>Frontend</h4>
                                    <div className="skills">
                                        <div className="skill-item" onMouseEnter={() => handleSkillHover('react')} onMouseLeave={() => handleSkillLeave('react')}>
                                            <span><FontAwesomeIcon icon={faReact} /> React</span>
                                            <div className={`skill-level ${skillLevel['react'] ? 'active' : ''}`}>
                                                <div className="skill-bar" style={{width: '90%'}}></div>
                                            </div>
                                        </div>
                                        <div className="skill-item" onMouseEnter={() => handleSkillHover('maui')} onMouseLeave={() => handleSkillLeave('maui')}>
                                            <span><FontAwesomeIcon icon={faMicrosoft} /> MAUI</span>
                                            <div className={`skill-level ${skillLevel['maui'] ? 'active' : ''}`}>
                                                <div className="skill-bar" style={{width: '85%'}}></div>
                                            </div>
                                        </div>
                                        <div className="skill-item" onMouseEnter={() => handleSkillHover('html')} onMouseLeave={() => handleSkillLeave('html')}>
                                            <span><FontAwesomeIcon icon={faHtml5} /> HTML</span>
                                            <div className={`skill-level ${skillLevel['html'] ? 'active' : ''}`}>
                                                <div className="skill-bar" style={{width: '95%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-category">
                                    <h4>Backend</h4>
                                    <div className="skills">
                                        <div className="skill-item" onMouseEnter={() => handleSkillHover('dotnet')} onMouseLeave={() => handleSkillLeave('dotnet')}>
                                            <span><FontAwesomeIcon icon={faMicrosoft} /> .NET</span>
                                            <div className={`skill-level ${skillLevel['dotnet'] ? 'active' : ''}`}>
                                                <div className="skill-bar" style={{width: '85%'}}></div>
                                            </div>
                                        </div>
                                        <div className="skill-item" onMouseEnter={() => handleSkillHover('mern')} onMouseLeave={() => handleSkillLeave('mern')}>
                                            <span><FontAwesomeIcon icon={faReact} /> MERN</span>
                                            <div className={`skill-level ${skillLevel['mern'] ? 'active' : ''}`}>
                                                <div className="skill-bar" style={{width: '80%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-category">
                                    <h4>Database</h4>
                                    <div className="skills">
                                        <div className="skill-item" onMouseEnter={() => handleSkillHover('oracle')} onMouseLeave={() => handleSkillLeave('oracle')}>
                                            <span><FontAwesomeIcon icon={faDatabase} /> Oracle</span>
                                            <div className={`skill-level ${skillLevel['oracle'] ? 'active' : ''}`}>
                                                <div className="skill-bar" style={{width: '85%'}}></div>
                                            </div>
                                        </div>
                                        <div className="skill-item" onMouseEnter={() => handleSkillHover('sql')} onMouseLeave={() => handleSkillLeave('sql')}>
                                            <span><FontAwesomeIcon icon={faDatabase} /> SQL</span>
                                            <div className={`skill-level ${skillLevel['sql'] ? 'active' : ''}`}>
                                                <div className="skill-bar" style={{width: '90%'}}></div>
                                            </div>
                                        </div>
                                        <div className="skill-item" onMouseEnter={() => handleSkillHover('postgres')} onMouseLeave={() => handleSkillLeave('postgres')}>
                                            <span><FontAwesomeIcon icon={faDatabase} /> PostgreSQL</span>
                                            <div className={`skill-level ${skillLevel['postgres'] ? 'active' : ''}`}>
                                                <div className="skill-bar" style={{width: '80%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-category">
                                    <h4>Design</h4>
                                    <div className="skills">
                                        <div className="skill-item" onMouseEnter={() => handleSkillHover('figma')} onMouseLeave={() => handleSkillLeave('figma')}>
                                            <span><FontAwesomeIcon icon={faFigma} /> Figma</span>
                                            <div className={`skill-level ${skillLevel['figma'] ? 'active' : ''}`}>
                                                <div className="skill-bar" style={{width: '85%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section 
                        ref={el => sectionRefs.current.contact = el}
                        className={`section contact ${visibleSections.contact ? 'visible' : ''}`}
                    >
                        <div className="section-header">
                            <h2>Contact</h2>
                            <span>Let's connect</span>
                        </div>
                        <div className="contact-content">
                            <div className="contact-grid">
                                <div className="contact-info-card">
                                    <h3>Get in Touch</h3>
                                    <p className="contact-description">Feel free to reach out for collaborations or just a friendly hello</p>
                                    <div className="contact-details">
                                        <div className="contact-item">
                                            <div className="contact-icon">
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                            <div className="contact-text">
                                                <h4>Email</h4>
                                                <p>aryanpradhan773@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="contact-item">
                                            <div className="contact-icon">
                                                <FontAwesomeIcon icon={faPhone} />
                                            </div>
                                            <div className="contact-text">
                                                <h4>Phone</h4>
                                                <p>9704787043</p>
                                            </div>
                                        </div>
                                        <div className="contact-item">
                                            <div className="contact-icon">
                                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                            </div>
                                            <div className="contact-text">
                                                <h4>Location</h4>
                                                <p>Thapathali, Kathmandu</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="social-links">
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </a>
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </div>
                                </div>
                                <div className="contact-form-card">
                                    <h3>Send Message</h3>
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" id="name" placeholder="Your Name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" id="email" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="subject">Subject</label>
                                            <input type="text" id="subject" placeholder="Subject" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea id="message" placeholder="Your Message" rows="4"></textarea>
                                        </div>
                                        <button type="submit">
                                            <span>Send Message</span>
                                            <span className="button-icon">→</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;