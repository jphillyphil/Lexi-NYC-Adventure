import React, { useState, useEffect } from 'react'
import './App.css'
import DumboHistory from './DumboHistory'

const itineraryData = [
  {
    id: 1,
    day: 'Day 1',
    date: 'Monday, January 13',
    activities: [
      {
        time: '9:00 AM',
        title: 'Central Park Morning Walk',
        description: 'Start your adventure with a peaceful morning stroll through Central Park. Visit Bethesda Fountain and the Bow Bridge.',
        location: 'Central Park, Manhattan',
        icon: '🌳'
      },
      {
        time: '12:00 PM',
        title: 'Lunch at The Loeb Boathouse',
        description: 'Enjoy a scenic lunch overlooking the lake in Central Park.',
        location: 'Central Park East Drive',
        icon: '🍽️'
      },
      {
        time: '2:30 PM',
        title: 'Metropolitan Museum of Art',
        description: 'Explore world-class art collections spanning 5,000 years of culture.',
        location: '1000 5th Ave',
        icon: '🎨'
      },
      {
        time: '7:00 PM',
        title: 'Dinner in Little Italy',
        description: 'Authentic Italian cuisine in the heart of historic Little Italy.',
        location: 'Mulberry Street',
        icon: '🍕'
      }
    ]
  },
  {
    id: 2,
    day: 'Day 2',
    date: 'Tuesday, January 14',
    activities: [
      {
        time: '8:30 AM',
        title: 'Brooklyn Bridge Walk',
        description: 'Iconic bridge walk with stunning Manhattan skyline views.',
        location: 'Brooklyn Bridge',
        icon: '🌉'
      },
      {
        time: '11:00 AM',
        title: 'DUMBO Exploration',
        description: 'Explore cobblestone streets, art galleries, and waterfront parks.',
        location: 'DUMBO, Brooklyn',
        icon: '📸'
      },
      {
        time: '1:00 PM',
        title: 'Lunch at Time Out Market',
        description: 'Sample dishes from NYC\'s best chefs under one roof.',
        location: 'Empire Stores, Brooklyn',
        icon: '🥘'
      },
      {
        time: '3:30 PM',
        title: 'Williamsburg Coffee & Shopping',
        description: 'Trendy boutiques and artisanal coffee shops.',
        location: 'Bedford Avenue',
        icon: '☕'
      },
      {
        time: '8:00 PM',
        title: 'Rooftop Bar Experience',
        description: 'Cocktails with panoramic city views.',
        location: 'Westlight, Brooklyn',
        icon: '🍸'
      }
    ]
  },
  {
    id: 3,
    day: 'Day 3',
    date: 'Wednesday, January 15',
    activities: [
      {
        time: '10:00 AM',
        title: 'High Line Park',
        description: 'Elevated park built on historic freight rail line with gardens and art.',
        location: 'Chelsea, Manhattan',
        icon: '🌺'
      },
      {
        time: '12:30 PM',
        title: 'Chelsea Market Food Tour',
        description: 'Historic market featuring artisanal food vendors and unique shops.',
        location: '75 9th Ave',
        icon: '🛍️'
      },
      {
        time: '3:00 PM',
        title: 'Whitney Museum',
        description: 'Contemporary American art in stunning modern building.',
        location: '99 Gansevoort St',
        icon: '🖼️'
      },
      {
        time: '6:30 PM',
        title: 'Sunset at Hudson River Park',
        description: 'Watch the sunset over the Hudson River.',
        location: 'Pier 45',
        icon: '🌅'
      },
      {
        time: '8:00 PM',
        title: 'West Village Dinner',
        description: 'Intimate dinner in one of NYC\'s most charming neighborhoods.',
        location: 'West Village',
        icon: '🍷'
      }
    ]
  }
]

function App() {
  const [selectedDay, setSelectedDay] = useState(0)
  const [showSplash, setShowSplash] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [currentView, setCurrentView] = useState('itinerary')
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved !== null ? JSON.parse(saved) : true
  })

  const handleEnter = () => {
    setFadeOut(true)
    setTimeout(() => {
      setShowSplash(false)
    }, 800)
  }

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  useEffect(() => {
    // Auto-hide splash after 4 seconds
    const timer = setTimeout(() => {
      handleEnter()
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Apply theme and save to localStorage
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  if (showSplash) {
    return (
      <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
        <div className="splash-overlay"></div>
        <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle theme">
          {darkMode ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
        <div className="splash-content">
          <div className="splash-badge">✨ Welcome</div>
          <h1 className="splash-title">Lexi's NYC Adventure</h1>
          <p className="splash-subtitle">An unforgettable journey through New York City</p>
          <button className="splash-button" onClick={handleEnter}>
            <span>Explore Itinerary</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    )
  }

  if (currentView === 'dumbo-history') {
    return (
      <div className="app main-content-enter">
        <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle theme">
          {darkMode ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
        <button className="view-toggle" onClick={() => setCurrentView('itinerary')} aria-label="Back to itinerary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Back to Itinerary</span>
        </button>
        <DumboHistory />
      </div>
    )
  }

  return (
    <div className="app main-content-enter">
      <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle theme">
        {darkMode ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </button>
      <div className="hero">
        <div className="hero-content">
          <div className="badge">✨ NYC Adventure</div>
          <h1 className="hero-title">Lexi's NYC Itinerary</h1>
          <p className="hero-description">
            Three unforgettable days exploring the best of New York City
          </p>
        </div>
        <div className="gradient-blur gradient-blur-1"></div>
        <div className="gradient-blur gradient-blur-2"></div>
      </div>

      <div className="container">
        <div className="day-selector">
          {itineraryData.map((day, index) => (
            <button
              key={day.id}
              className={`day-tab ${selectedDay === index ? 'active' : ''}`}
              onClick={() => setSelectedDay(index)}
            >
              <span className="day-tab-label">{day.day}</span>
              <span className="day-tab-date">{day.date}</span>
            </button>
          ))}
        </div>

        <div className="timeline">
          {itineraryData[selectedDay].activities.map((activity, index) => (
            <div key={index} className="activity-card">
              <div className="activity-time">
                <span className="time-badge">{activity.time}</span>
              </div>
              <div className="activity-content">
                <div className="activity-icon">{activity.icon}</div>
                <div className="activity-details">
                  <h3 className="activity-title">{activity.title}</h3>
                  <p className="activity-description">{activity.description}</p>
                  <div className="activity-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {activity.location}
                  </div>
                  {activity.title === 'DUMBO Exploration' && (
                    <button
                      className="dumbo-history-button"
                      onClick={() => setCurrentView('dumbo-history')}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      Explore DUMBO's History
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="footer-card">
          <div className="footer-content">
            <h3>Ready for your adventure?</h3>
            <p>Download this itinerary and start exploring NYC like never before.</p>
            <button className="download-button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Itinerary
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
