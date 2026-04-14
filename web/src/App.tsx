import React, { useEffect, useId, useState } from 'react';
import './App.css';
import logoImg from './assets/logo.png';
import weddingImg from './assets/wedding.jpg';
import cateringImg from './assets/catering.jpg';
import catering2Img from './assets/catering2.jpg';
import catering3Img from './assets/catering3.jpg';
import catering4Img from './assets/catering4.jpg';
import catering6Img from './assets/catering6.jpg';
import catering7Img from './assets/catering7.png';

const SOCIAL_LINKS: {
  href: string;
  label: string;
  icon: 'instagram' | 'facebook';
}[] = [
  {
    href: 'https://www.instagram.com/emidawnltd/',
    label: 'EMIDAWN on Instagram',
    icon: 'instagram',
  },
  {
    href: 'https://www.facebook.com/emidawnltd',
    label: 'EMIDAWN on Facebook',
    icon: 'facebook',
  },
];

const SocialIcon: React.FC<{ name: 'instagram' | 'facebook' }> = ({ name }) => {
  const rawId = useId().replace(/:/g, '');
  if (name === 'instagram') {
    const gradId = `ig-grad-${rawId}`;
    return (
      <svg
        className="social-icon-svg social-icon-svg--instagram"
        viewBox="0 0 24 24"
        width={22}
        height={22}
        aria-hidden
        focusable="false"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${gradId})`}
          d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
        />
      </svg>
    );
  }
  return (
    <svg
      className="social-icon-svg social-icon-svg--facebook"
      viewBox="0 0 24 24"
      width={22}
      height={22}
      aria-hidden
      focusable="false"
    >
      <path
        fill="#1877f2"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  );
};

const SiteFooter: React.FC<{
  currentPage: 'home' | 'contact';
  onGoHome: () => void;
  onExperiences: () => void;
  onConsultation: () => void;
  onContact: () => void;
}> = ({ currentPage, onGoHome, onExperiences, onConsultation, onContact }) => {
  const handleExperiences = () => {
    if (currentPage === 'contact') {
      onGoHome();
      setTimeout(onExperiences, 100);
    } else {
      onExperiences();
    }
  };

  const handleConsultation = () => {
    if (currentPage === 'contact') {
      onGoHome();
      setTimeout(onConsultation, 100);
    } else {
      onConsultation();
    }
  };

  return (
    <footer className="footer">
      <div className="footer-accent" aria-hidden />
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-col footer-col-brand">
            <button
              type="button"
              className="footer-brand"
              onClick={onGoHome}
              aria-label="EMIDAWN Catering home"
            >
              <span className="footer-brand-logo-wrap">
                <img src={logoImg} alt="" className="footer-brand-logo" />
              </span>
              <span className="footer-brand-text">
                <span className="footer-brand-name">EMIDAWN</span>
                <span className="footer-brand-sub">Catering · Nairobi</span>
              </span>
            </button>
            <p className="footer-tagline">
              Refined culinary experiences for weddings, corporate events, and
              premium residential dining across Nairobi.
            </p>
          </div>

          <div className="footer-col">
            <h2 className="footer-heading">Explore</h2>
            <ul className="footer-links">
              <li>
                <button type="button" className="footer-link" onClick={handleExperiences}>
                  Our Experiences
                </button>
              </li>
              <li>
                <button type="button" className="footer-link" onClick={handleConsultation}>
                  Request Consultation
                </button>
              </li>
              <li>
                <button type="button" className="footer-link" onClick={onContact}>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h2 className="footer-heading">Get in Touch</h2>
            <ul className="footer-contact-list">
              <li>
                <a href="mailto:info@Emidawnltd.com" className="footer-contact-link">
                  info@Emidawnltd.com
                </a>
              </li>
              <li>
                <a href="tel:0796755711" className="footer-contact-link">
                  0796755711
                </a>
              </li>
              <li>
                <span className="footer-contact-static">Nairobi, Kenya</span>
                <span className="footer-contact-note">Serving Greater Nairobi</span>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-col-connect">
            <h2 className="footer-heading">Follow Us</h2>
            <SocialLinks />
          </div>
        </div>

        <div className="footer-divider" aria-hidden />

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} EMIDAWN Catering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLinks: React.FC = () => (
  <ul className="social-links social-links--footer">
    {SOCIAL_LINKS.map(({ href, label, icon }) => (
      <li key={href}>
        <a
          href={href}
          className={`social-link social-link--${icon}`}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon name={icon} />
        </a>
      </li>
    ))}
  </ul>
);

const ContactPage: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="section contact-page">
      <div className="contact-hero">
        <div className="contact-hero-content">
          <div className="contact-hero-decoration contact-hero-decoration-left">❦</div>
          <h1 className="contact-hero-title scroll-reveal">Connect With Us</h1>
          <div className="contact-hero-decoration contact-hero-decoration-right">❦</div>
          <p className="contact-hero-subtitle scroll-reveal">
            Ready to create an unforgettable experience? Let's discuss how we can elevate your event.
          </p>
        </div>
      </div>
      
      <div className="section-inner contact-content">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-header scroll-reveal">
              <h2 className="contact-info-title">Get in Touch</h2>
              <p className="contact-info-description">
                We're here to bring your vision to life. Reach out through any channel that suits you best.
              </p>
            </div>
            
            <div className="contact-items">
              <div className="contact-item scroll-reveal">
                <div className="contact-item-icon-wrapper">
                  <div className="contact-icon">📧</div>
                  <div className="contact-icon-bg"></div>
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <a href="mailto:info@Emidawnltd.com" className="contact-link">info@Emidawnltd.com</a>
                </div>
              </div>
              
              <div className="contact-item scroll-reveal">
                <div className="contact-item-icon-wrapper">
                  <div className="contact-icon">📞</div>
                  <div className="contact-icon-bg"></div>
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <a href="tel:0796755711" className="contact-link">0796755711</a>
                </div>
              </div>
              
              <div className="contact-item scroll-reveal">
                <div className="contact-item-icon-wrapper">
                  <div className="contact-icon">📍</div>
                  <div className="contact-icon-bg"></div>
                </div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper scroll-reveal">
            <div className="contact-form-header">
              <h2 className="contact-form-title">Send Us a Message</h2>
              <p className="contact-form-subtitle">
                Fill out the form below and we'll get back to you within 24 hours.
        </p>
            </div>
            <form className="contact-form">
              <div className="form-row">
                <label>
                  <span className="form-label-text">Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    required
                    className="form-input"
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span className="form-label-text">Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    required
                    className="form-input"
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span className="form-label-text">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    placeholder="How can we help?"
                    className="form-input"
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span className="form-label-text">Message</span>
                  <textarea
                    name="message"
                    placeholder="Tell us about your event or inquiry..."
                    rows={6}
                    required
                    className="form-input form-textarea"
                  />
                </label>
              </div>
              <button type="submit" className="primary-cta full-width contact-submit-btn">
                <span>Send Message</span>
                <span className="btn-arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Remove scroll-revealed class from all elements to reset animations
      const allRevealElements = document.querySelectorAll('.scroll-reveal');
      allRevealElements.forEach((el) => {
        el.classList.remove('scroll-revealed');
      });

      // Observe all elements with scroll-reveal class
      const revealElements = document.querySelectorAll('.scroll-reveal');
      revealElements.forEach((el) => observer.observe(el));

      // Store observer for cleanup
      return () => {
        revealElements.forEach((el) => observer.unobserve(el));
        observer.disconnect();
      };
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [currentPage]);

  const scrollToConsultation = () => {
    const section = document.getElementById('consultation');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperiences = () => {
    const section = document.getElementById('experiences');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="page">
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
      <header className="nav">
        <div className="nav-brand" onClick={goToHome} style={{ cursor: 'pointer' }}>
          <span className="nav-brand-logo-wrap">
            <img
              src={logoImg}
              alt="EMIDAWN Catering"
              className="nav-brand-logo"
            />
          </span>
          <div className="nav-brand-text">
            <span className="nav-brand-subtitle">Catering · Nairobi</span>
          </div>
        </div>
        <button 
          className="nav-hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <button 
            className="nav-link" 
            onClick={() => {
              if (currentPage === 'contact') {
                goToHome();
                setTimeout(() => scrollToExperiences(), 100);
              } else {
                scrollToExperiences();
              }
              closeMobileMenu();
            }}
          >
            Our Experiences
          </button>
          <button 
            className="nav-link" 
            onClick={() => {
              if (currentPage === 'home') {
                scrollToContact();
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
              closeMobileMenu();
            }}
          >
            Contact
          </button>
          <button 
            className="nav-cta" 
            onClick={() => {
              if (currentPage === 'contact') {
                goToHome();
                setTimeout(() => scrollToConsultation(), 100);
              } else {
                scrollToConsultation();
              }
              closeMobileMenu();
            }}
          >
            Request Consultation
          </button>
        </div>
      </header>

      <main key={currentPage}>
        {currentPage === 'home' ? (
          <>
        {/* Hero */}
        <section className="section hero">
          <div className="hero-decorative-elements">
            <div className="hero-ornament hero-ornament-1">❋</div>
            <div className="hero-ornament hero-ornament-2">✧</div>
            <div className="hero-ornament hero-ornament-3">✦</div>
            <div className="hero-sparkle hero-sparkle-1"></div>
            <div className="hero-sparkle hero-sparkle-2"></div>
            <div className="hero-sparkle hero-sparkle-3"></div>
          </div>
          <div className="hero-divider hero-divider-top"></div>
          <div className="hero-content">
            <div className="hero-title-wrapper">
              <div className="hero-title-decoration hero-title-decoration-left">❦</div>
              <h1 className="hero-title">
                <span className="hero-title-line">
                  <span className="hero-title-word">Curating</span>
                  <span className="hero-title-word">ExtraOrdinary</span>
                  <span className="hero-title-word">Events.</span>
                </span>
                <span className="hero-title-line">
                  <span className="hero-title-word">Where</span>
                  <span className="hero-title-word">Luxury</span>
                  <span className="hero-title-word">And</span>
                  <span className="hero-title-word">Flavour</span>
                  <span className="hero-title-word">Intertwine.</span>
                </span>
              </h1>
              <div className="hero-title-decoration hero-title-decoration-right">❦</div>
            </div>
            <div className="hero-divider hero-divider-middle"></div>
            <p className="hero-subtitle">
              EMIDAWN Catering delivers refined culinary experiences for
              weddings, corporate events, executive office lunches, and premium
              residential dining across Nairobi.
            </p>
            <p className="hero-tagline">
              Where every plate tells a story, and every event becomes a memory.
            </p>

            <div className="hero-images scroll-reveal">
              <div className="hero-image-wrapper">
                <img src={weddingImg} alt="Luxury wedding catering" className="hero-image" />
                <div className="hero-image-label">Weddings & Luxury Events</div>
              </div>
              <div className="hero-image-wrapper">
                <img src={cateringImg} alt="Elegant event catering" className="hero-image" />
                <div className="hero-image-label">Corporate & Executive Dining</div>
              </div>
              <div className="hero-image-wrapper">
                <img src={catering2Img} alt="Premium dining experience" className="hero-image" />
                <div className="hero-image-label">Residential Signature Dining</div>
              </div>
            </div>

            <div className="hero-pillars">
              <div className="hero-pillars-intro">
                EMIDAWN Catering is not just events — we're building a luxury
                catering brand with multiple revenue streams in Nairobi.
              </div>
              <p className="hero-pillars-tagline">
                Crafted with precision. Served with elegance. Remembered forever.
              </p>
              <div className="hero-pillars-grid">
                <div className="pillar-card">
                  <span className="pillar-emoji" aria-hidden="true">
                    💍
                  </span>
                  <div className="pillar-text">
                    <div className="pillar-title">Weddings & Luxury Events</div>
                  </div>
                </div>
                <div className="pillar-card">
                  <span className="pillar-emoji" aria-hidden="true">
                    🏢
                  </span>
                  <div className="pillar-text">
                    <div className="pillar-title">
                      Corporate & Executive Events
                    </div>
                  </div>
                </div>
                <div className="pillar-card">
                  <span className="pillar-emoji" aria-hidden="true">
                    🍱
                  </span>
                  <div className="pillar-text">
                    <div className="pillar-title">Office Lunch Packages</div>
                  </div>
                </div>
                <div className="pillar-card">
                  <span className="pillar-emoji" aria-hidden="true">
                    🏡
                  </span>
                  <div className="pillar-text">
                    <div className="pillar-title">
                      Premium Residential Takeaways
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* The Emidawn Standard */}
        <section className="section" id="standard">
          <div className="section-inner">
            <h2 className="section-title scroll-reveal">The EMIDAWN Standard</h2>
            <p className="section-quote scroll-reveal">
              "Excellence is not a destination, it's a way of traveling."
            </p>
            <p className="section-body scroll-reveal">
              At EMIDAWN Catering, we believe exceptional occasions deserve more
              than catering — they deserve precision, elegance, and impeccable
              hospitality.
            </p>
            <p className="section-body scroll-reveal">
              Inspired by five-star service standards, we craft each experience
              with premium ingredients, refined presentation, and seamless
              execution. From intimate gatherings to prestigious celebrations,
              our commitment remains unwavering: excellence without compromise.
            </p>
            <p className="section-tagline scroll-reveal">
              Every detail matters. Every moment counts. Every guest matters.
            </p>
            <div className="section-image-wrapper scroll-reveal">
              <img src={catering3Img} alt="Elegant catering presentation" className="section-image" />
            </div>
          </div>
        </section>

        {/* Our Experiences */}
        <section className="section section-alt" id="experiences">
          <div className="section-inner">
            <h2 className="section-title scroll-reveal">Our Experiences</h2>
            <p className="section-intro scroll-reveal">
              From intimate celebrations to grand galas, we transform occasions into unforgettable experiences.
            </p>

            <div className="cards-grid">
              <article className="experience-card scroll-reveal">
                <h3>Private &amp; Wedding Events</h3>
                <p>
                  Elegant buffet presentations, curated menus, reception
                  canapés, dessert displays, and full-service hospitality
                  tailored to the distinction of your occasion.
                </p>
              </article>

              <article className="experience-card scroll-reveal">
                <h3>Corporate &amp; Executive Dining</h3>
                <p>
                  Boardroom hospitality, gala dinners, structured office meal
                  programs, and discreet service designed for Nairobi's leading
                  institutions.
                </p>
              </article>

              <article className="experience-card scroll-reveal">
                <h3>Residential Signature Dining</h3>
                <p>
                  Curated weekend collections and refined home dining for
                  households that value quality, detail, and convenience.
                </p>
              </article>
            </div>

            <div className="experiences-showcase scroll-reveal">
              <figure className="experiences-showcase-visual">
                <div className="experiences-showcase-frame">
                  <img
                    src={catering7Img}
                    alt="EMIDAWN Catering overview: weddings, corporate and family events, conventions, and more — culinary experiences crafted with care."
                    className="experiences-showcase-img"
                    loading="lazy"
                  />
                </div>
              </figure>
              <div className="experiences-showcase-panel">
                <p className="experiences-showcase-kicker">At a glance</p>
                <blockquote className="experiences-showcase-quote">
                  <span className="experiences-showcase-quote-mark" aria-hidden>
                    “
                  </span>
                  Culinary masterpiece crafted with love.
                </blockquote>
                <p className="experiences-showcase-lead">
                  One team for every table — from intimate dinners to full-scale
                  productions across Nairobi.
                </p>
                <ul className="experiences-showcase-list">
                  <li>Weddings &amp; private celebrations</li>
                  <li>Corporate &amp; executive events</li>
                  <li>Family gatherings &amp; milestones</li>
                  <li>Conventions, galas &amp; charity evenings</li>
                  <li>Custom occasions &amp; residential dining</li>
                </ul>
                <div className="experiences-showcase-actions">
                  <button
                    type="button"
                    className="experiences-showcase-cta"
                    onClick={scrollToConsultation}
                  >
                    Book a consultation
                  </button>
                  <span className="experiences-showcase-actions-note">
                    Limited monthly engagements — we reply personally.
                  </span>
                </div>
              </div>
            </div>

            <button className="secondary-cta" onClick={scrollToExperiences}>
              Explore Our Experiences
            </button>
          </div>
        </section>

        {/* The Difference */}
        <section className="section">
          <div className="section-inner">
            <h2 className="section-title scroll-reveal">The EMIDAWN Difference</h2>
            <p className="section-intro scroll-reveal">
              What sets us apart is not just what we serve, but how we serve it.
            </p>
            <div className="difference-grid">
              <div className="difference-item scroll-reveal">
                <h3>Precision in Detail</h3>
                <p>
                  Every ingredient is carefully sourced. Every presentation
                  thoughtfully styled.
                </p>
              </div>
              <div className="difference-item scroll-reveal">
                <h3>Five-Star Hospitality</h3>
                <p>
                  Uniformed service professionals trained to deliver seamless
                  guest experiences.
                </p>
              </div>
              <div className="difference-item scroll-reveal">
                <h3>Curated, Not Standardized</h3>
                <p>
                  No generic packages. Every engagement is tailored.
                </p>
              </div>
              <div className="difference-item scroll-reveal">
                <h3>Discretion &amp; Professionalism</h3>
                <p>Trusted by distinguished clients who value excellence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Culinary Enhancements */}
        <section className="section section-alt">
          <div className="section-inner">
            <h2 className="section-title scroll-reveal">Culinary Enhancements</h2>
            <p className="section-intro scroll-reveal">
              Elevate your event with our signature touches that turn dining into an art form.
            </p>
            <div className="enhancements-grid scroll-reveal">
              <div className="enhancement-item">
                <div className="enhancement-icon">🍰</div>
                <h3 className="enhancement-title">Signature Dessert &amp; Cake Displays</h3>
                <p className="enhancement-description">
                  Artfully crafted sweet presentations that captivate and delight.
                </p>
              </div>
              <div className="enhancement-item">
                <div className="enhancement-icon">🍹</div>
                <h3 className="enhancement-title">Luxury Mocktail &amp; Beverage Experiences</h3>
                <p className="enhancement-description">
                  Curated drink stations with premium ingredients and elegant presentation.
                </p>
              </div>
              <div className="enhancement-item">
                <div className="enhancement-icon">👨‍🍳</div>
                <h3 className="enhancement-title">Live Culinary Theatre</h3>
                <p className="enhancement-description">
                  Interactive chef stations where culinary artistry meets entertainment.
                </p>
              </div>
            </div>
            <p className="section-body enhancements-footer scroll-reveal">
              Each enhancement is styled to elevate the visual and sensory
              impact of your event.
            </p>
            <div className="enhancements-image-grid scroll-reveal">
              <div className="enhancement-image-wrapper">
                <img src={catering6Img} alt="Culinary enhancements display" className="enhancement-image" />
              </div>
            </div>
          </div>
        </section>

        {/* Limited Engagements / Consultation */}
        <section className="section" id="consultation">
          <div className="section-inner">
            <h2 className="section-title scroll-reveal">Limited Engagements</h2>
            <p className="section-quote scroll-reveal">
              "Quality over quantity. Excellence over expansion."
            </p>
            <p className="section-body scroll-reveal">
              To maintain exceptional standards, EMIDAWN Catering accepts a
              limited number of engagements per month.
            </p>
            <p className="section-body scroll-reveal">
              We invite you to begin with a private consultation so we may
              curate an experience worthy of your occasion.
            </p>
            <p className="section-tagline scroll-reveal">
              Because your special day deserves our undivided attention.
            </p>

            <div className="consultation-layout scroll-reveal">
              <div className="consultation-image-wrapper">
                <img src={catering4Img} alt="Premium catering service" className="consultation-image" />
              </div>
              <div className="consultation-card">
              <div className="consultation-copy">
                <h3>Request a Private Consultation</h3>
                <p>
                  Share your occasion, guest count, location, and preferred
                  dates. Our team will respond with a tailored next step rather
                  than a generic package.
                </p>
              </div>
              <form className="consultation-form">
                <div className="form-row">
                  <label>
                    Name
                    <input
                      type="text"
                      name="name"
                      placeholder="Full name"
                    />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                    />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    Occasion &amp; Date
                    <input
                      type="text"
                      name="occasion"
                      placeholder="Wedding, corporate gala, home dining..."
                    />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    Message
                    <textarea
                      name="message"
                      placeholder="Share key details. A member of our team will respond personally."
                      rows={4}
                    />
                  </label>
                </div>
                <button type="submit" className="primary-cta full-width">
                  Request a Private Consultation
                </button>
              </form>
              </div>
            </div>
          </div>
        </section>
          </>
        ) : (
          <ContactPage />
        )}
      </main>

      <SiteFooter
        currentPage={currentPage}
        onGoHome={goToHome}
        onExperiences={scrollToExperiences}
        onConsultation={scrollToConsultation}
        onContact={scrollToContact}
      />
    </div>
  );
};

export default App;
