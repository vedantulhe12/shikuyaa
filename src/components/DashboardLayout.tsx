import { useState, ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaHome, FaVideo, FaBook, FaClipboardList, FaBell, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa'

interface DashboardLayoutProps {
  children: ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const navigate = useNavigate()

  const user = {
    name: 'Janhavi',
    email: 'janhavi.doijad.btech2023@sitpune.edu.in',
    phone: '9168206443',
    avatar: '👤'
  }

  const menuItems = [
    { icon: FaHome, label: 'Dashboard', path: '/dashboard' },
    { icon: FaVideo, label: 'Live Learning', path: '/dashboard/live-learning' },
    { icon: FaBook, label: 'Self Study', path: '/dashboard/self-study' },
    { icon: FaClipboardList, label: 'Assessment', path: '/dashboard/assessment' }
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-30 w-72 bg-white shadow-lg transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b">
            <img src="/images/logo.png" alt="Shikuyaa" className="h-12 w-auto" />
            <span className="inline-block mt-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">
              Beta Version (2)
            </span>
          </div>

          {/* User Profile */}
          <div className="p-6 border-b">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white text-3xl mb-3">
                {user.avatar}
              </div>
              <button className="w-full bg-pink-600 text-white py-2 rounded-lg text-sm font-medium mb-3 hover:bg-pink-700">
                Edit Profile
              </button>
              <h3 className="font-semibold text-gray-800">{user.name}</h3>
              <p className="text-xs text-gray-600 break-all">{user.email}</p>
              <p className="text-sm text-gray-600 mt-1">{user.phone}</p>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Close button for mobile */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden absolute top-4 right-4 text-gray-600"
        >
          <FaTimes className="w-6 h-6" />
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-4 py-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-gray-600"
            >
              <FaBars className="w-6 h-6" />
            </button>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/dashboard" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
                All Courses
              </Link>
              <Link to="/dashboard/my-courses" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
                My Courses
              </Link>
              <Link to="/dashboard/practice" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
                Practice
              </Link>
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <button className="relative text-gray-600 hover:text-pink-600">
                <FaBell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button 
                onClick={() => navigate('/dashboard/profile')}
                className="flex items-center space-x-2 text-gray-700 hover:text-pink-600"
              >
                <FaUserCircle className="w-6 h-6" />
                <span className="hidden md:inline font-medium">{user.name}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        {children}
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default DashboardLayout
