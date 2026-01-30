import { Link } from 'react-router-dom'
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaLinkedin,
  FaTelegram,
  FaEnvelope
} from 'react-icons/fa'

const Footer = () => {
  const exploreLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Recruiters', href: '/recruiters' },
    { name: 'Contact', href: '/contact' }
  ]

  const policyLinks = [
    { name: 'Privacy & Policies', href: '/privacy-policy' },
    { name: 'Refund Policies', href: '/refund-policy' },
    { name: 'Terms & Condition', href: '/terms' }
  ]

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/shikuyaa/', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://www.instagram.com/shikuyaa4/', label: 'Instagram' },
    { icon: FaTwitter, href: 'https://twitter.com/shikuyaa4?lang=en', label: 'Twitter' },
    { icon: FaYoutube, href: 'https://www.youtube.com/c/shikuyaa', label: 'YouTube' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/shikuyaa/', label: 'LinkedIn' },
    { icon: FaTelegram, href: 'https://t.me/s/shikuyaa', label: 'Telegram' }
  ]

  const telegramChannels = [
    { name: '2022 Passout', href: 'https://t.me/+h2MGt07MRvthYjBl' },
    { name: '2023 Passout', href: 'https://t.me/+4lxZw3GFCc5jYWFl' },
    { name: '2024 Passout', href: 'https://t.me/+wMj6lL-aS94zMmQ9' },
    { name: '2025 Passout', href: 'https://t.me/+rc3gzbyuu085YTc1' },
    { name: '2026 Passout', href: 'https://t.me/+H1HF-7brg_ljZjRl' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary-600">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-primary-100">Stay updated with latest placement opportunities and course updates</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
              />
              <button className="bg-secondary-600 hover:bg-secondary-700 px-6 py-3 rounded-r-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold">Shikuyaa</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Shikuyaa promotes continuous learning proctored with a scientific approach and state of art technology. 
              We believe students are not required to waste their time and money after graduation.
            </p>
            
            {/* Social Links */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Telegram Channels */}
            <div>
              <h4 className="font-semibold mb-3">Join Telegram Channels</h4>
              <div className="grid grid-cols-2 gap-2">
                {telegramChannels.map((channel, index) => (
                  <a
                    key={index}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    {channel.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              {policyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2021 O2 BreathingBrains Pvt.Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:contact@shikuyaa.com" 
                className="text-gray-400 hover:text-primary-400 transition-colors flex items-center space-x-2"
              >
                <FaEnvelope className="w-4 h-4" />
                <span>contact@shikuyaa.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer