import React, { useState, useEffect, useRef } from 'react'
import './DumboHistory.css'

const dumboHistoryData = [
  {
    id: 1,
    year: '1800s',
    period: 'Industrial Era',
    title: 'Birth of an Industrial Hub',
    description: 'DUMBO (Down Under the Manhattan Bridge Overpass) emerged as a vital industrial and manufacturing center. Factories, warehouses, and shipping facilities dominated the waterfront.',
    icon: '🏭',
    color: '#8B4513',
    highlights: [
      'Cardboard box factories',
      'Coffee roasting facilities',
      'Shipping warehouses',
      'Manufacturing plants'
    ]
  },
  {
    id: 2,
    year: '1909',
    period: 'Manhattan Bridge',
    title: 'The Bridge That Named a Neighborhood',
    description: 'The Manhattan Bridge was completed, forever changing the landscape. The neighborhood literally sat "Down Under the Manhattan Bridge Overpass" - giving birth to the DUMBO acronym decades later.',
    icon: '🌉',
    color: '#4A90E2',
    highlights: [
      'Manhattan Bridge opens',
      'Connects Brooklyn to Manhattan',
      'Engineering marvel of its time',
      'Iconic views created'
    ]
  },
  {
    id: 3,
    year: '1970s',
    period: 'Decline & Abandonment',
    title: 'The Dark Years',
    description: 'As manufacturing moved overseas, DUMBO fell into decay. Empty warehouses, broken windows, and industrial ruins became the neighborhood\'s defining features.',
    icon: '🏚️',
    color: '#666666',
    highlights: [
      'Factory closures',
      'Population decline',
      'Urban blight',
      'Abandoned buildings'
    ]
  },
  {
    id: 4,
    year: '1978',
    period: 'Artist Colony',
    title: 'Artists Discover DUMBO',
    description: 'Artists seeking affordable studio space began moving into abandoned warehouses. This creative influx planted the seeds for DUMBO\'s transformation.',
    icon: '🎨',
    color: '#E91E63',
    highlights: [
      'Affordable loft spaces',
      'Artist studios emerge',
      'Creative community forms',
      'Underground art scene'
    ]
  },
  {
    id: 5,
    year: '1990s',
    period: 'Tech Boom',
    title: 'The Tech Revolution',
    description: 'The neighborhood attracted tech startups and creative businesses. The "DUMBO" name was officially coined by residents to preserve the area\'s character.',
    icon: '💻',
    color: '#9C27B0',
    highlights: [
      'Tech companies arrive',
      'DUMBO name officially adopted',
      'Converted lofts',
      'Creative agencies'
    ]
  },
  {
    id: 6,
    year: '2000s',
    period: 'Historic District',
    title: 'Preservation & Protection',
    description: 'DUMBO was designated a historic district, protecting its unique industrial architecture while allowing thoughtful development.',
    icon: '🏛️',
    color: '#FF9800',
    highlights: [
      'Historic designation',
      'Architectural preservation',
      'Controlled development',
      'Community planning'
    ]
  },
  {
    id: 7,
    year: '2010s',
    period: 'Cultural Hub',
    title: 'A World-Class Destination',
    description: 'DUMBO transformed into one of NYC\'s most desirable neighborhoods. Art galleries, restaurants, and tech companies created a vibrant cultural ecosystem.',
    icon: '🎭',
    color: '#00BCD4',
    highlights: [
      'Brooklyn Bridge Park opens',
      'Art galleries flourish',
      'Fine dining destination',
      'Instagram hotspot'
    ]
  },
  {
    id: 8,
    year: 'Today',
    period: 'Modern DUMBO',
    title: 'Where History Meets Innovation',
    description: 'Today, DUMBO seamlessly blends its industrial heritage with cutting-edge innovation. Cobblestone streets lead to modern offices, while historic warehouses house world-class restaurants and shops.',
    icon: '✨',
    color: '#7A73FF',
    highlights: [
      'Luxury living',
      'Tech headquarters',
      'Cultural events',
      'Waterfront parks'
    ]
  }
]

const landmarks = [
  { name: 'Brooklyn Bridge Park', icon: '🌳', description: 'World-class waterfront park' },
  { name: 'Jane\'s Carousel', icon: '🎠', description: '1922 carousel in glass pavilion' },
  { name: 'Manhattan Bridge', icon: '🌉', description: 'Iconic photo spot' },
  { name: 'Empire Stores', icon: '🏢', description: 'Historic coffee warehouse' },
  { name: 'St. Ann\'s Warehouse', icon: '🎭', description: 'Renowned theater venue' }
]

function DumboHistory() {
  const [selectedPeriod, setSelectedPeriod] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const timelineRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { top, height } = timelineRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const progress = Math.max(0, Math.min(1, (windowHeight - top) / (height + windowHeight)))
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="dumbo-history">
      <div className="dumbo-hero">
        <div className="dumbo-hero-overlay"></div>
        <div className="dumbo-hero-content">
          <div className="dumbo-badge">📍 Brooklyn's Gem</div>
          <h1 className="dumbo-hero-title">The Story of DUMBO</h1>
          <p className="dumbo-hero-subtitle">
            From Industrial Wasteland to Brooklyn's Crown Jewel
          </p>
          <div className="dumbo-acronym">
            <span className="letter">D</span>own
            <span className="letter">U</span>nder the
            <span className="letter">M</span>anhattan
            <span className="letter">B</span>ridge
            <span className="letter">O</span>verpass
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Scroll to explore</span>
        </div>
      </div>

      <div className="timeline-container" ref={timelineRef}>
        <div className="timeline-progress-bar">
          <div
            className="timeline-progress-fill"
            style={{ height: `${scrollProgress * 100}%` }}
          ></div>
        </div>

        <div className="timeline-content">
          {dumboHistoryData.map((period, index) => (
            <div
              key={period.id}
              className={`timeline-item ${selectedPeriod === period.id ? 'expanded' : ''}`}
              onClick={() => setSelectedPeriod(selectedPeriod === period.id ? null : period.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="timeline-marker" style={{ background: period.color }}>
                <span className="timeline-icon">{period.icon}</span>
              </div>

              <div className="timeline-card">
                <div className="timeline-year" style={{ color: period.color }}>
                  {period.year}
                </div>
                <div className="timeline-period">{period.period}</div>
                <h3 className="timeline-title">{period.title}</h3>
                <p className="timeline-description">{period.description}</p>

                {selectedPeriod === period.id && (
                  <div className="timeline-highlights">
                    <h4>Key Highlights:</h4>
                    <ul>
                      {period.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className="timeline-expand-btn">
                  {selectedPeriod === period.id ? 'Show less' : 'Learn more'}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={selectedPeriod === period.id ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="landmarks-section">
        <h2 className="landmarks-title">Must-Visit Landmarks</h2>
        <p className="landmarks-subtitle">
          Experience the places that define DUMBO's unique character
        </p>
        <div className="landmarks-grid">
          {landmarks.map((landmark, index) => (
            <div key={index} className="landmark-card">
              <div className="landmark-icon">{landmark.icon}</div>
              <h3 className="landmark-name">{landmark.name}</h3>
              <p className="landmark-description">{landmark.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="dumbo-footer-section">
        <div className="dumbo-footer-content">
          <h2>Ready to Explore?</h2>
          <p>Discover DUMBO's cobblestone streets, iconic views, and rich history</p>
          <div className="dumbo-stats">
            <div className="stat-item">
              <div className="stat-number">1909</div>
              <div className="stat-label">Bridge Built</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Years of History</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">#1</div>
              <div className="stat-label">Brooklyn Destination</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DumboHistory
