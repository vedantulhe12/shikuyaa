import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaChevronDown, FaDownload } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [isShikuyaaPlusOpen, setIsShikuyaaPlusOpen] = useState(false)
  const [isEventsOpen, setIsEventsOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses', hasDropdown: true, dropdownKey: 'courses' },
    { name: 'Recruiters', href: '/recruiters' },
    { name: 'Shikuyaa+', href: '/shikuyaa-plus', hasDropdown: true, dropdownKey: 'shikuyaaPlus' },
    { name: 'Events', href: '/events', hasDropdown: true, dropdownKey: 'events' },
    { name: 'About Us', href: '/about', hasDropdown: true, dropdownKey: 'about' },
  ]

  const courseDropdownItems = [
    { name: 'Emp Grad Pro 2025', href: '/courses/emp-grad-pro' },
    { name: 'Hackathon Course 2025', href: '/courses/hackathon' },
    { name: 'IT Services', href: '/courses/it-services' },
    { name: 'Placement Pro', href: '/courses/placement-pro' }
  ]

  const shikuyaaPlusItems = [
    { name: 'Premium Features', href: '/shikuyaa-plus/premium' },
    { name: 'Mentorship', href: '/shikuyaa-plus/mentorship' }
  ]

  const eventsItems = [
    { name: 'Upcoming Events', href: '/events/upcoming' },
    { name: 'Past Events', href: '/events/past' }
  ]

  const aboutItems = [
    { name: 'About Shikuyaa', href: '/about/company' },
    { name: 'Our Team', href: '/about/team' },
    { name: 'Careers', href: '/about/careers' }
  ]

  const getDropdownItems = (key: string) => {
    switch(key) {
      case 'courses': return courseDropdownItems
      case 'shikuyaaPlus': return shikuyaaPlusItems
      case 'events': return eventsItems
      case 'about': return aboutItems
      default: return []
    }
  }

  const isDropdownOpen = (key: string) => {
    switch(key) {
      case 'courses': return isCoursesOpen
      case 'shikuyaaPlus': return isShikuyaaPlusOpen
      case 'events': return isEventsOpen
      case 'about': return isAboutOpen
      default: return false
    }
  }

  const setDropdownOpen = (key: string, value: boolean) => {
    switch(key) {
      case 'courses': setIsCoursesOpen(value); break
      case 'shikuyaaPlus': setIsShikuyaaPlusOpen(value); break
      case 'events': setIsEventsOpen(value); break
      case 'about': setIsAboutOpen(value); break
    }
  }

  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true
    if (href !== '/' && location.pathname.startsWith(href)) return true
    return false
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Shikuyaa Logo" 
                className="h-12 md:h-14 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div>
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                      onMouseEnter={() => setDropdownOpen(item.dropdownKey!, true)}
                      onMouseLeave={() => setDropdownOpen(item.dropdownKey!, false)}
                    >
                      <span>{item.name}</span>
                      <FaChevronDown className="w-3 h-3" />
                    </button>
                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-200 ${
                        isDropdownOpen(item.dropdownKey!) ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                      onMouseEnter={() => setDropdownOpen(item.dropdownKey!, true)}
                      onMouseLeave={() => setDropdownOpen(item.dropdownKey!, false)}
                    >
                      <div className="py-2">
                        {getDropdownItems(item.dropdownKey!).map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Download Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-md">
              <FaDownload className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 p-2"
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="flex items-center space-x-2 bg-pink-600 text-white px-3 py-2 rounded-lg font-medium mx-3 mt-4">
                <FaDownload className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header