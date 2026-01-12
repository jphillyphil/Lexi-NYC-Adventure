import React, { useState, useEffect, useRef } from 'react'
import './DumboHistory.css'

const dumboHistoryData = [
  {
    id: 1,
    year: '1800s',
    period: 'Industrial Era',
    title: 'Birth of an Industrial Hub',
    description: 'DUMBO emerged as a vital industrial and manufacturing center. Factories, warehouses, and shipping facilities dominated the waterfront.',
    icon: '🏭',
    color: '#D4834F',
    mapX: 45,
    mapY: 60,
    highlights: ['Cardboard box factories', 'Coffee roasting facilities', 'Shipping warehouses', 'Manufacturing plants']
  },
  {
    id: 2,
    year: '1909',
    period: 'Manhattan Bridge',
    title: 'The Bridge That Named a Neighborhood',
    description: 'The Manhattan Bridge was completed, forever changing the landscape and giving birth to the DUMBO acronym.',
    icon: '🌉',
    color: '#5B9EE3',
    mapX: 50,
    mapY: 30,
    highlights: ['Manhattan Bridge opens', 'Connects Brooklyn to Manhattan', 'Engineering marvel', 'Iconic views created']
  },
  {
    id: 3,
    year: '1970s',
    period: 'Decline & Abandonment',
    title: 'The Dark Years',
    description: 'As manufacturing moved overseas, DUMBO fell into decay. Empty warehouses and industrial ruins defined the neighborhood.',
    icon: '🏚️',
    color: '#8C8C8C',
    mapX: 40,
    mapY: 50,
    highlights: ['Factory closures', 'Population decline', 'Urban blight', 'Abandoned buildings']
  },
  {
    id: 4,
    year: '1978',
    period: 'Artist Colony',
    title: 'Artists Discover DUMBO',
    description: 'Artists seeking affordable studio space began moving into abandoned warehouses, planting the seeds for transformation.',
    icon: '🎨',
    color: '#FF6B9D',
    mapX: 55,
    mapY: 45,
    highlights: ['Affordable loft spaces', 'Artist studios emerge', 'Creative community', 'Underground art scene']
  },
  {
    id: 5,
    year: '1990s',
    period: 'Tech Boom',
    title: 'The Tech Revolution',
    description: 'Tech startups and creative businesses arrived. The "DUMBO" name was officially coined by residents.',
    icon: '💻',
    color: '#AB47BC',
    mapX: 60,
    mapY: 55,
    highlights: ['Tech companies arrive', 'DUMBO name adopted', 'Converted lofts', 'Creative agencies']
  },
  {
    id: 6,
    year: '2000s',
    period: 'Historic District',
    title: 'Preservation & Protection',
    description: 'DUMBO was designated a historic district, protecting its unique industrial architecture.',
    icon: '🏛️',
    color: '#FFA726',
    mapX: 35,
    mapY: 40,
    highlights: ['Historic designation', 'Architectural preservation', 'Controlled development', 'Community planning']
  },
  {
    id: 7,
    year: '2010s',
    period: 'Cultural Hub',
    title: 'A World-Class Destination',
    description: 'DUMBO transformed into one of NYC\'s most desirable neighborhoods with galleries, restaurants, and tech companies.',
    icon: '🎭',
    color: '#26C6DA',
    mapX: 50,
    mapY: 70,
    highlights: ['Brooklyn Bridge Park opens', 'Art galleries flourish', 'Fine dining', 'Instagram hotspot']
  },
  {
    id: 8,
    year: 'Today',
    period: 'Modern DUMBO',
    title: 'Where History Meets Innovation',
    description: 'Today, DUMBO blends its industrial heritage with cutting-edge innovation. Cobblestone streets lead to modern offices.',
    icon: '✨',
    color: '#8B7FFF',
    mapX: 50,
    mapY: 50,
    highlights: ['Luxury living', 'Tech headquarters', 'Cultural events', 'Waterfront parks']
  }
]

function DumboHistory() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef(null)
  const sectionsRef = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const fullHeight = containerRef.current.offsetHeight

      // Calculate overall scroll progress
      const progress = Math.min(Math.max(scrollTop / (fullHeight - windowHeight), 0), 1)
      setScrollProgress(progress)

      // Determine active section based on scroll position
      const sectionIndex = Math.min(
        Math.floor(progress * dumboHistoryData.length),
        dumboHistoryData.length - 1
      )
      setActiveIndex(sectionIndex)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="dumbo-history-scroll" ref={containerRef}>
      {/* Hero Section */}
      <div className="dumbo-hero-new">
        <div className="dumbo-hero-overlay"></div>
        <div className="dumbo-hero-content-new">
          <div className="dumbo-badge-new">📍 Brooklyn's Historic Gem</div>
          <h1 className="dumbo-hero-title-new">The Evolution of DUMBO</h1>
          <p className="dumbo-hero-subtitle-new">
            Scroll to journey through time
          </p>
          <div className="dumbo-acronym-new">
            <span className="letter">D</span>own
            <span className="letter">U</span>nder the
            <span className="letter">M</span>anhattan
            <span className="letter">B</span>ridge
            <span className="letter">O</span>verpass
          </div>
        </div>
        <div className="scroll-indicator-new">
          <div className="scroll-arrow-new"></div>
          <span>Scroll to explore history</span>
        </div>
      </div>

      {/* Map with Overlays */}
      <div className="map-history-container">
        {/* Fixed Map Background */}
        <div className="fixed-map-background">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2771879664655!2d-73.99030492346107!3d40.70332507139118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a4a9d5e8e8f%3A0x8ba1b1ff7e1b8e8f!2sDUMBO%2C%20Brooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DUMBO Brooklyn Map"
          ></iframe>
          <div className="map-overlay-tint"></div>

          {/* Map Markers */}
          {dumboHistoryData.map((period, index) => (
            <div
              key={period.id}
              className={`map-marker ${activeIndex === index ? 'active' : ''} ${activeIndex > index ? 'passed' : ''}`}
              style={{
                left: `${period.mapX}%`,
                top: `${period.mapY}%`,
                background: period.color,
              }}
            >
              <div className="marker-pulse" style={{ background: period.color }}></div>
              <span className="marker-icon">{period.icon}</span>
              <div className="marker-label" style={{ background: period.color }}>
                {period.year}
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling Content Sections */}
        <div className="history-scroll-sections">
          {dumboHistoryData.map((period, index) => (
            <div
              key={period.id}
              ref={(el) => (sectionsRef.current[index] = el)}
              className={`history-section ${activeIndex === index ? 'active' : ''}`}
            >
              <div className="history-content-card" style={{ borderColor: period.color }}>
                <div className="period-badge" style={{ background: period.color }}>
                  <span className="period-icon">{period.icon}</span>
                  <span className="period-year">{period.year}</span>
                </div>
                <div className="period-header">
                  <h3 className="period-title" style={{ color: period.color }}>
                    {period.title}
                  </h3>
                  <div className="period-label">{period.period}</div>
                </div>
                <p className="period-description">{period.description}</p>
                <div className="period-highlights">
                  {period.highlights.map((highlight, idx) => (
                    <div key={idx} className="highlight-item" style={{ borderLeftColor: period.color }}>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Final Section */}
          <div className="history-section final-section">
            <div className="final-content">
              <h2>Experience DUMBO Today</h2>
              <p>Walk the cobblestone streets where history and innovation meet</p>
              <div className="final-stats">
                <div className="stat-box">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Years of History</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">1909</div>
                  <div className="stat-label">Bridge Built</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">#1</div>
                  <div className="stat-label">Brooklyn Destination</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="scroll-progress-indicator">
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
          </div>
          <div className="progress-labels">
            {dumboHistoryData.map((period, index) => (
              <div
                key={period.id}
                className={`progress-dot ${activeIndex >= index ? 'active' : ''}`}
                style={{ background: activeIndex >= index ? period.color : 'transparent' }}
              >
                <span className="progress-year">{period.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DumboHistory
